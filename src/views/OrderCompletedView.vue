<template>
    <div class="container-fluid">
        <div class="row">
            <PageContent>
                <template v-slot:title>
                    <h1 class="page-title">訂單成立｜COMPLETED</h1>
                </template>
                <template v-slot:content>
                    <OrderInfo />
                    <!-- 不可在有v-slot的template上使用v-for -->
                    <template v-for="items in productsList">
                        <div class="order-details">
                            <OrderItem v-bind="items">
                                <template v-slot:amount>
                                    <span class="purchase-number">{{ items.number }}</span>
                                </template>
                            </OrderItem>
                        </div>
                    </template>
                    <button class="rebuy-button" @click="goToProductsList()">再買一次</button>
                </template>
            </PageContent>
        </div>    
    </div>
</template>
<script>
    import PageContent from "../components/PageContent.vue";
    import OrderInfo from "../components/OrderInfo.vue";
    import OrderItem from "../components/CartItem.vue";

    export default {
        components: {
            PageContent,
            OrderInfo,
            OrderItem
        },
        data() {
            return {
                productsList: this.$store.state.newOrderInfo.productsList
            }
        },
        methods: {
            resetClickedButton() {
                this.$store.commit('navbarButtonNo', 4);
                return;
            },
            goToProductsList() {
                this.$router.push('/products');
                return;
            }
        },
        created() {
            this.resetClickedButton();
        }
    }
</script>
<style scoped lang="scss">
    @import "../assets/scss/main.scss";

    .page-title {
        font-size: 28px;
        font-weight: bold;
        text-align: center;
        padding: 25px 0;
    }

    @media screen and (max-width: 768px) {
        .page-title {
            font-size: 24px;
        }
    }

    .order-details {
        margin: 20px 0;
    }

    .rebuy-button {
        display: block;
        margin: 40px auto;
        padding: 10px 40px;
        color: $darkPink;
        background-color: $lightPink;
        border: none;
        border-radius: 5px;
    }

    .rebuy-button:hover {
        color: $white;
        background-color: $darkPink;
        transition: 0.5s;
    }
</style>