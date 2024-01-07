document.addEventListener("scroll",fadeInOnScroll)

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

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

document.addEventListener("laod",init)

function init(){
    myMap()
}

document.getElementById("open_mobile_nav").addEventListener("click",openMobileNav)
document.getElementById("close_mobile_nav").addEventListener("click",closeMobileNav)
for(let i = 0; i < document.getElementsByClassName("mobile_nav_option").length; i++){
  document.getElementsByClassName("mobile_nav_option")[i].addEventListener("click",closeMobileNav)
}
function openMobileNav(){
  document.getElementsByClassName("mobile_nav")[0].style.transform = "translateX(0%)";
}
function closeMobileNav(){
  document.getElementsByClassName("mobile_nav")[0].style.transform = "translateX(100%)";
}