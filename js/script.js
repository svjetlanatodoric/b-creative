var button1 = document.getElementById("portfolio-btn1");
var button2 = document.getElementById("portfolio-btn2");
var button3 = document.getElementById("portfolio-btn3");
var button4 = document.getElementById("portfolio-btn4");

var gridGallery = document.getElementById("grid-gallery");
var logoGallery = document.getElementById("logo-gallery");
var designGallery = document.getElementById("design-gallery");
var devGallery = document.getElementById("dev-gallery");

var blogSection = document.getElementById("blog-section");

var footerSection = document.getElementById("footer");


// LOGO GALLERY
function logoImages() {


    designGallery.style.display = "none";
    gridGallery.style.display = "none";
    logoGallery.style.display = "grid";
    devGallery.style.display = "none";

}

function logoresize() {
    window.addEventListener("resize", function () {
        var counterContainer = document.getElementById("counter-container");

        if (window.matchMedia("(max-width: 767px)").matches) {
            console.log("Screen width is smaller than 767px")
            counterContainer.style.transform = "translate(0,23vw)";
            counterContainer.style.marginTop = "unset";
            blogSection.style.transform = "translate(0,4%)"
        }
        if (window.matchMedia("(min-width:767px)").matches && window.matchMedia("(max-width:1240px)").matches) {
            console.log("Screen bigger than 767px and smaller than 1024px")
            counterContainer.style.transform = "translate(0,23%)";
            counterContainer.style.marginTop = "unset";
            blogSection.style.transform = "translate(0,-18%)"

            footerSection.style.top="-8em";

        }
        if (window.matchMedia("(min-width:1240px)").matches) {
            console.log("Screen bigger than 1240px ")
            counterContainer.style.transform = "translate(0,5%)";
            counterContainer.style.marginTop = "unset";
            blogSection.style.transform = "translate(0,-21%)"

            footerSection.style.top="-8em";

        }
    })

}
button2.addEventListener("click", function () {
    var counterContainer = document.getElementById("counter-container");


    if (window.matchMedia("(max-width: 767px)").matches) {
        console.log("Screen width is smaller than 767px")
        counterContainer.style.transform = "translate(0,23vw)";
        counterContainer.style.marginTop = "unset";
        blogSection.style.transform = "translate(0,4%)"


    }
    if (window.matchMedia("(min-width:767px)").matches && window.matchMedia("(max-width:1240px)").matches) {
        console.log("Screen bigger than 767px and smaller than 1024px")
        counterContainer.style.transform = "translate(0,23%)";
        counterContainer.style.marginTop = "unset";
        blogSection.style.transform = "translate(0,-18%)"

        footerSection.style.top="-8em";


    }
    if (window.matchMedia("(min-width:1240px)").matches) {
        console.log("Screen bigger than 1240px ")
        counterContainer.style.transform = "translate(0,5%)";
        counterContainer.style.marginTop = "unset";
        blogSection.style.transform = "translate(0,-21%)"

        footerSection.style.top="-8em";

    }
})


//ALL IMAGES

window.onload = allImages;

function allImages() {
    logoGallery.style.display = "none";
    designGallery.style.display = "none";
    gridGallery.style.display = "grid";
    devGallery.style.display = "none";
}

function gridresize() {
    window.addEventListener("resize", function () {
        var counterContainer = document.getElementById("counter-container");

        if (window.matchMedia("(min-width: 100px)").matches) {
            console.log("Screen width is smaller than 767px")
            counterContainer.style.transform = "translate(0,0)";
            counterContainer.style.marginTop = "unset";
            blogSection.style.transform = "translate(0,0)"

        }
    })

}
button1.addEventListener("click", function () {
    var counterContainer = document.getElementById("counter-container");

    if (window.matchMedia("(min-width: 100px)").matches) {
        console.log("Screen width is smaller than 767px")
        counterContainer.style.transform = "translate(0,0)";
        counterContainer.style.marginTop = "unset";
        blogSection.style.transform = "translate(0,0)"

    }

})


