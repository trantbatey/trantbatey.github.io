
// This is a module to manage some basic JS utility code

(function () { // IFEE
    "use strict"
    $().ready(function () {

        "use strict";

        function setCenterCellSize(event) {

            // This code is intended to keep the center box aspect ration the same.
            let div = $('#center-cell');
            let width = div.width();
            let height = width * 0.85;
            div.css('height', height + "px");
        }

        setCenterCellSize();
        window.onresize = function (event) {
            setCenterCellSize();
        }

        // start background video on mouse down
        let vidPlaying = false;
        function scrollHandler(event) {
            if (!vidPlaying) {
                var vid = $('#vid01')[0];
                console.log(vid);
                vid.play();
                vidPlaying = true;
            }
        }
        window.addEventListener('mousedown', scrollHandler);

    });
})();