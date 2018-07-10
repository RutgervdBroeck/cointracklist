<template>
    <ul class="coin-list">
        <coin-list-item></coin-list-item>
    </ul>
</template>

<script>
    import CoinListItemComponent from './CoinListItemComponent';

    export default {

        // Components.
        components: {
            'coin-list-item': CoinListItemComponent,
        },
    }
</script>

<style lang="scss">

</style>
