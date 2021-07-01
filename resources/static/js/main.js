// This is a module to manage some basic JS utility code

(function () { // IFEE
    "use strict"
    $().ready(function () {

        "use strict";

        // lower numbers = faster playback
        let playbackConst = 500; // Set to 1000 to make the playback slower

        let res, audio, audioOn, speakerToggle, frameText;
        let vid2, vidSB01;

        function scrollHandler(event) {
            let backgroundFrame = res[0].scrollTop / (playbackConst * 1.2);
            let frameNumber = res[0].scrollTop / playbackConst;
            vid2.currentTime = backgroundFrame;
            vidSB01.currentTime = frameNumber;
        }

        function setScrollHandler() {

            // show the resume
            res = $('#resume');
            res.css('visibility', 'visible');
            res.niceScroll({scrollspeed: 15, smoothscroll: true, autohidemode: false});
            $("div[id^='ascrail']").show();
            $('#start-prompt').css('display', 'none');

            // show frame text links
            frameText = $('.frame-text')
            frameText.css('visibility', 'visible');

            // start the film grain video
            let vid = $('#vid01')[0];
            vid.play();

            // play audio
            audio = $('#audio01')[0];
            audio.play();
            audioOn = true;
            speakerToggle = $('#speaker-toggle');
            speakerToggle.click(toggleSpeaker)

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
        }

        function toggleSpeaker(event) {
            if (audioOn) {
                audio.pause();
                audioOn = false;
            }
            else {
                audio.play();
                audioOn = true;
            }
        }

        window.addEventListener('mousedown', setScrollHandler);
        $('#frame02')[0].addEventListener('mousedown', scrollToBackground)
        $('#frame-text02')[0].addEventListener('mousedown', scrollToBackground)
        $('#frame03')[0].addEventListener('mousedown', scrollToExperience)
        $('#frame-text03')[0].addEventListener('mousedown', scrollToExperience)
        $('#frame04')[0].addEventListener('mousedown', scrollToEducation)
        $('#frame-text04')[0].addEventListener('mousedown', scrollToEducation)

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

    function scrollToBackground () {
        $('#resume')[0].focus()
        $('#background')[0].scrollIntoView(false)
    }

    function scrollToExperience () {
        $('#resume')[0].focus()
        $('#experience')[0].scrollIntoView(false)
    }

    function scrollToEducation () {
        $('#resume')[0].focus()
        $('#education')[0].scrollIntoView(false)
    }
})();