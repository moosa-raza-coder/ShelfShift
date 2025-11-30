<?php
/**
 * Elementor Video Gate Widget Template
 */
if (!defined('ABSPATH')) exit;
?>

<div class="video-gate">
    <div class="video-container">
        <div class="video-overlay">
            <div class="video-play-button">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="white">
                    <circle cx="30" cy="30" r="30" fill="currentColor"/>
                    <polygon points="23,16 23,44 43,30" fill="white"/>
                </svg>
            </div>
        </div>
        <video poster="<?php echo get_theme_mod('video_poster'); ?>" width="100%" height="auto">
            <source src="<?php echo get_theme_mod('video_url'); ?>" type="video/mp4">
        </video>
    </div>
    
    <div class="lead-modal" style="display:none;">
        <div class="modal-content">
            <h2><?php _e('Unlock Your Video', 'wholesale-funding'); ?></h2>
            <form class="lead-form">
                <input type="text" name="name" placeholder="Full Name" required>
                <input type="email" name="email" placeholder="Email Address" required>
                <input type="tel" name="phone" placeholder="Phone (Optional)">
                <button type="submit" class="button"><?php _e('Unlock Video', 'wholesale-funding'); ?></button>
            </form>
        </div>
    </div>
</div>

<style>
.video-gate {
    position: relative;
    width: 100%;
}

.video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 8px;
    z-index: 10;
}

.video-play-button {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.lead-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 40px;
    border-radius: 12px;
    max-width: 400px;
    width: 90%;
}

.lead-form input {
    display: block;
    width: 100%;
    padding: 12px;
    margin-bottom: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
}

.lead-form button {
    width: 100%;
}
</style>
