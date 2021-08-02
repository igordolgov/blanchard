$(function() {
    $(".submenu").hide();//Прячем подменю
    $a = $(".menu__item a");
    $a.on("click", function(event) { //при клике на меню...
        event.preventDefault();//отключаем поведение по умолчанию
        $a.not(this).next().fadeOut("fast");//прячем другие подменю
        $(this).next().fadeToggle("fast");//показать нужное подменю
        $(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down");//меняем стрелку (справа от меню) вверх или вниз
    });
    
    $(document).mouseup(function (e) { //кликаем по веб-документу
        var div = $(".menu__item a");
        if (!div.is(e.target) //если клик был не по меню
            && div.has(e.target).length === 0) 
            { //и не по его дочерним элементам
            $(".submenu").fadeOut("fast"); //скрываем подменю
            $(this).find("i.fa").removeClass("fa-angle-up").addClass("fa-angle-down");
        }
    });
});