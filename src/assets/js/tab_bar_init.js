function initTab() {
    try {
        console.log('init.test');
        $(".regular").slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
    } catch (error) {
        console.log('error in init tab' + error);
    }
}