'use strict';

var Xray = require('x-ray');
var x = Xray();

x('http://www.airdates.tv/', '.day', [{
        date: '.date',
        series: x('.entry', [{
                title: '.title'
            }])
    }])(function (err, obj) {
    obj.forEach(function(date, idx){
        console.log(date.date);
        date.series.forEach(function(serie, idx){
            var title, index, episode;
            title = serie.title;
            index = title.lastIndexOf(" ");            
            episode = title.slice(index, title.length).trim();
            title =  title.slice(0, index).trim();
           console.log("-"+ title+": "+episode);
        });
    });
});


