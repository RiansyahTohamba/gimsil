(function() {
    var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("flashDeal").innerHTML = "Flash Deal berakhir dalam 00:" +
            minutes + ":" + seconds;
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("flashDeal").innerHTML = "EXPIRED";
        }
    }, 1000);
    var container = document.getElementById('products');
    if (container) {
        var grid = container.querySelector('.js-products-grid'),
            viewClass = 'tm-products-',
            optionSwitch = Array.prototype.slice.call(container.querySelectorAll('.js-change-view a'));

        function init() {
            optionSwitch.forEach(function(el, i) {
                el.addEventListener('click', function(ev) {
                    ev.preventDefault();
                    _switch(this);
                }, false);
            });
        }

        function _switch(opt) {
            optionSwitch.forEach(function(el) {
                grid.classList.remove(viewClass + el.getAttribute('data-view'));
            });
            grid.classList.add(viewClass + opt.getAttribute('data-view'));
        }
        init();
    }
})();

function increment(incrementor, target) {
    var value = parseInt(document.getElementById(target).value, 10);
    value = isNaN(value) ? 0 : value;
    if (incrementor < 0) {
        if (value > 1) {
            value += incrementor;
        }
    } else {
        value += incrementor;
    }
    document.getElementById(target).value = value;
}
(function() {
    UIkit.scroll('.js-scroll-to-description', {
        duration: 300,
        offset: 58
    });
})();
(function() {
    UIkit.util.on('.js-product-switcher', 'show', function() {
        UIkit.update();
    });
})();
(function() {
    var addToCartButtons = document.querySelectorAll('.js-add-to-cart');
    Array.prototype.forEach.call(addToCartButtons, function(el) {
        el.onclick = function() {
            UIkit.offcanvas('#cart-offcanvas').show();
        };
    });
})();
(function() {
    var addToButtons = document.querySelectorAll('.js-add-to');
    Array.prototype.forEach.call(addToButtons, function(el) {
        var link;
        var message = '<span class="uk-margin-small-right" uk-icon=\'check\'></span>Added to ';
        var links = {
            favorites: '<a href="/favorites">favorites</a>',
            compare: '<a href="/compare">compare</a>',
        };
        if (el.classList.contains('js-add-to-favorites')) {
            link = links.favorites;
        };
        if (el.classList.contains('js-add-to-compare')) {
            link = links.compare;
        }
        el.onclick = function() {
            if (!this.classList.contains('js-added-to')) {
                UIkit.notification({
                    message: message + link,
                    pos: 'bottom-right'
                });
            }
            this.classList.toggle('tm-action-button-active');
            this.classList.toggle('js-added-to');
        };
    });
})();