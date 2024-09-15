<script setup>
import MainBlock from './MainBlock.vue'
import ListOfActions from './ListOfActions.vue'
</script>
<template>
    <MainBlock class = "flex h-lvh">
        <ListOfActions></ListOfActions>
        <div class = " h-[100%] w-[100%]">
            <div class ="flex flex-row mt-[5px] ml-[5px]">
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-300 rounded-sm border-2 ml-[3px] mr-[3px] border-neutral-600"><span>Новости</span></a>
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-300 rounded-sm border-2 ml-[3px] mr-[3px] border-neutral-600 "><span>Мнения</span></a>
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-blue-300 rounded-sm border-2 ml-[3px] mr-[3px]  border-blue-500"><span>Интервью</span></a>
                <div class = "flex ml-[50%] mt-[6px]">
                    <button class = 'text-[16px]  w-[180px] rounded-md ml-[10px] h-[48px] bg-primary text-white'>Отображать статтусы</button>
                </div>
            </div>
            <div class = "flex flex-row ml-[5px] mt-[5px]">
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-blue-300 rounded-sm border-2 ml-[3px] mr-[3px]  border-blue-500"><span>Изменение</span></a>
                </div>
    
            
            <div></div>
            <div></div>
            <div></div>
        </div>
    </MainBlock>
    </template>