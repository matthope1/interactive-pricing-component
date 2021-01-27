
let slider = document.getElementById("slider");

slider.oninput = () => {
    console.log("value: ", slider.value);
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = 'linear-gradient(to right,  hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%)' + value + '%, hsl(223, 50%, 87%)' + value + '%, hsl(223, 50%, 87%) 100%)';
}
