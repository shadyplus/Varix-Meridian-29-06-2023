jQuery(document).ready(function($) {
    $('.toform').click(function() {
        var $form = $("form").offset().top;
        $("html, body").animate({scrollTop : $form}, 666);
        return false;
    });
})