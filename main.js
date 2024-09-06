const request = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
var cron = require('node-cron');

//array of url of pages
const URLS = ['https://scholar.google.com/citations?user=pLs3_AMAAAAJ&hl=en', "https://scholar.google.co.in/citations?user=W0-YUbYAAAAJ&hl=en", "https://scholar.google.co.in/citations?user=QKv_ET0AAAAJ&hl=en"];

//nameless funcation to fetch the info from site
(async () => {

    //array for storing all data
    let alldata=[];   
    
    //for loop for running the scprit for every url in array
    for (let movie of URLS) {

        //mmaking a request on the server
        const response = await request({

            uri: movie,

            //fake browser request
            headers: {
                'authority': 'scholar.google.co.in/citations?user=pLs3_AMAAAAJ&hl=en',
                'method': 'GET',
                'path': '/citations?user=pLs3_AMAAAAJ&hl=en',
                'scheme': 'https',
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'accept-language': 'en,hi;q=0.9,pa;q=0.8',
                'cache-control': 'max-age=0',
                'priority': 'u=0, i',
                'referer': 'https://www.google.com/',
                'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
                'sec-ch-ua-arch': '"x86"',
                'sec-ch-ua-bitness': '"64"',
                'sec-ch-ua-full-version-list': '"Not)A;Brand";v="99.0.0.0", "Google Chrome";v="127.0.6533.119", "Chromium";v="127.0.6533.119"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-model': '""',
                'sec-ch-ua-platform': '"Windows"',
                'sec-ch-ua-platform-version': '"15.0.0"',
                'sec-ch-ua-wow64': '?0',
                'sec-fetch-dest': 'document',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-site': 'cross-site',
                'sec-fetch-user': '?1',
                'upgrade-insecure-requests': '1',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
                'x-client-data':
                    'CIS2yQEIo7bJAQipncoBCNTbygEIlqHLAQiFoM0BCKquzgEI5a/OAQiNsc4BCKWyzgEIwLbOAQjQt84BCNm3zgEY9MnNARi/rs4BGJyxzgEYgLjOAQ==Decoded: message ClientVariations { repeated int32 variation_id =[3300100, 3300131, 3313321, 3321300, 3330198, 3362821, 3381034, 3381221, 3381389, 3381541, 3382080, 3382224, 3382233]; repeated int32 trigger_variation_id =[3368180, 3381055, 3381404, 3382272];  }'

            },
            //to convert the data into readable from
            gzip: true  
        });


        //accessing the body
        let $ = cheerio.load(response);

        //esseing all the requird information
        let citationall = $('table[id="gsc_rsb_st"] > tbody > :first-child > :nth-child(2)').text();

        let citationsince = $('table[id="gsc_rsb_st"] > tbody > :first-child > :nth-child(3)').text();

        let hindex = $('table[id="gsc_rsb_st"] > tbody > :nth-child(2) > :nth-child(2)').text();

        let hindex19 = $('table[id="gsc_rsb_st"] > tbody > :nth-child(2) > :nth-child(3)').text();

        let i10 = $('table[id="gsc_rsb_st"] > tbody > :nth-child(3) > :nth-child(2)').text();

        let i1019 = $('table[id="gsc_rsb_st"] > tbody > :nth-child(3) > :nth-child(3)').text();



        //putting all the information into a object
        const element1 = { citationall, citationsince, hindex, hindex19, i10, i1019 };
        
        //array for years
        let years1 = [];

        $('span.gsc_g_t').each((i, elm) => {

            years1.push($(elm).text());

        });

        //array for citations
        let citations1 = [];

        $('span.gsc_g_al').each((i, elm) => {

            let citation = $(elm).text();
            citations1.push(citation);

        });
        
        //making the object of all the data eg years,citation and elements 
         const data = {
            element: element1,
            years: years1,
            citation: citations1
        };
       

        //pusing all the data into array 
        alldata.push(data);
     }

     
    //stringify all the data for putting them into json file
     const jsonString = JSON.stringify(alldata);
    
    //putting all thr data into json file
     fs.writeFile('data.json', jsonString, (err) => {
         if (err) throw err;
         console.log('New object has been written to newData.json');
     });

})();

