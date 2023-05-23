$(function(){
    $('header').load("header.html"); // menu 불러오기

    start();
    function start(){
        $('#main .pets').addClass('active');
    }  
    
    var wCroll = '';
    var exCroll = $('#explain').offset().top;
    var serviceCroll = $('#service').offset().top;
    var bln = true;

// visual 클릭 이벤트
    $('#main .txt strong').on('click',function(){
        $('html').animate({
            scrollTop : exCroll
        })
    });

// 스크롤 애니메이션
    $(window).on('scroll',function(){          
        wCroll =  $(window).scrollTop();

        if(exCroll/2 < wCroll){
            $('#explain .right').addClass('active'); 
                                 
        }else{
            $('#explain .right').removeClass('active');
        };
        if(serviceCroll-100<wCroll){
            $('#explain .right').removeClass('active');
        };   

        if(serviceCroll == wCroll){            
            if(bln == true){
                bln = false
                counting(); // 카운팅 시작
            } 
            
            $('#service figure').addClass('active')

            for(var i=0; i < $('#service figure').length; i++){
                $('#service figure figcaption').eq(i).css({
                    transitionDelay : 0 + '.' + i * 3 + 's'
                })
            }
        };

        $(function(){
            var move = 0

             $('section').on('mousewheel',function(e){            
                var delta = e.originalEvent.wheelDelta;
                
                if(delta < 0 ){ // 내림-120                   
                    move = $(this).next().offset().top;
                }else{                    
                    move = $(this).prev().offset().top;
                }
     
                 $('html').stop().animate({
                     scrollTop : move
                 },1000);                       
            });
        });
        
    });

    // 카운팅
    function counting(){
        function numberCounter(target_frame, target_number) {
            this.count = 0; this.diff = 0;
            this.target_count = parseInt(target_number);
            this.target_frame = document.getElementById(target_frame);
            this.timer = null;
            this.counter();
            };
        
            numberCounter.prototype.counter = function() {
                var self = this;
                this.diff = this.target_count - this.count;
            
                if(this.diff > 0) {
                    self.count += Math.ceil(this.diff / 5);
                }
            
                this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            
                if(this.count < this.target_count) {
                    this.timer = setTimeout(function() { self.counter(); }, 50);
                } else {
                    clearTimeout(this.timer);
                }
            };        
        
            new numberCounter("counter1", 45678);
            new numberCounter("counter2", 56789);
    };

    // 메뉴
setTimeout(function(){
    $('header .header .menu').on('click',function(e){
        $('header .header nav').addClass('active');
    });
    $('.header nav p').on('click',function(){
        $('header nav').removeClass('active');
    });
},500)
    
    $('header .header .menu').on('click',function(e){
        
        $('header .header nav').addClass('active');
    });
    
    
    //  다운로드 팝업창
    $('#download .top a').on('click',function(e){
        e.preventDefault();
        $('#download #popup').addClass('active')
    });
    $('.message .close').on('click',function(){
        $('#download #popup').removeClass('active');
        $('.send ul').removeClass('active');
    });

    $('.send button').eq(0).on('click',function(){   
        var phoneNum = $('.send input:text[id="number"]').val();
        var reg = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/;
        if(reg.test(phoneNum)){
            if($('.send input:checkbox[id="agree"]').is(':checked')){
                alert('문자가 발송되었습니다.');
            }else{
                alert('개인정보 수집 및 이용 동의에 체크해주세요.');
            }
        }else{
            alert('(-)제외 정확한 휴대폰번호를 입력해주세요')
        }
           
    })
    $('.send button').eq(1).on('click',function(){
        $('.send ul').toggleClass('active');
    })

})
