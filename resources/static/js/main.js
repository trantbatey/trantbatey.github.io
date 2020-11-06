
// This is a module to manage some basic JS utility code

(function () { // IFEE
    "use strict"
    $().ready(function () {

        "use strict";

        function setCenterCellSize(event) {

            // This code is intended to keep the center box aspect ration the same.
            // let height = $('#vid01').height();
            // let div = $('#resume');
            // div.css('height', height);
            // console.log("Height: " + height);
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

        // link to LinkedIn
        function linkedInLink(event) {
            window.open("https://www.linkedin.com/in/trantbatey/", "_blank");
        }
        $('#linked-in').click(linkedInLink);

        // link to Github
        function githubLink(event) {
            window.open("https://github.com/trantbatey", "_blank");
        }
        $('#github').click(githubLink);
        // initialize popovers
        $('[data-toggle="popover"]').popover();

    });
})();