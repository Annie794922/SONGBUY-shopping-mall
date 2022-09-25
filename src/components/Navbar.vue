<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand d-none d-lg-inline-block" @click="buttonIndex(1)">SONG BUY</router-link>
            <button id="navbarButton" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav text-center text-lg-start">
                    <li class="nav-item d-inline-block d-lg-none">
                        <router-link to="/" class="link" :class=" this.$store.state.clickedNavButton === 1 ? 'clicked-button' : '' " aria-current="page" @click="buttonIndex(1);closeNavbarList()">首頁</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="link" :class=" this.$store.state.clickedNavButton === 2 ? 'clicked-button' : '' " aria-current="page" @click="buttonIndex(2);closeNavbarList()">聯絡我們</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/products" class="link" :class=" this.$store.state.clickedNavButton === 3 ? 'clicked-button' : '' " @click="buttonIndex(3);closeNavbarList()">商品目錄</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/cart" class="link" :class=" this.$store.state.clickedNavButton === 4 ? 'clicked-button' : '' " @click="buttonIndex(4);closeNavbarList()">購物車</router-link>
                    </li>
                    <li class="nav-item d-inline-block d-lg-none">
                        <router-link to="" class="link" @click="remind();closeNavbarList()">登入/註冊</router-link>
                    </li>
                    <!-- <li class="nav-item d-inline-block d-lg-none">
                        <router-link to="" class="link" @click="remind()">登出</router-link>
                    </li> -->
                </ul>
            </div>
            <ul class="user-group d-none d-lg-flex">
                 <li class="user-item d-block">
                    Hi, Guest!
                </li>
                <li class="user-item d-block">
                    <router-link to="" @click="remind()">登入/註冊</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            remind() {
                alert('頁面正在製作中，謝謝。Please be informed that the page is building. Thank you.');
                return;
            },
            buttonIndex(index) {
                this.$store.commit('navbarButtonNo', index);
                return;
            },
            closeNavbarList() {
                if (document.body.offsetWidth < 992) {
                    document.getElementById("navbarButton").click();
                    return;
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../assets/scss/main.scss";

    .navbar {
        color: $lightGreen;
        background-color: $normalGreen;
        font-size: 18px;
        position: fixed;
        top: 0;
        z-index: 1; /* 讓navbar在輪播器之上 */
        width: 100%; /* 設定position: fixed之後再設定寬度才不會被壓縮 */
    }

    .navbar-brand {
        color: $lightGreen;
        font-size: 22px;
        font-weight: bold;
        margin: 0 16px;
    }

    .navbar-brand:hover {
        color: $darkGreen;
        transition: 0.7s;
    }

    .navbar-toggler {
        margin-right: 16px;
    }

    .navbar-collapse {
        justify-content: center;
    }

    .nav-item { /* 為了RWD的navbar內間距設置 */
        padding: 8px 0;
    }

    .nav-item a {
        color: $lightGreen;
        padding: 0 10px;
        text-decoration: none;
    }

    .nav-item a:hover {
        color: $darkGreen;
        transition: 0.7s;
    }

    .clicked-button {
        font-weight: bold;
    }

    .user-group {
        margin: 0 10px;
    }

    .user-item {
        padding: 0 10px;
    }

    .user-item a {
        color: $lightGreen;
        text-decoration: none;
    }

    .user-item a:hover {
        color: $darkGreen;
        transition: 0.7s;
    }
</style>