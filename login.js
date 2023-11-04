$(document).ready(function(){
    $("#showLoginForm").click(function(){
        $(".loginn").show();
    });

    $(".close").click(function(){
        $(".loginn").hide();
    });

    $(".loginn form").submit(function(e){
        e.preventDefault();

        // Add your login logic here
        var email = $(this).find('input[type="text"]').val();
        var password = $(this).find('input[type="password"]').val();

    });
});
