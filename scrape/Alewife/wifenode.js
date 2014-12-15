var async = require('async');
var ba = require('beer-advocate-api');
beers = ["Left Hand Milk Stout ",
"Dogfish Head Olde School Barleywine ",
"Young’s Double Chocolate Stout ",
"Realalerevival Nanticoke Nectar ",
"Maine Beer Mean Old Tom -16oz 6.5%",
"Great Divide Hibernation Ale ",
"Allagash Odyssey ",
"Maine Beer Peeper ",
"De Ranke Guldenberg ",
"Ballast Point Dorado ",
"Millstone Cellars Farmgate ",
"Stone RuinTen ",
"Jailbreak Imperial Welcome to Scoville ",
"Jolly Pumpkin Luciernaga ",
"Ballast Point Big Eye ",
"Oskar Blues IceyPA *Limited* ",
"Union Craft Snowpants ",
"Charm City Meadworks Elderberry ",
"Ballast Point Sculpin ",
"Great Divide Claymore Scotch Ale ",
"Peak Organic Fresh Cut Pilsner ",
"DC Brau Penn Quarter Porter *Limited* ",
"Wyndridge Farm 10 Pt. Ale ",
"Tröegs Mad Elf ",
"Wyndridge Farm Laughing Crow ",
"Dogfish Head 60 Min ",
"Jolly Pumpkin/Upland Persimmon Ship ",
"Uinta Crooked Line Birthday Suit ",
"Firestone Opal ",
"Vicaris Winter 10° ",
"Victory Headwaters ",
"Union Craft Foxy Red ",
"Oskar Blues Christmas Chub ",
"Stone Enjoy By 12.26.14 ",
"Brasserie Dupont Saison Dupont ",
"New Belgium Le Terroir 2014 ",
"New Belgium Frambozen ",
"Stone Smoked Porter *Limited* ",
"Original Sin Cider ",
"Wyndridge Farm Cranberry Cider ",
]
async.each(beers, function(beer, callback){

  ba.beerSearch(beer, function(beerData) {
    var beerJSON = JSON.parse(beerData);

    if(beerJSON.length > 0){
      //console.log(beerJSON[0].beer_url);

      ba.beerPage(beerJSON[0].beer_url, function(berr){
        console.log(berr);
        callback(null);
      });
    }
  });
});
