var beers = [
{ beer_name: 'Brooklyn Black Chocolate Stout',
  beer_style: '',
  beer_abv: '10.00%',
  brewery_name: 'Brooklyn Brewery',
  brewery_state: '',
  brewery_country: '',
  ba_score: '93',
  ba_rating: 'outstanding',
  bros_score: '92',
  bros_rating: 'outstanding',
  ratings: '5,832',
  reviews: '2,659\n',
  rAvg: '4.15',
  pDev: '10.84%',
  beer_url: 'http://beeradvocate.com/beer/profile/45/680/' }
,
{ beer_name: 'The Truth Imperial IPA',
  beer_style: '',
  beer_abv: '8.70%',
  brewery_name: 'Flying Dog Brewery',
  brewery_state: '',
  brewery_country: '',
  ba_score: '92',
  ba_rating: 'outstanding',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '284',
  reviews: '34\n',
  rAvg: '4.14',
  pDev: '9.9%',
  beer_url: 'http://beeradvocate.com/beer/profile/68/97457/' }
,
{ beer_name: 'Peach Grand Cru',
  beer_style: '',
  beer_abv: '12.00%',
  brewery_name: 'Great Divide Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '81',
  ba_rating: 'good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '84',
  reviews: '12\n',
  rAvg: '3.53',
  pDev: '17.56%',
  beer_url: 'http://beeradvocate.com/beer/profile/158/104889/' }
,
{ beer_name: 'Batch 074',
  beer_style: '',
  beer_abv: '7.50%',
  brewery_name: 'Jailbreak Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '-',
  ba_rating: 'no score',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '8',
  reviews: '0\n',
  rAvg: '3.68',
  pDev: '7.07%',
  beer_url: 'http://beeradvocate.com/beer/profile/34426/146441/' }
,
{ beer_name: 'UFO White',
  beer_style: '',
  beer_abv: '4.80%',
  brewery_name: 'Harpoon Brewery & Beer Hall',
  brewery_state: '',
  brewery_country: '',
  ba_score: '82',
  ba_rating: 'good',
  bros_score: '86',
  bros_rating: 'very good',
  ratings: '1,151',
  reviews: '216\n',
  rAvg: '3.6',
  pDev: '15%',
  beer_url: 'http://beeradvocate.com/beer/profile/98/48933/' }
,
{ beer_name: 'Heyday',
  beer_style: '',
  beer_abv: '5.20%',
  brewery_name: 'Great Divide Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '79',
  ba_rating: 'okay',
  bros_score: '79',
  bros_rating: 'okay',
  ratings: '349',
  reviews: '68\n',
  rAvg: '3.45',
  pDev: '13.33%',
  beer_url: 'http://beeradvocate.com/beer/profile/158/91519/' }
,
{ beer_name: 'Brown Ale',
  beer_style: '',
  beer_abv: '6.00%',
  brewery_name: 'Monument City Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '-',
  ba_rating: 'no score',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '3',
  reviews: '0\n',
  rAvg: '3.49',
  pDev: '6.59%',
  beer_url: 'http://beeradvocate.com/beer/profile/37463/144261/' }
,
{ beer_name: 'Lagunitas Imperial Red Ale',
  beer_style: '',
  beer_abv: '7.80%',
  brewery_name: 'Lagunitas Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '92',
  ba_rating: 'outstanding',
  bros_score: '91',
  bros_rating: 'outstanding',
  ratings: '2,084',
  reviews: '765\n',
  rAvg: '4.12',
  pDev: '9.95%',
  beer_url: 'http://beeradvocate.com/beer/profile/220/22387/' }
,
{ beer_name: 'Harpoon Winter Warmer',
  beer_style: '',
  beer_abv: '5.90%',
  brewery_name: 'Harpoon Brewery & Beer Hall',
  brewery_state: '',
  brewery_country: '',
  ba_score: '74',
  ba_rating: 'okay',
  bros_score: '50',
  bros_rating: 'awful',
  ratings: '1,357',
  reviews: '623\n',
  rAvg: '3.18',
  pDev: '20.75%',
  beer_url: 'http://beeradvocate.com/beer/profile/98/310/' }
,
{ beer_name: 'Frambozen Raspberry Brown Ale',
  beer_style: '',
  beer_abv: '6.50%',
  brewery_name: 'New Belgium Brewing',
  brewery_state: '',
  brewery_country: '',
  ba_score: '83',
  ba_rating: 'good',
  bros_score: '85',
  bros_rating: 'very good',
  ratings: '779',
  reviews: '377\n',
  rAvg: '3.63',
  pDev: '14.05%',
  beer_url: 'http://beeradvocate.com/beer/profile/192/1910/' }
,
{ beer_name: 'Milk Stout Nitro',
  beer_style: '',
  beer_abv: '6.00%',
  brewery_name: 'Left Hand Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '93',
  ba_rating: 'outstanding',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '1,225',
  reviews: '92\n',
  rAvg: '4.15',
  pDev: '12.29%',
  beer_url: 'http://beeradvocate.com/beer/profile/418/115076/' }
,
{ beer_name: 'Limbo IPA',
  beer_style: '',
  beer_abv: '7.60%',
  brewery_name: 'Long Trail Brewing Co.',
  brewery_state: '',
  brewery_country: '',
  ba_score: '92',
  ba_rating: 'outstanding',
  bros_score: '85',
  bros_rating: 'very good',
  ratings: '1,302',
  reviews: '156\n',
  rAvg: '4.09',
  pDev: '10.76%',
  beer_url: 'http://beeradvocate.com/beer/profile/94/101392/' }
,
{ beer_name: 'Peak Organic Espresso Amber Ale',
  beer_style: '',
  beer_abv: '7.00%',
  brewery_name: 'Peak Organic Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '85',
  ba_rating: 'very good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '199',
  reviews: '114\n',
  rAvg: '3.77',
  pDev: '14.32%',
  beer_url: 'http://beeradvocate.com/beer/profile/13884/45629/' }
,
{ beer_name: 'Tröegs Mad Elf',
  beer_style: '',
  beer_abv: '11.00%',
  brewery_name: 'Tröegs Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '87',
  ba_rating: 'very good',
  bros_score: '86',
  bros_rating: 'very good',
  ratings: '3,313',
  reviews: '1,171\n',
  rAvg: '3.87',
  pDev: '15.76%',
  beer_url: 'http://beeradvocate.com/beer/profile/694/7531/' }
,
{ beer_name: 'Compass',
  beer_style: '',
  beer_abv: '9.00%',
  brewery_name: 'Southern Tier Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '87',
  ba_rating: 'very good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '574',
  reviews: '119\n',
  rAvg: '3.85',
  pDev: '10.91%',
  beer_url: 'http://beeradvocate.com/beer/profile/3818/94240/' }
];






