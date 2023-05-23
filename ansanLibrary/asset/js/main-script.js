window.addEventListener('DOMContentLoaded', function () {
    var tabLi = document.querySelectorAll('#notice > li'),
        tabA = document.querySelectorAll('#notice > li > a'),
        tabUl = document.querySelectorAll('#notice > li > ul')
        currentNum = 0;

    for (let i = 0; i < tabLi.length; i++) {
        tabLi[i].addEventListener('click', function (e) {
            e.preventDefault();

            this.classList.remove('on');
            tabA[currentNum].classList.remove('on');
            tabUl[currentNum].classList.remove('notiOn');

            this.className = 'on';
            tabA[i].className = 'on';
            tabUl[i].className = ('notiOn');

            currentNum = i;

        });
    }; 
})

$(function(){
    let num = 2;
    // 1=3월, 2=4월, 3=5월
    
    $('#month > li:eq(1)').show();
    $('.arrow-lt').on('click',function(){
        num--;
        if(num <= 1){
            num = 1;           
        }
        monthMove();   
    });
 
     $('.arrow-gt').on('click',function(){
        num++; 
        if(num >= 3){
            num = 3;            
        }        
        monthMove();
    });

     // 추천도서
     let linum = 0;
     $('.btn-lt').on('click',function(){
        linum--;
         if(linum <= -1 ){
            linum = 0;
         }
         $('#bookList ul').css({
            'transform' : 'translateX('+ -linum * 480 + 'px)'
        })
         
    });

     $('.btn-gt').on('click',function(){
        linum++;
         if(linum >= 2 ){
            linum = 2;
         }
         $('#bookList ul').css({
            'transform' : 'translateX('+ -linum * 480 + 'px)'
        })
    });

     function monthMove(){
         $('#month > li').hide();
         $('#month > li:eq('+(num-1)+')').show();
     }    
    

    // popup
    let popNum=1;
        
        $('.popup-list li:gt(0)').hide()
        
        $('.left-btn').on('click',function(e){
            e.preventDefault();
            popNum--;
            if(popNum < 1){
                popNum = 5
            }
            popupMove();
        })

        $('.right-btn').on('click',function(e){
            e.preventDefault();
            popNum++;
            if(popNum > 5){
                popNum = 1
            }
            popupMove();
            
        })

        $('.pause-btn').on('click',function(e){
            e.preventDefault();
            if($(this).hasClass('pause-btn')==true){
                clearInterval(popupset);
                $(this).removeClass('pause-btn');
                $(this).addClass('play-btn');
            }else{
                popupset=setInterval(function(){
                    set()
                },2000)
                $(this).removeClass('play-btn');
                $(this).addClass('pause-btn');
            }
        })

        var popupset=setInterval(function(){
            set()
        },2000)
      
        
        function popupMove(){
            $('.popup-list li').hide(); 
            $('.popup-list li:eq('+(popNum-1)+')').show();
        }

        function set(){
            $('.right-btn').trigger('click');
        }

        // TOP
        $('.topBtn').on('click',function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop : 0
            }, 200);
            return false;
        })

})