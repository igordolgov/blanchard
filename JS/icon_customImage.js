ymaps.ready(function () {
    const myMap = new ymaps.Map('map', {
            center: [55.758463, 37.601079],
            zoom: 14,
            controls: []
        });

    const myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {},
    {
        iconLayout: 'default#image',
        iconImageHref: 'img/Subtract.svg',
        iconImageSize: [28, 40],
        iconImageOffset: [-29, -38]
    });

    myMap.geoObjects.add(myPlacemark);
});