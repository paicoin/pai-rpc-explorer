var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");
var ltc = require("./coins/pai.js");

module.exports = {
	"BTC": btc,
	"LTC": ltc,
	"PAI": ltc,

	"coins":["BTC", "LTC", "PAI"]
};