$(function(){
    
        for(let i = 0; i < $('.qna div').length; i++){
            $('.qna div').eq(i).on('click',function(){

                $('.qna strong').removeClass('active');
                $('.qna p').removeClass('active');
    
                $('.qna strong').eq(i).toggleClass('active');
                $('.qna p').eq(i).toggleClass('active');

            })
        }
        
   
})