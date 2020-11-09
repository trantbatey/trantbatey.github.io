
// function to use ajax to include the header a trailer templates

(function () { // IFEE
    "use strict"
    $().ready(function () {

        "use strict";

        fetch("./resume.html")
            .then(response => {
                return response.text()
            })
            .then(data => {
                document.querySelector("resume").innerHTML = data;
            });

    });
})();