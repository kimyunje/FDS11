// jQuery를 활용한 인터렉션 ...
var item = $('.menu-item');
var subItem = $('.sub-menu a');
var tab = $('.tab');
var list = $('.related-list')
item.attr('tabindex', '0');
tab.attr('tabindex', '0');
subItem.attr("class", 'fas fa-angle-left');

// 메인 메뉴를 위한 함수
item.on('mouseover focusin', function(){
    item.removeClass('menu-act');
    $(this).addClass('menu-act');
});

subItem.hover(function(){
    $(this).toggleClass('fas fa-angle-right');
})

// addClass 안의 값은 . 찍지 말것.
// this는 item을 가르킨다. 즉, mouseove, focusin이 된 menu-item을 찾는 것.

// 탭 메뉴를 위한 함수
tab.on('click focusin', function(){
    $(this).parent().siblings().removeClass('tab-act');
    $(this).parent().addClass('tab-act');
});
// this는 클릭한 tab
// parent는 부모요소

// list.hover(function(){
//     $(this).toggleClass('related-act');
// });

//관련사이트 애니메이션을 위한 함수
list.on('mouseover focusin',function(){
    $(this).addClass('related-act')
});
list.on('mouseout focusout',function(){
    $(this).removeClass('related-act')
});
