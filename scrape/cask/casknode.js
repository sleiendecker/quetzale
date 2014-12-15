var async = require('async');
var ba = require('beer-advocate-api');
beers = ["Blue Mountain Barrel House Lights Out",
"Brooklyn Black Chocolate Stout",
"Crispin Pear Cider",
"Flying Dog The Truth",
"Great Divide Heyday",
"Great Divide Peach Grand Cru",
"Harpoon Ufo White",
"Harpoon Winter Warmer",
"Jacko Traveler Shandy",
"Jailbreak Batch 074",
"Lagunitas Imperial Red",
"Left Hand Milk Stout Nitro",
"Long Trail Limbo",
"Monument City Brown Ale",
"New Belgium Frambozen",
"Peak Organic Espresso Amber Ale",
"RAR Mindlayer",
"Southern Tier Compass",
"Tröegs Mad Elf",
]
async.each(beers, function(beer, callback){

  ba.beerSearch(beer, function(beerData) {
  	var beerJSON = JSON.parse(beerData);

  	if(beerJSON.length > 0){
	  	//console.log(beerJSON[0].beer_url);

	  	ba.beerPage(beerJSON[0].beer_url, function(berr){
	  		console.log(beerJSON[0].beer_url)
	  		console.log(berr);
	  		callback(null);
	  	});
  	}
	});
});
