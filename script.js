
let slider = document.getElementById("slider");
let body = document.getElementsByTagName("BODY")[0];


let priceDisplay = document.getElementById("price-display");


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
    console.log(value);
    let pageViews;
    // if value is smaller than 1/5
    // then display 10k page views
    // if the value 

    if (value >= 0 && value <= 20) {
        pageViews = "10K";
    }
    else if (value >= 21 && value <= 40){
        pageViews = "50K";
    }
    else if (value >= 41 && value <= 60) {
        pageViews = "100K";
    }
    else if (value >= 61 && value <= 80) {
        pageViews = "500K";
    }
    else if (value >= 81 && value <= 100) {
        pageViews = "1M"
    }
    priceDisplay.innerHTML = `${pageViews} PAGEVIEWS`;

}