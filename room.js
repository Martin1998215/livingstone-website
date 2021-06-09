function menuTabs(menu) {
    const x = document.querySelectorAll(".room-all");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    document.getElementById(menu).style.display = 'block';
}

document.getElementById('link').click();

const doubleBtn = document.querySelector(".doubleBtn");
const twinBtn = document.querySelector(".twinBtn");

doubleBtn.addEventListener("click", function () {
    active(doubleBtn);
    inActive([twinBtn]);
});

twinBtn.addEventListener("click", function () {
    active(twinBtn);
    inActive([doubleBtn]);
});

function active(elem) {
    elem.classList.add("active");
}

function inActive(elemArray) {
    elemArray.forEach(item => {
        item.classList.remove('active');
    });
}

const roomArray = [
    "url('room2.jpg')", "url('room1.jpg')", "url('room3.jpg')", "url('room4.jpg')", "url('room6.jpg')", "url('toilet1.jpg')",
]

const roomAll = document.querySelectorAll(".room-right-slide img");

const roomAllContainer = document.querySelector(".room-right-slide");
let roomCount = 0;

setInterval(() => {
    roomCount++;
    if (roomCount > roomAll.length - 1) {
        roomCount = 0;
    }
    roomAllContainer.style.transform = "translateY(" + -roomCount * 250 + "px)";
}, 3000);

let status = 0;
const roomImg = document.querySelector(".room-all-photo");

const roomPrevBtn = document.querySelector(".room-prev-btn");
const roomNextBtn = document.querySelector(".room-next-btn");

roomPrevBtn.addEventListener("click", () => {
    status--;
    if (status < 0) {
        status = roomArray.length - 1;
    }
    roomImg.style.backgroundImage = roomArray[status];
})

roomNextBtn.addEventListener("click", () => {
    status++;
    if (status > roomArray.length - 1) {
        status = 0;
    }
    roomImg.style.backgroundImage = roomArray[status];
})