//running upper code after every hour     
cron.schedule('0 * * * *', () => {       //    0 * * * *   * * * * * *

//array of url of pages
const URLS = ['https://scholar.google.com/citations?user=pLs3_AMAAAAJ&hl=en', "https://scholar.google.co.in/citations?user=W0-YUbYAAAAJ&hl=en", "https://scholar.google.co.in/citations?user=QKv_ET0AAAAJ&hl=en"];

//nameless funcation to fetch the info from site
(async () => {

    //array for storing all data
    let alldata=[];   
    
    //for loop for running the scprit for every url in array
    for (let movie of URLS) {

        //mmaking a request on the server
        const response = await request({

            uri: movie,

            //fake browser request
            headers: {
                'authority': 'scholar.google.co.in/citations?user=pLs3_AMAAAAJ&hl=en',
                'method': 'GET',
                'path': '/citations?user=pLs3_AMAAAAJ&hl=en',
                'scheme': 'https',
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'accept-language': 'en,hi;q=0.9,pa;q=0.8',
                'cache-control': 'max-age=0',
                'priority': 'u=0, i',
                'referer': 'https://www.google.com/',
                'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
                'sec-ch-ua-arch': '"x86"',
                'sec-ch-ua-bitness': '"64"',
                'sec-ch-ua-full-version-list': '"Not)A;Brand";v="99.0.0.0", "Google Chrome";v="127.0.6533.119", "Chromium";v="127.0.6533.119"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-model': '""',
                'sec-ch-ua-platform': '"Windows"',
                'sec-ch-ua-platform-version': '"15.0.0"',
                'sec-ch-ua-wow64': '?0',
                'sec-fetch-dest': 'document',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-site': 'cross-site',
                'sec-fetch-user': '?1',
                'upgrade-insecure-requests': '1',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
                'x-client-data':
                    'CIS2yQEIo7bJAQipncoBCNTbygEIlqHLAQiFoM0BCKquzgEI5a/OAQiNsc4BCKWyzgEIwLbOAQjQt84BCNm3zgEY9MnNARi/rs4BGJyxzgEYgLjOAQ==Decoded: message ClientVariations { repeated int32 variation_id =[3300100, 3300131, 3313321, 3321300, 3330198, 3362821, 3381034, 3381221, 3381389, 3381541, 3382080, 3382224, 3382233]; repeated int32 trigger_variation_id =[3368180, 3381055, 3381404, 3382272];  }'

            },
            //to convert the data into readable from
            gzip: true  
        });


        //accessing the body
        let $ = cheerio.load(response);

        //esseing all the requird information
        let citationall = $('table[id="gsc_rsb_st"] > tbody > :first-child > :nth-child(2)').text();

        let citationsince = $('table[id="gsc_rsb_st"] > tbody > :first-child > :nth-child(3)').text();

        let hindex = $('table[id="gsc_rsb_st"] > tbody > :nth-child(2) > :nth-child(2)').text();

        let hindex19 = $('table[id="gsc_rsb_st"] > tbody > :nth-child(2) > :nth-child(3)').text();

        let i10 = $('table[id="gsc_rsb_st"] > tbody > :nth-child(3) > :nth-child(2)').text();

        let i1019 = $('table[id="gsc_rsb_st"] > tbody > :nth-child(3) > :nth-child(3)').text();



        //putting all the information into a object
        const element1 = { citationall, citationsince, hindex, hindex19, i10, i1019 };
        
        //array for years
        let years1 = [];

        $('span.gsc_g_t').each((i, elm) => {

            years1.push($(elm).text());

        });

        //array for citations
        let citations1 = [];

        $('span.gsc_g_al').each((i, elm) => {

            let citation = $(elm).text();
            citations1.push(citation);

        });
        
        //making the object of all the data eg years,citation and elements 
         const data = {
            element: element1,
            years: years1,
            citation: citations1
        };
       

        //pusing all the data into array 
        alldata.push(data);
     }

     
    //stringify all the data for putting them into json file
     const jsonString = JSON.stringify(alldata);
    
    //putting all thr data into json file
     fs.writeFile('data.json', jsonString, (err) => {
         if (err) throw err;
         console.log('New object has been written to newData.json');
     });

})();
});

