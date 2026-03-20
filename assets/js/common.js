// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
                element.css('min-height', '0');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });

    function relayoutMasonry($container) {
        if (!$container || !$container.length || typeof $container.masonry !== 'function') {
            return;
        }
        if ($container.data('masonry')) {
            $container.masonry('layout');
        }
    }

    function bindDynamicMasonryRelayout(selector) {
        if (typeof MutationObserver === 'undefined') {
            return;
        }

        var raf = window.requestAnimationFrame || function (cb) {
            return setTimeout(cb, 16);
        };

        $(selector).each(function () {
            var $container = $(this);
            var scheduled = false;

            var scheduleLayout = function () {
                if (scheduled) {
                    return;
                }
                scheduled = true;
                raf(function () {
                    scheduled = false;
                    relayoutMasonry($container);
                });
            };

            // Masonry with data attributes may initialize a bit later than DOM ready.
            var retries = 0;
            var ensureReady = function () {
                if ($container.data('masonry')) {
                    relayoutMasonry($container);
                    return;
                }
                if (retries < 10) {
                    retries += 1;
                    setTimeout(ensureReady, 200);
                }
            };
            ensureReady();

            var observer = new MutationObserver(function () {
                scheduleLayout();
            });
            observer.observe(this, {
                subtree: true,
                childList: true,
                characterData: true
            });

            $(window).on('resize', scheduleLayout);
            window.addEventListener('load', scheduleLayout);
        });
    }

    bindDynamicMasonryRelayout('.js-dynamic-masonry');
})
