# Wholesale Shelf Funding - WordPress Theme

A premium WordPress theme that seamlessly embeds your React-based B2B funding platform.

## Features

✅ **Seamless iframe embedding** - Your full React site runs inside WordPress
✅ **Fully responsive** - Works on all devices
✅ **No additional configuration** - Works out of the box
✅ **WordPress ready** - Install and activate in seconds
✅ **Clean WordPress backend** - Full WordPress admin access while maintaining your React site

## Installation

### Method 1: Via WordPress Admin (Recommended)

1. Download `wholesale-funding.zip`
2. Go to **WordPress Admin Dashboard**
3. Navigate to **Appearance → Themes**
4. Click **Upload Theme**
5. Select `wholesale-funding.zip` and click **Install Now**
6. Click **Activate** to activate the theme
7. Done! Your site now displays your React platform

### Method 2: Manual Installation (FTP)

1. Download and unzip `wholesale-funding.zip`
2. Connect via FTP to your hosting
3. Upload the `wholesale-funding` folder to `/wp-content/themes/`
4. Go to **WordPress Admin → Appearance → Themes**
5. Find "Wholesale Shelf Funding" and click **Activate**

## What's Inside

```
wholesale-funding/
├── style.css              # Theme header & styling
├── functions.php          # Theme functionality
├── index.php              # Main template (displays iframe)
├── page.php               # Page template
├── single.php             # Single post template
├── header.php             # Header template
├── footer.php             # Footer template
└── README.md              # This file
```

## Configuration

The theme automatically embeds your React site from:
```
https://d7657c13-7ef8-46fc-b026-f939d8f63298-00-2qwmjscg6s1hj.picard.replit.dev/
```

To change the embedded URL, edit `index.php` and update the iframe `src` attribute.

## Requirements

- WordPress 5.0 or higher
- PHP 7.2 or higher
- No additional plugins required

## Support

For questions or issues, contact support@wholesale-shelf.com

---

**Version:** 1.0.0  
**License:** GPL v2 or later
