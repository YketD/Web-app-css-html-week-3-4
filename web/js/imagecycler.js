/**
 * Created by yketd on 15-9-2016.
 */


(function cycler() {
    imgs = document.getElementById('slider').getElementsByTagName('img')
    index = 0;
    imgs[0].style.display = 'block';
    setInterval(function changeimage() {
        imgs[index].style.display = 'none';
        index = (index + 1) % imgs.length;
        imgs[index].style.display = 'block';
    }, 5000);
    
}());


