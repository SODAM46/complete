// Nav Scroll
    const navGnb = document.getElementsByClassName("nav-gnb");
    const navGnbLis = navGnb[0].querySelectorAll("ul li");
    const navGnbUl = navGnb[0].querySelector("ul");

    const Section0 = document.getElementById("pf-visual");
    const Section1 = document.getElementById("pf-about");
    const Section2 = document.getElementById("pf-skill");
    const Section3 = document.getElementById("pf-project");

    navGnbLis.forEach(function(Lis, index){
        Lis.addEventListener("click",function(){
            // for(let i=0; i<4; i++){
            //     navGnbLis[i].firstElementChild.style.opacity='0.3'
            // }
            // Lis.firstElementChild.style.opacity = '0.3';  
            let datasetId = index;
            let sectionNum = eval('Section' + datasetId);
            const interNav = 
            setInterval(function(){
                clearInterval(interNav);
                window.scrollTo({left:0,top:sectionNum.offsetTop,behavior: "smooth" });
            },0)                           
            // Lis.firstElementChild.style.opacity = '1';

            if(datasetId == '2'){
                setTimeout(counting,500);
                bln = false;
            }
        });
        
        window.addEventListener("scroll",function(){
            let datasetId = index;
            let sectionNum = eval('Section' + datasetId);

            if(window.scrollY  >= sectionNum.offsetTop-500){
                for(let i=0; i<4; i++){
                    navGnbLis[i].firstElementChild.style.opacity='0.3'
                }  
                Lis.firstElementChild.style.opacity = '1';
        
            }
        
        })
    })







// Skill Counting
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
                self.count += Math.ceil(this.diff / 30);
            }
        
            this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        
            if(this.count < this.target_count) {
                this.timer = setTimeout(function() { self.counter(); }, 30);
            } else {
                clearTimeout(this.timer);
            }
        };        
    
        new numberCounter("counter0", 90);
        new numberCounter("counter1", 80);
        new numberCounter("counter2", 65);
        new numberCounter("counter3", 80);
        new numberCounter("counter4", 80);
        new numberCounter("counter5", 70);
        new numberCounter("counter6", 80);
};

// counting start
const boxOfftop = Section2.offsetTop; // pf-skill.offsetTop
let bln = true;

window.addEventListener("scroll",function(){
    if(window.scrollY >= "1360"){
        if(bln == true){
            bln = false;
            counting();
        } 
    }
})


// slide slick
$('.single-item').slick();