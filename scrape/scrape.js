var ba = require('beer-advocate-api');


// Searches for a beer
// ba.beerSearch("Guinness", function(beers){
// 	console.log(beers);
// });


// Gets a specific beer page
// ba.beerPage("/beer/profile/29223/84343/", function(beer) {
//     console.log(beer);
// });



urls = ["/beer/profile/694/15881",
"/beer/profile/192/607",
"/beer/profile/147/6301",
"/beer/profile/694/6322",
"/beer/profile/610/1655",
"/beer/profile/132/1173",
"/beer/profile/287/794",
"/beer/profile/220/3711",
"/beer/profile/112/410",
"/beer/profile/220/22387",
"/beer/profile/220/35397",
"/beer/profile/2743/35732",
"/beer/profile/29/43118",
"/beer/profile/132/363",
"/beer/profile/20681/54522",
"/beer/profile/132/1597",
"/beer/profile/193/623",
"/beer/profile/651/18721",
"/beer/profile/96/60620",
"/beer/profile/811/2526""]



for (i = 0; i < urls.length; i++) { 
    ba.beerPage(urls[i], function(beer) {
    // ba.beerPage("/beer/profile/29223/84343/", function(beer) {
    console.log(beer);
});
}

