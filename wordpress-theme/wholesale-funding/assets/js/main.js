(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.faq-question').forEach(function(btn) {
            btn.addEventListener('click', function() { toggleFAQ(this); });
        });
    });
})();
window.toggleFAQ = function(btn) {
    const ans = btn.nextElementSibling;
    ans.classList.toggle('show');
    btn.classList.toggle('active');
};
