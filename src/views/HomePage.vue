<template>
   <div class="home-page">
      <h1 class="title">
         Приветствую Вас, мой дорогой посетитель :)
      </h1>
      <hr>
      <p>
         Вы находитесь на главной странице сайта-портфолио,
         не спешите уходить сразу, я старался сделать дружественный дизайн,
         чтобы можно было удобно пользоваться интерактивным интерфейсом.
      </p>

      <p>
         Зтот интернет-ресурс еще не закончен, развивается,
         а информацию и функционал я публикую по мере нахождения свободного времени.
         <br>
         Буду ОЧЕНЬ благодарен за <router-link to="/contacts" class="link">фидбэк</router-link>
         c Вашими впечатлениями, замечаниями и пожеланиями.
      </p>

      <p>
         Пара слов о текущем контенте:
      </p>

      <ul>
         <li>
            Создано используя Vue.js v2.6.11 (vuex, router)
         </li>
         <li>
            В разделе "Проекты" ссылки на созданные мной реальные web-приложения,
            сайты или репозитории
         </li>
         <li>
            Вся графика векторная (кроме моей фотографии)
         </li>
         <li>
            В меню настроек можно выбрать удобную для себя цветовую схему
         </li>
      </ul>
   </div>
</template>

<script>
    export default {
        name: "HomePage"
    }
</script>
