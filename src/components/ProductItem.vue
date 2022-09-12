<template>
    <div class="product-box">
        <div class="picture">
            <img :src="picture" :alt="name">
        </div>
        <h4 class="name">{{ name }}</h4>
        <small class="price">NTD {{ price }}</small>
        <button class="details" @click="remind()">詳情</button>
    </div>
</template>
<script>
    export default {
        props: {
            'id': Number,
            'name': String,
            'price': Number,
            'category': String,
            'description': String,
            'picture': String,
        },
        methods: {
            remind() {
                alert('頁面正在製作中，謝謝。Please be informed that the page is building. Thank you.');
                return;
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../assets/scss/main.scss";

    .product-box {
        width: 200px;
        border: solid 1px $gray;
        padding: 15px 0;
        margin: 10px 15px;
    }

    .picture {
        width: 120px;
        height: 120px;
        margin: 0 auto;
    }

    .picture img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .name {
        font-size: 22px;
        text-align: center;
        margin: 10px auto 5px auto;
    }

    .price {
        display: block;
        text-align: center;
    }

    .details {
        display: block;
        margin: 5px auto;
        padding: 10px 20px;
        border: transparent;
        border-radius: 10px;
        color: $darkPink;
        background-color: $lightPink;
    }

    .details:hover {
        color: $white;
        background-color: $darkPink;
        transition: 0.5s;
    }
</style>