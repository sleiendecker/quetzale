$wait = Selenium::WebDriver::Wait.new(:timeout => 10) # seconds



# Navigates to site passed as parameter, then verifies that it's loaded.
def nav_to(url)
  $driver.get url
  count = 0
  while count < 5 && !(url.include? "logout")
    if $driver.current_url != url
      sleep(1)
      count += 1
    else
      break
    end
  end
end

# Creates an array of element(s) being searched for. Timesout after 10 seconds.
# def exists(description)
#   counter = 0
#   while yield.length < 1
#     if counter > 9
#       raise "cannot find " + description
#     end
#     sleep(1)
#     counter += 1
#   end
#   return yield
# end


def exists(description, allow_failure = false)
  counter = 0
  while yield.length < 1
    if counter > 9
      if allow_failure
        return []
      else
        raise "cannot find " + description
      end      
    end
    sleep(0.5)
    counter += 1
  end
  return yield
end

