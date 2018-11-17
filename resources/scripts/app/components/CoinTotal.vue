<template>
    <header class="coin-total">
        <span class="coin-total-label" v-text="formatToCurrency(this.$store.state.totalOwnListings)"/>
    </header>
</template>

<script>
    import { formatToCurrency } from '../utils/currencyUtil';

    export default {

        /**
        * Component methods.
        *
        **/
        methods: {
            formatToCurrency(value) {
                return `${formatToCurrency(value)}`;
            }
        }
    }
</script>

<style lang="scss">
    .coin-total {
        display: flex;
        padding-left: 20px;
        height: 80px;
        align-items: center;
    }

    .coin-total-label {
        font-size: 2em;
        line-height: 2em;
        font-weight: bold;
    }
</style>
