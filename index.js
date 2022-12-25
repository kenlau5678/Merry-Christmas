//refer to https://codepen.io/sashatran/pen/aBLBxd

$('.trees').mouseover(function() {
    console.log($(this).children('.bauble'));
    $(this).find('.bauble').addClass('light');

})

$('.trees').mouseout(function() {
    $(this).find('.bauble').removeClass('light');
})