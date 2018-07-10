<template>
    <li :class="['coin-list-item']">
        <span>BTC</span>
    </li>
</template>

<script>
    export default {
        // Component data.
        data() {
            return {
                coinName: '',
                coinAmount: ''
            }
        },

        methods: {
        }
    }
</script>

<style lang="scss">
    .coin-list-item {
        list-style: none;
        background: #efecec;

        span {
            background: transparent;
            border: 0;
            margin: 0;
            padding: 0;
            font-size: 16px;
            color: black;
        }
    }
</style>
