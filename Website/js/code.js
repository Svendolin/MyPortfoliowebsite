
/* TABS */
// Variables (Tablinks will act as a button to switch between tabs)
// (Variables in Plural form are used to store multiple elements)
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
// Define the onclick event for to remove active-link and active-content.
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
  }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}