<template>
    <ul class="coin-list">
        <coin-list-item
            v-for="(listing, index) in ownListings"
            :index="index"
            :ticker="listing.ticker"
            :amount="listing.amount"
            :priceOfAmount="listing.priceOfAmount"
            :color="listing.color"
            :img="listing.img"
            :key="listing.id"
        />
    </ul>
</template>

<script>
    import CoinListItem from './CoinListItem';

    export default {
        /**
        * Computed prop.
        *
        **/
        computed: {
            ownListings() {
                return this.$store.state.ownListings.sort((a, b) => {
                    return b.priceOfAmount - a.priceOfAmount;
                });
            }
        },

        /**
        * Components.
        *
        **/
        components: {
            'coin-list-item': CoinListItem,
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
