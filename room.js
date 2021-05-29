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
const familyBtn = document.querySelector(".familyBtn");

doubleBtn.addEventListener("click", function () {
    active(doubleBtn);
    inActive([twinBtn, familyBtn]);
});

twinBtn.addEventListener("click", function () {
    active(twinBtn);
    inActive([doubleBtn, familyBtn]);
});

familyBtn.addEventListener("click", function () {
    active(familyBtn);
    inActive([twinBtn, doubleBtn]);
});

function active(elem) {
    elem.classList.add("active");
}

function inActive(elemArray) {
    elemArray.forEach(item => {
        item.classList.remove('active');
    });
}



const roomAll = document.querySelectorAll(".room-right-slide img");

const roomAllContainer = document.querySelector(".room-right-slide");
let roomCount = 0;

setInterval(() => {
    roomCount++;
    if (roomCount > roomAll.length - 1) {
        roomCount = 0;
    }
    roomAllContainer.style.transform = "translateX(" + -roomCount * 200 + "px)";
}, 3000);