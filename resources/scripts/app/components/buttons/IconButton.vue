<template>
    <button class="icon-button" @click="clickCallback"></button>
</template>

<script>
    export default {
        /**
        * Component data.
        *
        **/
        props: {
            icon: {
                type: String,
                default: '',
            },
            clickCallback: {
                type: Function,
                default: () => {},
            }
        },

        /**
        * Component methods.
        *
        **/
        methods: {
            /**
            *
            **/
            onClick(event) {
            },
        }
    }
</script>

<style lang="scss">
    button {
        background: none;
    }

    .icon-button {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border: 2px solid white;
        border-radius: 100%;
        cursor: pointer;

        &:after {
            content: '';
            display: flex;
            width: 25px;
            height: 25px;
            background: url('/assets/images/icon-add.svg') no-repeat;
        }
    }
</style>
