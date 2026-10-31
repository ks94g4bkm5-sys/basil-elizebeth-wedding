# Basil & Elizebeth — wedding invitation

Selected design: **3 — Botanical Elegance**. Soft white, sage green and blush accents, delicate botanical borders, an arched invitation and restrained falling petals. Botanical artwork is bundled locally in `botanical-watercolor.webp`; it needs no paid image service. The church illustration from the theme concept is not included because it was illustrative rather than a verified image of the venue.

## Preview and personalise

Open `index.html` in a browser. No installation, build process or paid dependency is needed. Everything decorative is included locally; no external fonts, trackers or stock photos are loaded.

Edit `config.js` in a text editor. Names, date, venue and invitation wording are in `index.html`.

- Ceremony: 23 November 2026, 9:00 am. India Standard Time (UTC+5:30) is provisional. Once confirmed, set `timezoneConfirmed: true`. If the timezone differs, update `start` with the correct numeric offset and `timeLabel` too. Countdown and both calendar options use `start`.
- Directions already use the exact map link provided by the couple. Its destination could not be independently verified; test it before sharing.
- Put your portrait in `assets/couple.jpg`, then set `portrait: 'assets/couple.jpg'`. Use a compressed photo around 1200–1600 pixels wide, ideally below 500 KB. The current panel is explicitly labeled as a placeholder.
- Optional gallery: add files in `assets/` and entries in `gallery`, such as `{src:'assets/engagement.jpg', alt:'Our engagement photograph'}`. Include descriptive alt text.
- Music: add an audio file you have permission to redistribute, set `music: 'assets/music.mp3'`. Music starts only after a guest taps the toggle; browsers restrict automatic audio. No track is supplied.
- RSVP: put the published guest responder URL in `rsvpUrl`.
- Guest uploads: put an album invitation or upload-form URL in `photoUploadUrl`; update `photoUploadNote` to explain the chosen service and any sign-in requirement. `albumUrl` can link separately to a view-only album.

Empty destinations remain clearly labeled and do not pretend to submit anything. Photos are shared on the external service, not uploaded to this static website. The gallery is a manually curated collection, not an automatically synced guest wall. No reception or ceremony end time has been invented. Calendar files mark a zero-duration ceremony start; Google Calendar may apply its own default duration. Check the calendar entry before saving it.

## Publish free on GitHub Pages

1. Sign in to a free GitHub account. Create a **public** repository named `basil-elizebeth-wedding`. A public repository makes its files and media visible to everyone: never add guest responses, private albums, passwords or keys.
2. In that repository, choose **Add file → Upload files**. Upload the contents of this `wedding` folder with `index.html` at the repository root. Keep the `assets` folder structure. Include `.nojekyll` if your file picker shows it. Commit the upload.
3. Go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
4. Wait for deployment. Pages will show the actual address, usually `https://YOUR-USERNAME.github.io/basil-elizebeth-wedding/`. Open it and test on a phone before sending it to guests. The example username is a placeholder, not a live invitation.
5. To update details, replace the corresponding files and commit again. If an old version appears, refresh the browser cache.

No domain purchase is required. GitHub Free supports Pages from public repositories. The published site limit is 1 GB, soft bandwidth limit 100 GB/month and soft build limit 10/hour for branch publishing. This small static invitation should normally stay far below those limits. Pages cannot process form submissions or store guest uploads by itself. [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).

## Free RSVP — Google Forms

1. At Google Forms, create a form with name, attending yes/no, party size, and optional message. Keep required questions to a minimum.
2. For guests without Google accounts, avoid settings that require sign-in, including limiting to one response and verified-email collection. Keep response summaries off so guests cannot see each other’s answers. Do not put file uploads in this RSVP form if you want a sign-in-free RSVP.
3. Publish with responder access for anyone with the link. Copy its **responder** link, not its editing link, into `rsvpUrl`. Guests submit directly in Google Forms. Responses are available privately in your account; optionally link a private Google Sheet.
4. Test from a signed-out browser. The website cannot check if a form was submitted and intentionally displays no fake confirmation.