displayNames(beers);

// function displayNames(arr) {
//     var out = "";
//     var i;
//     for(i = 0; i < arr.length; i++) {
        
//         out += '<tr><td>' + arr[i].brewery_name + " - "+ arr[i].beer_name + '</td>';
//         out += '<td>' + arr[i].beer_abv + '</td>';
//         out += '<td>' + arr[i].ba_score + '</td>';
//         out += '<td>' + arr[i].bros_score + '</td>';
//         out += '<td>' + arr[i].ratings + '</td></tr>';
//     }
//     document.getElementById("id01").innerHTML = out;
// }



function displayNames(arr) {
    
    var table = document.getElementById("id01").getElementsByTagName("tbody")[0];
    for(i = 0; i < arr.length; i++) {
        var newTr = table.insertRow(-1);
        newTr.insertCell(-1).appendChild(document.createTextNode(arr[i].brewery_name));
        newTr.insertCell(-1).appendChild(document.createTextNode(arr[i].beer_name));
        newTr.insertCell(-1).appendChild(document.createTextNode(arr[i].beer_abv));
        newTr.insertCell(-1).appendChild(document.createTextNode(arr[i].ba_score));
        newTr.insertCell(-1).appendChild(document.createTextNode(arr[i].bros_score));
        newTr.insertCell(-1).appendChild(document.createTextNode(arr[i].ratings));
        // newTr.insertCell(-1).appendChild(document.createTextNode(ages[i]));
    }
    }


