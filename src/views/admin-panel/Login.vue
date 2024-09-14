
<script setup>


</script>
<template>

    <div class = "ml-[40%] flex flex-col gap-[50px] justify-end">
    <div class = "w-[50%] h-[50%] border-2">
        <p class = "text-center w-[80%] text-[20px] m-auto">Панель управления Всероссийского информационного агентства МЕСТНОЕ САМОУПРАВЛЕНИЕ</p>
    </div>
    <div class = "flex flex-row">
    <form>
        <div class = "flex flex-col gap-[20px]">
    <label for="name">Логин:</label>
    <label for="password">Пароль:</label>
    </div>
    <div class = "flex flex-col">
    <input type="text" name="name" id="name" required>
    <input type="password" name="password" id="password" required>
    <div class = "bg-primary text-white m-auto py-2 px-6"><a href = "/admin_panel/editor">Отправить</a></div>
    </div>
</form>
</div>
</div>
 
    
</template>