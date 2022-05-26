let centerMap1 = [55.68337412238402,37.65972220898437],
    centerMap2 = [59.95987231426033,30.280994966270462];

function initMap() {
    let map = new ymaps.Map('yandex-map', {
        center: centerMap1,
        zoom: 17
    })
    let map2 = new ymaps.Map('yandex-map-sp', {
        center: centerMap2,
        zoom: 17
    })

    let placemark = new ymaps.Placemark(centerMap1, {},{
        iconLayout: 'default#image',
        iconImageHref: './img/map_marker.png',
        iconImageSize: [90, 90],
        iconImageOffset: [-30, -85]
    });

    let placemark2 = new ymaps.Placemark(centerMap2, {},{
        iconLayout: 'default#image',
        iconImageHref: './img/map_marker.png',
        iconImageSize: [90, 90],
        iconImageOffset: [-30, -85]
    });


    map.controls.remove('geolocationControl'); 
    map.controls.remove('searchControl'); 
    map.controls.remove('trafficControl'); 
    map.controls.remove('typeSelector'); 
    //map.controls.remove('fullscreenControl'); 
    map.controls.remove('zoomControl'); 
    //map.controls.remove('rulerControl'); 
    map.behaviors.disable(['scrollZoom']);
    map.geoObjects.add(placemark);
    map2.geoObjects.add(placemark2);
    map2.controls.remove('geolocationControl'); // удаляем геолокацию
    map2.controls.remove('searchControl'); // удаляем поиск
    map2.controls.remove('trafficControl'); // удаляем контроль трафика
    map2.controls.remove('typeSelector'); // удаляем тип
    //map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map2.controls.remove('zoomControl'); // удаляем контрол зуммирования
    //map.controls.remove('rulerControl'); // удаляем контрол правил
    map2.behaviors.disable(['scrollZoom']);  

}

ymaps.ready(initMap);