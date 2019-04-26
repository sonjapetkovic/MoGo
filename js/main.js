


$(document).ready(function(){
    
    $('.counter-up').counterUp({
                delay: 10,
                time: 1000
            });
    
    
    if($('.owl-carousel').length>0){
        
        //slider1
        $('.slider1').owlCarousel({
            items:1,
            nav:true,
            dots:false,
            loop:true,
            navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>']
        });
        
        
        
    }
    
    //slider2
     if($('.owl-carousel').length>0){
        
       
        $('.slider2').owlCarousel({
            items:1,
            nav:true,
            dots:false,
            loop:true,
            navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>']
        });
        
        
        
    }
    
    
    
});
//document ready end