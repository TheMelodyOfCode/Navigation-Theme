"use strict"

const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];
/* Control Navigation Animation */
let navAnimation = function(direction1, direction2) {
    navItems.forEach((nav, i)=>{
        nav.classList.replace(`slide-${direction1}-${i +1}`, `slide-${direction2}-${i +1}`)
    });
}
let toggleNav = ()=> {
    menuBars.classList.toggle('change'); // adding and removing the css .change class
    // Toggle: Menu to be active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left','overlay-slide-right');
        // Animate IN - NAV-ITEMS
        navAnimation('out', 'in');  
    } else {
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate OUT - NAV-ITEMS
        navAnimation('in', 'out');
    }
}
// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav)=>{
    nav.addEventListener('click', toggleNav);
});



