<template>
    <ul class="coin-list">
        <coin-list-item
            v-for="listing in ownListings"
            :ticker="listing.ticker"
            :priceOfAmount="listing.priceOfAmount"
            :key="listing.id"
        />
    </ul>
</template>

<script>
    import CoinListItemComponent from './CoinListItemComponent';

    export default {
        /**
        * Computed prop.
        *
        **/
        computed: {
            ownListings() {
                return this.$store.state.ownListings;
            }
        },

        /**
        * Components.
        *
        **/
        components: {
            'coin-list-item': CoinListItemComponent,
        }
    }
</script>

<style lang="scss">
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .coin-list {
        
    }
</style>
