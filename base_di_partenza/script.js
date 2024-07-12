const header =document.getElementById("header");
const banner=document.getElementById("banner-container");
const bottone=document.getElementById("bottone");
window.addEventListener("scroll", function() {
    if (window.pageYOffset>banner.offsetHeight) {
      
        if (window.pageYOffset>header.offsetHeight)
        {banner.style.backgroundColor="white";
            bottone.style.backgroundColor="green";
        }
        else { banner.style.backgroundColor="";
            bottone.style.backgroundColor="";
        }
    }
    else  {
        banner.style.backgroundColor="";
        bottone.style.backgroundColor="";
    }
})