
// const slideLength = $('.list-box').length;
// let currentIdx = 0;
// let currentNum = 0;




// $('.right-arrow').on("click",function(){ // next
//     $('.list-box').removeClass('active');
//     currentNum++;   

//     slideMove(currentNum);      
//     if(currentIdx > slideLength-1){
//         currentNum=0;
//         // return;
//     }
//     slideMove(currentNum);   
// })



// $('.left-arrow').on("click",function(){ // prev
//     currentNum--;
//     $('.list-box').removeClass('active');
//     console.log('prev');
//     slideMove(currentNum);
    
// })

// function slideMove(currentNum){
//     $('.list-box').eq(currentIdx).fadeToggle('slow');
//     currentIdx = currentNum;
//     console.log('num = ' + currentNum);
//     console.log('idx = '+currentIdx);
// }

$('.single-item').slick();