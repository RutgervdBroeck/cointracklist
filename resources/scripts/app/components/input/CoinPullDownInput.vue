<template>
    <div class="coin-pull-down-input" ref="el">
        <input
            class="input input-coin-ticker"
            type="text"
            v-model="inputValue"
            placeholder="Coin name"
        >
        <div class="result-list-wrapper" v-if="results.length > 0">
            <ul class="result-list">
                <li v-for="(result, index) in results" class="result-item" :data-ticker="result.symbol">
                    <span class="result-ticker">{{result.symbol}}</span>
                    <span class="result-name">{{result.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { TweenLite } from 'gsap';

    export default {

        /**
        * Component data.
        *
        **/
        props: {
            onSelect: {
                type: Function,
                default: () => {},
            },
        },

        /**
        * Component data.
        *
        **/
        data() {
            return {
                inputValue: '',
                results: [],
            }
        },

        /**
        *
        **/
        watch: {
            inputValue: function () {
                this.filterResults();
            },
        },

        /**
        *
        **/
        mounted () {
            window.addEventListener('click', this.handleWindowClick);
        },

        /**
        * Component methods.
        *
        **/
        methods: {
            /**
            *
            **/
            filterResults() {
                this.results = this.$store.state.cmcListings.filter((item) => {
                    const val = this.inputValue.toLowerCase();
                    return item.name.toLowerCase().indexOf(val) > -1 || item.symbol.toLowerCase().indexOf(val) > -1;
                });

                if (this.inputValue === '') {
                    this.results = [];
                }
            },

            /**
            *
            **/
            handleWindowClick(event) {
                const target = event.target;
                let ticker;

                if (target && target.classList.contains('result-item')) {
                    ticker = target.getAttribute('data-ticker');
                }

                if (ticker) {
                    this.inputValue = ticker;
                    this.$props.onSelect(ticker);
                }

                this.results = [];
                setTimeout(() => {
                    this.results = [];
                }, 0);
            }
        }
    }
</script>

<style lang="scss">
    .coin-pull-down-input {
        display: inline-block;

        .input {
            padding-left: 20px;
            padding-right: 20px;
            margin-right: 10px;
            width: 180px;
            background: #655f6e;
            font-size: 18px;
            line-height: 50px;
            color: white;
            font-family: 'Oswald', sans-serif;
            border-radius: 50px;

            &::placeholder {
                color: white;
                text-transform: uppercase;
            }

            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
            }
        }

        .result-list-wrapper {
            position: absolute;
            width: 220px;
            max-height: 300px;
            margin-top: 5px;
            z-index: 100;

            &:after, &:before {
                content: '';
                position: absolute;
                width: 100%;
                height: 25px;
                pointer-events: none;
            }

            &:before {
                top: 0;
                border-top-left-radius: 25px;
                border-top-right-radius: 25px;
                background: linear-gradient(rgba(101, 95, 110, 1), rgba(101, 95, 110, 0));
            }

            &:after {
                bottom: 0;
                border-bottom-left-radius: 25px;
                border-bottom-right-radius: 25px;
                background: linear-gradient(rgba(101, 95, 110, 0), rgba(101, 95, 110, 1));
            }
        }

        .result-list {
            padding: 11px 0;
            max-height: calc(300px - 22px);
            overflow: scroll;
            background: #655f6e;
            border-radius: 25px;

            &::-webkit-scrollbar {
                display: none;
            }
        }

        .result-item {
            padding: 6px 20px;
            font-size: 0.77em;
            cursor: pointer;
            white-space: nowrap;

            &:hover {
                background-color: rgba(255, 255, 255, 0.3);
            }

            span {
                display: inline-block;
                min-width: 45px;
                text-transform: uppercase;
                text-overflow: ellipsis;
                overflow: hidden;
                line-height: 1em;
                pointer-events: none;
            }

            .result-name {
                max-width: calc(100% - 35px);
            }
        }
    }
</style>
