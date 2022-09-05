<template>
    <footer>
        <div class="shopping-links">
            <a href="https://shop.daiso.com.tw/" target="_blank">
                <div class="box">大創</div>
            </a>
            <a href="https://www.poyabuy.com.tw/" target="_blank">
                <div class="box">寶雅</div>
            </a>
            <a href="https://shop.pxmart.com.tw/" target="_blank">
                <div class="box">全聯</div>
            </a>
            <a href="https://www.nitori-net.tw/" target="_blank">
                <div class="box">宜得利</div>
            </a>
            <a href="https://online.carrefour.com.tw/" target="_blank">
                <div class="box">家樂福</div>
            </a>
        </div>
        <div class="copyright">
            Copyright © 2022 SONG BUY.
        </div>
    </footer>
</template>
<script>

</script>
<style scoped lang="scss">
    @import "../assets/scss/main.scss";

    footer {
        background-color: $normalGreen;
        margin-top: 80px;
        padding: 20px 0;
    }

    .shopping-links {
        display: flex;
        justify-content: center;
    }

    .shopping-links a {
        text-decoration: none;
        margin: 15px;
    }

    .shopping-links .box {
        width: 80px;
        height: 80px;
        color: $lightGreen;
        background-color: $darkGreen;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .shopping-links .box:hover {
        border-radius: 50%;
        transition: 0.4s;
    }

    .copyright {
        color: $lightGreen;
        font-size: 15px;
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        .shopping-links {
            display: block;
        }

        .shopping-links a {
            margin: 0;
        }

        .shopping-links .box {
            width: 100%;
            height: 40px;
            background-color: transparent;
        }

        .shopping-links .box:hover {
            background-color: $darkGreen;
            border-radius: 0;
        }

        .copyright {
            margin-top: 10px;
        }
    }
</style>