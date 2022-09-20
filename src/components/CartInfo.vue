<template>
    <div class="cart-info col-10">
        <h2>總數共有 {{ currentAmount }} 項商品</h2>
        <h2>總金額為 {{ currentTotal }} 元整</h2>
    </div>
</template>
<script>
    export default {
        computed: {
            currentAmount() {
                return this.$store.getters.currentAmountTotal;
            },
            currentTotal() {
                return this.$store.getters.currentPriceTotal;
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../assets/scss/main.scss";

    .cart-info {
        text-align: center;
        margin: 30px auto;
        padding: 15px 0;
        color: $darkPink;
        border: solid 1px $darkPink;
    }

    .cart-info h2 {
        font-size: 26px;
        margin: 5px 0;
    }

    @media screen and (max-width: 768px) {
        .cart-info h2 {
            font-size: 21px;
        }
    }
</style>