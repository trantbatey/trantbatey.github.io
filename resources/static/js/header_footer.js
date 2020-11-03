
// function to use ajax to include the header a trailer templates

(function () { // IFEE
    "use strict"
    $().ready(function () {

        "use strict";

        // fetch("./header.html")
        //     .then(response => {
        //         return response.text()
        //     })
        //     .then(data => {
        //         document.querySelector("header").innerHTML = data;
        //     });

        fetch("./resume.html")
            .then(response => {
                return response.text()
            })
            .then(data => {
                document.querySelector("resume").innerHTML = data;
            });

        // fetch("./footer.html")
        //     .then(response => {
        //         return response.text()
        //     })
        //     .then(data => {
        //         document.querySelector("footer").innerHTML = data;
        //     });

    });
})();