(function () {
    var nav = document.querySelector('.site-nav');
    var toggle = nav && nav.querySelector('.site-nav-toggle');
    if (!nav || !toggle) return;

    function close() {
        nav.removeAttribute('data-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
    }
    function open() {
        nav.setAttribute('data-open', 'true');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Close menu');
    }

    toggle.addEventListener('click', function () {
        if (nav.getAttribute('data-open') === 'true') close();
        else open();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.getAttribute('data-open') === 'true') close();
    });

    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', close);
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 720 && nav.getAttribute('data-open') === 'true') close();
    });
})();
