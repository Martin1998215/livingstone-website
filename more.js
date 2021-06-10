function menuTabs(menu) {
    const x = document.querySelectorAll(".more-all");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    document.getElementById(menu).style.display = 'block';
}

document.getElementById('link').click();


const siteGalleryArray = [
    {
        img: 'pro3.jpg',
        text: 'Outside View'
    },
    {
        img: 'pro9.jpg',
        text: 'Entrance'
    },
    {
        img: 'pro1.jpg',
        text: 'Front Side'
    },
    {
        img: 'pro2.jpg',
        text: 'Front Side'
    },
    {
        img: 'pro11.jpg',
        text: 'Front view'
    },
    {
        img: 'pro6.jpg',
        text: 'Greener View'
    },
    {
        img: 'pro12.jpg',
        text: 'Back view'
    },
    {
        img: 'pro14.jpg',
        text: 'Interior view'
    },
    {
        img: 'pro7.jpg',
        text: 'Back view'
    },
    {
        img: 'pro10.jpg',
        text: 'Back view'
    },
    {
        img: 'reception1.jpg',
        text: 'Reception'
    },
    {
        img: 'Toilet1.jpg',
        text: 'Toilet/Show'
    },

    {
        img: 'room4.jpg',
        text: 'Rooms'
    }
]
let counter = 0;

const galleryImg = document.querySelector(".site-cover-photo");
const galleryText = document.querySelector(".site-view");

const galleryPreviousBtn = document.querySelector(".site-prev-btn");
const galleryNextBtn = document.querySelector(".site-next-btn");

galleryPreviousBtn.addEventListener("click", () => {
    counter--;
    if (counter < 0) {
        counter = siteGalleryArray.length - 1;
    }
    galleryImg.src = siteGalleryArray[counter].img;
    galleryText.innerHTL = siteGalleryArray[counter].text;
})

galleryNextBtn.addEventListener("click", () => {
    counter++;
    if (counter > siteGalleryArray.length - 1) {
        counter = 0;
    }
    galleryImg.src = siteGalleryArray[counter].img;
    galleryText.innerHTML = siteGalleryArray[counter].text;
})



// Promotion section 

const show = document.querySelector('.promo-inner');
const day = document.querySelector('.numb-day');
const hour = document.querySelector('.numb-hour');
const minute = document.querySelector('.numb-min');
const sec = document.querySelector('.numb-sec');
const text = document.querySelector('.text');
const box = document.querySelector('.box');
const play = document.querySelector('.screenplay');
const promo1Img = document.querySelector('.promo-img-1');
const promo1Text = document.getElementById('promo-head-1');
const end = document.querySelector(".promo-cover");
let promo1 = 0;


const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];


const futureDate = new Date(2021, 4, 22, 10, 10, 00);
let yr = futureDate.getFullYear();
let ma = months[futureDate.getMonth()];
let wday = weekdays[futureDate.getDay()];
let dat = futureDate.getDate();
let hr = futureDate.getHours();
let mi = futureDate.getMinutes();
let seco = futureDate.getSeconds();

if (mi < 10) {
    mi = "0" + mi;
}

let result = wday + ", " + dat + " " + ma + " " + hr + ":" + mi + " " + ",  " + yr;

show.innerHTML = result;

const futureTime = futureDate.getTime();
function getDisplay() {
    let currentTime = new Date().getTime();
    let answer = futureTime - currentTime;
    let oneDay = 24 * 60 * 60 * 1000;
    let oneHour = 60 * 60 * 1000;
    let oneMin = 60 * 1000;
    let oneSec = 1000;

    let dayt = Math.floor(answer / oneDay);
    let hourt = Math.floor((answer % oneDay) / oneHour);
    let minutest = Math.floor(((answer % oneDay) % (oneHour)) / oneMin);
    let secondt = Math.floor((((answer % oneDay) % (oneHour)) % (oneMin)) / oneSec);
    if (dayt < 10) {
        dayt = "0" + dayt;
    }

    if (hourt < 10) {
        hourt = "0" + hourt;
    }
    if (minutest < 10) {
        minutest = "0" + minutest;
    }
    if (secondt < 10) {
        secondt = "0" + secondt;
    }

    day.innerHTML = dayt;
    hour.innerHTML = hourt;
    minute.innerHTML = minutest;
    sec.innerHTML = secondt;

    if (dayt == 00 && hourt == 00 && minutest == 00 && secondt == 00) {
        end.style.display = "none";
    }

    if (answer < 0) {
        clearInterval(vay);
        day.innerHTML = "00";
        hour.innerHTML = "00";
        minute.innerHTML = "00";
        sec.innerHTML = "00";
        show.innerHTML = "Promotion Expired...!";
        show.style.color = 'red';
        // console.log(answer);
        //end.style.display = "none";
    }

}
//getDisplay();

let vay = setInterval(getDisplay, 1000);


function menuList(menu) {
    const x = document.querySelectorAll(".menu-all");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    document.getElementById(menu).style.display = 'block';
}

document.getElementById('linked').click();



