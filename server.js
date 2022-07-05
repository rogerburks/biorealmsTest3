const express = require('express')
const app = express()
const PORT = 8675

//The data are contained in the object called realms
const realms = {
    'france': {
        'id': 1,
        'countryName': 'France',
        'realmName': 'Palearctic'
    },

    'brazil': {
        'id': 2,
        'countryName': 'Brazil',
        'realmName': 'Neotropical'
    },

    'everything': {
        'id': 998,
        'countryName': 'everything',
        'realmName': 'all'
    },

    'unknown': {
        'id': 999,
        'countryName': 'unknown',
        'realmName': 'not entered in this project yet'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

//If the user wants everything, that takes precendence in the if statement and then the entire contents of realms is returned as a json object. If instead the queried country is in realms, return the realm name string. Otherwise, let the user know that the query does not match anything in realms.
app.get('/realms/:countryQuery', (request, response) => {
    //enforce lowercase to deal with potential typos in the query
    const countryQueried = request.params.countryQuery.toLowerCase()
    if (countryQueried == 'everything') {
        response.json(realms)
    } else if (realms[countryQueried]) {
        response.json(realms[countryQueried].realmName)
    } else {
        response.json(realms['unknown'].realmName)
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}.`)
})