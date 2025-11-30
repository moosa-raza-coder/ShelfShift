# Wholesale Funding WordPress Theme - Installation Guide

## Speed Optimization & Performance Features

This theme includes built-in performance optimizations:

✅ **Lazy Loading** - Images and iframes load on-demand
✅ **CSS/JS Optimization** - Minified assets, no unused code
✅ **Caching Headers** - Leverage browser caching
✅ **Responsive Design** - Mobile-first CSS Grid layout
✅ **API Endpoints** - RESTful lead capture and bookings
✅ **Elementor Compatible** - Drag-drop page builder support

## Installation Steps

### 1. Install WordPress
```bash
wp core download
wp config create --dbname=wholesale --dbuser=root
wp db create
wp core install --url=http://localhost --title="Wholesale Funding" --admin_user=admin --admin_email=admin@example.com
```

### 2. Install Theme
```bash
# Copy theme to wp-content/themes/
cp -r wordpress-theme/wholesale-funding wp-content/themes/

# Activate theme via WordPress admin or CLI:
wp theme activate wholesale-funding
```

### 3. Install Elementor (Optional but Recommended)
```bash
wp plugin install elementor --activate
wp plugin install elementor-pro --activate
```

### 4. Import Example Pages

The theme includes Elementor JSON templates for:
- Homepage with hero and features
- Video gate modal
- Lead capture forms
- Booking confirmation page

### 5. Configure Theme Settings

**Via Customizer:**
1. Go to Appearance → Customize
2. Set Primary Color: #1A355E
3. Set Accent Color: #B21E44
4. Upload logo and favicon
5. Configure video URLs and thumbnails

**Via Theme Options:**
```php
update_option('video_url', 'https://example.com/video.mp4');
update_option('video_poster', 'https://example.com/poster.jpg');
```

## Features

### Gated Video System
- Video overlay with play button
- Lead capture form popup
- Auto-advance to Calendly after submission
- Exit intent lead magnet

### Lead Capture
- Stores leads in custom post type
- REST API integration at `/wp-json/wholesale/v1/leads`
- Accessible in WordPress admin

### Booking System
- Calendly integration ready
- Booking post type for tracking
- REST API at `/wp-json/wholesale/v1/bookings`

## Performance Metrics

Optimized for:
- **PageSpeed: 90+** via lazy loading and caching
- **Mobile First:** Responsive by default
- **CDN Ready:** Works with any CDN provider
- **SEO Optimized:** Schema markup included

## Speed Optimization Checklist

- [ ] Enable caching plugin (WP Super Cache, W3 Total Cache)
- [ ] Install CDN (Cloudflare, KeyCDN)
- [ ] Optimize images with ShortPixel or Smush
- [ ] Enable Gzip compression in .htaccess
- [ ] Minify CSS/JS (included in build)
- [ ] Remove unused plugins

## Troubleshooting

**404 errors on API calls?**
```bash
wp rewrite flush
```

**Elementor not loading?**
Go to Elementor Settings → General → Elementor Active = Yes

**Slow performance?**
1. Check database - run optimization
2. Enable caching plugin
3. Check server PHP version (7.4+ recommended)

## Support

For issues or questions, check the theme documentation in `assets/docs/`
