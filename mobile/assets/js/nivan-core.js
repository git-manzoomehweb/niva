// swiper-tour
var swiper = new Swiper(".swiper-tour", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination-tour",
    },
});

var swiper = new Swiper(".swiper-tour-2", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination-tour-2",
    },
});
var
    swiper = new Swiper(".swiper-tour-3", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination-tour-3",
    },
});

var swiper = new Swiper(".swiper-tour-4", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination-tour-4",
    },
});
// swiper-user
var swiper = new Swiper(".swiper-user", {
    slidesPerView: 1.5,
    pagination: {
        el: ".swiper-pagination-user",
    },
    spaceBetween:20,
});


var swiper = new Swiper(".swiper-service", {
    spaceBetween:8,
    slidesPerView: 1.2,
});
// tab-tour
function openTab(evt, tabId) {
    const buttons = document.getElementsByClassName("btn-tab");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    const parents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < parents.length; i++) {
        parents[i].classList.remove("active");
    }

    evt.currentTarget.classList.add("active");
    document.getElementById(tabId).classList.add("active");
}
// tab-hotel
function openTabHotel(evt, tabId) {
    const buttons = document.getElementsByClassName("btn-tab-hotel");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    const parents = document.getElementsByClassName("tab-content-hotel");
    for (var i = 0; i < parents.length; i++) {
        parents[i].classList.remove("active");
    }

    evt.currentTarget.classList.add("active");
    document.getElementById(tabId).classList.add("active");
}
// tab-blog
function openTabBlog(evt, tabId) {
    const buttons = document.getElementsByClassName("btn-tab-blog");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    const parents = document.getElementsByClassName("tab-content-blog");
    for (var i = 0; i < parents.length; i++) {
        parents[i].classList.remove("active");
    }

    evt.currentTarget.classList.add("active");
    document.getElementById(tabId).classList.add("active");
}

