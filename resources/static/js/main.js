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
        let totalSeconds = 100; // 124 seconds at 30 fps

        function scrollHandler(event) {

            // Use requestAnimationFrame for smooth playback
            console.log("scrollHeight: " + scrollHeight);
            if (res.scrollTop() === 0) {
                frameNumber = 1;
            } else {
                frameNumber = (res.scrollTop() / scrollHeight) * totalSeconds;
            }
            console.log("scrollPlay: " + res.scrollTop() + " totalSeconds: " + totalSeconds + " Frame#: " + frameNumber);
            vid2.currentTime = frameNumber;
            window.requestAnimationFrame(scrollHandler);
        }

        function setScrollHandler() {
            let vid = $('#vid01')[0];
            console.log(vid);
            vid.play();
            vidPlaying = true;
            vid2 = $('#vid02')[0];
            // console.log(vid);
            // vid.play();
            res = $('#resume');
            scrollHeight = res[0].scrollHeight - res.height();
            // res.scroll(scrollHandler);
            window.removeEventListener('mousedown', setScrollHandler);
            window.requestAnimationFrame(scrollHandler);
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