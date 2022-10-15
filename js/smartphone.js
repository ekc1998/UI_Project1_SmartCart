const toggleToScan = document.querySelector(".QR");
const toggleToApp = document.querySelector(".scan");

const div1 = document.querySelector(".appview1");
const div2 = document.querySelector(".appview2");

toggleToScan.addEventListener("click", () => {
    toggleToApp.style.setProperty('display','block');
    div2.style.setProperty('display','block');
    div1.style.setProperty('display','none');
});