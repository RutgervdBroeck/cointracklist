<template>
    <div class="coin-input-component">
        <input class="input-coin-ticker" type="text" v-model="coinTicker" @keypress="onKeyPress">
        <input class="input-coin-amount" type="number" v-model="coinAmount" @keypress="onKeyPress">
    </div>
</template>

<script>
    export default {
        /**
        * Component data.
        *
        **/
        data() {
            return {
                coinTicker: '',
                coinAmount: ''
            }
        },

        /**
        * Component methods.
        *
        **/
        methods: {
            /**
            * Validate the input given in the input fields.
            *
            **/
            onKeyPress(event) {
                if (event.keyCode === 13) {
                    this.validateValues();
                }
            },

            /**
            * Component data.
            *
            **/
            validateValues() {
                if (this.coinName !== '' && this.coinAmount !== '') {
                    this.$store.dispatch('addAndFetchListing', {
                        ticker: this.coinTicker,
                        amount: this.coinAmount,
                    });
                }
            }
        }
    }
</script>

<style lang="scss">
    input {
        background: transparent;
    }

    .coin-input-component {
        position: absolute;
        bottom: 20px;
        right: 20px;
        height: 50px;
        background: grey;
        z-index: 999;
    }

    .input-coin-ticker, .input-coin-amount {
        outline: 1px solid white;
        font-size: 16px;
        color: white;
    }
</style>
