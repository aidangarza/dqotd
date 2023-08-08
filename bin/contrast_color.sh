#!/usr/bin/env node

const { contrastColor } = require('contrast-color');

// Get contrast color for a given color
const color = contrastColor({ bgColor: process.argv[2] });

console.log(color);