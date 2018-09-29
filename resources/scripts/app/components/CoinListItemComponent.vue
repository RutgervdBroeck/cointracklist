<template>
    <li class="coin-list-item" :style="backgroundColor">
        <span class="coin-ticker-name" v-text="ticker"></span>
        <span class="coin-total-price-amount" v-text="formatToCurrency(priceOfAmount)"></span>
    </li>
</template>

<script>
    import { formatToCurrency } from '../utils/currencyUtil';

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
            },
            color: {
                type: String,
                default: ''
            }
        },

        /**
        * Computed prop.
        *
        **/
        computed: {
            backgroundColor() {
                return {
                    backgroundColor: this.$props.color,
                };
            }
        },

        /**
        * Component methods.
        *
        **/
        methods: {
            formatToCurrency(value) {
                return `€${formatToCurrency(value)}`;
            }
        }
    }
</script>

<style lang="scss">
    .coin-list-item {
        list-style: none;
    }
</style>
