$(function(){
    $(function(){
        var sTop = 0;
        
        $(window).on('scroll',function(){
            var winH = $(window).height();
            sTop = $(this).scrollTop();             

            $('div').each(function(i){
                var con = $('div').eq(i).offset().top;
                
                if(con - winH < sTop){
                    $('div').eq(i).css({

                    opacity : 1,
                    marginTop : 50

                    });
                };
                
            });
        });

        $(window).trigger('scroll');      

    });

})