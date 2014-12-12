class State
	
	def initialize
		@table
		@rows
	end

	def get_table
		@table = exists("table") {$driver.find_elements(:css, "table")}
		return @table[0]
	end

	def next?
		@table = get_table
		@rows = @table.find_elements(:css, 'tr')
		@nav = @rows[-1]
		anchors = $driver.find_elements(:css, "a")
		found = false
		anchors.each do |x|
			if x.text.include? "next"
				found = true
			end
			puts found
		end
	end

end
# Navigates to site passed as parameter, then verifies that it's loaded.
def nav_to(url)
  $driver.get url
  count = 0
  while count < 5
    if $driver.current_url != url
      sleep(1)
      count += 1
    else
      break
    end
  end
end

# Creates an array of element(s) being searched for. Timesout after 10 seconds.
def exists(description)
  counter = 0
  while yield.length < 1
    if counter > 9
      raise "cannot find " + description
    end
    sleep(1)
    counter += 1
  end
  return yield
end





def get_countries
	table = exists("table") {$driver.find_elements(:css, "table")}
	countries = table[0].find_elements(:css, "li a")
	return countries
end

def open_country(index)
	countries = get_countries
	countries[index].click
end

# Not working for some reason...
	# brewery = exists("breweries") {$driver.find_elements(:css, "li :contains(Breweries)")}

# This is for when the driver is on the country page
# It returns the 'brewery' link, whether or not it has an anchor
def get_breweries_link
	body = $driver.find_elements(:css, "tbody")
	brewery = body[1].find_elements(:css, "li")	
	return brewery[0]
end

def breweries_avail?
	brewery = get_breweries_link
	if brewery.attribute('a')
		puts "attribute A exists!"
		puts "breweries_avail is true"
		return true
	end
		puts "attribute A does NOT exist!"
		puts "breweries_avail is false"
		return false
end


def get_brewery_list
	breweries = exists('breweries') {$driver.find_elements(:css, 'a[href*="beer/profile"]')}
	return breweries
end

def handle_breweries_link
	if (breweries_avail?)
		puts "breweries_avail is true"
	else
		puts "breweries_avail is false"
	end


	if breweries_avail? == true
		puts "Clicking anchor..."
		brewery = get_breweries_link
		brewery.click
		sleep(2)
		get_brewery_list
	else
		puts "Going back to directory"
		nav_to("http://www.beeradvocate.com/place/directory/?show=all")
	end
end



def get_brewery_list
	breweries = $driver.find_elements(:css, 'a[href*="beer/profile"]')
	return breweries
end


