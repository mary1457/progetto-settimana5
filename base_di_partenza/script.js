const header =document.getElementById("header");
const banner=document.getElementById("banner-container");
window.addEventListener("scroll", function() {
    if (window.pageYOffset>banner.offsetHeight) {
      
        if (window.pageYOffset>header.offsetHeight)
        {banner.style.backgroundColor="white";}
        else { banner.style.backgroundColor="";}
    }
    else  {
        banner.style.backgroundColor="";
    }
})