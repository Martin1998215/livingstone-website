const highlightsImg = document.querySelector(".home-part-1-left-img")

const highlightsArray = [
    'pro1.jpg', 'pro2.jpg', 'pro3.jpg', 'pro4.jpg'
]
let counter = 0;

setInterval(() => {
    counter++;
    if (counter > highlightsArray.length) {
        counter = 0;
    }
    highlightsImg.src = highlightsArray[counter];
    // highlightText.innerHTML = highlightsArray[counter].text;

}, 10000)


const text = "Our ability to take you anywhere in the country is our profound pleasure and strength.......";
const showText = document.querySelector(".home-part-2-left-text-1");

let index = 0;

setInterval(() => {
    index++;
    if (index > text.length) {
        index = 0;
    }
    showText.innerHTML = text.slice(0, index);
}, 150);

const textArray = [
    "Executive Double - K1000",
    "Executive Twin - K350",
    "Family Room - K370"
];
const textPartFour = document.querySelector(".home-part-4-text");

let countTxt = 0;

setInterval(function () {
    countTxt++;
    if (countTxt > textArray.length) {
        countTxt = 0;
    }
    textPartFour.innerHTML = textArray[countTxt];
}, 2000)


const homeTextBackground = document.querySelector(".home-part-5-right-upper");

const homeTextBackgroundText = document.querySelector(".home-part-5-right-upper-text");

const backgroundArray = [
    {
        img: "url(room2.jpg)",
        text: "Accommodation"
    },
    {
        img: "url(rest2.jpg)",
        text: "Restaurant"
    },
    {
        img: "url(pro2.jpg)",
        text: "Conference"
    },
    {
        img: "url(bar2.jpg)",
        text: "Bar"
    },
    {
        img: "url(host.jpg)",
        text: "Hosting"
    }
]

let countBG = 0;

// setInterval(() => {
//     countBG++;
//     if (countBG > backgroundArray.length) {
//         countBG = 0;
//     }
//     // homeTextBackgroundText.innerHTML = backgroundArray[countBG].text;
//     homeTextBackground.style.backgroundImage = backgroundArray[countBG].img;
// }, 6000)