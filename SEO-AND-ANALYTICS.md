# SEO & Google Analytics — what changed, and what's left for you to do

## What I added to the site

Every one of your 9 pages now includes:

- **Better, keyword-focused page titles** — e.g. the homepage went from just "Rattan Amol Taggar" to "Windsor Life & Health Insurance Advisor | Rattan Amol Taggar", so it actually targets what people search for.
- **A canonical URL** on every page, pointed at `https://ibrinsurance.ca` — this tells Google which version of a page is the "real" one, which matters once you're live on a real domain.
- **Open Graph and Twitter Card tags** — this controls how your pages look when someone shares a link on Facebook, WhatsApp, LinkedIn, or texts it to a friend (a title, description and your photo show up as a preview card instead of a bare link).
- **Structured data (JSON-LD)** — a machine-readable summary of your business (name, phone, service area, social links, and your 5.0 rating with review count) that Google can use to build richer search results. The Book a Call page also has FAQ structured data pulled from your "Before You Book" section, which can make your FAQs show up as expandable results directly in Google search.
- **A favicon** — a small gold "RT" monogram that shows up in the browser tab.
- **`sitemap.xml` and `robots.txt`** — two new files (included in this zip) that tell Google which pages exist and give it permission to index all of them.
- **Faster font loading** — added a couple of lines that tell the browser to start connecting to Google Fonts earlier, which shaves a small amount off page load time.

None of this changes how the site looks — it's all in the `<head>` of each page, invisible to visitors.

## What you need to do before this fully works

1. **Upload `rattan-photo.jpg`** (included in this zip) to the root of your site — same level as `index.html`. It's used as the preview image when your links are shared, so it needs to be reachable at exactly `https://ibrinsurance.ca/rattan-photo.jpg`.
2. **Upload `sitemap.xml` and `robots.txt`** to the root of your site as well, alongside the HTML files.
3. Once the site is live at `ibrinsurance.ca`, set up **Google Search Console** (search.google.com/search-console) with the same Google account you use for PunjabiFinance:
   - Add `ibrinsurance.ca` as a property.
   - Verify ownership (Search Console will give you a couple of easy options — usually adding a DNS record at GoDaddy, or uploading a small verification file).
   - Once verified, go to Sitemaps in the left menu and submit `https://ibrinsurance.ca/sitemap.xml`. This is what actually gets your pages found and indexed quickly, rather than waiting for Google to stumble onto them.

If any of your page titles or descriptions don't feel right to you once you see them live, tell me the ones you want changed and I'll adjust them — they're all controlled from one file, so it's a quick fix.

## Google Analytics — setting it up under your existing account

Since you already have Google Analytics running for PunjabiFinance.com, the fastest path is adding a second **property** to that same account rather than creating a whole new account. Here's the step-by-step:

1. Go to **analytics.google.com** and sign in with the Google account you use for PunjabiFinance.
2. In the bottom-left corner, click **Admin** (the gear icon).
3. In the **Account** column (this should already show your existing account, e.g. "PunjabiFinance" or whatever you named it), click **Create Property**.
4. Name the new property something clear, like **"IBR Insurance — ibrinsurance.ca"**.
5. Set your reporting time zone (Canada) and currency (CAD), then click **Next**.
6. Answer the couple of quick questions about your business (industry category: something like "Finance" or "Insurance"; business size), then click **Create**.
7. You'll land on **"Choose a platform"** — click **Web**.
8. Enter your **Website URL**: `https://ibrinsurance.ca`, and a **Stream name** like "IBR Insurance Website", then click **Create stream**.
9. On the next screen, Google shows you a **Measurement ID** that looks like `G-XXXXXXXXXX`. That's the one piece of information I need.

Once you have that ID, send it to me (just paste it in chat) and I'll wire it into all 9 pages and send you the updated site — no further setup needed on your end. I've already built the tracking code into every page; it's just switched off until a real Measurement ID replaces the placeholder, so nothing broken ships in the meantime.

A couple of notes:
- This will be a **separate GA4 property** from PunjabiFinance under the same Google account/login — so your insurance traffic and your PunjabiFinance traffic stay in two separate reports, which is what you want since they're different businesses/audiences.
- You don't need to touch Google Tag Manager or anything else — the snippet I'm adding talks directly to GA4.
- If you ever want the two properties to share a login with your team (e.g. an assistant who manages ads or reporting), that's done from Admin → Account Access Management, separately from anything here.
