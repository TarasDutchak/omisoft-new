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



        // Social select
        // $('.socialnickname__selected').click(function () {
        //     $('.socialnickname__list').slideToggle();
        // });

        // $('.socialnickname__list ul li').click(function () {
        //     $('.socialnickname__list ul li').removeClass('active');
        //     $(this).addClass('active');
        //     $('.socialnickname__list').slideUp();
        // });


        // const liItems = document.querySelectorAll('.socialnickname__list li');
        // const selectedImage = document.querySelector('.socialnickname__selected img');

        // liItems.forEach(li => {
        //     li.addEventListener('click', () => {
        //         const imgSrc = li.querySelector('img').getAttribute('src');
        //         selectedImage.setAttribute('src', imgSrc);
        //     });
        // });

        $('.socialnickname__selected').click(function () {
            $('.socialnickname__list').slideToggle();
        });
        
        $('.socialnickname__list ul li').click(function () {
            $('.socialnickname__list ul li').removeClass('active');
            $(this).addClass('active');
            $('.socialnickname__list').slideUp();
        });
        
        // Оновлення картинки в socialnickname__selected
        const liItems = document.querySelectorAll('.socialnickname__list li');
        const selectedImage = document.querySelector('.socialnickname__selected img');
        
        liItems.forEach(li => {
            li.addEventListener('click', () => {
                const imgSrc = li.querySelector('img').getAttribute('src');
                const baseName = imgSrc.substring(0, imgSrc.lastIndexOf('.')); // Без розширення
                const extension = imgSrc.substring(imgSrc.lastIndexOf('.'));  // Розширення
                const greenImageSrc = `${baseName}-green${extension}`;        // Додаємо -green
                selectedImage.setAttribute('src', greenImageSrc);
            });
        });
        

    });
}(jQuery)); 