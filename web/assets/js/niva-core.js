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


