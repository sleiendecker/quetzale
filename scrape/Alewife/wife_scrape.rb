require 'selenium-webdriver'

$driver = Selenium::WebDriver.for (:phantomjs)

$driver.get ('http://www.alewifebaltimore.com/menus-2/draught/')

beers = $driver.find_elements(:css, "td")

names = []

beers.each do |x|
  if !(x.text.empty?)
    x = x.text[/[^–]+/]
    names << '"' + x + '",'
  end
end

puts beers

# open and write to a file with ruby
open('wifenode.js', 'w') { |f|
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

