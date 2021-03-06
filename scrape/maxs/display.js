// var beers = [];
// beers.push(DATA);

var beers = [
{ beer_name: 'Allagash White',
  beer_style: '',
  beer_abv: '5.00%',
  brewery_name: 'Allagash Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '93',
  ba_rating: 'outstanding',
  bros_score: '100',
  bros_rating: 'world-class',
  ratings: '4,281',
  reviews: '1,270\n',
  rAvg: '4.15',
  pDev: '12.05%',
  beer_url: 'http://beeradvocate.com/beer/profile/4/59/' }
,
{ beer_name: 'Tongue Buckler',
  beer_style: '',
  beer_abv: '10.00%',
  brewery_name: 'Imperial Red Ale',
  brewery_state: '',
  brewery_country: '',
  ba_score: '88',
  ba_rating: 'very good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '715',
  reviews: '204\n',
  rAvg: '3.9',
  pDev: '11.79%',
  beer_url: 'http://beeradvocate.com/beer/profile/199/7306/' }
,
{ beer_name: 'Blue Moon Belgian White',
  beer_style: '',
  beer_abv: '5.40%',
  brewery_name: 'Coors Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '78',
  ba_rating: 'okay',
  bros_score: '80',
  bros_rating: 'good',
  ratings: '5,740',
  reviews: '1,481\n',
  rAvg: '3.39',
  pDev: '18.88%',
  beer_url: 'http://beeradvocate.com/beer/profile/306/1212/' }
,
{ beer_name: 'La Chouffe',
  beer_style: '',
  beer_abv: '8.00%',
  brewery_name: 'Brasserie d\'Achouffe',
  brewery_state: '',
  brewery_country: '',
  ba_score: '94',
  ba_rating: 'outstanding',
  bros_score: '99',
  bros_rating: 'world-class',
  ratings: '2,047',
  reviews: '824\n',
  rAvg: '4.21',
  pDev: '10.93%',
  beer_url: 'http://beeradvocate.com/beer/profile/321/1836/' }
,
{ beer_name: 'Sculpin IPA',
  beer_style: '',
  beer_abv: '7.00%',
  brewery_name: 'Ballast Point Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '98',
  ba_rating: 'world-class',
  bros_score: '100',
  bros_rating: 'world-class',
  ratings: '10,331',
  reviews: '2,105\n',
  rAvg: '4.41',
  pDev: '9.98%',
  beer_url: 'http://beeradvocate.com/beer/profile/199/29619/' }
,
{ beer_name: 'Arise',
  beer_style: '',
  beer_abv: '4.40%',
  brewery_name: 'Burning Sky Brewery',
  brewery_state: '',
  brewery_country: '',
  ba_score: '-',
  ba_rating: 'no score',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '2',
  reviews: '1\n',
  rAvg: '4.06',
  pDev: '1.48%',
  beer_url: 'http://beeradvocate.com/beer/profile/33194/132580/' }
,
{ beer_name: 'Harvest Dance',
  beer_style: '',
  beer_abv: '9.50%',
  brewery_name: 'Boulevard Brewing Co.',
  brewery_state: '',
  brewery_country: '',
  ba_score: '90',
  ba_rating: 'outstanding',
  bros_score: '90',
  bros_rating: 'outstanding',
  ratings: '657',
  reviews: '269\n',
  rAvg: '4.03',
  pDev: '10.92%',
  beer_url: 'http://beeradvocate.com/beer/profile/423/53764/' }
,
{ beer_name: 'Bling',
  beer_style: '',
  beer_abv: '10.00%',
  brewery_name: 'Burley Oak Brewery',
  brewery_state: '',
  brewery_country: '',
  ba_score: '84',
  ba_rating: 'good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '15',
  reviews: '1\n',
  rAvg: '3.72',
  pDev: '6.45%',
  beer_url: 'http://beeradvocate.com/beer/profile/26749/111711/' }
,
{ beer_name: 'The Sun Roi',
  beer_style: '',
  beer_abv: '10.10%',
  brewery_name: 'The Brewer\'s Art',
  brewery_state: '',
  brewery_country: '',
  ba_score: '-',
  ba_rating: 'no score',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '4',
  reviews: '2\n',
  rAvg: '3.83',
  pDev: '2.87%',
  beer_url: 'http://beeradvocate.com/beer/profile/997/75676/' }
,
{ beer_name: 'Tart Attack',
  beer_style: '',
  beer_abv: '6.40%',
  brewery_name: 'Burley Oak Brewery',
  brewery_state: '',
  brewery_country: '',
  ba_score: '85',
  ba_rating: 'very good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '36',
  reviews: '1\n',
  rAvg: '3.76',
  pDev: '19.41%',
  beer_url: 'http://beeradvocate.com/beer/profile/26749/109365/' }
,
{ beer_name: 'Brewer\'s Art Resurrection',
  beer_style: '',
  beer_abv: '7.00%',
  brewery_name: 'The Brewer\'s Art',
  brewery_state: '',
  brewery_country: '',
  ba_score: '87',
  ba_rating: 'very good',
  bros_score: '85',
  bros_rating: 'very good',
  ratings: '429',
  reviews: '151\n',
  rAvg: '3.85',
  pDev: '12.21%',
  beer_url: 'http://beeradvocate.com/beer/profile/997/7097/' }
,
{ beer_name: 'Saison A La Provision',
  beer_style: '',
  beer_abv: '6.50%',
  brewery_name: 'Burning Sky Brewery',
  brewery_state: '',
  brewery_country: '',
  ba_score: '-',
  ba_rating: 'no score',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '6',
  reviews: '0\n',
  rAvg: '3.75',
  pDev: '15.47%',
  beer_url: 'http://beeradvocate.com/beer/profile/33194/105734/' }
,
{ beer_name: 'Special Oatmeal Stout',
  beer_style: '',
  beer_abv: '4.50%',
  brewery_name: 'Coniston Brewing Co. Ltd',
  brewery_state: '',
  brewery_country: '',
  ba_score: '76',
  ba_rating: 'okay',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '15',
  reviews: '6\n',
  rAvg: '3.01',
  pDev: '29.9%',
  beer_url: 'http://beeradvocate.com/beer/profile/298/87366/' }
,
{ beer_name: 'Bluebird Bitter',
  beer_style: '',
  beer_abv: '4.20%',
  brewery_name: 'Coniston Brewing Co. Ltd',
  brewery_state: '',
  brewery_country: '',
  ba_score: '87',
  ba_rating: 'very good',
  bros_score: '94',
  bros_rating: 'outstanding',
  ratings: '378',
  reviews: '275\n',
  rAvg: '3.87',
  pDev: '13.18%',
  beer_url: 'http://beeradvocate.com/beer/profile/298/828/' }
,
{ beer_name: 'Delirium Noël',
  beer_style: '',
  beer_abv: '10.00%',
  brewery_name: 'Brouwerij Huyghe',
  brewery_state: '',
  brewery_country: '',
  ba_score: '87',
  ba_rating: 'very good',
  bros_score: '81',
  bros_rating: 'good',
  ratings: '1,622',
  reviews: '718\n',
  rAvg: '3.87',
  pDev: '13.18%',
  beer_url: 'http://beeradvocate.com/beer/profile/180/2347/' }
,
{ beer_name: 'Delirium Tremens',
  beer_style: '',
  beer_abv: '8.50%',
  brewery_name: 'Brouwerij Huyghe',
  brewery_state: '',
  brewery_country: '',
  ba_score: '92',
  ba_rating: 'outstanding',
  bros_score: '90',
  bros_rating: 'outstanding',
  ratings: '4,741',
  reviews: '1,561\n',
  rAvg: '4.12',
  pDev: '12.38%',
  beer_url: 'http://beeradvocate.com/beer/profile/180/1385/' }
,
{ beer_name: 'American Beauty',
  beer_style: '',
  beer_abv: '9.00%',
  brewery_name: 'Dogfish Head Brewery',
  brewery_state: '',
  brewery_country: '',
  ba_score: '87',
  ba_rating: 'very good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '757',
  reviews: '109\n',
  rAvg: '3.83',
  pDev: '11.49%',
  beer_url: 'http://beeradvocate.com/beer/profile/64/101085/' }
,
{ beer_name: 'Van Diest Früli Strawberry Beer',
  beer_style: '',
  beer_abv: '4.10%',
  brewery_name: 'Brouwerij Huyghe',
  brewery_state: '',
  brewery_country: '',
  ba_score: '79',
  ba_rating: 'okay',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '387',
  reviews: '180\n',
  rAvg: '3.44',
  pDev: '19.48%',
  beer_url: 'http://beeradvocate.com/beer/profile/180/12738/' }
,
{ beer_name: 'Double Jack',
  beer_style: '',
  beer_abv: '9.50%',
  brewery_name: 'Firestone Walker Brewing Co.',
  brewery_state: '',
  brewery_country: '',
  ba_score: '97',
  ba_rating: 'world-class',
  bros_score: '90',
  bros_rating: 'outstanding',
  ratings: '6,437',
  reviews: '1,231\n',
  rAvg: '4.34',
  pDev: '8.99%',
  beer_url: 'http://beeradvocate.com/beer/profile/2210/50697/' }
,
{ beer_name: 'UFO Raspberry Hefeweizen',
  beer_style: '',
  beer_abv: '4.80%',
  brewery_name: 'Harpoon Brewery & Beer Hall',
  brewery_state: '',
  brewery_country: '',
  ba_score: '82',
  ba_rating: 'good',
  bros_score: '93',
  bros_rating: 'outstanding',
  ratings: '683',
  reviews: '250\n',
  rAvg: '3.58',
  pDev: '18.44%',
  beer_url: 'http://beeradvocate.com/beer/profile/98/28672/' }
,
{ beer_name: 'Postman\'s Knock',
  beer_style: '',
  beer_abv: '4.80%',
  brewery_name: 'Hobsons Brewery',
  brewery_state: '',
  brewery_country: '',
  ba_score: '91',
  ba_rating: 'outstanding',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '20',
  reviews: '6\n',
  rAvg: '4.2',
  pDev: '15.95%',
  beer_url: 'http://beeradvocate.com/beer/profile/12272/36547/' }
,
{ beer_name: 'Old Engine Oil',
  beer_style: '',
  beer_abv: '6.00%',
  brewery_name: 'Harviestoun Brewery Ltd.',
  brewery_state: '',
  brewery_country: '',
  ba_score: '93',
  ba_rating: 'outstanding',
  bros_score: '100',
  bros_rating: 'world-class',
  ratings: '1,448',
  reviews: '745\n',
  rAvg: '4.14',
  pDev: '10.63%',
  beer_url: 'http://beeradvocate.com/beer/profile/323/875/' }
,
{ beer_name: '60 Minute IPA',
  beer_style: '',
  beer_abv: '6.00%',
  brewery_name: 'Dogfish Head Brewery',
  brewery_state: '',
  brewery_country: '',
  ba_score: '92',
  ba_rating: 'outstanding',
  bros_score: '93',
  bros_rating: 'outstanding',
  ratings: '9,742',
  reviews: '2,627\n',
  rAvg: '4.09',
  pDev: '11.49%',
  beer_url: 'http://beeradvocate.com/beer/profile/64/6108/' }
,
{ beer_name: 'Manor Ale',
  beer_style: '',
  beer_abv: '4.20%',
  brewery_name: 'Hobsons Brewery',
  brewery_state: '',
  brewery_country: '',
  ba_score: '92',
  ba_rating: 'outstanding',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '18',
  reviews: '5\n',
  rAvg: '4.35',
  pDev: '15.4%',
  beer_url: 'http://beeradvocate.com/beer/profile/12272/32655/' }
,
{ beer_name: 'Heavy Seas Loose Cannon',
  beer_style: '',
  beer_abv: '7.25%',
  brewery_name: 'American Hop3 Ale',
  brewery_state: '',
  brewery_country: '',
  ba_score: '90',
  ba_rating: 'outstanding',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '2,869',
  reviews: '1,157\n',
  rAvg: '4.02',
  pDev: '11.69%',
  beer_url: 'http://beeradvocate.com/beer/profile/898/25755/' }
,
{ beer_name: 'Mary Jane IPA',
  beer_style: '',
  beer_abv: '6.00%',
  brewery_name: 'Ilkley Brewery Co.',
  brewery_state: '',
  brewery_country: '',
  ba_score: '85',
  ba_rating: 'very good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '20',
  reviews: '4\n',
  rAvg: '3.78',
  pDev: '10.58%',
  beer_url: 'http://beeradvocate.com/beer/profile/24247/93786/' }
,
{ beer_name: 'Koutská 10° Desítka',
  beer_style: '',
  beer_abv: '4.20%',
  brewery_name: 'Pivovar Kout na Šumavě',
  brewery_state: '',
  brewery_country: '',
  ba_score: '91',
  ba_rating: 'outstanding',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '14',
  reviews: '2\n',
  rAvg: '4.27',
  pDev: '11.24%',
  beer_url: 'http://beeradvocate.com/beer/profile/22074/59033/' }
,
{ beer_name: 'Dusk Till Dawn',
  beer_style: '',
  beer_abv: '11.10%',
  brewery_name: 'Jailbreak Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '82',
  ba_rating: 'good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '17',
  reviews: '0\n',
  rAvg: '3.58',
  pDev: '16.76%',
  beer_url: 'http://beeradvocate.com/beer/profile/34426/118527/' }
,
{ beer_name: 'Triple Squared',
  beer_style: '',
  beer_abv: '9.00%',
  brewery_name: 'Laughing Dog Brewing',
  brewery_state: '',
  brewery_country: '',
  ba_score: '-',
  ba_rating: 'no score',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '8',
  reviews: '3\n',
  rAvg: '3.64',
  pDev: '15.38%',
  beer_url: 'http://beeradvocate.com/beer/profile/12985/139832/' }
,
{ beer_name: 'Sweet Baby Jesus',
  beer_style: '',
  beer_abv: '6.50%',
  brewery_name: 'DuClaw Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '85',
  ba_rating: 'very good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '1,569',
  reviews: '218\n',
  rAvg: '3.77',
  pDev: '15.38%',
  beer_url: 'http://beeradvocate.com/beer/profile/1924/88269/' }
,
{ beer_name: 'The Mayan (Chocolate Chipotle Stout)',
  beer_style: '',
  beer_abv: '6.50%',
  brewery_name: 'Ilkley Brewery Co.',
  brewery_state: '',
  brewery_country: '',
  ba_score: '87',
  ba_rating: 'very good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '35',
  reviews: '6\n',
  rAvg: '3.9',
  pDev: '10%',
  beer_url: 'http://beeradvocate.com/beer/profile/24247/102910/' }
,
{ beer_name: 'Mahr\'s Christmas Bock',
  beer_style: '',
  beer_abv: '6.00%',
  brewery_name: 'Mahrs-Bräu',
  brewery_state: '',
  brewery_country: '',
  ba_score: '83',
  ba_rating: 'good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '228',
  reviews: '172\n',
  rAvg: '3.66',
  pDev: '12.3%',
  beer_url: 'http://beeradvocate.com/beer/profile/428/14899/' }
,
{ beer_name: 'Human Cannonball',
  beer_style: '',
  beer_abv: '9.20%',
  brewery_name: 'Magic Rock Brewing',
  brewery_state: '',
  brewery_country: '',
  ba_score: '88',
  ba_rating: 'very good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '14',
  reviews: '5\n',
  rAvg: '4.06',
  pDev: '15.02%',
  beer_url: 'http://beeradvocate.com/beer/profile/26623/77569/' }
,
{ beer_name: 'MO',
  beer_style: '',
  beer_abv: '6.00%',
  brewery_name: 'Maine Beer Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '96',
  ba_rating: 'world-class',
  bros_score: '100',
  bros_rating: 'world-class',
  ratings: '2,326',
  reviews: '328\n',
  rAvg: '4.29',
  pDev: '8.62%',
  beer_url: 'http://beeradvocate.com/beer/profile/20681/78906/' }
,
{ beer_name: 'Lindemans Framboise',
  beer_style: '',
  beer_abv: '2.50%',
  brewery_name: 'Brouwerij Lindemans',
  brewery_state: '',
  brewery_country: '',
  ba_score: '87',
  ba_rating: 'very good',
  bros_score: '81',
  bros_rating: 'good',
  ratings: '2,356',
  reviews: '959\n',
  rAvg: '3.85',
  pDev: '15.06%',
  beer_url: 'http://beeradvocate.com/beer/profile/187/599/' }
,
{ beer_name: 'Mexas Ranger',
  beer_style: '',
  beer_abv: '6.60%',
  brewery_name: 'Mikkeller ApS',
  brewery_state: '',
  brewery_country: '',
  ba_score: '87',
  ba_rating: 'very good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '131',
  reviews: '27\n',
  rAvg: '3.85',
  pDev: '13.51%',
  beer_url: 'http://beeradvocate.com/beer/profile/13307/81214/' }
,
{ beer_name: 'Red/White Christmas',
  beer_style: '',
  beer_abv: '8.00%',
  brewery_name: 'Mikkeller ApS',
  brewery_state: '',
  brewery_country: '',
  ba_score: '86',
  ba_rating: 'very good',
  bros_score: '90',
  bros_rating: 'outstanding',
  ratings: '115',
  reviews: '47\n',
  rAvg: '3.81',
  pDev: '16.8%',
  beer_url: 'http://beeradvocate.com/beer/profile/13307/55048/' }
,
{ beer_name: 'Fat Tire Amber Ale',
  beer_style: '',
  beer_abv: '5.20%',
  brewery_name: 'New Belgium Brewing',
  brewery_state: '',
  brewery_country: '',
  ba_score: '82',
  ba_rating: 'good',
  bros_score: '82',
  bros_rating: 'good',
  ratings: '7,093',
  reviews: '1,824\n',
  rAvg: '3.59',
  pDev: '15.04%',
  beer_url: 'http://beeradvocate.com/beer/profile/192/607/' }
,
{ beer_name: 'Dual Artisanship',
  beer_style: '',
  beer_abv: '7.00%',
  brewery_name: 'Perennial Artisan Ales',
  brewery_state: '',
  brewery_country: '',
  ba_score: '88',
  ba_rating: 'very good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '88',
  reviews: '9\n',
  rAvg: '3.94',
  pDev: '7.87%',
  beer_url: 'http://beeradvocate.com/beer/profile/25888/118952/' }
,
{ beer_name: 'Criminally Bad Elf',
  beer_style: '',
  beer_abv: '10.50%',
  brewery_name: 'Ridgeway Brewing',
  brewery_state: '',
  brewery_country: '',
  ba_score: '79',
  ba_rating: 'okay',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '282',
  reviews: '191\n',
  rAvg: '3.43',
  pDev: '16.62%',
  beer_url: 'http://beeradvocate.com/beer/profile/7944/33595/' }
,
{ beer_name: 'Revival',
  beer_style: '',
  beer_abv: '4.00%',
  brewery_name: 'Moor Beer Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '87',
  ba_rating: 'very good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '17',
  reviews: '11\n',
  rAvg: '3.95',
  pDev: '8.1%',
  beer_url: 'http://beeradvocate.com/beer/profile/9051/58084/' }
,
{ beer_name: 'Wu Gang Chops The Tree',
  beer_style: '',
  beer_abv: '3.80%',
  brewery_name: 'Pressure Drop',
  brewery_state: '',
  brewery_country: '',
  ba_score: '-',
  ba_rating: 'no score',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '3',
  reviews: '0\n',
  rAvg: '4',
  pDev: '0%',
  beer_url: 'http://beeradvocate.com/beer/profile/32379/107014/' }
,
{ beer_name: 'Ridgeway Bitter',
  beer_style: '',
  beer_abv: '4.00%',
  brewery_name: 'Ridgeway Brewing',
  brewery_state: '',
  brewery_country: '',
  ba_score: '84',
  ba_rating: 'good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '90',
  reviews: '76\n',
  rAvg: '3.71',
  pDev: '11.59%',
  beer_url: 'http://beeradvocate.com/beer/profile/7944/21076/' }
,
{ beer_name: 'Black Tongue',
  beer_style: '',
  beer_abv: '8.30%',
  brewery_name: 'Signature Brew',
  brewery_state: '',
  brewery_country: '',
  ba_score: '-',
  ba_rating: 'no score',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '9',
  reviews: '1\n',
  rAvg: '3.84',
  pDev: '10.68%',
  beer_url: 'http://beeradvocate.com/beer/profile/33034/121272/' }
,
{ beer_name: 'Santa\'s Butt',
  beer_style: '',
  beer_abv: '6.00%',
  brewery_name: 'Ridgeway Brewing',
  brewery_state: '',
  brewery_country: '',
  ba_score: '78',
  ba_rating: 'okay',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '402',
  reviews: '262\n',
  rAvg: '3.4',
  pDev: '14.71%',
  beer_url: 'http://beeradvocate.com/beer/profile/7944/20907/' }
,
{ beer_name: 'Cuvee Delphine',
  beer_style: '',
  beer_abv: '13.00%',
  brewery_name: 'De Struise Brouwers',
  brewery_state: '',
  brewery_country: '',
  ba_score: '94',
  ba_rating: 'outstanding',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '450',
  reviews: '190\n',
  rAvg: '4.19',
  pDev: '11.22%',
  beer_url: 'http://beeradvocate.com/beer/profile/15237/47100/' }
,
{ beer_name: 'Smuttynose Frankenlager',
  beer_style: '',
  beer_abv: '7.30%',
  brewery_name: 'Smuttynose Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '83',
  ba_rating: 'good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '111',
  reviews: '27\n',
  rAvg: '3.67',
  pDev: '11.44%',
  beer_url: 'http://beeradvocate.com/beer/profile/141/119761/' }
,
{ beer_name: 'Insanely Bad Elf',
  beer_style: '',
  beer_abv: '11.20%',
  brewery_name: 'Ridgeway Brewing',
  brewery_state: '',
  brewery_country: '',
  ba_score: '78',
  ba_rating: 'okay',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '265',
  reviews: '171\n',
  rAvg: '3.38',
  pDev: '20.12%',
  beer_url: 'http://beeradvocate.com/beer/profile/7944/39668/' }
,
{ beer_name: 'Reindeer Droppings',
  beer_style: '',
  beer_abv: '6.00%',
  brewery_name: 'Ridgeway Brewing',
  brewery_state: '',
  brewery_country: '',
  ba_score: '79',
  ba_rating: 'okay',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '39',
  reviews: '20\n',
  rAvg: '3.38',
  pDev: '11.54%',
  beer_url: 'http://beeradvocate.com/beer/profile/7944/58518/' }
,
{ beer_name: 'Medici Lions',
  beer_style: '',
  beer_abv: '7.20%',
  brewery_name: 'Thornbridge Brewery',
  brewery_state: '',
  brewery_country: '',
  ba_score: '-',
  ba_rating: 'no score',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '6',
  reviews: '0\n',
  rAvg: '3.83',
  pDev: '5.22%',
  beer_url: 'http://beeradvocate.com/beer/profile/13029/123427/' }
,
{ beer_name: 'Double Bastard Ale',
  beer_style: '',
  beer_abv: '11.20%',
  brewery_name: 'Stone Brewing Co.',
  brewery_state: '',
  brewery_country: '',
  ba_score: '95',
  ba_rating: 'world-class',
  bros_score: '100',
  bros_rating: 'world-class',
  ratings: '5,986',
  reviews: '2,009\n',
  rAvg: '4.26',
  pDev: '11.03%',
  beer_url: 'http://beeradvocate.com/beer/profile/147/1056/' }
,
{ beer_name: 'Terrapin Rye Pale Ale',
  beer_style: '',
  beer_abv: '5.30%',
  brewery_name: 'Terrapin Beer Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '86',
  ba_rating: 'very good',
  bros_score: '82',
  bros_rating: 'good',
  ratings: '1,622',
  reviews: '753\n',
  rAvg: '3.79',
  pDev: '10.82%',
  beer_url: 'http://beeradvocate.com/beer/profile/2372/5948/' }
,
{ beer_name: 'Terrapin Hopsecutioner',
  beer_style: '',
  beer_abv: '7.30%',
  brewery_name: 'Terrapin Beer Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '87',
  ba_rating: 'very good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '2,637',
  reviews: '689\n',
  rAvg: '3.83',
  pDev: '12.01%',
  beer_url: 'http://beeradvocate.com/beer/profile/2372/53886/' }
,
{ beer_name: 'Jaipur IPA',
  beer_style: '',
  beer_abv: '5.90%',
  brewery_name: 'Thornbridge Brewery',
  brewery_state: '',
  brewery_country: '',
  ba_score: '90',
  ba_rating: 'outstanding',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '430',
  reviews: '176\n',
  rAvg: '4.02',
  pDev: '9.7%',
  beer_url: 'http://beeradvocate.com/beer/profile/13029/27952/' }
,
{ beer_name: 'Bracia',
  beer_style: '',
  beer_abv: '10.00%',
  brewery_name: 'Thornbridge Brewery',
  brewery_state: '',
  brewery_country: '',
  ba_score: '94',
  ba_rating: 'outstanding',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '114',
  reviews: '33\n',
  rAvg: '4.22',
  pDev: '11.37%',
  beer_url: 'http://beeradvocate.com/beer/profile/13029/49186/' }
,
{ beer_name: 'Moving Parts 01',
  beer_style: '',
  beer_abv: '7.10%',
  brewery_name: 'Victory Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '83',
  ba_rating: 'good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '281',
  reviews: '44\n',
  rAvg: '3.64',
  pDev: '10.44%',
  beer_url: 'http://beeradvocate.com/beer/profile/345/116858/' }
,
{ beer_name: 'Wild Raven',
  beer_style: '',
  beer_abv: '6.60%',
  brewery_name: 'Thornbridge Brewery',
  brewery_state: '',
  brewery_country: '',
  ba_score: '90',
  ba_rating: 'outstanding',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '114',
  reviews: '35\n',
  rAvg: '4.05',
  pDev: '9.38%',
  beer_url: 'http://beeradvocate.com/beer/profile/13029/56387/' }
,
{ beer_name: 'Duckpin Pale Ale',
  beer_style: '',
  beer_abv: '5.50%',
  brewery_name: 'Union Craft Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '87',
  ba_rating: 'very good',
  bros_score: '85',
  bros_rating: 'very good',
  ratings: '213',
  reviews: '27\n',
  rAvg: '3.86',
  pDev: '11.92%',
  beer_url: 'http://beeradvocate.com/beer/profile/29377/82921/' }
,
{ beer_name: 'Australian Pale Ale',
  beer_style: '',
  beer_abv: '6.00%',
  brewery_name: 'Victory Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '-',
  ba_rating: 'no score',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '2',
  reviews: '0\n',
  rAvg: '3.75',
  pDev: '6.67%',
  beer_url: 'http://beeradvocate.com/beer/profile/345/147708/' }
,
{ beer_name: 'Kasteel Winter',
  beer_style: '',
  beer_abv: '11.00%',
  brewery_name: 'Brouwerij Van Honsebrouck N.V.',
  brewery_state: '',
  brewery_country: '',
  ba_score: '94',
  ba_rating: 'outstanding',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '128',
  reviews: '25\n',
  rAvg: '4.24',
  pDev: '11.56%',
  beer_url: 'http://beeradvocate.com/beer/profile/212/103923/' }
,
{ beer_name: '6X',
  beer_style: '',
  beer_abv: '4.30%',
  brewery_name: 'Wadworth and Company Ltd.',
  brewery_state: '',
  brewery_country: '',
  ba_score: '80',
  ba_rating: 'good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '70',
  reviews: '42\n',
  rAvg: '3.46',
  pDev: '11.85%',
  beer_url: 'http://beeradvocate.com/beer/profile/2749/8364/' }
,
{ beer_name: 'Hop Devil Ale',
  beer_style: '',
  beer_abv: '6.70%',
  brewery_name: 'Victory Brewing Company',
  brewery_state: '',
  brewery_country: '',
  ba_score: '92',
  ba_rating: 'outstanding',
  bros_score: '100',
  bros_rating: 'world-class',
  ratings: '6,448',
  reviews: '2,400\n',
  rAvg: '4.08',
  pDev: '11.52%',
  beer_url: 'http://beeradvocate.com/beer/profile/345/1005/' }
,
{ beer_name: 'Black Perle',
  beer_style: '',
  beer_abv: '4.20%',
  brewery_name: 'Weird Beard Brew Co.',
  brewery_state: '',
  brewery_country: '',
  ba_score: '-',
  ba_rating: 'no score',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '7',
  reviews: '2\n',
  rAvg: '3.85',
  pDev: '5.71%',
  beer_url: 'http://beeradvocate.com/beer/profile/31624/114887/' }
,
{ beer_name: 'Evolver IPA',
  beer_style: '',
  beer_abv: '5.80%',
  brewery_name: 'The Wild Beer Co.',
  brewery_state: '',
  brewery_country: '',
  ba_score: '86',
  ba_rating: 'very good',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '62',
  reviews: '7\n',
  rAvg: '3.83',
  pDev: '9.66%',
  beer_url: 'http://beeradvocate.com/beer/profile/30750/114214/' }
,
{ beer_name: 'K*ntish Town Beard',
  beer_style: '',
  beer_abv: '5.90%',
  brewery_name: 'Weird Beard Brew Co.',
  brewery_state: '',
  brewery_country: '',
  ba_score: '-',
  ba_rating: 'no score',
  bros_score: '-',
  bros_rating: 'no score',
  ratings: '4',
  reviews: '1\n',
  rAvg: '3.87',
  pDev: '5.68%',
  beer_url: 'http://beeradvocate.com/beer/profile/31624/122460/' }
,
{ beer_name: 'Lips Of Faith',
  beer_style: '',
  beer_abv: '7.00%',
  brewery_name: 'La Folie',
  brewery_state: '',
  brewery_country: '',
  ba_score: '95',
  ba_rating: 'world-class',
  bros_score: '95',
  bros_rating: 'world-class',
  ratings: '3,294',
  reviews: '977\n',
  rAvg: '4.26',
  pDev: '10.56%',
  beer_url: 'http://beeradvocate.com/beer/profile/192/1917/' }
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
    
    var table = document.getElementById("myTable");
    for(i = 0; i < arr.length; i++) {
        var newTr = table.insertRow(-1);
        var aTag = document.createElement('a');
        aTag.setAttribute('href',arr[i].beer_url);
        aTag.innerHTML = arr[i].beer_name;

        // newTr.insertCell(-1).appendChild(document.createTextNode(arr[i].brewery_name));
        newTr.insertCell(-1).appendChild(aTag);
        
        // newTr.insertCell(-1).appendChild(document.createTextNode('<a href='' + google.com">Google</a>' ));
        // newTr.insertCell(-1).appendChild(document.createTextNode(arr[i].beer_name));
        newTr.insertCell(-1).appendChild(document.createTextNode(arr[i].beer_abv));
        newTr.insertCell(-1).appendChild(document.createTextNode(arr[i].ba_score));
        newTr.insertCell(-1).appendChild(document.createTextNode(arr[i].bros_score));
        newTr.insertCell(-1).appendChild(document.createTextNode(arr[i].ratings));
        // newTr.insertCell(-1).appendChild(document.createTextNode(ages[i]));

    }
    }


// <tr><td><a href="http://beeradvocate.com/beer/profile/306/1212/">Blue Moon Belgian White</a></td><td>5.40%</td><td>78</td><td>80</td><td>5,740</td></tr>
