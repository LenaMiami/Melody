$(document).ready(function () {
    var currentFloor = 2; // переменная с текущим этажом
    var floorPath =  $(".home-image path"); // каждый отдельный этаж в SVG
    var counterUp = $(".counter-up"); /* кнопка увеличения этажа */
    var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */

    // функция при наведении мышью на этаж
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // записываем значение этажа в сётчик
    });

    counterUp.on("click", function () { // отслеживаем клик по кнопке вверх
        if (currentFloor < 18) { // проверяем значение этажа не должно быть больше 18
            currentFloor++; // прибавляем один этаж
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2,
            useGroupping: false}); // форматируем переменную с этажом, чтобы было 01, а не 1
            $(".counter").text(usCurrentFloor); // записываем значение этажа в сётчик
            floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        }
    });

    counterDown.on("click", function () { // отслеживаем клик по кнопке вниз
        if (currentFloor > 2) { // проверяем значение этажа, не должно быть меншьше 2
            currentFloor--; // убавляем один этаж
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2,
            useGroupping: false}); // форматируем переменную с этажом, чтобы было 01, а не 1
            $(".counter").text(usCurrentFloor); // записываем значение этажа в сётчик
            floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        }
    });
});