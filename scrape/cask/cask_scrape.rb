require 'selenium-webdriver'
require_relative '../functions'

$driver = Selenium::WebDriver.for(:phantomjs)
# $driver = Selenium::WebDriver.for(:firefox)

$driver.get("http://www.brewerscask.com/beer-menu/")
# content = $driver.find_elements(:css, ".content")
beers = exists('beers') {$driver.find_elements(:css, ".beername")}

names = []
beers.each do |x|
	if !(x.text.empty?)
		# names << x.text
		names << '"' + x.text + '",'
	end
end


# method = build_array


# open and write to a file with ruby
open('casknode.js', 'w') { |f|
  # f.puts build_array(names)
  f.puts "var async = require('async');"
	f.puts "var ba = require('beer-advocate-api');"
  f.print "beers = ["
  f.puts names
  f.puts "]"
  
  f.puts "async.each(beers, function(beer, callback){

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
});"
}



$driver.quit

