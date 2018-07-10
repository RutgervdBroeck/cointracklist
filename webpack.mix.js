const mix = require('laravel-mix');

// Compile javascript assets
mix.js('resources/scripts/main.js', 'public/assets/scripts/bundle.js');
