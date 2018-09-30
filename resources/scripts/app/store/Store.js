import Vuex from 'vuex';
import axios from 'axios';
import { fetchCMCListings, fetchOwnListing } from '../services/CoinService.js';
import { coinColorTones } from '../utils/colorUtil';

const IMG_BASE_URL = 'https://s2.coinmarketcap.com/static/img/coins/128x128';

/**
* Update the local storage with the current state.
*
**/
const updateLocalStorage = (state) => {
    if (localStorage) {
        localStorage.setItem('cointracklist.state', JSON.stringify(state));
    } else {
        alert('Local storage is not found! Your coin listings and preferences will not be stored.');
    }
};

/**
* Get stored state from localStorage.
*
**/
const localStorageState = localStorage && localStorage.getItem('cointracklist.state');

export default new Vuex.Store({
    /**
    * Default store state.
    *
    **/
    state: (localStorageState) ? JSON.parse(localStorageState) : {
        currency: 'EUR',
        currencyOptions: ['EUR', 'USD'],
        cmcListings: [],
        ownListings: [
            {
                id: 1,
                ticker: 'BTC',
                amount: 1,
                priceOfAmount: 0,
                color: '#f79926',
                img: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png',
            }
        ],
        totalOwnListings: 0
    },

    /**
    * Store actions.
    *
    **/
    actions: {
        /**
        * Fetch all CMC listings.
        *
        **/
        fetchCMCListings(store) {
            fetchCMCListings((data) => {
                store.commit('setCMCListings', data);
                store.dispatch('fetchOwnListings');
            });
        },

        /**
        * Fetch own coin listings.
        *
        **/
        fetchOwnListings(store) {
            store.state.ownListings.forEach((item) => {
                fetchOwnListing(item.id, store.state.currency, (data) => {
                    store.commit('setOwnListings', data);
                    store.commit('setTotalOwnListings');
                });
            });
        },

        /**
        * Fetch own coin listing with given id.
        *
        **/
        fetchOwnListing(store, id) {
            fetchOwnListing(id, store.state.currency, (data) => {
                store.commit('setOwnListings', data);
                store.commit('setTotalOwnListings');
            });
        },

        /**
        * Add listing to array and fetch newly added item.
        *
        **/
        addAndFetchListing(store, data) {
            store.commit('addOwnListing', data);

            // ID of newly added item in store.
            const id = store.state.ownListings.filter((item) => {
                return (item.ticker === data.ticker);
            })[0].id;

            store.dispatch('fetchOwnListing', id);
        }
    },

    /**
    * Store mutations.
    *
    **/
    mutations: {
        /**
        * Set the CMC listings.
        *
        **/
        setCMCListings(state, data) {
            state.cmcListings = data;

            updateLocalStorage(state);
        },

        /**
        * Set own coin listings.
        *
        **/
        setOwnListings(state, data) {
            const quote = data.quotes[state.currency];

            state.ownListings = state.ownListings.map((item) => {
                if (item.id === data.id) {
                    return {
                        ...item,
                        priceOfAmount: item.amount * quote.price,
                        color: coinColorTones[item.id] || '#7d7f88',
                        img: `${IMG_BASE_URL}/${item.id}.png`,
                    }
                } else {
                    return item;
                }
            });

            updateLocalStorage(state);
        },

        /**
        * Add a coin listings.
        *
        **/
        addOwnListing(state, data) {
            const id = state.cmcListings.filter((item) => {
                return(item.symbol === data.ticker);
            })[0].id;

            state.ownListings = [
                {
                    id,
                    ticker: data.ticker,
                    amount: data.amount,
                    priceOfAmount: 0,
                    color: coinColorTones[id] || '#7d7f88',
                    img: `${IMG_BASE_URL}/${id}.png`,
                },
                ...state.ownListings,
            ]

            updateLocalStorage(state);
        },

        /**
        * Calculate the total net worth of all listings.
        *
        **/
        setTotalOwnListings(state, data) {
            let total = 0;

            state.ownListings.forEach((item) => {
                total += item.priceOfAmount;
            });

            state.totalOwnListings = total;

            updateLocalStorage(state);
        }
    }
});
