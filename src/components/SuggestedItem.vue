<template>
    <div class="suggest-box" @click="itemDetails(id)">
        <img :src="picture" :alt="name">
    </div>
</template>
<script>
    export default {
        inject: ['reload'],
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
            itemDetails(id) {
                const itemInfo = {
                    productId: this.id,
                    category: this.category
                 }
                this.$store.commit('selectedItem', itemInfo.productId);
                this.$store.commit('suggestedItems', itemInfo);
                this.$router.push(`/product-details/${id}`);
                this.reload();
                return;
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../assets/scss/main.scss";

    .suggest-box {
        width: 200px;
        height: 200px;
        border: solid 1px $gray;
        margin: 20px;
    }

    .suggest-box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .suggest-box:hover {
        opacity: 0.6;
        transition: 0.3s;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        .suggest-box {
            width: 170px;
            height: 170px;
        }
    }
</style>