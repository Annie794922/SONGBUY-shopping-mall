<template>
    <div class="container-fluid">
        <div class="row">
            <PageContent>
                <template v-slot:title>
                    <h1 class="page-title">商品目錄｜PRODUCTS</h1>
                </template>
                <template v-slot:content>
                    <div class="content-block">
                        <CategoryButtons @selectedTab="filterGoods"></CategoryButtons>
                        <div class="products">
                            <div class="items-container col-11">
                                <template v-for="goods in allProducts" v-if="category === '全部'">
                                    <ProductItem v-bind="goods"></ProductItem>
                                </template>
                                <template v-for="goods in filteredGoods" v-if="category !== '全部'">
                                    <ProductItem v-bind="goods"></ProductItem>
                                </template>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="pages-block">
                        <span>＜</span>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>＞</span>
                    </div> -->
                </template>
            </PageContent>
        </div>
    </div>
</template>
<script>
    import PageContent from "../components/PageContent.vue"
    import CategoryButtons from "../components/categoryButtons.vue"
    import ProductItem from "../components/ProductItem.vue"

    export default {
        components: {
            PageContent,
            CategoryButtons,
            ProductItem
        },
        data() {
            return {
                allProducts: this.$store.state.allProducts,
                category: '全部',
                filteredGoods: []
            }
        },
        methods: {
            filterGoods(value) {
                this.category = value;
                const latestCategory = this.category;
                const filteredItems = this.allProducts.filter(function(item) {
                    return item.category === latestCategory;
                });
                this.filteredGoods = filteredItems;
                // console.log(this.filteredGoods);
                return;
            }
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

    .content-block {
        margin: 50px auto;
        display: flex;
        justify-content: center;
    }

    .items-container { /* 要讓ProductItem區置中，必須在content-block之間再加一層有寬度的容器才能搭配margin: 0 auto */
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
    }

    @media screen and (max-width: 992px) {
        .content-block {
            flex-wrap: wrap;
        }

        .items-container {
            justify-content: space-between;
        }
    }

    @media screen and (max-width: 768px) {
        .items-container {
            justify-content: center;
        }
    }

    .pages-block {
        display: flex;
        justify-content: center;
    }

    .pages-block span {
        color: $gray;
        font-size: 22px;
        font-weight: bold;
        margin: 0 15px 50px 15px;
    }

    .pages-block span:hover {
        color: $darkPink;
        transition: 0.5s;
        cursor: pointer;
    }
</style>