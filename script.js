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