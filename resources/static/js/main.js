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
        let numFrames = 0;
        let direction = 1;
        let scrollCount = 0;

        function scrollHandler(event) {

            console.log("scrollTop: " + res[0].scrollTop + " vidSBTimeLimit: " + vidSBTimeLimit);
            // if end of page, play the rest of the clip
            if (res.scrollTop() >= scrollHeight) {
                vidSBTimeLimit = vidSB01.duration;
                vidSB01.play(); // start player if it is stopped
                console.log("Play the rest of the clip. vidSBTimeLimit: " + vidSBTimeLimit);
            }

            if (vidSBTimeLimit != 0) return;
            if(numFrames !== 0) {
                vidSBTimeLimit = vidSB01.currentTime += ((1/30) * direction);
                vidSB01.play();
                numFrames--;
                console.log("numFrames: " + numFrames + " vidSBTimeLimit: " + vidSBTimeLimit + "vidSB01.currentTime: " + vidSB01.currentTime);
                return;
            }

            // set step and direction
            step = res[0].scrollTop - oldScrollTop;
            scrollHeight = res[0].scrollHeight - res.height();
            if (res[0].scrollTop === 0) {
                frameNumber = 1;
                vidSBTimeLimit = 0;
            } else {
                if (step > 0) {
                    direction = 1; // forward
                }
                else {
                    direction = -1; // background
                }
                vidSBTimeLimit = vidSB01.currentTime += ((1/30) * direction);
                numFrames = 15;
                vidSB01.play();
            }
            oldScrollTop = res[0].scrollTop;
            vid2.currentTime = vid2.duration * (res[0].scrollTop/scrollHeight);
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
            vidSB01.addEventListener("timeupdate", function () {
                if (this.currentTime >= vidSBTimeLimit ||
                    this.currentTime >= this.duration -0.5) {
                    frameNumber = this.currentTime;
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