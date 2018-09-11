// jQuery를 활용한 인터렉션 ...
var item = $('.menu-item');
var subItem = $('.sub-menu a');
item.attr('tabindex', '0');
subItem.attr("class", 'fas fa-angle-left');

item.on('mouseover focusin', function(){
    item.removeClass('menu-act');
    $(this).addClass('menu-act');
});

subItem.hover(function(){
    $(this).toggleClass('fas fa-angle-right');
})

// addClass 안의 값은 . 찍지 말것.
// this는 item을 가르킨다. 즉, mouseove, focusin이 된 menu-item을 찾는 것.