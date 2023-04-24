// ---EXPRESS---
const express = require('express');

// ---body-parse--
const bodyParser = require('body-parser');

// ---CORS---
const cors = require('cors');

// ---PORT--
const port = 6070;

const app = express();

const route = express.Router();

// setting content-type
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(express.json(), express.urlencoded({extended: true}));


// --ENDPOINTS--
// const newsApi = require('newsapi');
// const apiNews = new newsApi('28760a25597345a9b25f2e94b0d9851d');

app.get('/', (req, res) => {
    const newsApi = require('newsapi');
    const apiNews = require('./')
    // const apiNews = new newsApi('28760a25597345a9b25f2e94b0d9851d');
   
    apiNews.v2.everything({
        q: 'coding',
        sources: 'engadget',
        domains: ' techcrunch.com',
        from: '2023-03-25',
        to: '2017-12-12',
        language: 'en',
        sortBy: 'relevancy',
    }).then(response => {
        console.log(response);
        res.send(response)
    });
})
// app.get('/', (req, res) => {
//     const newsApi = require('newsapi');
//     const apiNews = new newsApi('28760a25597345a9b25f2e94b0d9851d');
   
//     apiNews.v2.everything({
//         q: 'coding',
//         sources: 'engadget',
//         domains: ' techcrunch.com',
//         from: '2023-03-25',
//         to: '2017-12-12',
//         language: 'en',
//         sortBy: 'relevancy',
//     }).then(response => {
//         console.log(response);
//         res.send(response)
//     });
// })

// app.get('/sources', (req, res) => {
//     const newsApi = require('newsapi');
//     const apiNews = new newsApi('28760a25597345a9b25f2e94b0d9851d');
//     apiNews.v2.everything({
//         q: 'technology',
//         sources: "bbc.co.uk,the-verge",
//         domains: 'bbc.co.uk',
//         from: '2023-03-25',
//         to: '2023-04-21',
//         language: 'en',
//         sortBy: 'date',
//         page: 3
//     }).then(response => {
//         console.log(response);
//         res.send(response)
//     });
// })

// ---listening port---
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})
