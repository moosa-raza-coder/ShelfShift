# Wholesale Shelf Corporation WordPress Theme

A premium, fully-functional WordPress theme built for B2B funding platforms.

## Features

- ✅ Complete WordPress template hierarchy (header, footer, page, post, archive, 404)
- ✅ Premium glassmorphism design with animations
- ✅ Responsive mobile-first layout
- ✅ Hero section with benefits and CTA
- ✅ How It Works 3-step process
- ✅ Benefits section with icon cards
- ✅ Testimonials carousel
- ✅ Expandable FAQ accordion
- ✅ Blog functionality with categories/tags
- ✅ Widget areas (sidebar & footer)
- ✅ Custom menus (primary & footer)
- ✅ Search functionality
- ✅ Comments system
- ✅ Proper WordPress hooks & filters

## Installation

1. Download theme as ZIP
2. Go to WordPress Admin → Appearance → Themes
3. Click "Add New" → "Upload Theme"
4. Upload the ZIP file
5. Click "Activate"

## Setup

### Customize Homepage

1. Go to WordPress Admin → Settings → Reading
2. Select "A static page"
3. Set Front page to "Home"
4. Save

### Add Logo

1. Go to Appearance → Customize → Site Identity
2. Upload your logo (recommended: 100x100px)

### Menus

1. Go to Appearance → Menus
2. Create two menus:
   - "Primary Menu" (for header navigation)
   - "Footer Menu" (for footer navigation)
3. Assign them to their respective locations

### Widgets

Add widgets to:
- Primary Sidebar (appears on blog pages)
- Footer Widget Areas 1-4 (appears in footer)

### Homepage Content

The homepage displays:
- Hero section with benefits
- How It Works process
- Benefits cards
- Testimonials
- FAQ section
- Final CTA
- Recent blog posts (optional)

## Theme Structure

```
wholesale-funding/
├── style.css              # Main stylesheet
├── functions.php          # Theme functions & hooks
├── header.php            # Header template
├── footer.php            # Footer template
├── front-page.php        # Homepage template
├── page.php              # Single page template
├── single.php            # Single post template
├── index.php             # Blog/archive template
├── archive.php           # Archive template
├── 404.php               # 404 template
├── comments.php          # Comments template
├── searchform.php        # Search form template
├── assets/
│   ├── js/
│   │   ├── main.js       # Main JavaScript
│   │   └── animations.js # Animation scripts
│   └── css/
│       ├── custom.css    # Custom styles
│       └── admin.css     # Admin panel styles
├── languages/
│   └── wholesale-shelf.pot  # Translation file
└── README.md             # This file
```

## Customization

### Colors

Edit these CSS variables in `style.css`:
```css
:root {
  --primary: #1A355E;      /* Dark blue */
  --accent: #B21E44;       /* Burgundy */
  --background: #FFFFFF;   /* White */
}
```

### Fonts

The theme uses:
- **Headings**: Space Grotesk (sans-serif)
- **Body**: Inter (sans-serif)

Both fonts are loaded from Google Fonts in `header.php`.

### Homepage Content

Edit homepage content in `functions.php`:
- `wholesale_shelf_get_hero_content()` - Hero section
- `wholesale_shelf_get_hero_benefits()` - Hero benefits
- `wholesale_shelf_get_process_steps()` - Process steps
- `wholesale_shelf_get_benefits()` - Benefits cards
- `wholesale_shelf_get_testimonials()` - Testimonials
- `wholesale_shelf_get_faq()` - FAQ items

Use WordPress filters to customize:
```php
add_filter('wholesale_shelf_hero_content', function($hero) {
    $hero['title'] = 'Your Custom Title';
    return $hero;
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## JavaScript Features

- Smooth scrolling links
- FAQ accordion toggle
- Scroll animations
- Mobile menu (when added)
- Form interactions

## Widget Support

- Post archives
- Categories
- Tags
- Recent posts
- Search
- Custom HTML

## License

GPL v2 or later

## Support

For issues or questions, contact support@wholesashshelf.com
