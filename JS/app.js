let button = document.getElementById("openWindow");
let buttonClose = document.getElementById("closeWindow");

button.addEventListener("click", function () {
    let features = "menubar=no, scrollbars=yes, width=800, height=800, status=no, toolbar=no";
    let materielNet = window.open('https://www.materiel.net','', features);

    materielNet.resizeBy(-150, -50);
    materielNet.moveTo(600, 600);

    buttonClose.addEventListener("click", function () {
        materielNet.close();
    });
});





