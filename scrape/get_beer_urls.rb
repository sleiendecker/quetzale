

def get_url_beers
	body = exists('body') {$driver.find_elements(:tag_name, "tbody")}

	anchors = body[3].find_elements(:css, "a")

	beers = []
	urls = []

	for anchor in anchors
		if anchor.attribute("href").include? "/profile/"
			urls << anchor.attribute("href")
			beers << anchor.text
		end
	end

end

# var arr1 = ["asdas", "asdas", "fafad", "afa"];
# var arr2 = [2, 3, 3, 5, 5];
# var both = {};

# var count = 0;
# arr1.forEach(function(thing) {
#  var newThing = {
#      val1: thing,
#      val2: arr2[count]
#  };
#  both.push(newThing);
#  count++;
# });

# urls.map {|i| i.include?(',') ? }(i.split /, )

# Hash[beers.zip(urls.map {|i| i.include?(',') ? (i.split /, /) : i})
