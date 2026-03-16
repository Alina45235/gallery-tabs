/*====================== ПЕРВОЕ ЗАДАНИЕ ======================== */
const btnALL = document.querySelectorAll(".btn"),
  content = document.querySelector(".content"),
  contALL = document.querySelectorAll('.cont');


  function activeContent(index) {
    contALL.forEach((cont, i) => {
        if(i === index)
            cont.classList.remove('hidden')
        else
            cont.classList.add('hidden')
    });

    btnALL.forEach((btn, i) => {
        if(i === index)
            btn.classList.add('active')
        else
            btn.classList.remove('active')
    });

    btnALL.forEach((btn, i) => {
        btn.addEventListener('click', ()=> {
            activeContent(i)
        })
    })


  }

activeContent(0)

/*====================== ВТОРОЕ ЗАДАНИЕ ===================================== */
const btn_fruits = document.querySelectorAll('.btn_two'),
content_two = document.querySelector(".content_two"),
cont_fruits_ALL = document.querySelectorAll('.cont_fruits');


  function active_fruit(index) {
    cont_fruits_ALL.forEach((cont, i) => {
        if(i === index)
            cont.classList.remove('hidden')
        else
            cont.classList.add('hidden')
    });

    btn_fruits.forEach((btn, i) => {
        if(i === index)
            btn.classList.add('active')
        else
            btn.classList.remove('active')
    });

    btn_fruits.forEach((btn, i) => {
        btn.addEventListener('click', ()=> {
            active_fruit(i)
        })
    })


  }

active_fruit(0)


/*====================== ТРЕТЬЕ ЗАДАНИЕ ===================================== */
const pictures = document.querySelectorAll('.block_gal picture');
const prevBtn = document.querySelectorAll('.btn_gal')[0];
const nextBtn = document.querySelectorAll('.btn_gal')[1];
let currentIndex = 0;

//  скрываем все изображения кроме первого
pictures.forEach((pic, index) => {
    if (index !== 0) {
        pic.style.display = 'none';
    }
});

// Функция обновления кнопок
function updateButtons() {
    // Если первый слайд - блокируем кнопку PREV
    if (currentIndex === 0) {
        prevBtn.disabled = true;
        prevBtn.style.opacity = '0.5';
        prevBtn.style.cursor = 'not-allowed';
    } else {
        prevBtn.disabled = false;
        prevBtn.style.opacity = '1';
        prevBtn.style.cursor = 'pointer';
    }
    
    // Если последний слайд - блокируем кнопку NEXT
    if (currentIndex === pictures.length - 1) {
        nextBtn.disabled = true;
        nextBtn.style.opacity = '0.5';
        nextBtn.style.cursor = 'not-allowed';
    } else {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
        nextBtn.style.cursor = 'pointer';
    }
}

// Функция переключения изображения
function showPicture(index) {
    pictures.forEach(pic => {
        pic.style.display = 'none';
    });
    pictures[index].style.display = 'flex'; 
}

// Обработчик для кнопки PREV
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showPicture(currentIndex);
        updateButtons();
    }
});

// Обработчик для кнопки NEXT
nextBtn.addEventListener('click', () => {
    if (currentIndex < pictures.length - 1) {
        currentIndex++;
        showPicture(currentIndex);
        updateButtons();
    }
});


updateButtons();