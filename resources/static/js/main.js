// This is a module to manage some basic JS utility code

(function () { // IFEE
    "use strict"
    $().ready(function () {

        "use strict";

        // lower numbers = faster playback
        let playbackConst = 500; // Set to 1000 to make the playback slower

        let res;
        let vid2, vidSB01, vidSB02, vidSB03, vidSB04, vidSB05, vidSB06;

        function scrollHandler(event) {
            let backgroundFrame = res[0].scrollTop / (playbackConst * 1.2);
            let frameNumber = res[0].scrollTop / playbackConst;
            vid2.currentTime = backgroundFrame;
            vidSB01.currentTime = frameNumber;
            vidSB02.currentTime = frameNumber + (1 / 15);
            vidSB03.currentTime = frameNumber + (2 / 15);
            vidSB04.currentTime = frameNumber + (3 / 15);
            vidSB05.currentTime = frameNumber + (4 / 15);
            vidSB06.currentTime = frameNumber + (5 / 15);
        }

        function setScrollHandler() {

            // show the resume
            res = $('#resume');
            res.css('visibility', 'visible');
            res.niceScroll({scrollspeed: 15, smoothscroll: true, autohidemode: false});
            $("div[id^='ascrail']").show();
            $('#start-prompt').css('display', 'none');

            // start the film grain video
            let vid = $('#vid01')[0];
            vid.play();

            // play audio
            let audio = $('#audio01')[0];
            audio.play();

            // setup other videos
            setupVideos();

            // set shared variables
            window.removeEventListener('mousedown', setScrollHandler);
            res.scroll(scrollHandler);
        }

        // setup or reset videos
        function setupVideos() {
            vid2 = $('#vid02')[0];
            vidSB01 = $('#vidSB01')[0];
            vidSB02 = $('#vidSB02')[0];
            vidSB03 = $('#vidSB03')[0];
            vidSB04 = $('#vidSB04')[0];
            vidSB05 = $('#vidSB05')[0];
            vidSB06 = $('#vidSB06')[0];
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