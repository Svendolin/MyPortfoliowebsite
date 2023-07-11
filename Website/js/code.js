
/* TABS */
// Variables (Tablinks will act as a button to switch between tabs)
// (Variables in Plural form are used to store multiple elements)
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
// Define the onclick event for to remove active-link and active-content.
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    // Add active-link and active-content to the clicked tablink and tabcontent.
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

/* ------------ SIDEMENU for Navigation ----------------- */

// Each time we click on the menu icon "sidemenu"...
let sidemenu = document.getElementById("sidemenu");

// ...we call the function openmenu()
function openmenu() {
    sidemenu.style.right = "0"; // which makes it visible (from -120px at css to 0)
}

function closemenu() {
    sidemenu.style.right = "-120px"; // ....while this makes it invisible again by moving back to the -120px
}


/* ---------------- SUBMITTER to Google Sheet in the Input field -------------- */
// Used from: https://github.com/jamiewilson/form-to-google-sheets

const scriptURL = 'https://script.google.com/macros/s/AKfycbwELTWbUNyBsjWf6x-9aSDcFokHAtsWPT1_wuL9GEswdTgNrpqlpdrF5IjUc9BjMRya/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        // We inform the user that the message has been sent successfully:
        .then(response => {
            msg.innerHTML = "Mitteilung erfolgreich gesendet!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 8000) // After 8 seconds, remove the message
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

/* ---------------- LOAD MORE Button bei "Projekte" -------------- */

// let loadMoreBtn = document.getElementById("loadMoreBtn");
// let currentItem = 3;

// loadMoreBtn.onlick = () => {
//     let boxes = [...document.querySelectorAll(".work-list .work")];
//     for (let i = currentItem; i < currentItem + 3; i++) {
//         boxes[i].style.display = "inline-block";
//     }
//     currentItem += 3;
//     if (currentItem >= boxes.length) {
//         loadMoreBtn.style.display = "none";
//     }
// }

const loadmore = document.getElementById("load-more");

let currentItems = 3;
loadmore.addEventListener("click", (e) => {
    const elementList = [...document.querySelectorAll(".work-list .work")];
    e.target.classList.add("show-loader");

    for (let i = currentItems; i < currentItems + 3; i++) {
        setTimeout(function () {
            e.target.classList.remove("show-loader");
            if (elementList[i]) {
                elementList[i].style.display = "flex";
            }
        }, 3000)
    }
    currentItems += 3;
    //hide load more button if all items are loaded
    if (currentItems >= elementList.length) {
        event.target.classList.add("loaded");
    }

});

