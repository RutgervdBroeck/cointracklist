<template>
    <main id="app">
        <coin-input-component></coin-input-component>
        <coin-list></coin-list>
    </main>
</template>

<script>
    import CoinListComponent from './components/CoinListComponent';
    import CoinInputComponent from './components/CoinInputComponent';

    export default {
        name: 'app',

        /**
        * Components.
        *
        **/
        components: {
            'coin-list': CoinListComponent,
            'coin-input-component': CoinInputComponent
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
    #app {
        display: block;
        max-width: 900px;
        margin: 0 auto;
    }
</style>
