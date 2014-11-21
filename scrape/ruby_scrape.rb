require_relative 'local'
require_relative 'functions'
require_relative 'get_beer_urls'
require_relative 'beers_by_brewery'



RSpec.configure do |c|

  c.include AllureRSpec::Adaptor

  c.before(:all) do
    #intialize selenium session
    $driver = Selenium::WebDriver.for(:firefox)

    #for headless testing
    # $driver = Selenium::WebDriver.for(:phantomjs)
    
    # $driver.manage.window.resize_to(1920,1280)

    nav_to("http://www.beeradvocate.com/place/directory/0/US/")
    # sleep 1
    
    countries = get_countries

  end

  c.after(:all) do
    $driver.quit
  end
end

AllureRSpec.configure do |c|
  c.output_dir = "results/allure"
end


describe 'Get US brews' do
	it 'gets all of the beers' do |e|
		# e.step "get the countries" do
		# 	countries = get_countries
		# end
		e.step "click the first country" do
			open_country(1)
			handle_breweries_link
	end
	end
end


