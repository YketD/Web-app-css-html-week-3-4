/**
 * Created by yketd on 15-9-2016.
 */
var cyclers = [];

(function cycler() {
    var imgs, index, obj;
    var sliders = document.getElementsByClassName("slider");

    for (var idx in sliders) {
        if (!sliders.hasOwnProperty(idx)) continue; // Prototype properties
        obj = sliders[idx];

        for (var item in obj) {
            index = 0;
            imgs = obj.getElementsByTagName("img");
            cyclers[idx] = {
                "imageIdx": index,
                "cycler": item,
                "images": imgs
            };

            imgs[0].style.display = "block";
            setInterval(function (idx) {
                cyclers[idx].images[index].style.display = "none";
                index = (index + 1) % cyclers[idx].images.length;
                cyclers[idx].images[index].style.display = "block";
            }, 5000, idx);
        }
    }
}());