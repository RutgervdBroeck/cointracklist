<template>
    <li class="coin-list-item" :style="componentStyle">
        <div class="list-content">
            <div class="coin-image" :style="backgroundImage"/>
            <div class="coin-quantity">
                <span class="coin-ticker-name" v-text="ticker"></span>
                <span class="coin-amount" v-text="amount"></span>
            </div>
            <span class="coin-total-price-amount" v-text="formatToCurrency(priceOfAmount)"></span>
        </div>
    </li>
</template>

<script>
    import { formatToCurrency } from '../../utils/currencyUtil';

    export default {
        /**
        * Component props.
        *
        **/
        props: {
            index: {
                type: Number,
                default: 0,
            },
            ticker: {
                type: String,
                default: ''
            },
            amount: {
                type: Number,
                default: 0,
            },
            priceOfAmount: {
                type: Number,
                default: 0,
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
        * Computed computed.
        *
        **/
        computed: {
            componentStyle() {
                const total = this.$store.state.ownListings.length - 1;
                const index = this.$props.index;
                const itemPerc = (index / (total * 0.01)) * 0.7;
                const perc = 100 - itemPerc;

                return {
                    backgroundColor: this.$props.color,
                    color: (this.$props.color === '#ffffff') ? 'black' : '',
                    width: `${perc}%`
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
                return `${formatToCurrency(value)}`;
            }
        }
    }
</script>

<style lang="scss">
    .coin-list-item {
        position: relative;
        height: 40px;
        min-width: 250px;
        font-size: 1em;
        overflow: hidden;
        white-space: nowrap;

        .list-content {
            display: flex;
            height: 100%;
            padding-left: 80px;
            padding-right: 15px;
            align-items: center;
            justify-content: space-between;
        }

        .coin-image {
            position: absolute;
            left: 10px;
            width: 50px;
            height: 50px;
            background-repeat: no-repeat;
            background-size: contain;
        }

        .coin-quantity {
            margin-right: 15px;
        }

        .coin-ticker-name {
            display: inline-block;
            min-width: 40px;
            margin-right: 15px;
        }
    }
</style>
