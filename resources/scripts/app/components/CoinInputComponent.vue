<template>
    <div class="coin-input-component">
        <input class="input-coin-name" type="text" v-model="coinName" @keypress="onKeyPress">
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
                coinName: '',
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
                    this.$store.commit('addOwnListing', {
                        name: this.coinName,
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
        border: 0;
        margin: 0;
        padding: 0;
    }

    .coin-input-component {
        height: 50px;
        background: grey;
    }

    .input-coin-name, .input-coin-amount {
        outline: 1px solid white;
        font-size: 16px;
        color: white;
    }
</style>
