// This is a module to manage some basic JS utility code

(function () { // IFEE
    "use strict"
    $().ready(function () {

        "use strict";

        // create shared variables
        let frameNumber = 0; // start video at frame 0

        // lower numbers = faster playback
        let playbackConst = 500; // Set to 1000 to make the playback slower

        // get page height from video duration
        let setHeight = document.getElementById("resume");

        let res;
        let vid2, vidSB01, vidSB02, vidSB03, vidSB04, vidSB05, vidSB06;

        function scrollHandler(event) {
            let frameNumber = res[0].scrollTop / playbackConst;
            vid2.currentTime = frameNumber;
            vidSB01.currentTime = frameNumber;
            vidSB02.currentTime = frameNumber + 1;
            vidSB03.currentTime = frameNumber + 2;
            vidSB04.currentTime = frameNumber + 3;
            vidSB05.currentTime = frameNumber + 4;
            vidSB06.currentTime = frameNumber + 5;
        }

        function setScrollHandler() {

            // show the resume
            res = $('#resume');
            res.css('visibility', 'visible');
            $('#start-prompt').css('display', 'none');

            // start the film grain video
            let vid = $('#vid01')[0];
            console.log(vid);
            vid.play();
            vid2 = $('#vid02')[0];
            vidSB01 = $('#vidSB01')[0];
            vidSB02 = $('#vidSB02')[0];
            vidSB03 = $('#vidSB03')[0];
            vidSB04 = $('#vidSB04')[0];
            vidSB05 = $('#vidSB05')[0];
            vidSB06 = $('#vidSB06')[0];
            let resumePadding = $('#test')[0];
            resumePadding.style.paddingBottom = Math.floor(vidSB01.duration) * playbackConst + "px";

            // set shared variables
            window.removeEventListener('mousedown', setScrollHandler);
            res.scroll(scrollHandler);
        }

        window.addEventListener('mousedown', setScrollHandler);

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