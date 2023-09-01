function openPWA() {
    window.open("http://localhost:9090", "_blank")
}
// openPWA()

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {
        navigator.serviceWorker.register("serviceWorker.js").then(reg => {
            console.log("SW Registered");
        }).catch(error => {
            console.log("SW Registeration failed");
        })
    })

} else {
    console.log("Not Supported");
}


let hrsEl = document.querySelector(".hrs")
let minEl = document.querySelector(".min")
let secEl = document.querySelector(".sec")

const getTime = () => {
    const currentTime = new Date()
    currentHrs = currentTime.getHours()
    currentMin = currentTime.getMinutes()
    currentSec = currentTime.getSeconds()

    hrs = currentHrs < 10 ? `0${currentHrs}` : currentHrs
    min = currentMin < 10 ? `0${currentMin}` : currentMin
    sec = currentSec < 10 ? `0${currentSec}` : currentSec

    // console.log(currentHrs, currentMin, currentSec);

    hrsEl.innerHTML = `${hrs}  :`
    minEl.innerHTML = `${min}  :`
    secEl.innerHTML = `${sec}`
}

setInterval(getTime, 1000)

const audioFunc = async () => {
    const audioFile = new Audio("/audio/Lesson Ended 3.mp3")
    audioFile.play()
}

setInterval(audioFunc, 5000)
// window.addEventListener("load", function () {

// })