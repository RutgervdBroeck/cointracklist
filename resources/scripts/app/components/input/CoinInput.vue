<template>
    <div class="coin-input" ref="el">
        <div class="input-container" ref="container">
            <coin-pull-down-input :onSelect="onPullDownSelect"/>
            <input class="input input-coin-amount" type="number" v-model="coinAmount" placeholder="Coin amount" @keypress="onKeyPress">
        </div>
        <div class="button-container" ref="addButton">
            <icon-button icon="add" :clickCallback="onAddButtonClick"/>
        </div>
    </div>
</template>

<script>
    import { TweenLite } from 'gsap';
    import IconButton from '../buttons/IconButton';
    import CoinPullDownInput from './CoinPullDownInput';

    export default {

        /**
        * Components.
        *
        **/
        components: {
            'icon-button': IconButton,
            'coin-pull-down-input': CoinPullDownInput,
        },

        /**
        * Component data.
        *
        **/
        data() {
            return {
                active: false,
                coinTicker: '',
                coinAmount: '',
            }
        },

        /**
        * Component methods.
        *
        **/
        methods: {
            /**
            *
            **/
            onAddButtonClick() {
                this.active = !this.active;

                if (this.active) {
                    this.open();
                } else {
                    this.close();
                }
            },

            /**
            *
            **/
            open() {
                TweenLite.to(this.$refs.el, 0.35, {
                    height: this.$refs.container.clientHeight,
                    ease: Power2.easeInOut,
                });

                TweenLite.to(this.$refs.addButton, 0.35, {
                    rotation: 45,
                    ease: Back.easeOut.config(2),
                });
            },

            /**
            *
            **/
            close() {
                TweenLite.to(this.$refs.el, 0.35, {
                    height: 0,
                    ease: Power2.easeInOut,
                });

                TweenLite.to(this.$refs.addButton, 0.35, {
                    rotation: 0,
                    ease: Back.easeOut.config(3),
                });
            },

            /**
            *
            **/
            onPullDownSelect(value) {
                this.coinTicker = value;
            },

            /**
            * Validate the input given in the input fields.
            *
            **/
            onKeyPress(event) {
                if (event.keyCode === 13) {
                    this.validateValues(this.submitInput);
                }
            },

            /**
            *
            **/
            validateValues(callback) {
                if (this.coinName !== '' && this.coinAmount !== '') callback();
            },

            /**
            *
            **/
            submitInput() {
                this.$store.dispatch('addAndFetchListing', {
                    ticker: this.coinTicker,
                    amount: parseFloat(this.coinAmount),
                });
            }
        }
    }
</script>

<style lang="scss">
    .coin-input {
        height: 0;
        background: #322a3e;
        overflow: hidden;

        .button-container {
            position: absolute;
            top: 15px;
            right: 15px;
        }

        &.-active {
            height: auto;
        }
    }

    .input-container {
        padding: 20px;
    }

    // TODO: Make this a seperate component, and reuse in CoinPullDownInput.
    .input {
        padding-left: 20px;
        padding-right: 20px;
        margin-right: 10px;
        width: 180px;
        background: rgba(255, 255, 255, 0.25);
        font-size: 18px;
        line-height: 50px;
        color: white;
        font-family: 'Oswald', sans-serif;
        border-radius: 50px;
        text-transform: uppercase;

        &::placeholder {
            color: white;
            text-transform: uppercase;
        }

        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
    }
</style>
