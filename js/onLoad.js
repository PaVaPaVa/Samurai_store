function onLoad() {
    window.onload = function() {
        let preloader = document.getElementById('preloader');
        preloader.classList.add('preloader-anim');
        setTimeout(function(){
            preloader.classList.add('preloader-hidden');
        }, 1100)
    }
}
onLoad()