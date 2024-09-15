<script setup>
</script>
<template>
    <div class = "flex flex-col gap-[10px]">
        <div class = "flex flex-row gap-[10px]">
            <div>
            <label for = "publish"><input type = "checkbox" id = "publish" name = "pubslish">Опубликованные</label>
            </div>
            <div>
            <label for = "publish"><input type = "checkbox" id = "wait" name = "wait">Ожидающие публикации</label>
            </div>
            <div>
            <label for = "publish"><input type = "checkbox" id = "wait" name = "wait">Снятые с публикации</label>
            </div>
        </div>
        <div class = "flex flex-row">
            <div>
            <label for = "publish"><input type = "checkbox" id = "publish" name = "pubslish">Редактируются</label>
            </div>
            <div>
            <label for = "publish"><input type = "checkbox" id = "publish" name = "pubslish">Ожидают редактирования</label>
            </div>
            <div>
            <label for = "publish"><input type = "checkbox" id = "publish" name = "pubslish">Заблокированные</label>
            </div>
        </div>
</div>
</template>