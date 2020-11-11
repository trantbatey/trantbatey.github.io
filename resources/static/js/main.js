// This is a module to manage some basic JS utility code

(function () { // IFEE
    "use strict"
    $().ready(function () {

        "use strict";

        // define delay function
        const delay = ms => new Promise(rs => setTimeout(rs, ms));

        // create shared variables
        let vidPlaying = false;
        let res;
        let vid2, vidSB01;
        let scrollHeight;
        let frameNumber = 0; // start video at frame 0
        let maxFrame = 3720;
        let oldScrollTop = 0;
        let step;
        let vidSBTimeLimit = 0;
        let scrollCount = 0;

        function scrollHandler(event) {

            console.log("scrollTop: " + res[0].scrollTop + " vidSBTimeLimit: " + vidSBTimeLimit);
            if (vidSBTimeLimit != 0) return;

            // set step and direction
            step = res[0].scrollTop - oldScrollTop;
            scrollHeight = res[0].scrollHeight - res.height();
            console.log("scrollHeight: " + scrollHeight);
            console.log("scrollTop: " + res.scrollTop() + " oldScrollTop: " + oldScrollTop + " step: " + step);
            if (res[0].scrollTop === 0) {
                frameNumber = 1;
                vidSBTimeLimit = 0;
                console.log("res.scrollTop() <= 0, frameNumber: " + frameNumber);
            } else {
                if (res.scrollTop() >= scrollHeight - 300) res[0].scrollTop = scrollHeight - 400;
                if (step > 0) frameNumber += (1/7);
                else if (step < 0) frameNumber -= (1/7);
                console.log("else, frameNumber: " + frameNumber);
            }
            oldScrollTop = res[0].scrollTop;
            console.log("scrollTop: " + res.scrollTop() + " step: " + step + " Frame#: " + frameNumber);
            vid2.currentTime = (frameNumber*7) / 30;
            console.log("vidSBTimeLimit: " + vidSBTimeLimit);
            // if (vidSBTimeLimit === 0) {
                vidSB01.currentTime = frameNumber;
                vidSBTimeLimit = vidSB01.currentTime + (1 / 7);
                vidSB01.play();
            // } else {
            //     if (step > 0) vidSBTimeLimit += (1/7);
            //     else if (step < 0) vidSBTimeLimit -= (1/7);
            // }
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
            vidSB01 = $('#vidSB01')[0];
            vidSB01.addEventListener("timeupdate", function(){
                if(this.currentTime >= vidSBTimeLimit
                    || this.duration >= vidSBTimeLimit) {
                    vidSBTimeLimit = 0;
                    this.pause();
                }
            });

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