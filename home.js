const highlightsImg = document.querySelector(".home-part-1-left-img")

const highlightsArray = [
    'pro3.jpg', 'pro9.jpg', 'pro1.jpg', 'pro2.jpg'
]
let counter = 0;

setInterval(() => {
    counter++;
    if (counter > highlightsArray.length - 1) {
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
    "Presidential Suite: K1000",
    "Executive Double - K300",
    "Executive Twin - K350",
    "Family Room - K370"
];
const textPartFour = document.querySelector(".home-part-4-text");

let countTxt = 0;

setInterval(function () {
    countTxt++;
    if (countTxt > textArray.length - 1) {
        countTxt = 0;
    }
    textPartFour.innerHTML = textArray[countTxt];
}, 2000)


const homeTextBackground = document.querySelector(".home-part-5-right-upper");

const homeTextBackgroundText = document.querySelector(".home-part-5-right-upper-text");

const backgroundArray = [
    {
        pic: "url(room2.jpg)",
        text: "Accommodation"
    },
    {
        pic: "url(rest2.jpg)",
        text: "Restaurant"
    },
    {
        pic: "url(room6.jpg)",
        text: "Conference"
    },
    {
        pic: "url(bar2.jpg)",
        text: "Bar"
    },
    {
        pic: "url(pro10.jpg)",
        text: "Hosting"
    }
]

let countBG = 0;

setInterval(() => {
    countBG++;
    if (countBG > backgroundArray.length) {
        countBG = 0;
    }
    homeTextBackgroundText.innerHTML = backgroundArray[countBG].text;
    homeTextBackground.style.backgroundImage = backgroundArray[countBG].pic;
}, 6000);

function menuTabs(menu) {
    const x = document.querySelectorAll(".middle-all");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    document.getElementById(menu).style.display = 'block';
}

document.getElementById('link').click();




const siteGalleryArray = [
    {
        img: 'pro2.jpg',
        text: 'Front Angular View'
    },
    {
        img: 'pro11.jpg',
        text: 'Front Angular View'
    },
    {
        img: 'pro6.jpg',
        text: 'Front Greener View'
    },
    {
        img: 'pro12.jpg',
        text: 'Back View'
    },
    {
        img: 'pro7.jpg',
        text: 'Back view'
    },
    {
        img: 'pro15.jpg',
        text: 'Luxury View'
    },
    {
        img: 'pro14.jpg',
        text: 'Back Inner view'
    }
]
let siteCounter = 0;

const galleryImg = document.querySelector(".middle-photo");
const galleryText = document.querySelector(".middle-text");

const galleryPreviousBtn = document.querySelector(".mid-prev-btn");
const galleryNextBtn = document.querySelector(".mid-next-btn");

galleryPreviousBtn.addEventListener("click", () => {
    siteCounter--;
    if (siteCounter < 0) {
        siteCounter = siteGalleryArray.length - 1;
    }
    galleryImg.src = siteGalleryArray[siteCounter].img;
    galleryText.innerHTL = siteGalleryArray[siteCounter].text;
})

galleryNextBtn.addEventListener("click", () => {
    siteCounter++;
    if (siteCounter > siteGalleryArray.length - 1) {
        siteCounter = 0;
    }
    galleryImg.src = siteGalleryArray[siteCounter].img;
    galleryText.innerHTML = siteGalleryArray[siteCounter].text;
})


const eventText = "No events at the moment ..... No Events at the moment .... No Events at the moment .... No Events at the moment.... ";
const showEventText = document.querySelector(".event-words");


let eventIndex = 0;

setInterval(() => {
    eventIndex++;
    if (eventIndex > eventText.length) {
        eventIndex = 0;
    }
    showEventText.innerHTML = eventText.slice(0, eventIndex);
}, 150);


