(function(window, $, undefined) {
    var ns = window.ns || {};
    ns._width = 750;
    ns.$html = $("html");
    ns.$window = $(window);
    window.click = "click";
    ns.initRem = function(opts) {
        //ns.width = window.screen.width>720?720:window.screen.width;
        ns.width = (window.innerWidth) || 
                   document.body.clientWidth || 
                   (document.documentElement.clientWidth) || 
                   (window.screen.width)
        ns.height = window.innerHeight || window.screen.height;
        var scale = ns.width / ns._width * 100;
        ns.$html.css({
            "font-size": scale + "px",
            "display": "block",
            "height": ns.height
        });
        /*ns.$body.css({
            "height": ns.height
        });*/
    };
    ns.initBanner = function(opts) {
        var defaults = {
                el: ".banner"
            },
            opts = $.extend({}, defaults, opts);
        $(opts.el).append('<div class="pagination"></div>').swiper({
            autoplay: 5000,
            loop: true,
            visibilityFullFit: true,
            pagination: '.pagination'
        });
    };

    ns.initRem();
    window.ns = ns;
    $(function() {
        ns.initBanner();
    });
}(window, Zepto));
