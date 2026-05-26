

# Fix Slack Icon - Local SVG Replacement

## What will change
The broken Slack icon on the homepage will be replaced with a locally hosted SVG file, so it loads reliably every time.

## Technical steps

1. **Create `/public/icons/slack.svg`** - Add the official Slack logo SVG file locally
2. **Update `src/components/ConsultationHero.tsx`** - Change the Slack icon URL from `https://cdn.simpleicons.org/slack` to `/icons/slack.svg` (line 30)

That's it - a two-file, one-line-change fix. Everything else stays the same.

