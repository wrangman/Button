"use strict";

const btnShowRef = document.getElementById("btnShowRef");
const imgRef = document.querySelector(".inline-image");

btnShowRef.addEventListener('click', () => {
    if (imgRef.classList.contains("fade-in")) {
        imgRef.classList.remove("fade-in");
        imgRef.classList.add("fade-out");
    } else {
        imgRef.classList.remove("fade-out");
        imgRef.classList.add("fade-in");
    }
});
