
var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-links");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}



var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0"
} 

function closemenu(){
    sidemeu.style.right = "-170px"
} 

var typed = new Typed(".multiple-text",{
    strings: ["Front-End Developer","Designer","Engineer",],
    typespeed: 1,
    backspeed: 10,
    backDelay: 1500,
    loop: true
})