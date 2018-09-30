<template>
    <li class="coin-list-item" :style="componentStyle">
        <div class="coin-image" :style="backgroundImage"/>
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
            },
            img: {
                type: String,
                default: ''
            }
        },

        /**
        * Computed prop.
        *
        **/
        computed: {
            componentStyle() {
                return {
                    backgroundColor: this.$props.color,
                    color: (this.$props.color === '#ffffff') ? 'black' : '',
                };
            },
            backgroundImage() {
                return {
                    backgroundImage: `url(${this.$props.img})`,
                }
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
        display: flex;
        position: relative;
        height: 60px;
        min-width: 150px;
        padding-left: 120px;
        padding-right: 20px;
        align-items: center;
        justify-content: space-between;
        font-size: 1.15em;
        overflow: hidden;
    }

    .coin-image {
        position: absolute;
        left: 10px;
        width: 90px;
        height: 90px;
        background-repeat: no-repeat;
        background-size: contain;
    }
</style>
