# Grabs all tables
table = $driver.find_elements(:css, "table")

# Grabs all rows in the 4th table
rows = table[3].find_elements(:css, "tr")


hash = Hash.new

# First three rows aren't actual beers
for x in 3..rows.length 
	name = $driver.find_element(:css, "#baContent > div:nth-child(7) > table > tbody > tr:nth-child(#{x}) > td:nth-child(1) > a")
	beer = name.text
	url = name.attribute("href") 
	hash[beer] = url
end
