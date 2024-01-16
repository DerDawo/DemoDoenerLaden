window.addEventListener("load", init)

function init(){
  document.getElementById("previous-caroussel-item").addEventListener("click",fadeInOnDisplay)
  document.getElementById("next-caroussel-item").addEventListener("click",fadeInOnDisplay)
  for(let i = 0; i < document.getElementsByClassName("caroussel-item-dot").length; i++){
    document.getElementsByClassName("caroussel-item-dot")[i].addEventListener("click",fadeInOnDisplay)
  }
  document.addEventListener("scroll",fadeInOnScroll)
  document.getElementById("open_mobile_nav").addEventListener("click",openMobileNav)
  document.getElementById("close_mobile_nav").addEventListener("click",closeMobileNav)
  for(let i = 0; i < document.getElementsByClassName("mobile_nav_option").length; i++){
    document.getElementsByClassName("mobile_nav_option")[i].addEventListener("click",closeMobileNav)
  }
 
}

function fadeInOnScroll(){
    const pageTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const pageBottom = pageTop + window.innerHeight;
    const fade_ins = document.getElementsByClassName("fade-in");
  
    for (var i = 0; i < fade_ins.length; i++) {
      const fade_in = fade_ins[i];
      if (fade_in.offsetTop < pageBottom) {
        fade_in.classList.add("visible");
      } 
      //else {
      //  fade_in.classList.remove("visible");
      //}
    }
}

function openMobileNav(){
  document.getElementsByClassName("mobile_nav")[0].style.transform = "translateX(0%)";
}
function closeMobileNav(){
  document.getElementsByClassName("mobile_nav")[0].style.transform = "translateX(100%)";
}

function fadeInOnDisplay(){
  const restaurant_slide = document.getElementsByClassName("restaurant_slide");
  const fade_ins_display = document.getElementsByClassName("fade-in-caroussel");

  for (var i = 0; i < fade_ins_display.length; i++) {
    const fade_in = fade_ins_display[i];
    fade_in.classList.remove("visible-caroussel-content");
  }

  for (const slide of restaurant_slide){
    if (getComputedStyle(slide, null).display !== "none"){
      const fade_ins_display_show = slide.getElementsByClassName("fade-in-caroussel")
      for (var i = 0; i < fade_ins_display_show.length; i++) {
        fade_ins_display_show[i].classList.add("visible-caroussel-content");
      }
    }
  }

}