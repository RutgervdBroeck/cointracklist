<template>
    <main id="app">
        <coin-total/>
        <coin-input/>
        <coin-list/>
    </main>
</template>

<script>
    import CoinList from './components/list/CoinList';
    import CoinInput from './components/input/CoinInput';
    import CoinTotal from './components/CoinTotal';

    export default {
        name: 'app',

        /**
        * Components.
        *
        **/
        components: {
            'coin-list': CoinList,
            'coin-input': CoinInput,
            'coin-total': CoinTotal,
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
        -webkit-font-smoothing: antialiased;
    }
</style>
