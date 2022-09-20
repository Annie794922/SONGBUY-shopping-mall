<template>
    <div class="container-fluid">
        <div class="row">
            <PageContent>
                <template v-slot:title>
                    <h1 class="page-title">購物車｜CART</h1>
                </template>
                <template v-slot:content v-if="this.$store.state.cartList.length === 0">
                    <div class="emptyCart-content">
                        目前購物車還是空的喔！<br>
                        請到商品區選購商品，謝謝。<br>
                        <br>
                        The shopping-cart is empty.<br>
                        Please go to products area and add some goods into your cart.<br>
                        Thank you.
                        <button class="continue-button" @click="goToProductsList()">CONTINUE →</button>
                    </div>
                </template>
                <template v-slot:content v-if="this.$store.state.cartList.length > 0">
                    <CartInfo></CartInfo>
                    <!-- 不可在有v-slot的template上使用v-for -->
                    <template v-for="items in cartGoods">
                        <div class="cart-details">
                            <CartItem v-bind="items">
                                <template v-slot:amount>
                                    <div class="amount-selector">
                                        <button @click="editNumber('minus', items)">－</button>
                                        <span class="inCart-number">{{ items.number }}</span>
                                        <button @click="editNumber('add', items)">＋</button>
                                    </div>
                                </template>
                                <template v-slot:delete>
                                    <button class="delete-button" @click="removeItem(items)">X</button>
                                </template>
                            </CartItem>
                        </div>
                    </template>
                    <button class="order-button" @click="check()">送出訂單</button>
                </template>
            </PageContent>
        </div>    
    </div>
</template>
<script>
    import PageContent from "../components/PageContent.vue";
    import CartInfo from "../components/CartInfo.vue";
    import CartItem from "../components/CartItem.vue";

    export default {
        components: {
            PageContent,
            CartInfo,
            CartItem
        },
        data() {
            return {
                cartGoods: this.$store.state.cartList,
            }
        },
        methods: {
            goToProductsList() {
                this.$router.push('/products');
                return;
            },
            editNumber(type, product) {
                const revisedNum = {
                    type: type,
                    product: product
                }
                this.$store.commit('editItemNumber', revisedNum);
                return;
            },
            removeItem(product) {
                this.$store.commit('removeItem', product);
                return;
            },
            check() {
                const newOrder = {
                    productsAmount: this.$store.getters.currentAmountTotal,
                    productsTotal: this.$store.getters.currentPriceTotal,
                    productsList: this.cartGoods
                };
                this.$store.commit('createOrder', newOrder);
                this.$router.push('/order-completed');
                return;
            }
        },
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

    .emptyCart-content {
        text-align: center;
        font-weight: bold;
        margin: 50px 0;
        padding: 0 20px;
    }

    .continue-button {
        display: block;
        margin: 30px auto;
        font-size: 20px;
        font-weight: bold;
        color: $darkPink;
        background-color: transparent;
        border: none;
    }

    .continue-button:hover {
        color: $normalGreen;
        transition: 0.5s;
    }

    .cart-details {
        margin: 20px 0;
    }

    .amount-selector {
        border: solid 2px $normalGreen;
        display: flex;
        justify-content: space-between;
    }

    .amount-selector button {
        border: none;
        background-color: transparent;
        padding: 0 5px;
    }

    .inCart-number {
        text-align: center;
    }

    .delete-button {
        font-size: 22px;
        border: none;
        background-color: transparent;
    }

    .delete-button:hover {
        color: rgb(207, 0, 0);
        transition: 0.3s;
    }

    .order-button {
        display: block;
        margin: 40px auto;
        padding: 10px 40px;
        color: $darkPink;
        background-color: $lightPink;
        border: none;
        border-radius: 5px;
    }

    .order-button:hover {
        color: $white;
        background-color: $darkPink;
        transition: 0.5s;
    }
</style>