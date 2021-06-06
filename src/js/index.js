$('g').hover(function () {
        let classname = $(this).attr('class');  
        $('.philosopher.' + classname).fadeIn(300);        
    }, function () {
        let classname = $(this).attr('class');        
        $('div.' + classname).hover(function () {
                $(this).addClass('hover');          
                $(this).show();       
            }, function () {
                $(this).hide();       
                $(this).removeClass('hover');
            }
        );        
        $('.philosopher.' + classname).hide();
    }
);