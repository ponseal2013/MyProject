//<script>

// Получаем узел BODY и внедряем элемент кнопки

var b = document.body || document.getElementsByTagName('body')[0];
b.insertAdjacentHTML('beforeend', '<button onclick="topFunction()" id="toTop" title="Вверх"><img width="32" height="32" alt="" src="./img/icons/upload.png"></button>');

// Добавляем стили к нашей кнопке

document.getElementById("toTop").setAttribute("style", "display: none; position: fixed; bottom: 18px; right: 18px; z-index: 1000;  padding: 0; border: 0; outline: none; backgroud: transparent; cursor: pointer;");

// Плавность прокрутки

document.documentElement.setAttribute("style", "scroll-behavior:smooth;");

// Обработчик события прокрутки страницы

window.onscroll = function() { scrollFunction() };

// Функция, вызываемая в момент прокрутки страницы

function scrollFunction() {
   // Выбираем из DOM нашу кнопку
   let t = document.getElementById("toTop");
   // Условия координат скрола
   if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480) {
      t.style.display = "block";
   } else {
      t.style.display = "none";
   }
}

function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}
//</script>