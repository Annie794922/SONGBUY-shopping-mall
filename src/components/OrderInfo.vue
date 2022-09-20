<template>
    <div class="order-info col-10">
        <h2>訂單編號 {{ orderNo }}</h2>
        <h2>總數共有 {{ orderAmount }} 項商品</h2>
        <h2>總金額為 {{ orderTotal }} 元整</h2>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                orderNo: this.$store.state.newOrderInfo.orderNo,
                orderAmount: this.$store.state.newOrderInfo.productsAmount,
                orderTotal: this.$store.state.newOrderInfo.productsTotal
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../assets/scss/main.scss";

    .order-info {
        text-align: center;
        margin: 30px auto;
        padding: 15px 0;
        color: $darkPink;
        border: solid 1px $darkPink;
    }

    .order-info h2 {
        font-size: 26px;
        margin: 5px 0;
    }

    @media screen and (max-width: 768px) {
        .order-info h2 {
            font-size: 21px;
        }
    }
</style>