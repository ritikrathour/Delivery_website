 const dark_mode = document.querySelector(".dark_mode");
 const darkModeON = ()=>{
     dark_mode.classList.toggle("active");
     document.body.classList.toggle("active")
    }
    dark_mode.addEventListener("click",darkModeON);
    //  ------------------------------------------------------
 const listItems = document.querySelectorAll(".list");
 listItems.forEach((item)=>{
    item.addEventListener("click",()=>{
        listItems.forEach(item=>item.classList.remove("active"));
        item.classList.add("active");
    });
 });
//  ------------------------------headerToggle---------
const scroll_top = document.querySelector(".scroll_top");
const nav_wrapper = document.querySelector(".nav_wrapper");
const header = document.querySelector(".header");
const windowScrolled = ()=>{
    (window.scrollY > 0)?header.classList.add("active"):header.classList.remove("active");
    (window.scrollY > 100)? scroll_top.classList.add("active"):scroll_top.classList.remove("active");
    if(window.scrollY){ nav_wrapper.classList.remove("active")
}
}
window.addEventListener("scroll",windowScrolled);


scroll_top.addEventListener("click",()=>{
    let home = document.querySelector(".home")
    home.scrollIntoView({behavior:"smooth"})

})
const close_menu = document.querySelector(".close_menu");
const open_menu = document.querySelector(".open_menu");
open_menu.addEventListener("click",()=>{
    nav_wrapper.classList.add("active")
});
close_menu.addEventListener("click",()=>{
    nav_wrapper.classList.remove("active")
})