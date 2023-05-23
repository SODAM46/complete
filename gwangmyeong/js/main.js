// visual rolling
const imgwidth=1920;
let currentNum=0;

const autoSlide=setInterval(rolling,3000);


function rolling(){ // visual Img
    currentNum++;
    if(currentNum>2){
        currentNum=0;
    }
    document.querySelector('.slideImg').style.left = -(imgwidth*currentNum)+'px';
    document.querySelector('.slideTxt').style.left = -(imgwidth*currentNum)+'px';
}




// gnb active

const gnbName = document.querySelectorAll('.gnb > li > a');
const gnbDepth = document.querySelectorAll('.gnb_depth');
const depthLength = gnbDepth.length



gnbName.forEach(function(value,gnbIdx){

    gnbName[gnbIdx].addEventListener("mouseover",function(e){
        e.preventDefault();
        for(let i=0; i < depthLength; i++){
            gnbDepth[i].classList.remove('active');
        };
        gnbDepth[gnbIdx].className += ' active';
    });

    gnbDepth[gnbIdx].addEventListener("mouseleave",function(){
        gnbDepth[gnbIdx].classList.remove('active');
    });   
  })


  function tick(){
    $('.newsList li:first').slideUp(
        function(){
            $(this).appendTo($('.newsList')).slideDown();
        });
   }
   setInterval(function(){ tick() }, 3500);
