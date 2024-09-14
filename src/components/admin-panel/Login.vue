<script setup>

</script>
<template>
  <div class = "flex flex-col gap-[60px]"></div>
  <div>
    <p>Панель управления Всероссийского информационного агентства МЕСТНОЕ САМОУПРАВЛЕНИЕ</p>
  </div>
  <div class = "flex flex-row">
    <form action="" method="get">
      <p>
        <label for="name">Введите имя:</label>
        <input type="text" name="name" id="name" required>
      </p>
      <p>
        <label for="password">Введите email:</label>
        <input type="password" name="email" id="email" required>
      </p>
      <button type="submit">Отправить</button>
    </form>

  </div>

</template>