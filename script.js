document.addEventListener('DOMContentLoaded', function() {
    const showButtonLinks = document.querySelectorAll('.script1');
    const floatingButton = document.getElementById('floating-button');
    let isButtonVisible = false;

    // Функция для отображения кнопки
    function showButton() {
        floatingButton.style.display = 'block';
        isButtonVisible = true;
    }

    // Функция для скрытия кнопки
    function hideButton() {
        floatingButton.style.display = 'none';
        isButtonVisible = false;
    }

    // Обработчик нажатия на кнопку
    floatingButton.addEventListener('click', function() {
        hideButton();
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY === 0) {
          hideButton();
        }
    });

    showButtonLinks.forEach(link => {
        link.addEventListener('click', function(event) {
          
           if(!isButtonVisible)
             showButton();
          
          // Проверяем, есть ли у ссылки атрибут href с якорем
          const href = link.getAttribute('href');
          if (href && href.startsWith('#')) {
            // Если это якорь, переходим по нему вручную, если это не якорь, ничего не делаем.
            document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
            event.preventDefault();
          }
          
        });
    });
    
    floatingButton.addEventListener('click',function(){
        window.scrollTo(
            ({
                top: 0,
                behavior: 'smooth'
              }));
    })

}); 

document.addEventListener('DOMContentLoaded', 
    function() {
        const mainImg =
        document.getElementById('mainImg');
        const minImg =
        document.querySelectorAll('.minCard');

        minImg.forEach(minImg=> {
            minImg.addEventListener('click',
                function() {
                    const mainSrc =
                    this.getAttribute('data-main-src');
                    mainImg.src = mainSrc;
                }
            )
        })
    }
)

document.addEventListener('DOMContentLoaded', function(){
    const modal = document.getElementById('modal');
    const openModal = document.getElementById('openModal');
    const closeModal = document.querySelectorAll('.closeModal')

    openModal.addEventListener('click',function(){
        modal.style.display = 'flex';
    })

    closeModal.forEach(closeModal => {closeModal.addEventListener('click', function(){
        modal.style.display = 'none';
    })})

    window.addEventListener('click', function(event){
        if (event.target==modal) modal.style.display = 'none';
    })
})

document.addEventListener('DOMContentLoaded', function(){
    const modal = document.getElementById('modal2');
    const openModal = document.getElementById('openModal2');
    const closeModal = document.querySelectorAll('.closeModal')

    openModal.addEventListener('click',function(){
        modal.style.display = 'flex';
    })

    closeModal.forEach(closeModal => {closeModal.addEventListener('click', function(){
        modal.style.display = 'none';
    })})

    window.addEventListener('click', function(event){
        if (event.target==modal) modal.style.display = 'none';
    })
})

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    const scrollPosition = window.pageYOffset;
    const stickytreshold = 20;

    if (scrollPosition>stickytreshold){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
})