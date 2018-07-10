import Vuex from 'vuex';
import axios from 'axios';

export default new Vuex.Store({
    // Default store state.
    state: {
        cmcListings: [],
        ownListings: [
            {
                id: 1,
                ticker: 'BTC',
                amount: 0.47
            },
            {
                id: 2001,
                ticker: 'COLX',
                amount: 100000
            }
        ]
    },

    // Store actions.
    actions: {
        fetchCMCListings(store) {
            axios.get('https://api.coinmarketcap.com/v2/listings/').then((response) => {
                store.commit('setCMCListings', response.data.data);
                store.dispatch('fetchOwnListings');
            }).catch(() => {
                // TODO: Create errors.
            });
        },
        fetchOwnListings(store) {
            store.state.ownListings.forEach((item) => {
                axios.get(`https://api.coinmarketcap.com/v2/ticker/${item.id}/?convert=EUR`).then((response) => {
                    store.commit('setOwnListings', response.data.data);
                }).catch(() => {
                    // TODO: Create errors.
                });
            });
        }
    },

    // Store mutations.
    mutations: {
        setCMCListings(state, data) {
            state.cmcListings = data;
        },
        setOwnListings(state, data) {
            state.ownListings = state.ownListings.map((item) => {
                if (item.id === data.id) {
                    return {
                        priceOfAmount: item.amount * data.quotes.EUR.price,
                        ...item
                    }
                } else {
                    return item;
                }
            });
        },

        addOwnListing(state, data) {
            console.log(data);
        }
    }
});
