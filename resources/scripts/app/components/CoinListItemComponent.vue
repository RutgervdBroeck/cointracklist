<template>
    <li class="coin-list-item">
        <span class="coin-ticker-name" v-text="ticker"></span>
        <span class="coin-total-price-amount" v-text="priceOfAmount"></span>
    </li>
</template>

<script>
    export default {
        /**
        * Component data.
        *
        **/
        props: {
            ticker: {
                type: String,
                default: ''
            },
            priceOfAmount: {
                type: Number,
                default: ''
            }
        },

        /**
        * Component methods.
        *
        **/
        methods: {
        }
    }
</script>

<style lang="scss">
    .coin-list-item {
        list-style: none;
        background: #efecec;
        height: 50px;

        span {
            background: transparent;
            border: 0;
            margin: 0;
            padding: 0;
            font-size: 16px;
            color: black;
        }
    }
</style>
