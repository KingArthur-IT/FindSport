$(document).ready(function () {
    $('#reviews-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('#reviews-slider-left'),
        nextArrow: $('#reviews-slider-right'),
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 400,
                settings: "unslick"
            }
        ]    
    });
    $('#case-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.cases-slider-btn-left'),
        nextArrow: $('.cases-slider-btn-right'),
        responsive: [
            {
                breakpoint: 400,
                settings: "unslick"
            }
        ]    
    });
})

//При изменении размеров окна отрегулировать меню
$(window).resize(function () {
    let sliders = document.getElementsByClassName('slick-initialized');
    if (sliders.length == 0 && $(window).width() > 400) {
        location.reload();
    }
});

function demoLockup() {
    Swal.fire({
        icon: 'info',
        title: 'Это демо-версия сайта',
        text: 'Этот сайт лишь "лицевая" часть некоторого проекта, поэтому в нем ограничены некоторые функции. Серверная часть требует работы back-end разработчика.'
    })
}

$(document).ready(function () { 
    $('.btn').on('click', function () {
        demoLockup();
    });
})