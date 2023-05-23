

window.addEventListener('DOMContentLoaded',function(){
 
  
    var typingBool = false; 
    var typingIdx= 0; 
    var typingTxt = $(".typing-txt").text(); 

    typingTxt=typingTxt.split("");
    if(typingBool==false){ 
       typingBool=true;        
       var tyInt = setInterval(typing,100);
     } 
     
     function typing(){ 
        if(typingIdx<typingTxt.length){ 
            $(".typing").append(typingTxt[typingIdx]); 
            typingIdx++; 
        }else{ 
            clearInterval(tyInt); 
        } 
     }  
     
});
