$(function(){
    $('.dog form').on('click',function(){
        if($('.dog input:checkbox[id="dogCheck"]').is(':checked')){
            $('.dog div').addClass('active');
        }else{
            $('.dog div').removeClass('active');
        }
    });

    $('.cat form').on('click',function(){
        if($('.cat input:checkbox[id="catCheck"]').is(':checked')){
            $('.cat div').addClass('active');
        }else{
            $('.cat div').removeClass('active');
        }
    })
    
})