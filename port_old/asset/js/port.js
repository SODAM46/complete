window.addEventListener('DOMContentLoaded',function(){
 
    var typingBool = false; 
    var typingIdx= 0; 
    var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 

    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
       typingBool=true;        
       var tyInt = setInterval(typing,100); // 반복동작 
     } 
     
     function typing(){ 
        if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
            $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
            typingIdx++; 
        }else{ 
            clearInterval(tyInt); //끝나면 반복종료 
        } 
     }  
});


$(function(){
    var move=0, num=0, bln=true;

    $('html').scrollTop(0);

    $('#list').on('mousewheel',function(e){     
        var delta = e.originalEvent.wheelDelta;
       
      
        if(bln){
            bln = false;

            if(delta < 0){//내림
                num++;
            }else{//올림
                num--;
            }
            
            if(num == -1){
                num=0;
            }else if(num == $('#list article').length){
                num=$('#list article').length-1;
            }

            move = num * $(window).height();
 
            $('html').stop().animate({
                scrollTop:move
            },1000, 'easeOutBounce');
            

            setTimeout(function(){
                bln=true;
            },1000)
        }    
    
    });    
});