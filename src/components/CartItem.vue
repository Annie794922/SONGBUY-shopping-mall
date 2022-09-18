<template>
    <div class="cartItem-box col-10">
        <div class="picture">
            <img :src="picture" :alt="name">
        </div>
        <table class="item-details">
            <tr>
                <th>{{ name }}</th>
                <th>數量</th>
                <th>小計</th>
            </tr>
            <tr>
                <td>NTD {{ price }}</td>
                <td>
                    <slot name="amount"></slot>
                </td>
                <td>NTD {{ sum }}</td>
            </tr>
        </table>
            <div class="item-delete">
                <slot name="delete"></slot>
            </div>
    </div>
</template>
<script>
    export default {
        props: {
            'id': Number,
            'name': String,
            'price': Number,
            'sum': Number,
            'category': String,
            'description': String,
            'picture': String,
            'quantity': Number,
        }
    }
</script>
<style scoped lang="scss">
    @import "../assets/scss/main.scss";

    .cartItem-box {
        margin: 10px auto;
        border: solid 1px $gray;
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 992px) {
        .cartItem-box {
            flex-wrap: wrap;
        }
    }

    .picture {
        width: 170px;
        height: 170px;
        margin: 15px;
    }

    .picture img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .item-details {
        font-size: 22px;
    }

    .item-details th {
        width: 180px;
        padding: 0 15px;
    }

    .item-details td {
        width: 180px;
        padding: 0 15px;
    }

    .item-delete {
        margin: 5px 10px;
    }

    @media screen and (max-width: 992px) {
        .item-details {
            display: flex;
            align-items: center;
        }

        .item-details tr {
            display: inline-block;
        }

        .item-details th {
            display: block;
            width: 110px;
            padding: 6.5px 8px;
        }

        .item-details td {
            display: block;
            width: 130px;
            padding: 5px 8px;
        }

        .item-delete {
            margin: 10px 100px;
        }
    }
</style>