import Vuex from 'vuex';
import axios from 'axios';
import {fetchCMCListings, fetchOwnListing} from '../services/CoinService.js';

export default new Vuex.Store({
    /**
    * Default store state.
    *
    **/
    state: {
        currency: 'EUR',
        currencyOptions: ['EUR', 'USD'],
        cmcListings: [],
        ownListings: [
            {
                id: 1,
                ticker: 'BTC',
                amount: 0.47,
                priceOfAmount: 0,
            },
            {
                id: 2001,
                ticker: 'COLX',
                amount: 100000,
                priceOfAmount: 0,
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
        fetchOwnListing(store, data) {
            fetchOwnListings(data.id, store.state.currency, (data) => {
                store.commit('setOwnListings', data);
                store.commit('setTotalOwnListings');
            });
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
                    }
                } else {
                    return item;
                }
            });
        },

        /**
        * Add a coin listings.
        *
        **/
        addOwnListing(state, data) {
            state.ownListings = [
                {
                    id: state.cmcListings.filter((item) => {
                        return(item.symbol === data.name);
                    })[0].id,
                    ticker: data.name,
                    amount: data.amount,
                    priceOfAmount: 0
                },
                ...state.ownListings,
            ]
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
        }
    }
});
