ymaps.ready(init); 
 
        function init() { 
            var myMap = new ymaps.Map("map", { 
                center: [52.0361, 29.2619], // Координаты центра карты 
                zoom: 10 // Масштаб карты 
            }); 
 
            // Добавление метки на карту 
            var myPlacemark = new ymaps.Placemark([52.0361, 29.2619], { 
                hintContent: 'Mozyr!', // Всплывающая подсказка 
                balloonContent: 'Tachki center' // Содержимое балуна (всплывающей подсказки) 
            }); 
 
            myMap.geoObjects.add(myPlacemark); 
        } 


