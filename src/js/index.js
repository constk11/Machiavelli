$('g').hover(function () {
        let classname = $(this).attr('class');  
        $('.philosophers .' + classname).fadeIn(300);        
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
        $('.philosophers .' + classname).hide();
    }
);