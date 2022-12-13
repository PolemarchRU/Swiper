new Swiper('.intro', {
    navigation: {
        nextEl: '.sw-btn-next',
        prevEl: '.sw-btn-prev'
    },

    simulateTouch: false,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
});