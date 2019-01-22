//Esc Key
$.fn.escape = function(callback) {
    return this.each(function() {
        jQuery(document).on("keydown", this, function(e) {
            var keycode = ((typeof e.keyCode != 'undefined' && e.keyCode) ? e.keyCode : e.which);
            if (keycode === 27) {
                callback.call(this, e);
            }
        });
    });
};

//Menu Navigation Hamburger
var navigationRight = $('.menu-wrap');

function Navigation() {
    var bodyEl = document.body,
        openbtn = $('#open-button'),
        closebtn = $('#close-button'),
        isOpen = false;

    function toggleMenu() {
        if (isOpen) {
            classie.remove(bodyEl, 'show-menu');
        } else {
            classie.add(bodyEl, 'show-menu');
        }
        isOpen = !isOpen;
    }

    function init() {
        initEvents();
    }

    function initEvents() {
        openbtn.click(toggleMenu);
        if (closebtn) {
            closebtn.click(toggleMenu);
        }

        // close the menu element if the target it´s not the menu element or one of its descendants..
        closebtn.click(function (ev) {
            var target = ev.target;
            if (isOpen && target !== openbtn) {
                toggleMenu();
            }
        });
    }

    navigationRight.escape(function () {
        if (isOpen) {
            classie.remove(bodyEl, 'show-menu');
        }
        isOpen = !isOpen;
    });

    init();
}

//Document Ready
$(document).ready(function ($) {

    //Menu Right Side
    if (navigationRight.length > 0) {
        Navigation();
    }
});