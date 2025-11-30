# Complete WordPress + Elementor Setup Guide

## Installation Options

### Option 1: WordPress.com (Easiest)
1. Go to WordPress.com
2. Create account
3. Install Elementor plugin
4. Upload theme to your site

### Option 2: Self-Hosted (Recommended)
Requires: Domain + hosting account

1. Install WordPress via hosting panel
2. Upload theme to `/wp-content/themes/`
3. Install Elementor plugin
4. Activate theme in WordPress admin

### Option 3: Local Development
1. Install WordPress locally (Local, XAMPP, etc.)
2. Upload theme
3. Install Elementor
4. Build locally first, then deploy

### Option 4: Replit (Development)
1. Set up WordPress on Replit
2. Upload theme files
3. Configure database
4. Access via Replit URL

---

## Step-by-Step Setup

### 1. Install WordPress
- Download WordPress from wordpress.org
- Upload to your server/hosting
- Complete WordPress installation
- Create admin account

### 2. Upload Theme
- Download `wholesale-funding-theme.tar.gz`
- Extract the folder
- Upload `wholesale-funding` to `/wp-content/themes/`
- Go to WordPress admin

### 3. Activate Theme
- Dashboard → Appearance → Themes
- Find "Wholesale Shelf Corporation"
- Click "Activate"

### 4. Install Elementor Plugin
- Dashboard → Plugins → Add New
- Search "Elementor"
- Click "Install Now"
- Click "Activate"

### 5. Import Template
- Go to Elementor → Templates
- Click "Import Template"
- Upload `elementor-templates/wholesale-shelf-homepage.json`
- Click "Import"

### 6. Create Homepage
- Pages → Add New
- Name it "Home"
- Click "Edit with Elementor"
- Apply the imported template
- Click "Publish"

### 7. Set as Homepage
- Settings → Reading
- Select "A static page"
- Choose your new "Home" page
- Click "Save Changes"

---

## Configuration

### Site Title & Tagline
- Settings → General
- Site Title: "Wholesale Shelf Corporation"
- Tagline: "Premium Business Credit Solutions"

### Site Logo
- Appearance → Customize
- Site Identity
- Upload logo (100x100px)

### Navigation Menu
- Appearance → Menus
- Create menu with links:
  - How It Works
  - Why Choose Us
  - FAQ
  - Contact
  - Blog
- Assign to "Primary Menu" location

### Footer Menu
- Create another menu for footer links
- Assign to "Footer Menu" location

### Contact Information
- Dashboard → Appearance → Customize
- Add contact email: Support@WholesaleShelfCorps.com
- Add phone: (555) 123-4567

---

## WordPress Settings

### General
- Site URL (must match your domain)
- Tagline & description
- Timezone

### Visibility & Search Engines
- Tools → Site Health
- Ensure "Search Engines Allowed"

### Comments
- Settings → Discussion
- Enable/disable comments as needed

### Permalinks
- Settings → Permalinks
- Select "Post name" for clean URLs

---

## Content Management

### Create Pages
1. Pages → Add New
2. Give it a title
3. Click "Edit with Elementor"
4. Build with Elementor
5. Publish

### Create Blog Posts
1. Posts → Add New
2. Title & content
3. Set featured image
4. Select category
5. Publish

### Create Categories
1. Posts → Categories
2. Add new category
3. Use for organizing posts

---

## Next Steps

### Add Contact Form
1. Install "WPForms" plugin
2. Create contact form
3. Add to page with Elementor
4. Set email notifications

### Add Blog
1. Create blog page
2. Add "Recent Posts" widget
3. Configure categories

### Add Map
1. Install "Google Maps" plugin
2. Configure API key
3. Add to page

### Add Calendar
1. Install "Events Calendar" plugin
2. Create events
3. Display on page

---

## Security

### Install Security Plugin
- Wordfence Security (recommended)
- Sucuri Security
- iThemes Security

### Backup Strategy
- Install UpdraftPlus
- Schedule daily backups
- Store backups offsite

### Update Regularly
- Keep WordPress updated
- Update all plugins
- Update theme when available

---

## Performance

### Enable Caching
- Install WP Super Cache
- Or W3 Total Cache
- Configure caching settings

### Optimize Images
- Install Smush
- Compress before upload
- Use WebP format

### CDN Setup
- Cloudflare (free)
- KeyCDN (paid)
- Distribute content globally

---

## SEO Optimization

### Install Yoast SEO
1. Install "Yoast SEO" plugin
2. Configure basic settings
3. Optimize each page
4. Set up XML sitemap

### Submit to Search Engines
- Google Search Console
- Bing Webmaster Tools
- Yandex Webmaster

### Page Optimization
- Each page should have:
  - Unique title tag
  - Meta description
  - Keywords
  - Internal links

---

## Support & Help

- **WordPress Docs**: wordpress.org/support/
- **Elementor Help**: elementor.com/help/
- **Theme Support**: Contact theme author

---

**You're all set!** Your WordPress site with Elementor is ready to launch. 🎉
