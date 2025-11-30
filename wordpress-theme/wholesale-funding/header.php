<?php
if (!defined('ABSPATH')) exit;
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap">
    <?php wp_head(); ?>
    <style>
        :root {
            --primary: #1A355E;
            --accent: #B21E44;
            --background: #FFFFFF;
            --foreground: #1A1A1A;
            --muted: #F5F5F5;
            --border: #E0E0E0;
        }
    </style>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
    <div class="container mx-auto max-w-7xl px-4">
        <div class="flex justify-between items-center h-16">
            <div class="text-2xl font-bold">
                <a href="<?php echo home_url(); ?>" class="text-gradient-gold">Wholesale Shelf</a>
            </div>
            <nav class="hidden md:flex gap-8">
                <a href="#how-it-works" class="text-gray-600 hover:text-blue-600 transition">How It Works</a>
                <a href="#benefits" class="text-gray-600 hover:text-blue-600 transition">Benefits</a>
                <a href="#testimonials" class="text-gray-600 hover:text-blue-600 transition">Testimonials</a>
                <a href="#faq" class="text-gray-600 hover:text-blue-600 transition">FAQ</a>
            </nav>
            <button onclick="alert('Schedule call')" class="hidden md:block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition">
                Schedule Call
            </button>
        </div>
    </div>
</header>

<main class="site-content">
