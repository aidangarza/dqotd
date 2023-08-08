#!/usr/bin/env node

const randomColor = require('randomcolor');

// Generate a random color
const color = randomColor({ luminosity: 'bright' });

console.log(color);