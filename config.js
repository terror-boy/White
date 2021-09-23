/* Copyright (C) 2021 TERROR-BOY.
WhiteDevil - TERROR-BOY
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v8.0.0',
    BTN1: process.env.BUTTON_ONE === undefined ? 'Button 1' : process.env.BUTTON_ONE,
    BTN2: process.env.BUTTON_TWO === undefined ? 'Button 2' : process.env.BUTTON_TWO,

};
