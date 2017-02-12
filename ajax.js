$(document).ready(function(){
    $("#submit").click(function(){
        $.ajax({
            type: 'POST',
            url: '',
            contentType: 'application/json; charset=utf-8'
            success: function(result) {
                $.each(result, function(_, one_url) {
                    $.each(result, function(result){
                        $('<a/>', {href: one_url})
                            .appendTo('#results');
                    });
                });
            };
            
        });
        
        data: JSON.stringify({'url': '#url'}),
    });
});