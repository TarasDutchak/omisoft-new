(function ($) {
    $(document).ready(function () {

        $('.ccontact-section__tabheader button').click(function () {
            // Видаляємо клас active з усіх кнопок і додаємо до поточної
            $('.ccontact-section__tabheader button').removeClass('active');
            $(this).addClass('active');
        
            // Видаляємо клас "second" з таба
            $('.ccontact-section__tabbody').removeClass('second');
            
            // Отримуємо індекс натиснутої кнопки
            var index = $(this).index();
        
            // Показуємо відповідний таб-контент і приховуємо інші
            $('.ccontact-section__tabcontent').hide().eq(index).show();
        
            // Якщо вибрано другий таб (індекс 1), додаємо клас "second"
            if (index === 1) {
                $('.ccontact-section__tabbody').addClass('second');
            }
        });
        
        // Спочатку показуємо перший таб і ховаємо інші
        $('.ccontact-section__tabcontent').hide().first().show();
        



    });
}(jQuery)); 