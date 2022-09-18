<template>
    <div class="container-fluid">
        <div class="row">
            <div class="page-block col-8">
                <button class="back-button" @click="backToProductsList()">← BACK</button>
                <template v-for="item in selectedGood">
                    <div class="item-info">
                        <div class="item-picture">
                            <img :src="item.picture" :alt="item.name">
                        </div>
                        <div class="item-data">
                            <h1 class="name">{{ item.name }}</h1>
                            <h3 class="price">NTD {{ item.price }}</h3>
                            <h3 class="amount-title">購買數量</h3>
                            <select class="amount-selector" name="" id="" v-model.number="number">
                                <option value="">請選擇</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            <button class="addCart-button" @click="addCart(item)">加入購物車</button>
                        </div>
                    </div>
                    <hr>
                    <div class="item-description">
                        <h3 class="item-title">商品敘述｜DESCRIPTION</h3>
                        <p class="description">{{ item.description }}</p>
                        <h3 class="item-title">商品推薦｜SUGGESTION</h3>
                        <div class="suggestion">
                            <template v-for="otherItems in suggestedGoods">
                                <SuggestedItem v-bind="otherItems"></SuggestedItem>
                            </template>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
    import SuggestedItem from "../components/SuggestedItem"

    export default {
        components: {
            SuggestedItem
        },
        data() {
            return{
                suggestedGoods: this.$store.state.suggestedGoods,
                number: ''
            }
        },
        methods: {
            backToProductsList() {
                this.$router.push('/products');
                return;
            },
            addCart(product) {
                if ( this.number === '' ) {
                    alert('尚未選擇商品數量！');
                    return;
                } else {
                    const addCartItem = {
                        product: product,
                        number: this.number
                    };
                    this.$store.commit('addCart', addCartItem);
                    return;
                }
            }
        },
        computed: {
            selectedGood() {
                return this.$store.state.selectedGood;
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../assets/scss/main.scss";

    .page-block {
        background-color: $white;
        border-radius: 30px;
        margin: 123px auto 30px auto;
        padding: 0 30px;
    }

    .back-button {
        display: block;
        margin: 30px auto;
        font-size: 20px;
        font-weight: bold;
        color: $darkPink;
        background-color: transparent;
        border: transparent;
    }

    .back-button:hover {
        color: $normalGreen;
        transition: 0.5s;
    }
    
    .item-info {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
    }

    .item-picture {
        width: 320px;
        height: 320px;
        margin: 0 20px;
    }

    .item-picture img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .item-data {
        margin: 0 60px;
    }

    .name {
        font-weight: bold;
    }

    .price {
        color: rgb(207, 0, 0);
    }

    .amount-title {
        font-size: 24px;
        margin-top: 20px;
    }

    .amount-selector {
        width: 200px;
        padding: 5px 0;
        text-align: center;
        border: solid 2px $normalGreen;
        border-radius: 5px;
    }

    .addCart-button {
        display: block;
        margin: 30px 0;
        padding: 10px 40px;
        color: $darkPink;
        background-color: $lightPink;
        border: none;
        border-radius: 5px;
    }

    .addCart-button:hover {
        color: $white;
        background-color: $darkPink;
        transition: 0.5s;
    }

    @media screen and (max-width: 992px) {
        .item-info {
            flex-wrap: wrap;
        }

        .item-data {
            text-align: center;
            margin-top: 20px;
        }

        .addCart-button {
            margin: 30px auto 0 auto;
        }
    }

    @media screen and (max-width: 768px) {
        .item-picture {
            width: 250px;
            height: 250px;
            margin: 0;
        }
    }

    hr {
        height: 2px;
        margin: 40px 0;
    }

    .item-description {
        margin: 10px 20px;

    }

    .item-title {
        color: $darkGreen;
    }

    .description {
        text-indent: 16px;
        margin-top: 20px;
        margin-bottom: 70px;
    }

    .suggestion {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 992px) {
        .suggestion {
            flex-wrap: wrap;
        }
    }

    @media screen and (max-width: 768px) {
        .item-title {
            font-size: 23px;
        }
    }
</style>