Basic personal Google Forms can be used without a paid Workspace plan. Account and service limits still apply; this is not a promise of unlimited submissions. [Google Forms publication and sharing settings](https://support.google.com/docs/answer/2839588?hl=en).

## Guest uploads — iCloud option

The supplied iCloud album link is now connected to **Open our shared album**. Its contents and contributor permissions could not be verified using the available web tool. Test joining and uploading as a guest before sharing the invitation widely. Timezone confirmation and the RSVP destination are still pending.

Share an **album invitation link**, never your Apple Account password or a general account sign-in link. Enable participant posting where available. A public viewing link is not automatically an upload invitation.

Apple’s current guidance distinguishes newer albums created on iOS/iPadOS/visionOS 27 or later, which support joining from Apple and non-Apple devices, from older albums with Public Website viewing. Album version, sign-in and permissions affect whether a guest can contribute. Check your actual album with an Android guest and an iPhone guest before choosing it as the only upload route. Add its guest-facing link to `photoUploadUrl` only after verifying that posting works; otherwise use it as `albumUrl` for viewing.

Do not assume unlimited free storage: upgraded/newer album behavior and your available iCloud quota may differ from legacy Shared Albums. Check the quota shown in your own account; if a limit is reached, remove/download files or stop accepting contributions to keep costs at zero. The website neither upgrades your storage nor purchases a subscription. [Apple Shared Albums guidance](https://support.apple.com/en-us/108314), [iCloud album management](https://support.apple.com/en-gb/guide/icloud/mme985ae44d8/icloud).

## Guest uploads — free Google Forms fallback

Create a separate photo form. Add an optional guest name, a required permission checkbox, and a **File upload** question restricted to images, for example up to 5 files at 10 MB each. Publish it and put its responder link in `photoUploadUrl`. Set `photoUploadNote` to `Share photos using our Google Form. A Google Account sign-in is required.`

Guests must sign in to a Google Account for file upload. Files are saved in the owner’s Google Drive and consume available storage. Google accounts currently include **up to 15 GB** shared across Drive, Gmail and Photos; check your actual remaining allowance. There is no paid plan required while within your available free allowance, but uploads can stop when capacity is reached. This is not an anonymous upload service. Keep the response sheet and upload folder private; publish only selected photographs with permission. [Google upload-question rules](https://support.google.com/docs/answer/7322334?hl=en), [Google account storage](https://support.google.com/googleone/answer/9004014?hl=en).

## Map and calendar

The directions button opens the provided Google Maps link. There is no paid Maps API or API key. The `.ics` download and Google Calendar event link are generated locally and require no paid calendar API. Downloaded calendar files work with common calendar apps; Google Calendar requires the guest’s account to save. No analytics or automatic map embed is included.

## Before sending invitations

- Confirm timezone; check both calendar options show 23 November at 9 am in the venue’s timezone.
- Test the exact map pin on a phone.
- Connect and submit a test RSVP; verify it appears in the destination account.
- Test photo contribution permissions on Apple and non-Apple devices, plus quota limits.
- Add the couple’s portrait and permitted music. Test play, pause, failed audio loading, petal pause and reduced-motion settings.
- Check at narrow phone widths and desktop sizes, keyboard navigation and external links.
- A public GitHub Pages URL is public even if you only send it privately. Avoid publishing sensitive personal details or unapproved photographs.

## Reference and validation status

The original screen recording was recovered from the earlier chat, but browser approval was declined before frames could be inspected. No separate still image was available. This implementation follows the requested white/pink, falling-petal style and earlier chat description; a close visual match to the recording has **not** been verified. No audio or photographs were extracted from the recording.

Code checks cover JavaScript syntax, configured links, countdown output and calendar generation. Visual layout and real third-party submissions still require the browser checks above. The site is published at https://ks94g4bkm5-sys.github.io/basil-elizebeth-wedding/. Live mobile layout, petal toggle and calendar download were checked. The watercolor theme refinement adds softer floral details, an airy name layout and an arched photo area.

