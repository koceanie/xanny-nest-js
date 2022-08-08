const client = require('cheerio-httpcli');
const fs = require('fs');
const sanitizeHtml = require('sanitize-html');
const iconv = require('iconv-lite');

const keyword = "소니 wh-1000xm5"
const searchURI = `https://www.google.co.kr/search?q=${keyword}`
const encodeSearchURI = encodeURI(searchURI);

let param = {};

const ulist = [];

client.fetch(encodeSearchURI, param, function(err, $, res){
    if(err){
        console.log("ERROR:", err);
        return;
    }
    const body = $.html
    //const search = $('#MjjYud');
    const search = $('#MjjYud').each(function (i, tag) {
        let text = data(this).text();
        let link = data(this).attr("href");
        console.log("지나감")
        ulist[i] = {
            title : $(this).find("h3 h3").text()
            
        };
        console.log(text)
        console.log(link)
        
    });
    // .children("div.yuRUbf")attr
    // $search.each(function(i, elem) {
    //     ulist[i] = {
    //         title: $search.find('h3 h3').text(),
    //         url : $search.attr('href')
    //     }

    // });
    console.log(ulist);
    });
    //attribs: { class: 'MjjYud' },

    // const dirty = $.html()
    // const clean = sanitizeHtml(dirty);
    // console.log(clean);

    // fs.writeFile("html.txt", clean, (err) => console.log(err));
//     const title = $(".DKV0Md").each(function(title) {
//         console.log($(this).text());

//     });

//     const url = $(".lEBKkf").each(function(title) {
//         console.log($(this).text());

//     });
    
//     //console.log(body);
//     //fs.writeFile("text.txt", text, (err) => console.lo(err));



