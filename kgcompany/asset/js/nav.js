// gnb slide
$(function(){
    $('#mainVisual .depth01').on('mouseover',function(){
        $('#mainVisual .depth02').slideDown();
        $('#mainVisual .depthBox').slideDown();       
    });
    
    
    $('#mainVisual .depth02').on('mouseleave',function(){
        $('#mainVisual .depth02').slideUp();
        $('#mainVisual .depthBox').slideUp();
    })
    
    const depthName = $('.depth-name > li');
    depthName.each(function(index){
        depthName.eq(index).on("mouseover",function(){
            for(let i=0; i < depthName.length; i++){
                $('.depth02-list').eq(index).removeClass(' hoverbg');
            }
            $('.depth02-list').eq(index).addClass(' hoverbg');
        });
        depthName.eq(index).on("mouseleave",function(){
            $('.depth02-list').eq(index).removeClass(' hoverbg');
           
        })
    
        $('.depth02-list').eq(index).on('mouseover',function(){
            for(let i=0; i < depthName.length; i++){
                $('.depth02-list').eq(index).removeClass(' hoverbg');
            }
            $('.depth02-list').eq(index).addClass(' hoverbg');
        })
        $('.depth02-list').eq(index).on("mouseleave",function(){
            $('.depth02-list').eq(index).removeClass(' hoverbg');
           
        })
    
    })
})

     