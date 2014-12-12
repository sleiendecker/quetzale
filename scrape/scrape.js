var async = require('async');
var ba = require('beer-advocate-api');


// Searches for a beer
// ba.beerSearch("Guinness", function(beers){
// 	console.log(beers);
// });


// Gets a specific beer page
// ba.beerPage("/beer/profile/29223/84343/", function(beer) {
//     console.log(beer);
// });



// urls = ["/beer/profile/64/9086/",
//  "/beer/profile/64/33832/?ba=bros",
//  "/beer/profile/64/6108/",
//  "/beer/profile/64/67219/?ba=bros",
//  "/beer/profile/64/6533/",
//  "/beer/profile/64/33832/",
//  "/beer/profile/64/139124/",
//  "/beer/profile/64/126246/",
//  "/beer/profile/64/126034/",
//  "/beer/profile/64/41702/",
//  "/beer/profile/64/70602/",
//  "/beer/profile/64/70602/?ba=bros",
//  "/beer/profile/64/139125/",
//  "/beer/profile/64/128727/",
//  "/beer/profile/64/2392/",
//  "/beer/profile/64/2392/?ba=bros",
//  "/beer/profile/64/89023/",
//  "/beer/profile/64/59588/"]

// for (i = 0; i < urls.length; i++) { 
//     ba.beerPage(urls[i], function(beer) {
//     // ba.beerPage("/beer/profile/29223/84343/", function(beer) {
//     console.log(beer);
// });
// }



// //////////////////

// beers = [
// 'Achouffe La Chouffe', 
// 'Adnams Tally ho', 
// 'Allagash Confluence', 
// 'Allagash White', 
// 'Blue Moon White', 
// 'Boulder Slope Style (Nitro)', 
// 'Boulevard Harvest Dance', 
// 'Brew By Numbers 04/02', 
// 'Brewers Art Resurrection', 
// 'Bruxton Tsar', 
// 'Bruxton Ace Edge', 
// 'Burning Sky Saison A la Provision', 
// 'Coniston Oatmeal Stout', 
// 'Crispin Cider', 
// 'Del Borgo My Antonia', 
// 'Delirium Tremens', 
// 'Domaine Dupont Brut Cidre', 
// 'DuClaw Sweet baby Jesus', 
// 'Flying Dog Double Dog (Nitro)', 
// 'Fruli Strawberry', 
// 'Harpoon UFO Raspberry', 
// 'Heavy Seas Loose Cannon', 
// 'Hofbrau Hefeweizen', 
// 'Laughing Dog Triple Squared', 
// 'Lindemans Framboise', 
// 'Magic Rock Human Cannonball', 
// 'Magic Rock/Kissmeyer Salty Kiss', 
// 'New Belgium Frambozen', 
// 'New Belgium Fat Tire', 
// 'Pressure Drop Wu Gang Chops the Tree', 
// 'Ridgeway Bitter', 
// 'Siren/ To Ol Tickle Monster', 
// 'Siren/Hill Farmstead/Mikkeller Lemoncello', 
// 'Siren/Prairie Ratchet', 
// 'Steigl Lager', 
// 'The Bruery 7 Swans a Swimming', 
// 'Union Duckpin Pale Ale', 
// 'Weird Beard Something Something Darkside', 
// 'Weird Beard Black Perle', 
// 'Yards Love Stout (Nitro)', 
// ' New Belgium La Folie']




// async.each(beers, function(beer, callback){
//   ba.beerSearch(beer, function(beerData) {
//   	var beerJSON = JSON.parse(beerData);
//   	if(beerJSON.length > 0){
// 	  	console.log(beerJSON[0].beer_url);
// 	  	ba.beerPage(beerJSON[0].beer_url, function(berr){
// 	  		console.log(berr);
// 	  		callback(null);
// 	  	});
//   	}
// 	});
// });



// /////////////  WEBDRIVER /////////////

var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();

driver.get('http://www.maxs.com');
var items = driver.findElements(webdriver.By.css('.content li'));


 console.log(items);


driver.quit();