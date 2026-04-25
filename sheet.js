// Vercel Edge Function — proxies requests to Google Apps Script
// This bypasses CORS since the call is server-to-server
export const config = { runtime: 'edge' };

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxsezfmu7ugl8EngHjs3I-1hB7Mj_65V5VKUIcxlkUz93pM6ad4hrEleKKNY4msqVKu/exec';

export default async function handler(req) {
  const url = new URL(req.url);
  const params = url.searchParams.toString();
  
  try {
    let response;
    if (req.method === 'POST') {
      const body = await req.text();
      response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body,
        redirect: 'follow',
      });
    } else {
      response = await fetch(
        APPS_SCRIPT_URL + (params ? '?' + params : ''),
        { redirect: 'follow' }
      );
    }
    
    const data = await response.text();
    return new Response(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
}
