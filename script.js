
let slider = document.getElementById("slider");
let body = document.getElementsByTagName("BODY")[0];
let pageViewsDisplay = document.getElementById("page-views");
let price = document.getElementById("price");

function updateSliderBackground() {
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = 'linear-gradient(to right,  hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%)' + value + '%,hsl(224, 65%, 95%)' + value + '%,  hsl(224, 65%, 95%)';
}

slider.oninput = () => {
    updateSliderBackground();
}

function pageLoaded() {
    body.style.visibility = "visible";
    updateSliderBackground();
}

slider.onchange = (e) => {
    let value = e.target.value;
    let pageViews;

    if (value >= 0 && value <= 20) {
        pageViews = "10K";
        slider.value = 0;
        price.innerHTML = "$8.00";
    }
    else if (value >= 21 && value <= 40){
        pageViews = "50K";
        slider.value = 21;
        price.innerHTML =  "$12.00";
    }
    else if (value >= 41 && value <= 60) {
        pageViews = "100K";
        slider.value = 41;
        price.innerHTML= "$16.00";
    }
    else if (value >= 61 && value <= 80) {
        pageViews = "500K";
        slider.value = 61;
        price.innerHTML= "$24.00";
    }
    else if (value >= 81 && value <= 100) {
        pageViews = "1M"
        slider.value = 100;
        price.innerHTML = "$36.00";
    }

    updateSliderBackground();
    pageViewsDisplay.innerHTML = `${pageViews} PAGEVIEWS`;

}