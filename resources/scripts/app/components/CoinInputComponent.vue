<template>
    <div class="coin-input-component">
        <input type="text" name="coin-name" v-model="coinName" @keypress="onKeyPress">
        <input type="number" name="coin-amount" v-model="coinAmount" @keypress="onKeyPress">
    </div>
</template>

<script>
    export default {
        // Component data.
        data() {
            return {
                coinName: '',
                coinAmount: ''
            }
        },

        methods: {
            onKeyPress(event) {
                if (event.keyCode === 13) {
                    this.validateValues();
                }
            },

            validateValues() {
                if (this.coinName !== '' && this.coinAmount !== '') {
                    this.$store.commit('addOwnListing', {
                        coinName: this.coinName,
                        coinAmount: this.coinAmount,
                    });
                }
            }
        }
    }
</script>

<style lang="scss">
    li {
        list-style: none;
    }

    input {
        background: transparent;
        border: 0;
        margin: 0;
        padding: 0;
        font-size: 16px;
        color: black;
    }

    .coin-list-item {
        background: #efecec;
    }
</style>
