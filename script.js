// convert all squish text to span
const allSquishes = document.querySelectorAll(".squish");
console.log(allSquishes);

allSquishes.forEach((squish) => {
    const squishArr = squish.textContent.split(" ");

    squish.textContent = "";

    squishArr.forEach((word, index) => {
        const wordWrapper = document.createElement("div");
        wordWrapper.classList.add("word-wrapper");

        // Add whitespace between each word
        if (index !== 0) {
            const space = document.createTextNode(" ");
            squish.appendChild(space);
        }

        word.split("").forEach((letter) => {
            const letterSpan = document.createElement("span");
            letterSpan.classList.add("letter");
            letterSpan.textContent = letter;

            wordWrapper.appendChild(letterSpan);
        });

        squish.appendChild(wordWrapper);
    });
});

// grab all squishes and add animation (event listeners for mouseover + animationend)
const squishes = document.querySelectorAll(".squish span");
squishes.forEach((letter) => {
    letter.addEventListener("animationend", () => {
        letter.classList.remove("animated");
    });

    letter.addEventListener("mouseover", () => {
        letter.classList.add("animated");
    });
});

const gradientP = document.querySelector('.gradient');
gradientP.classList.add('fade');

// grab all squishes to fade them in
const transformSquishes = document.querySelectorAll("#home .squish span");
let char = 0;
let timer; // store timer id

// wait 1000ms before calling intervalSet
setTimeout(intervalSet, 1500);

// set interval between adding class (animated + fade)
function intervalSet() {
    timer = setInterval(onTick, 50);
}

// add classes to respective squish span
function onTick() {
    const span = transformSquishes[char];
    span.classList.add("fade");
    span.classList.add("animated");
    char++;
    if (char === transformSquishes.length) {
        complete(timer);
        return;
    }
}

// complete the setInterval and prevent potential memory leak
function complete(timer) {
    clearInterval(timer);
    timer = null;
}

// transition for contact button
const contactBtn = document.querySelector(".contact");
contactBtn.classList.add("fade");

// transitions for the header
const logo = document.querySelector("header a");
logo.classList.add("fade");

const header = document.querySelectorAll("header li");
let timer2 = setInterval(onTick2, 300);
let headerCount = 0;

function onTick2() {
    const li = header[headerCount];
    li.classList.add("fade");
    headerCount++;
    if (headerCount === header.length) {
        complete(timer2);
        return;
    }
}

// transition for social links
const socials = document.querySelector(".social-links");
socials.classList.add("fade");


/*
 ===========
 Second Page 
 ===========
 */

 // SECOND PAGE

// rotating text sphere
const myTags = [
    "Python",
    "JavaScript",
    "CSS",
    "HTML",
    "C",
    "C++",
    "React.js",
    "Java",
    "git",
    "PHP",
    "MySQL",
    "Figma",
    "Racket",
    "Bootstrap",
];

var tagCloud = TagCloud(".content", myTags, {
    // radius in px
    radius: 250,

    // animation speed
    // slow, normal, fast
    maxSpeed: "fast",
    initSpeed: "fast",

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true,
});

//To change the color of text randomly
var colors = ["lightcyan", "#CCD6F6", "lightskyblue"];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector(".content").style.color = random_color;

// Fade on scroll
const skillsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if (entry.isIntersecting) skillsObserver.unobserve(entry.target)
    })
}, {
    threshold: 1,
});

const skillsContent = document.querySelectorAll(".scroll");

skillsContent.forEach(content => {
    skillsObserver.observe(content);
})

// const contactBtn = document.querySelector(".contact");
contactBtn.addEventListener("click", () => {
    window.location.href = "#contact"
})


const anchors = skills.querySelectorAll('a');

anchors.forEach(anchor => {
    anchor.classList.add('hover');
})