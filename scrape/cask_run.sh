#!/bin/bash
# ruby -v	


ruby cask/cask_scrape.rb;
node cask/casknode.js -f json > cask/results.json;