import axios from 'axios';

const LISTINGS_URL = 'https://api.coinmarketcap.com/v2/listings/';
const TICKER_URL = 'https://api.coinmarketcap.com/v2/ticker/{id}/?convert={currency}';

/**
* Fetch all CMC listings.
*
**/
export const fetchCMCListings = (callback) => {
    axios.get(LISTINGS_URL).then((response) => {
        callback(response.data.data);
        console.log('CoinService - fetchCMCListings: Success');
    }).catch((response) => {
        console.warn('CoinService - fetchCMCListings: Error');
    });
};

/**
* Fetch personal listing. pass coin / token ID, and currency.
*
**/
export const fetchOwnListing = (id, currency, callback) => {
    axios.get(TICKER_URL.replace('{id}', id).replace('{currency}', currency)).then((response) => {
        callback(response.data.data);
        console.log('CoinService - fetchOwnListing: Success');
    }).catch(() => {
        console.warn('CoinService - fetchOwnListings: Error');
    });
}
