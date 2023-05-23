window.addEventListener('DOMContentLoaded',function(){
    var tabJs = document.querySelector('.tab');
    var liJs = tabJs.querySelectorAll('li');
    var tabCon = document.querySelectorAll('.tab-con');
    var dId;

    tabJs.addEventListener('click', function(e) {
        // console.log(e.target.nodeName);

        if(e.target.nodeName != 'LI') {
            return;
        }
        for(var i = 0; i < liJs.length; i++) {
            liJs[i].classList.remove('active');
            tabCon[i].classList.remove('active');
        }
        e.target.classList.add('active');
        idx = e.target.dataset.id;
        tabCon[idx].classList.add('active');

    });
    


})