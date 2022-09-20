<template>
    <!-- 網頁版分類區塊 -->
    <ul class="category col-2 d-none d-lg-block">
        <li class="item" v-for="(item, index) in categoryTabs" @click="selectedCategory(index)">{{ item }}</li>
    </ul>
    <!-- RWD版分類區塊 -->
    <div class="dropdown d-block d-lg-none">
        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {{ latestTab }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#" v-for="(item, index) in categoryTabs" @click="selectedCategory(index)">{{ item }}</a></li>
        </ul>
    </div>
</template>
<script>
    import productsCategory from "../../public/jsonData/productsCategory.json";

    export default {
        data() {
            return {
                categoryTabs: productsCategory,
                latestTab: '全部',
            }
        },
        methods: {
            selectedCategory(index) {
                this.latestTab = this.categoryTabs[index];
                this.$emit('selectedTab', this.categoryTabs[index]);
                // console.log(this.categoryTabs[index]);
                return;
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../assets/scss/main.scss";

    .category {
        padding: 20px 0; 
        margin-left: 80px;
    }

    .category .item {
        font-size: 24px;
        font-weight: bold;
        color: $darkPink;
        text-align: center;
        padding: 15px 0; /* 設padding才不會讓兩側線條有斷軌的現象 */
        border-left: solid 2px $darkPink; 
        border-right: solid 2px $darkPink;
        list-style: none;
    }

    .category .item:hover {
        text-decoration: underline;
        text-underline-offset: 5px;
        cursor: pointer;
    }

    .dropdown {
        margin-bottom: 20px;
    }

    .btn {
        border: solid 3px $normalGreen;
        padding: 5px 80px;
    }

    .dropdown-menu {
        width: 210px;
    }

    .dropdown-item {
        text-align: center;
    }

    .dropdown-item:hover {
        background-color: $lightGreen;
    }

    .dropdown-item:active {
        color: black;
    }
</style>