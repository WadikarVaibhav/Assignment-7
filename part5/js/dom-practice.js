//eslint-env browser/
//jslint-env browser/

//STEP 1
function clickMe(){
    window.alert("I have been clicked");
}

//STEP 2
var el = window.document.getElementById("clickButton");
el.onclick = function () {
    window.alert("I have been clicked");
}

//STEP 3
var elBtnListener = window.document.getElementById("elBtnListener");
elBtnListener.addEventListener("click", clickMe);

//STEP 4
var elBtnListenerCB = window.document.getElementById("elBtnListenerCB");
elBtnListenerCB.addEventListener("click", function () {
    window.alert("I have been clicked");
});

//STEP 5
function init() {
    var elBtnListenerCB1 = window.document.getElementById("elBtnListenerCB1");
    elBtnListenerCB1.addEventListener("click", function () {
        window.alert("I have been clicked");
    });
}

window.addEventListener("load", init);