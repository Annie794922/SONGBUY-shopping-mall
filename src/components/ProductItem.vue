<template>
    <div class="product-box">
        <div class="picture">
            <img :src="picture" :alt="name">
        </div>
        <h4 class="name">{{ name }}</h4>
        <small class="price">NTD {{ price }}</small>
        <button class="details" @click="itemDetails(id)">詳情</button>
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
            'quantity': Number,
        },
        methods: {
            remind() {
                alert('頁面正在製作中，謝謝。Please be informed that the page is building. Thank you.');
                return;
            },
            itemDetails(id) {
                const itemInfo = {
                    productId: this.id,
                    category: this.category
                };
                this.$store.commit('selectedItem', itemInfo.productId);
                this.$store.commit('suggestedItems', itemInfo);
                // console.log(itemInfo);
                this.$router.push(`/product-details/${id}`);
                return;
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../assets/scss/main.scss";

    .product-box {
        width: 190px;
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

    // 為了不讓RWD的lg和md尺寸之間部分畫面空白過多，稍微調整品項大小
    @media screen and (max-width: 992px) and (min-width: 850px) {
        .product-box {
            width: 250px;
            margin: 10px 5px;
        }

        .picture {
            width: 155px;
            height: 155px;
        }
    }
</style>