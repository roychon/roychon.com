// convert gradient text into spans for squish animation
const gradient = document.querySelector(".gradient-text");
const gradientTextArr = gradient.textContent.split("");
console.log(gradientTextArr);
gradient.textContent = "";
for (let i = 0; i < gradientTextArr.length; i++) {
    gradient.innerHTML += "<span>" + gradientTextArr[i] + "</span>";
    if (gradientTextArr[i] == " ") {
        gradient.innerHTML += " ";
    }
}

const squishes = document.querySelectorAll("span");
squishes.forEach((letter) => {
    letter.addEventListener("animationend", () => {
        letter.classList.remove("animated");
    });

    letter.addEventListener("mouseover", () => {
        letter.classList.add("animated");
    });
});

// text transition for squish text
const transformSquishes = document.querySelectorAll(".squish span");
let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = transformSquishes[char];
    span.classList.add("fade");
    span.classList.add("animated");
    char++;
    if (char === transformSquishes.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}