//DESIGN GALLERY
function design() {
    logoGallery.style.display = "none";
    designGallery.style.display = "grid";
    gridGallery.style.display = "none";
    devGallery.style.display = "none";
}
function designresize() {
    window.addEventListener("resize", function () {
        var counterContainer = document.getElementById("counter-container");


        if (window.matchMedia("(max-width: 767px)").matches) {
            console.log("Screen width is smaller than 767px")
            counterContainer.style.transform = "translate(0,-13%)";
            counterContainer.style.marginTop = "unset";
            blogSection.style.transform = "translate(0,-3%)"

        }
        if (window.matchMedia("(min-width:767px)").matches && window.matchMedia("(max-width:1240px)").matches) {
            console.log("Screen bigger than 767px and smaller than 1024px")
            counterContainer.style.transform = "translate(0,-208%)";
            counterContainer.style.marginTop = "unset";
            blogSection.style.transform = "translate(0,-17%)"

            footerSection.style.top="-8em";

        }

        if (window.matchMedia("(min-width:1240px)").matches) {
            console.log("Screen bigger than 1240px ")
            counterContainer.style.transform = "translate(0,-208%)";
            counterContainer.style.marginTop = "unset";
            blogSection.style.transform = "translate(0,-19%)"

            footerSection.style.top="-4em";

        }
    })

}
button3.addEventListener("click", function () {
    var counterContainer = document.getElementById("counter-container");

    if (window.matchMedia("(max-width: 767px)").matches) {
        console.log("Screen width is smaller than 767px")
        counterContainer.style.transform = "translate(0,-13%)";
        counterContainer.style.marginTop = "unset";
        blogSection.style.transform = "translate(0,-3%)"


    }
    if (window.matchMedia("(min-width:767px)").matches && window.matchMedia("(max-width:1240px)").matches) {
        console.log("Screen bigger than 767px and smaller than 1024px")
        counterContainer.style.transform = "translate(0,-208%)";
        counterContainer.style.marginTop = "unset";
        blogSection.style.transform = "translate(0,-17%)"

        footerSection.style.top="-8em";

    }
    if (window.matchMedia("(min-width:1240px)").matches) {
        console.log("Screen bigger than 1240px ")
        counterContainer.style.transform = "translate(0,-208%)";
        counterContainer.style.marginTop = "unset";
        blogSection.style.transform = "translate(0,-19%)"

        footerSection.style.top="-4em";

    }

})



//DEVELOPMENT GALLERY

function dev() {

    logoGallery.style.display = "none";
    designGallery.style.display = "none";
    gridGallery.style.display = "none";
    devGallery.style.display = "grid";
}
function devresize() {
    window.addEventListener("resize", function () {
        var counterContainer = document.getElementById("counter-container");
        if (window.matchMedia("(max-width: 767px)").matches) {
            console.log("Screen width is smaller than 767px")
            counterContainer.style.transform = "translate(0,20vw)";
            counterContainer.style.marginTop = "unset";
            blogSection.style.transform = "translate(0,3%)"


        }
        if (window.matchMedia("(min-width:767px)").matches && window.matchMedia("(max-width:1024px)").matches) {
            console.log("Screen bigger than 767px and smaller than 1024px")
            counterContainer.style.transform = "translate(0,3%)";
            counterContainer.style.marginTop = "unset";
            blogSection.style.transform = "translate(0,-23%)"

            footerSection.style.top="-16em";


        }
        if (window.matchMedia("(min-width:1024px)").matches  && window.matchMedia("(max-width:1240px)").matches) {
            console.log("Screen bigger than 1024px and smaller than 1500px")
            counterContainer.style.transform = "translate(0,-3%)";
            counterContainer.style.marginTop = "unset";
            blogSection.style.transform = "translate(0,-25%)"
    
            footerSection.style.top="-18em";

        }
        if (window.matchMedia("(min-width:1240px)").matches) {
            console.log("Screen bigger than 1024px and smaller than 1500px")
            counterContainer.style.transform = "translate(0,-3%)";
            counterContainer.style.marginTop = "unset";
            blogSection.style.transform = "translate(0,-28%)"
    
            footerSection.style.top="-13em";

        }
        
        

    })
}
button4.addEventListener("click", function () {
    var counterContainer = document.getElementById("counter-container");

    if (window.matchMedia("(max-width: 767px)").matches) {
        console.log("Screen width is smaller than 767px")
        counterContainer.style.transform = "translate(0,20vw)";
        counterContainer.style.marginTop = "unset";
        blogSection.style.transform = "translate(0,3%)"


    }
    if (window.matchMedia("(min-width:767px)").matches && window.matchMedia("(max-width:1024px)").matches) {
        console.log("Screen bigger than 767px and smaller than 1024px")
        counterContainer.style.transform = "translate(0,3%)";
        counterContainer.style.marginTop = "unset";
        blogSection.style.transform = "translate(0,-23%)"

        footerSection.style.top="-18em";

    }
    if (window.matchMedia("(min-width:1024px)").matches  && window.matchMedia("(max-width:1240px)").matches) {
        console.log("Screen bigger than 1024px and smaller than 1500px")
        counterContainer.style.transform = "translate(0,-3%)";
        counterContainer.style.marginTop = "unset";
        blogSection.style.transform = "translate(0,-25%)"

        footerSection.style.top="-8em";

    }
    if (window.matchMedia("(min-width:1240px)").matches) {
        console.log("Screen bigger than 1024px and smaller than 1500px")
        counterContainer.style.transform = "translate(0,-3%)";
        counterContainer.style.marginTop = "unset";
        blogSection.style.transform = "translate(0,-28%)"

        footerSection.style.top="-13em";

    }
})

function counter() {
    var valueDisplays = document.querySelectorAll(".number");
    var interval = 2500;
    valueDisplays.forEach((valueDisplay) => {
        var startValue = 0;
        var endValue = parseInt(valueDisplay.getAttribute("data-value")); //pretvori string u cijeli broj
        var duration = Math.floor(interval / endValue);
        var counter = setInterval(function () {
            startValue += 1;
            valueDisplay.innerHTML = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    })

}
