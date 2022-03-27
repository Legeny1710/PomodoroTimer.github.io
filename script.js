let timerEl = document.getElementById("timer-el")
let StartBtn = document.getElementById("start-btn")
let PauseBtn = document.getElementById("pause-btn")
let ResumeBtn = document.getElementById("resume-btn")
let BreakBtn = document.getElementById("break-btn")
let TextEl = document.getElementById("text")
let TextEl2 = document.getElementById("text2")

var finished = false
var id;
var value = "00:00";

const audio = new Audio()
audio.src = "./ring.mp3"


function startTimer(m, s) {
    timerEl.textContent = m + ":" + s;
    if (s == 0) {
        if (m == 0) {
            TextEl.textContent = "Time is UP!"
            audio.play()
            return;
        } else if (m != 0) {
            m = m - 1;
            s = 60;

        }
        
}

    s = s - 1;
    id = setTimeout(function () {
        startTimer(m, s)
    }, 1000);
}

function pauseTimer() {
    value = timerEl.textContent;
    clearTimeout(id);
}

function resumeTimer() {
    var t = value.split(":");

    startTimer(parseInt(t[0], 10), parseInt(t[1], 10));
}

StartBtn.addEventListener("click", function () {
    clearTimeout(id)
    startTimer(25, 00);
    document.body.style.background = "crimson"
    TextEl2.textContent = "25 MINUTE SESSION"
}, false);



PauseBtn.addEventListener("click", pauseTimer, false);

ResumeBtn.addEventListener("click", resumeTimer, false);

BreakBtn.addEventListener("click", function() {
    document.body.style.background = "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)"
    clearTimeout(id)
    TextEl.textContent = ""
    startTimer(05,00)
    TextEl2.textContent = "5 MIN BREAK"
    
})

