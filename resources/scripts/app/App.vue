<template>
    <main id="app">
        <coin-input-component/>
        <coin-total-component/>
        <coin-list/>
    </main>
</template>

<script>
    import CoinListComponent from './components/CoinListComponent';
    import CoinInputComponent from './components/CoinInputComponent';
    import CoinTotalComponent from './components/CoinTotalComponent';

    export default {
        name: 'app',

        /**
        * Components.
        *
        **/
        components: {
            'coin-list': CoinListComponent,
            'coin-input-component': CoinInputComponent,
            'coin-total-component': CoinTotalComponent,
        },

        /**
        * App mounted.
        *
        **/
        mounted() {
            this.$store.dispatch('fetchCMCListings');
        }
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
    }

    li {
        list-style: none;
    }

    body {
        font-size: 20px;
        background: #110520;
        color: #fff;
        font-family: 'Oswald', sans-serif;
        line-height: 1em;
    }
</style>
