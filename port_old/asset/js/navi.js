window.addEventListener('DOMContentLoaded',function(){
    var menu = document.querySelector('header a');
    var nav = document.querySelector('header nav');
    var body = document.querySelector('body');

    menu.addEventListener('click',function(){
        this.classList.toggle('on');
        this.classList.toggle('off');
        nav.classList.toggle('active'); 
        body.classList.toggle('over');             
    });
})