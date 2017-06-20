$(document).ready(function(){

    // The document is loaded so we can work with it.

    var heartButton = $('.Heart');

    heartButton.click(function(){
        $(this).toggleClass('fa-heart-o')
        $(this).toggleClass('Heart-Red fa-heart')
    })

})