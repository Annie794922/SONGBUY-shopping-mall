<template>
    <div class="container-fluid">
        <div class="row">
            <div class="page-block col-9">
                <div class="page-title">
                    <slot name="title"></slot>
                </div>
                <div class="page-content">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>    
    </div>
</template>
<style scoped lang="scss">
    @import "../assets/scss/main.scss";

    .page-block {
        background-color: $white;
        border-radius: 30px;
        margin: 123px auto 30px auto;
        padding: 0; /* 取消預設值 */
    }    

    .page-title {
        color: $darkPink;
        background-color: $lightPink;
        border-radius: 30px 30px 0 0;
    }
</style>