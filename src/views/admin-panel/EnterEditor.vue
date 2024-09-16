
<script setup>
import ListOfActions from './ListOfActions'
</script>

<template>
    <MainBlock class = "flex h-lvh">
        <ListOfActions></ListOfActions>
        <div class = " h-[100%] w-[100%]">
            <div class = "w-[70%] mt-[30px] text-[16px] m-auto text-center px-6 py-8 font-medium bg-blue-300 text-primary">Здравствуйте, user name! Вы находитесь в разделе для редакторов и авторов новостей.</div>
            <div class = " flex flex-row gap-[10px]">
            <a class = "flex-row rounded-md bg-primary text-[16px] ml-[15%] mt-9 text-white w-[110px] px-4 py-4">Новости</a>
            </div>
            <div class = " flex flex-row gap-[10px] ml-[15%]">
                <a class = "bg-primary text-[16px] rounded-md mt-2 text-white w-[110px] px-4 py-4">Мнения</a>
                <a class = "bg-primary text-[16px] rounded-md mt-2 text-white w-[110px] px-4 py-4">Регионы</a>
            </div>
            <div class = " flex flex-row gap-[10px] ml-[15%]">
                <a class = "bg-primary text-[16px] rounded-md mt-2 text-white w-[110px] px-4 py-4">Видео</a>
                <a class = "bg-primary text-[16px] rounded-md mt-2 text-white w-[110px] px-4 py-4">Интервью</a>
                <a class = "bg-primary text-[16px] rounded-md mt-2 text-white w-[110px] px-4 py-4">Персона</a>
                <a class = "bg-primary text-[16px] rounded-md mt-2 ml-[45%] text-white w-[110px] px-4 py-4">Настройки</a>
            </div>
        </div>

    </MainBlock>
</template>