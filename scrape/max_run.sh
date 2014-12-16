#!/bin/bash
# ruby -v	


ruby maxs/max_scrape.rb;
node maxs/maxnode.js -f json > maxs/results.json;