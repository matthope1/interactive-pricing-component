
let slider = document.getElementById("slider");
let body = document.getElementsByTagName("BODY")[0];

function updateSliderBackground() {
    console.log("value: ", slider.value);
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