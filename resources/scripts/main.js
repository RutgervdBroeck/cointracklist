import './bootstrap';
import App from './app/App';
import Vue from 'vue';
import Vuex from 'vuex';
import store from './app/store/store';

// Initialize new app.
const app = new Vue({
    store,
    el: '#app',
    render: app => app(App)
});
