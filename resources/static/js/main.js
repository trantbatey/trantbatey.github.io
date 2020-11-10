// This is a module to manage some basic JS utility code

(function () { // IFEE
    "use strict"
    $().ready(function () {

        "use strict";

        // start background video on mouse down
        let vidPlaying = false;
        console.log("Got Here 01");

        let res;
        let vid2;
        let scrollHeight;
        let frameNumber = 0; // start video at frame 0
        let totalSeconds = 90; // 124 seconds at 30 fps
        let oldScrollTop = 0;
        let step = 15;

        function scrollHandler(event) {

            // Use requestAnimationFrame for smooth playback
            scrollHeight = res[0].scrollHeight - res.height();
            console.log("scrollHeight: " + scrollHeight);
            if (res.scrollTop() === 0) {
                frameNumber = 1;
            } else {
                if (res[0].scrollTop - oldScrollTop > step) res[0].scrollTop = oldScrollTop + step;
                else if (oldScrollTop - res[0].scrollTop > step ) res[0].scrollTop = oldScrollTop - step;
                frameNumber = (res.scrollTop() / scrollHeight) * totalSeconds;
            }
            oldScrollTop = res[0].scrollTop;
            console.log("scrollPlay: " + res.scrollTop() + " totalSeconds: " + totalSeconds + " Frame#: " + frameNumber);
            vid2.currentTime = frameNumber;
        }

        function setScrollHandler() {

            // show the resume
            res = $('#resume');
            res.css('visibility', 'visible');
            let startPrompt = $('#start-prompt').css('display', 'none');

            // start the film grain video
            let vid = $('#vid01')[0];
            console.log(vid);
            vid.play();
            vidPlaying = true;
            vid2 = $('#vid02')[0];

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