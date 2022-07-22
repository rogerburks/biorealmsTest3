const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 8675

app.use(cors())

//The data are contained in the object called realms
const realms = {
    "afghanistan": {
        "id": 1,
        "countryName": "Afghanistan",
        "realmName": "Palearctic"
    },

    "albania": {
        "id": 2,
        "countryName": "Albania",
        "realmName": "Palearctic"
    },

    "algeria": {
        "id": 3,
        "countryName": "Algeria",
        "realmName": "Palearctic"
    },

    "andorra": {
        "id": 4,
        "countryName": "Andorra",
        "realmName": "Palearctic"
    },

    "angola": {
        "id": 5,
        "countryName": "Angola",
        "realmName": "Afrotropical"
    },

    "antigua and barbuda": {
        "id": 6,
        "countryName": "Antigua and Barbuda",
        "realmName": "Neotropical"
    },

    "argentina": {
        "id": 7,
        "countryName": "Argentina",
        "realmName": "Neotropical"
    },

    "armenia": {
        "id": 8,
        "countryName": "Armenia",
        "realmName": "Palearctic"
    },

    "australia": {
        "id": 9,
        "countryName": "Australia",
        "realmName": "Australasian"
    },

    "austria": {
        "id": 10,
        "countryName": "Austria",
        "realmName": "Palearctic"
    },

    "azerbaijan": {
        "id": 11,
        "countryName": "Azerbaijan",
        "realmName": "Palearctic"
    },

    "bahamas": {
        "id": 12,
        "countryName": "Bahamas",
        "realmName": "Neotropical"
    },

    "bahrain": {
        "id": 13,
        "countryName": "Bahrain",
        "realmName": "Afrotropical"
    },

    "barbados": {
        "id": 14,
        "countryName": "Barbados",
        "realmName": "Neotropical"
    },

    "belarus": {
        "id": 15,
        "countryName": "Belarus",
        "realmName": "Palearctic"
    },

    "belgium": {
        "id": 16,
        "countryName": "Belgium",
        "realmName": "Palearctic"
    },

    "belize": {
        "id": 17,
        "countryName": "Belize",
        "realmName": "Neotropical"
    },

    "benin": {
        "id": 18,
        "countryName": "Benin",
        "realmName": "Afrotropical"
    },

    "bhutan": {
        "id": 19,
        "countryName": "Bhutan",
        "realmName": "Palearctic"
    },

    "bolivia": {
        "id": 20,
        "countryName": "Bolivia",
        "realmName": "Neotropical"
    },

    "bosnia": {
        "id": 21,
        "countryName": "Bosnia and Herzegovina",
        "realmName": "Palearctic"
    },

    "bosnia and herzegovina": {
        "id": 22,
        "countryName": "Bosnia and Herzegovina",
        "realmName": "Palearctic"
    },

    "botswana": {
        "id": 23,
        "countryName": "Botswana",
        "realmName": "Afrotropical"
    },

    "brazil": {
        "id": 24,
        "countryName": "Brazil",
        "realmName": "Neotropical"
    },

    "brunei": {
        "id": 25,
        "countryName": "Brunei",
        "realmName": "Indomalayan"
    },

    "bulgaria": {
        "id": 26,
        "countryName": "Bulgaria",
        "realmName": "Palearctic"
    },

    "burkina faso": {
        "id": 27,
        "countryName": "Burkina Faso",
        "realmName": "Afrotropical"
    },

    "burma": {
        "id": 28,
        "countryName": "Myanmar",
        "realmName": "Indomalayan"
    },

    "burundi": {
        "id": 29,
        "countryName": "Burundi",
        "realmName": "Afrotropical"
    },

    "cambodia": {
        "id": 30,
        "countryName": "Cambodia",
        "realmName": "Indomalayan"
    },

    "cameroon": {
        "id": 31,
        "countryName": "Cameroon",
        "realmName": "Afrotropical"
    },

    "canada": {
        "id": 32,
        "countryName": "Canada",
        "realmName": "Nearctic"
    },

    "cape verde": {
        "id": 33,
        "countryName": "Cape Verde",
        "realmName": "Afrotropical"
    },

    "chad": {
        "id": 34,
        "countryName": "Chad",
        "realmName": "Afrotropical, Palearctic"
    },

    "chile": {
        "id": 35,
        "countryName": "Chile",
        "realmName": "Neotropical"
    },

    "china": {
        "id": 36,
        "countryName": "China",
        "realmName": "Palearctic, Indomalayan"
    },

    "colombia": {
        "id": 37,
        "countryName": "Colombia",
        "realmName": "Neotropical"
    },

    "comoros": {
        "id": 38,
        "countryName": "Comoros",
        "realmName": "Afrotropical"
    },

    "congo": {
        "id": 39,
        "countryName": "",
        "realmName": "Afrotropical"
    },

    "democratic republic of the congo": {
        "id": 40,
        "countryName": "Democratic Republic of the Congo",
        "realmName": "Afrotropical"
    },

    "republic of the congo": {
        "id": 41,
        "countryName": "Republic of the Congo",
        "realmName": "Afrotropical"
    },

    "costa rica": {
        "id": 42,
        "countryName": "Costa Rica",
        "realmName": "Neotropical"
    },

    "croatia": {
        "id": 43,
        "countryName": "Croatia",
        "realmName": "Palearctic"
    },

    "cuba": {
        "id": 44,
        "countryName": "Cuba",
        "realmName": "Neotropical"
    },

    "cyprus": {
        "id": 45,
        "countryName": "Cyprus",
        "realmName": "Neotropical"
    },

    "czech republic": {
        "id": 46,
        "countryName": "Czechia",
        "realmName": "Palearctic"
    },

    "czechia": {
        "id": 47,
        "countryName": "Czechia",
        "realmName": "Palearctic"
    },

    "denmark": {
        "id": 48,
        "countryName": "Denmark",
        "realmName": "Palearctic"
    },

    "djibouti": {
        "id": 49,
        "countryName": "Djibouti",
        "realmName": "Afrotropical"
    },

    "dominica": {
        "id": 50,
        "countryName": "Dominica",
        "realmName": "Neotropical"
    },

    "dominican republic": {
        "id": 51,
        "countryName": "Dominican Republic",
        "realmName": "Neotropical"
    },

    "east timor": {
        "id": 52,
        "countryName": "East Timor",
        "realmName": "Indomalayan"
    },

    "ecuador": {
        "id": 53,
        "countryName": "Ecuador",
        "realmName": "Neotropical"
    },

    "egypt": {
        "id": 54,
        "countryName": "Egypt",
        "realmName": "Palearctic"
    },

    "el salvador": {
        "id": 55,
        "countryName": "El Salvador",
        "realmName": "Neotropical"
    },

    "equatorial guinea": {
        "id": 56,
        "countryName": "Equatorial Guinea",
        "realmName": "Afrotropical"
    },

    "eritrea": {
        "id": 57,
        "countryName": "Eritrea",
        "realmName": "Afrotropical"
    },

    "estonia": {
        "id": 58,
        "countryName": "Estonia",
        "realmName": "Palearctic"
    },

    "eswatini": {
        "id": 59,
        "countryName": "Eswatini",
        "realmName": "Afrotropical"
    },

    "swaziland": {
        "id": 60,
        "countryName": "Eswatini",
        "realmName": "Afrotropical"
    },

    "ethiopia": {
        "id": 61,
        "countryName": "Ethiopia",
        "realmName": "Afrotropical"
    },

    "fiji": {
        "id": 62,
        "countryName": "Fiji",
        "realmName": "Oceanian"
    },

    "finland": {
        "id": 63,
        "countryName": "Finland",
        "realmName": "Palearctic"
    },

    "france": {
        "id": 64,
        "countryName": "France",
        "realmName": "Palearctic"
    },

    "ethiopia": {
        "id": 65,
        "countryName": "Ethiopia",
        "realmName": "Afrotropical"
    },

    "gambia": {
        "id": 66,
        "countryName": "Gambia",
        "realmName": "Afrotropical"
    },

    "georgia": {
        "id": 67,
        "countryName": "Georgia",
        "realmName": "Palearctic"
    },

    "germany": {
        "id": 68,
        "countryName": "Germany",
        "realmName": "Palearctic"
    },

    "ghana": {
        "id": 69,
        "countryName": "Ghana",
        "realmName": "Afrotropical"
    },

    "greece": {
        "id": 70,
        "countryName": "Greece",
        "realmName": "Palearctic"
    },

    "grenada": {
        "id": 71,
        "countryName": "Grenada",
        "realmName": "Neotropical"
    },

    "guatemala": {
        "id": 72,
        "countryName": "Guatemala",
        "realmName": "Neotropical"
    },

    "guinea": {
        "id": 73,
        "countryName": "Guinea",
        "realmName": "Afrotropical"
    },

    "guinea-bissau": {
        "id": 74,
        "countryName": "Guinea-Bissau",
        "realmName": "Afrotropical"
    },

    "guyana": {
        "id": 75,
        "countryName": "Guyana",
        "realmName": "Neotropical"
    },

    "haiti": {
        "id": 76,
        "countryName": "Haiti",
        "realmName": "Neotropical"
    },

    "honduras": {
        "id": 77,
        "countryName": "Honduras",
        "realmName": "Neotropical"
    },

    "hungary": {
        "id": 78,
        "countryName": "Hungary",
        "realmName": "Palearctic"
    },

    "iceland": {
        "id": 79,
        "countryName": "Iceland",
        "realmName": "Palearctic"
    },

    "india": {
        "id": 80,
        "countryName": "India",
        "realmName": "Indomalayan, Palearctic"
    },

    "indonesia": {
        "id": 81,
        "countryName": "Indonesia",
        "realmName": "Indomalayan, Australasian"
    },

    "iran": {
        "id": 82,
        "countryName": "Iran",
        "realmName": "Palearctic, Afrotropical"
    },

    "iraq": {
        "id": 83,
        "countryName": "Iraq",
        "realmName": "Palearctic"
    },

    "ireland": {
        "id": 84,
        "countryName": "Ireland",
        "realmName": "Palearctic"
    },

    "israel": {
        "id": 85,
        "countryName": "Israel",
        "realmName": "Palearctic"
    },

    "italy": {
        "id": 86,
        "countryName": "Italy",
        "realmName": "Palearctic"
    },

    "ivory coast": {
        "id": 87,
        "countryName": "Côte d'Ivoire",
        "realmName": "Afrotropical"
    },

    "cote d'ivoire": {
        "id": 88,
        "countryName": "Côte d'Ivoire",
        "realmName": "Afrotropical"
    },

    "jamaica": {
        "id": 89,
        "countryName": "Jamaica",
        "realmName": "Neotropical"
    },

    "japan": {
        "id": 90,
        "countryName": "Japan",
        "realmName": "Palearctic"
    },

    "jordan": {
        "id": 91,
        "countryName": "Jordan",
        "realmName": "Palearctic"
    },

    "kazakhstan": {
        "id": 92,
        "countryName": "Kazakhstan",
        "realmName": "Palearctic"
    },

    "kenya": {
        "id": 93,
        "countryName": "Kenya",
        "realmName": "Afrotropical"
    },

    "kiribati": {
        "id": 94,
        "countryName": "Kiribati",
        "realmName": "Oceanian"
    },

    "north korea": {
        "id": 95,
        "countryName": "North Korea",
        "realmName": "Palearctic"
    },

    "south korea": {
        "id": 96,
        "countryName": "South Korea",
        "realmName": "Palearctic"
    },

    "kosovo": {
        "id": 97,
        "countryName": "Kosovo",
        "realmName": "Palearctic"
    },

    "kuwait": {
        "id": 98,
        "countryName": "Kuwait",
        "realmName": "Palearctic"
    },

    "kyrgyzstan": {
        "id": 99,
        "countryName": "Kyrgyzstan",
        "realmName": "Palearctic"
    },

    "laos": {
        "id": 100,
        "countryName": "India",
        "realmName": "Indomalayan"
    },

    "latvia": {
        "id": 101,
        "countryName": "Latvia",
        "realmName": "Palearctic"
    },

    "lebanon": {
        "id": 102,
        "countryName": "Lebanon",
        "realmName": "Palearctic"
    },

    "lesotho": {
        "id": 103,
        "countryName": "Lesotho",
        "realmName": "Afrotropical"
    },

    "liberia": {
        "id": 104,
        "countryName": "Liberia",
        "realmName": "Afrotropical"
    },

    "libya": {
        "id": 105,
        "countryName": "Libya",
        "realmName": "Palearctic"
    },

    "liechtenstein": {
        "id": 106,
        "countryName": "Liechtenstein",
        "realmName": "Palearctic"
    },

    "lithuania": {
        "id": 107,
        "countryName": "Lithuania",
        "realmName": "Palearctic"
    },

    "luxembourg": {
        "id": 108,
        "countryName": "Luxembourg",
        "realmName": "Palearctic"
    },

    "macedonia": {
        "id": 109,
        "countryName": "North Macedonia",
        "realmName": "Palearctic"
    },

    "madagascar": {
        "id": 110,
        "countryName": "Madagascar",
        "realmName": "Afrotropical"
    },

    "malawi": {
        "id": 111,
        "countryName": "Malawi",
        "realmName": "Afrotropical"
    },

    "malaysia": {
        "id": 112,
        "countryName": "Malaysia",
        "realmName": "Indomalayan"
    },

    "maldives": {
        "id": 113,
        "countryName": "Maldives",
        "realmName": "Indomalayan"
    },

    "mali": {
        "id": 114,
        "countryName": "Mali",
        "realmName": "Afrotropical, Palearctic"
    },

    "malta": {
        "id": 115,
        "countryName": "Malta",
        "realmName": "Palearctic"
    },

    "marshall islands": {
        "id": 116,
        "countryName": "Marshall Islands",
        "realmName": "Oceanian"
    },

    "mauritania": {
        "id": 117,
        "countryName": "Mauritania",
        "realmName": "Afrotropical, Palearctic"
    },

    "mauritius": {
        "id": 118,
        "countryName": "Mauritius",
        "realmName": "Afrotropical"
    },

    "mexico": {
        "id": 119,
        "countryName": "Mexico",
        "realmName": "Nearctic, Neotropical"
    },

    "micronesia": {
        "id": 120,
        "countryName": "Micronesia",
        "realmName": "Oceanian"
    },

    "moldova": {
        "id": 121,
        "countryName": "Moldova",
        "realmName": "Palearctic"
    },

    "monaco": {
        "id": 122,
        "countryName": "Monaco",
        "realmName": "Palearctic"
    },

    "mongolia": {
        "id": 123,
        "countryName": "Mongolia",
        "realmName": "Palearctic"
    },

    "montenegro": {
        "id": 124,
        "countryName": "Montenegro",
        "realmName": "Palearctic"
    },

    "morocco": {
        "id": 125,
        "countryName": "Morocco",
        "realmName": "Palearctic"
    },

    "mozambique": {
        "id": 126,
        "countryName": "Mozambique",
        "realmName": "Afrotropical"
    },

    "myanmar": {
        "id": 127,
        "countryName": "Myanmar",
        "realmName": "Indomalayan, Palearctic"
    },

    "namibia": {
        "id": 128,
        "countryName": "Namibia",
        "realmName": "Afrotropical"
    },

    "nauru": {
        "id": 129,
        "countryName": "Nauru",
        "realmName": "Oceanian"
    },

    "netherlands": {
        "id": 130,
        "countryName": "Netherlands",
        "realmName": "Palearctic"
    },

    "new zealand": {
        "id": 131,
        "countryName": "New Zealand",
        "realmName": "Australasian"
    },

    "nicaragua": {
        "id": 132,
        "countryName": "Nicaragua",
        "realmName": "Neotropical"
    },

    "niger": {
        "id": 133,
        "countryName": "Niger",
        "realmName": "Afrotropical"
    },

    "nigeria": {
        "id": 134,
        "countryName": "Nigeria",
        "realmName": "Afrotropical"
    },

    "niue": {
        "id": 135,
        "countryName": "Niue",
        "realmName": "Oceanian"
    },

    "north macedonia": {
        "id": 136,
        "countryName": "North Macedonia",
        "realmName": "Palearctic"
    },

    "northern cyprus": {
        "id": 137,
        "countryName": "Northern Cyprus",
        "realmName": "Palearctic"
    },

    "norway": {
        "id": 138,
        "countryName": "Norway",
        "realmName": "Palearctic"
    },

    "oman": {
        "id": 139,
        "countryName": "Oman",
        "realmName": "Afrotropical"
    },

    "pakistan": {
        "id": 140,
        "countryName": "Pakistan",
        "realmName": "Indomalayan, Palearctic"
    },

    "palau": {
        "id": 141,
        "countryName": "Palau",
        "realmName": "Oceanian"
    },

    "palestine": {
        "id": 142,
        "countryName": "Palestine",
        "realmName": "Palearctic"
    },

    "panama": {
        "id": 143,
        "countryName": "Panama",
        "realmName": "Neotropical"
    },

    "papua new guinea": {
        "id": 144,
        "countryName": "Papua New Guinea",
        "realmName": "Australasian"
    },

    "paraguay": {
        "id": 145,
        "countryName": "Paraguay",
        "realmName": "Neotropical"
    },

    "peru": {
        "id": 146,
        "countryName": "Peru",
        "realmName": "Neotropical"
    },

    "philippines": {
        "id": 147,
        "countryName": "Philippines",
        "realmName": "Indomalayan"
    },

    "poland": {
        "id": 148,
        "countryName": "Poland",
        "realmName": "Palearctic"
    },

    "portugal": {
        "id": 149,
        "countryName": "Portugal",
        "realmName": "Palearctic"
    },

    "qatar": {
        "id": 150,
        "countryName": "Qatar",
        "realmName": "Afrotropical"
    },

    "romania": {
        "id": 151,
        "countryName": "Romania",
        "realmName": "Palearctic"
    },

    "russia": {
        "id": 152,
        "countryName": "Russia",
        "realmName": "Palearctic"
    },

    "rwanda": {
        "id": 153,
        "countryName": "Rwanda",
        "realmName": "Afrotropical"
    },

    "saint kitts and nevis": {
        "id": 154,
        "countryName": "Saint Kitts and Nevis",
        "realmName": "Neotropical"
    },

    "saint kitts": {
        "id": 155,
        "countryName": "Saint Kitts and Nevis",
        "realmName": "Neotropical"
    },

    "saint lucia": {
        "id": 156,
        "countryName": "Saint Lucia",
        "realmName": "Neotropical"
    },

    "saint vincent": {
        "id": 157,
        "countryName": "Saint Vincent and the Grenadines",
        "realmName": "Neotropical"
    },

    "saint vincent and the grenadines": {
        "id": 158,
        "countryName": "Saint Vincent and the Grenadines",
        "realmName": "Neotropical"
    },

    "samoa": {
        "id": 159,
        "countryName": "Samoa",
        "realmName": "Oceanian"
    },

    "san marino": {
        "id": 160,
        "countryName": "San Marino",
        "realmName": "Palearctic"
    },

    "sao tome and principe": {
        "id": 161,
        "countryName": "São Tomé and Príncipe",
        "realmName": "Afrotropical"
    },

    "saudi arabia": {
        "id": 162,
        "countryName": "Saudi Arabia",
        "realmName": "Afrotropical, Palearctic"
    },

    "senegal": {
        "id": 163,
        "countryName": "Senegal",
        "realmName": "Afrotropical"
    },

    "serbia": {
        "id": 164,
        "countryName": "Serbia",
        "realmName": "Palearctic"
    },

    "seychelles": {
        "id": 165,
        "countryName": "Seychelles",
        "realmName": "Afrotropical"
    },

    "sierra leone": {
        "id": 166,
        "countryName": "Sierra Leone",
        "realmName": "Afrotropical"
    },

    "singapore": {
        "id": 167,
        "countryName": "Singapore",
        "realmName": "Indomalayan"
    },

    "slovakia": {
        "id": 168,
        "countryName": "Slovakia",
        "realmName": "Palearctic"
    },

    "slovenia": {
        "id": 169,
        "countryName": "Slovenia",
        "realmName": "Palearctic"
    },

    "solomon islands": {
        "id": 170,
        "countryName": "Solomon Islands",
        "realmName": "Australasian"
    },

    "somalia": {
        "id": 171,
        "countryName": "Somalia",
        "realmName": "Afrotropical"
    },

    "south africa": {
        "id": 172,
        "countryName": "South Africa",
        "realmName": "Afrotropical"
    },

    "south sudan": {
        "id": 173,
        "countryName": "South Sudan",
        "realmName": "Afrotropical"
    },

    "spain": {
        "id": 174,
        "countryName": "Spain",
        "realmName": "Palearctic"
    },

    "sri lanka": {
        "id": 175,
        "countryName": "Sri Lanka",
        "realmName": "Indomalayan"
    },

    "sudan": {
        "id": 176,
        "countryName": "Sudan",
        "realmName": "Afrotropical"
    },

    "suriname": {
        "id": 177,
        "countryName": "Suriname",
        "realmName": "Neotropical"
    },

    "sweden": {
        "id": 178,
        "countryName": "Sweden",
        "realmName": "Palearctic"
    },

    "switzerland": {
        "id": 179,
        "countryName": "Switzerland",
        "realmName": "Palearctic"
    },

    "syria": {
        "id": 180,
        "countryName": "Syria",
        "realmName": "Palearctic"
    },

    "taiwan": {
        "id": 181,
        "countryName": "Taiwan",
        "realmName": "Indomalayan, Palearctic"
    },

    "tajikistan": {
        "id": 182,
        "countryName": "Tajikistan",
        "realmName": "Palearctic"
    },

    "tanzania": {
        "id": 183,
        "countryName": "Tanzania",
        "realmName": "Afrotropical"
    },

    "thailand": {
        "id": 184,
        "countryName": "Thailand",
        "realmName": "Indomalayan"
    },

    "togo": {
        "id": 185,
        "countryName": "Togo",
        "realmName": "Afrotropical"
    },

    "tonga": {
        "id": 186,
        "countryName": "Tonga",
        "realmName": "Oceanian"
    },

    "trinidad": {
        "id": 187,
        "countryName": "Trinidad and Tobago",
        "realmName": "Neotropical"
    },

    "trinidad and tobago": {
        "id": 188,
        "countryName": "Trinidad and Tobago",
        "realmName": "Neotropical"
    },

    "tunisia": {
        "id": 189,
        "countryName": "Tunisia",
        "realmName": "Palearctic"
    },

    "turkey": {
        "id": 190,
        "countryName": "Turkey",
        "realmName": "Palearctic"
    },

    "turkmenistan": {
        "id": 191,
        "countryName": "Turkmenistan",
        "realmName": "Palearctic"
    },

    "tuvalu": {
        "id": 192,
        "countryName": "Tuvalu",
        "realmName": "Oceanian"
    },

    "uganda": {
        "id": 193,
        "countryName": "Uganda",
        "realmName": "Afrotropical"
    },

    "ukraine": {
        "id": 194,
        "countryName": "Ukraine",
        "realmName": "Palearctic"
    },

    "uae": {
        "id": 195,
        "countryName": "United Arab Emirates",
        "realmName": "Afrotropical"
    },

    "united arab emirates": {
        "id": 196,
        "countryName": "United Arab Emirates",
        "realmName": "Afrotropical"
    },

    "uk": {
        "id": 197,
        "countryName": "United Kingdom",
        "realmName": "Palearctic"
    },

    "united kingdom": {
        "id": 198,
        "countryName": "United Kingdom",
        "realmName": "Palearctic"
    },

    "usa": {
        "id": 199,
        "countryName": "United States",
        "realmName": "Nearctic, Neotropical"
    },

    "united states": {
        "id": 200,
        "countryName": "United States",
        "realmName": "Nearctic, Neotropical"
    },

    "uruguay": {
        "id": 201,
        "countryName": "Uruguay",
        "realmName": "Neotropical"
    },

    "uzbekistan": {
        "id": 202,
        "countryName": "Uzbekistan",
        "realmName": "Palearctic"
    },

    "vanuatu": {
        "id": 203,
        "countryName": "Vanuatu",
        "realmName": "Australasian"
    },

    "vatican city": {
        "id": 204,
        "countryName": "Vatican City",
        "realmName": "Palearctic"
    },

    "venezuela": {
        "id": 205,
        "countryName": "Venezuela",
        "realmName": "Neotropical"
    },

    "vietnam": {
        "id": 206,
        "countryName": "Vietnam",
        "realmName": "Indomalayan"
    },

    "yemen": {
        "id": 207,
        "countryName": "Yemen",
        "realmName": "Afrotropical"
    },

    "zambia": {
        "id": 208,
        "countryName": "Zambia",
        "realmName": "Afrotropical"
    },

    "zimbabwe": {
        "id": 209,
        "countryName": "Zimbabwe",
        "realmName": "Afrotropical"
    },

    "cook islands": {
        "id": 210,
        "countryName": "Cook Islands",
        "realmName": "Oceanian"
    },

    "western sahara": {
        "id": 211,
        "countryName": "",
        "realmName": "Palearctic"
    },

    "tokelau": {
        "id": 212,
        "countryName": "Tokelau",
        "realmName": "Oceanian"
    },

    "anguilla": {
        "id": 213,
        "countryName": "Anguilla",
        "realmName": "Neotropical"
    },

    "bermuda": {
        "id": 214,
        "countryName": "Bermuda",
        "realmName": "Neotropical"
    },

    "british virgin islands": {
        "id": 215,
        "countryName": "British Virgin Islands",
        "realmName": "Neotropical"
    },

    "cayman islands": {
        "id": 216,
        "countryName": "Cayman Islands",
        "realmName": "Neotropical"
    },

    "falkland islands": {
        "id": 217,
        "countryName": "Falkland Islands",
        "realmName": "Neotropical"
    },

    "gibraltar": {
        "id": 218,
        "countryName": "Gibraltar",
        "realmName": "Palearctic"
    },

    "montserrat": {
        "id": 219,
        "countryName": "Montserrat",
        "realmName": "Neotropical"
    },

    "pitcairn islands": {
        "id": 220,
        "countryName": "Pitcairn Islands",
        "realmName": "Oceanian"
    },

    "saint helena": {
        "id": 221,
        "countryName": "Saint Helena, Ascension and Tristan da Cunha",
        "realmName": "Afrotropical"
    },

    "ascension": {
        "id": 222,
        "countryName": "Saint Helena, Ascension and Tristan da Cunha",
        "realmName": "Afrotropical"
    },

    "tristan da cunha": {
        "id": 223,
        "countryName": "Saint Helena, Ascension and Tristan da Cunha",
        "realmName": "Afrotropical"
    },

    "turks and caicos islands": {
        "id": 224,
        "countryName": "Turks and Caicos Islands",
        "realmName": "Neotropical"
    },

    "british indian ocean territory": {
        "id": 225,
        "countryName": "British Indian Ocean Territory",
        "realmName": "Indomalayan"
    },

    "diego garcia": {
        "id": 226,
        "countryName": "British Indian Ocean Territory",
        "realmName": "Indomalayan"
    },

    "chagos islands": {
        "id": 227,
        "countryName": "British Indian Ocean Territory",
        "realmName": "Indomalayan"
    },

    "south georgia": {
        "id": 229,
        "countryName": "South Georgia and the South Sandwich Islands",
        "realmName": "Antarctic"
    },

    "guam": {
        "id": 229,
        "countryName": "Guam",
        "realmName": "Oceanian"
    },

    "northern mariana islands": {
        "id": 230,
        "countryName": "Northern Mariana Islands",
        "realmName": "Oceanian"
    },

    "puerto rico": {
        "id": 231,
        "countryName": "Puerto Rico",
        "realmName": "Neotropical"
    },

    "united states virgin islands": {
        "id": 232,
        "countryName": "United States Virgin Islands",
        "realmName": "Neotropical"
    },

    "us virgin islands": {
        "id": 233,
        "countryName": "United States Virgin Islands",
        "realmName": "Neotropical"
    },

    "american samoa": {
        "id": 234,
        "countryName": "American Samoa",
        "realmName": "Oceanian"
    },

    "greenland": {
        "id": 235,
        "countryName": "Greenland",
        "realmName": "Nearctic"
    },

    "faroe islands": {
        "id": 236,
        "countryName": "Faroe Islands",
        "realmName": "Palearctic"
    },

    "french polynesia": {
        "id": 237,
        "countryName": "French Polynesia",
        "realmName": "Oceanian"
    },

    "tahiti": {
        "id": 238,
        "countryName": "French Polynesia",
        "realmName": "Oceanian"
    },

    "saint barthelemy": {
        "id": 239,
        "countryName": "Saint Barthélemy",
        "realmName": "Neotropical"
    },

    "saint martin": {
        "id": 240,
        "countryName": "Saint Martin",
        "realmName": "Neotropical"
    },

    "saint pierre and miquelon": {
        "id": 241,
        "countryName": "Saint Pierre and Miquelon",
        "realmName": "Nearctic"
    },

    "wallis and futuna": {
        "id": 242,
        "countryName": "Wallis and Futuna",
        "realmName": "Oceanian"
    },

    "new caledonia": {
        "id": 243,
        "countryName": "New Caledonia",
        "realmName": "Australasian"
    },

    "french guiana": {
        "id": 244,
        "countryName": "French Guiana",
        "realmName": "Neotropical"
    },

    "guadeloupe": {
        "id": 245,
        "countryName": "Guadeloupe",
        "realmName": "Neotropical"
    },

    "martinique": {
        "id": 246,
        "countryName": "Martinique",
        "realmName": "Neotropical"
    },

    "mayotte": {
        "id": 247,
        "countryName": "Mayotte",
        "realmName": "Afrotropical"
    },

    "reunion": {
        "id": 248,
        "countryName": "Réunion",
        "realmName": "Afrotropical"
    },

    "bonaire": {
        "id": 249,
        "countryName": "Bonaire",
        "realmName": "Neotropical"
    },

    "sint eustatius": {
        "id": 250,
        "countryName": "Sint Eustatius",
        "realmName": "Neotropical"
    },

    "saba": {
        "id": 251,
        "countryName": "Saba",
        "realmName": "Neotropical"
    },

    "aruba": {
        "id": 252,
        "countryName": "Aruba",
        "realmName": "Neotropical"
    },

    "curacao": {
        "id": 253,
        "countryName": "Curaçao",
        "realmName": "Neotropical"
    },

    "sint maarten": {
        "id": 254,
        "countryName": "Sint Maarten",
        "realmName": "Neotropical"
    },

    "svalbard": {
        "id": 255,
        "countryName": "Svalbard",
        "realmName": "Palearctic"
    },

    "hawaii": {
        "id": 256,
        "countryName": "Hawaii",
        "realmName": "Oceanian"
    },

    "easter island": {
        "id": 257,
        "countryName": "Easter Island",
        "realmName": "Oceanian"
    },

    "everything": {
        "id": 998,
        "countryName": "everything",
        "realmName": "all"
    },

    "unknown": {
        "id": 999,
        "countryName": "unknown",
        "realmName": "not entered in this project yet"
    }
}

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

//If the user wants everything, that takes precendence in the if statement and then the entire contents of realms is returned as a json object. If instead the queried country is in realms, return the realm name string. Otherwise, let the user know that the query does not match anything in realms.
app.get("/realms/:countryQuery", (request, response) => {
    //enforce lowercase to deal with potential typos in the query
    const countryQueried = request.params.countryQuery.toLowerCase()
    if (countryQueried == "everything") {
        response.json(realms)
    } else if (realms[countryQueried]) {
        response.json(realms[countryQueried].realmName)
    } else {
        response.json(realms["unknown"].realmName)
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}.`)
})