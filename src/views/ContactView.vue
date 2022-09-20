<template>
    <div class="container-fluid">
        <div class="row">
            <div class="contact-block col-9">
                <div class="block-title">
                    <h1>聯絡我們｜CONTACT</h1>
                </div>
                <div class="block-content">
                    <div class="contact-method col-7">
                        <h3 class="d-inline-block col-12 col-lg-5">信箱(E-mail)</h3>
                        <span class="col-12 col-lg-7">yuchang370@gmail.com</span>
                    </div>
                    <div class="contact-method col-7">
                        <h3 class="d-inline-block col-12 col-lg-5">地址(Address)</h3>
                        <span class="col-12 col-lg-7">Internet</span>
                    </div>
                    <div class="contact-method col-7">
                        <h3 class="d-inline-block col-12 col-lg-5">電話(Phone)</h3>
                        <span class="col-12 col-lg-7">None</span>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>
<style scoped lang="scss">
    @import "../assets/scss/main.scss";

    .contact-block {
        background-color: $white;
        border-radius: 30px;
        margin: 183px auto 70px auto;
        padding: 0;
    }

    @media screen and (max-width: 992px) {
        .contact-block {
            margin: 123px auto 30px auto;
        }
    }

    .block-title {
        color: $darkPink;
        background-color: $lightPink;
        border-radius: 30px 30px 0 0;
    }

    .block-title h1 {
        font-size: 28px;
        font-weight: bold;
        text-align: center;
        padding: 25px 0;
    }

    @media screen and (max-width: 768px) {
        .block-title h1 {
            font-size: 24px;
        } 
    }

    .block-content {
        margin: 30px auto;
    }

    .contact-method {
        padding: 15px 0 15px 100px;
        margin: 0 auto;
    }

    .contact-method h3 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 0;
    }

    .contact-method span {
        font-size: 20px;
    }

    @media screen and (max-width: 992px) {
        .contact-method {
            padding-left: 0;
            text-align: center;
        }

        .contact-method h3 {
            margin-bottom: 8px;
        }
    }
</style>