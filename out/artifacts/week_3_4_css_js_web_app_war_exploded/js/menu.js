/**
 * Created by Murdock on 25/9/2016.
 */
function toggleNav() {
    var x = document.getElementById("menu");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}