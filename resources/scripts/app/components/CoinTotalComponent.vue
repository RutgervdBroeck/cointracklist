<template>
    <div class="coin-total">
        <span class="coin-total-label" v-text="formatToCurrency(this.$store.state.totalOwnListings)"/>
    </div>
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
                return `€${formatToCurrency(value)}`;
            }
        }
    }
</script>

<style lang="scss">
    .coin-total {
    }

    .coin-total-label {
        font-size: 2em;
        line-height: 2em;
        font-weight: bold;
    }
</style>
