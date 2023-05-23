$(function(){
 
// notice   
    function tick(){
        $('.notice ul li:first').slideUp(
            function(){
                $(this).appendTo($('.notice ul')).slideDown();
            });
       }
       setInterval(function(){ tick() }, 3500);
       
// container scroll animation
       $(function(){
            let sTop = 0;
                    
            $(window).on('scroll',function(){
                sTop = $(this).scrollTop(); 
                const con = $('.con01').offset().top;
                const con02 = $('.con02').offset().top;
                const conH = $(window).height();
                
                if(con/2 < sTop){
                    $('.con01 div').addClass('active');
                }if(con02*1.2 < conH + sTop){
                    $('.con02 div').addClass('active');
                }                          
            });            
            $(window).trigger('scroll');

        });

   
                
                
       
        

        
        // var burger = $('header .buger');
        // burger.each(function(index){
        //     var $this = $(this);
            
        //     $this.on('click', function(e){
        //         e.preventDefault();
        //         $(this).toggleClass('active-' + (index+1));
        //     })
        // });
        // burger.on('click', function(){
        //     $('.navBox').toggleClass('on');
        // })


// 개인정보 취급방침
        $('footer p').on('click',function(){
            $('footer div').fadeIn();
        });
        $('footer div p').on('click',function(){
            $('footer div').fadeOut();
        })


// top
        $(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 1800) {
                    $('aside').fadeIn();
                } else {
                    $('aside').fadeOut();
                }
            });
            
            $('aside').click(function() {
                $('html, body').animate({
                    scrollTop : 0
                }, 400);
                return false;
            });
        });

        
});
