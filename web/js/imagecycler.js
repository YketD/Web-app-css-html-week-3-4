/**
 * Created by yketd on 15-9-2016.
 */
var imagesSlider1 = ["ibizahead.jpg", "lasvegashead.jpg", "portohead.jpg"];
var imagesSlider2 = ["londonhead.jpg", "portosub2.jpg", "ibizahead.jpg"];
var sliderIdx1 = 0, sliderIdx2 = 0;

// Start slider 1
setInterval(function() {
    document.getElementById("slider1").src = "images/locations/" + imagesSlider1[sliderIdx1++ % imagesSlider1.length];
}, 5000);

// Start slider 2
setInterval(function() {
    document.getElementById("slider2").src = "images/locations/" + imagesSlider2[sliderIdx2++ % imagesSlider2.length];
}, 5000);