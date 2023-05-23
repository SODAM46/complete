
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


    
    var winH = window.outerHeight;  // 스크롤 바를 포함한 창의 높이
    var skill = document.querySelector('.bottom div');

	window.addEventListener('scroll',function(){	
        wheel();
	});

    function wheel(){
        var scroll = document.documentElement.scrollTop; // 현재 스크롤값
        
		if(window.innerWidth >= 1100){
            if(scroll > winH/2){
                skill.className = 'active';
            }else {
                skill.classList.remove ('active');
            }
        }
        
    }

        
    $(document).ready(function(){
        var i = 1;
        
        var faceAni = setInterval(function(){
            i++;
            $('.me img').attr('src','asset/img/face/face'+i+'.png'); 
            
            if(i == 28){
                clearInterval(faceAni);            
            }            
        },150);         
    }); 
        
   
    
   
}) 