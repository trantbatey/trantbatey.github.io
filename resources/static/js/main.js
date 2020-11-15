// This is a module to manage some basic JS utility code

(function () { // IFEE
    "use strict"
    $().ready(function () {

        "use strict";

        // create shared variables
        let vidPlaying = false;
        let res;
        let vid2, vidSB01;
        let oldScrollTop = 0;
        let step;
        let targetTime;

        function scrollHandler(event) {

            // don't scroll screen if target time has not been reached.
            // if ((res[0].scrollTop > oldScrollTop && vidSB01.currentTime < targetTime) ||
            //     (res[0].scrollTop < oldScrollTop && vidSB01.currentTime > targetTime)){
            //     res[0].scrollTop = oldScrollTop;
            //     return;
            // }
            if (res[0].scrollTop - oldScrollTop > step) res[0].scrollTop = oldScrollTop + step;
            else if (oldScrollTop - res[0].scrollTop > step) res[0].scrollTop = oldScrollTop - step;
            vid2.currentTime = vid2.duration * (res[0].scrollTop / res[0].scrollHeight);
            if (res[0].scrollTop >= oldScrollTop) {
                targetTime = vidSB01.currentTime + (vidSB01.duration / (46 * 29.97));
                vidSB01.play(); // only play forward
            } else {
                targetTime = vidSB01.currentTime - (vidSB01.duration / (46 * 29.97));
                vidSB01.currentTime = targetTime;
            }
            oldScrollTop = res[0].scrollTop;
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
            vidSB01.currentTime = 0;
            step = res[0].scrollHeight / 1500;
            oldScrollTop = res[0].scrollTop;
            targetTime = vidSB01.currentTime;
            vidSB01.addEventListener('timeupdate', function () {
                if (this.currentTime >= targetTime) this.pause();
            })

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