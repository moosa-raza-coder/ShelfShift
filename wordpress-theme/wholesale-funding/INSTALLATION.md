# Complete Installation Guide

## Quick Start (3 Minutes)

### Step 1: Prepare Your WordPress Site
- WordPress 5.0+ installed and running
- Admin access to your WordPress dashboard

### Step 2: Install the Theme
1. **Download** the `wholesale-funding` theme folder
2. **Compress** it as `wholesale-funding.zip`
3. In WordPress Admin:
   - Go to **Appearance → Themes**
   - Click **Add New Theme**
   - Click **Upload Theme**
   - Select `wholesale-funding.zip`
   - Click **Install Now**

### Step 3: Activate
- Click **Activate** next to "Wholesale Shelf Funding"
- Your site now displays your React platform inside WordPress

## That's It! ✅

Your WordPress site now:
- Shows your complete React-based B2B funding platform
- Maintains full WordPress admin functionality
- Remains fully responsive on all devices
- Requires no additional configuration

## Technical Details

### What the Theme Does
- Embeds your React site in an iframe
- Removes WordPress front-end elements to show only your platform
- Maintains WordPress admin for backend management
- Preserves all React functionality, videos, animations

### Customization Options

To change the embedded React site URL:

1. Open `wp-content/themes/wholesale-funding/index.php`
2. Find this line:
   ```html
   src="https://d7657c13-7ef8-46fc-b026-f939d8f63298-00-2qwmjscg6s1hj.picard.replit.dev/"
   ```
3. Replace with your React site URL
4. Save and refresh

### WordPress Admin Access

Your WordPress admin is fully functional:
- **Appearance → Customize** - Modify theme colors, fonts
- **Settings → General** - Change site title, tagline
- **Plugins** - Add additional WordPress plugins as needed
- **Users** - Manage site users and permissions

## Troubleshooting

### Iframe not displaying?
- Verify the React site URL is correct in `index.php`
- Check that the React site allows iframe embedding (no X-Frame-Options restriction)

### WordPress admin bar showing?
- This is normal - it only appears to logged-in admins
- Logged-out visitors won't see it

### Want to customize styling?
- Edit `wp-content/themes/wholesale-funding/style.css`
- Add custom CSS rules

## Support

Questions? Review the README.md file in the theme directory for more information.

---

**You're all set!** Your WordPress site is now running your B2B funding platform. 🎉
