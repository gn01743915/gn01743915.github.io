const apikey = 'pk.eyJ1IjoiZ24wMTc0MzkxNSIsImEiOiJja3N1MWcxYXgwemtyMnhtcXMzazZ6YmgwIn0.19sZEGw0ccdSFAy7TMHDdA';
var mymap = L.map('map').setView([25.04, 121.512], 16);
//var mymap = L.map('map').fitWorld();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'gn01743915/cksu1lyvqmnfs18qvlibftgc1',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apikey
}).addTo(mymap);

mymap.locate({ watch: false, setView: true, maxZoom: 16 });

function onLocationFound(e) {
    let str_title = "秘密基地：";
    let str_value = "找找看居民童年的秘密基地吧！";
    let str_link = "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3";

    var radius = e.accuracy;

    var popup = L.popup()
        .setContent(`<p>${str_title}<br />${str_value}</p>`+
        `<audio controls><source src='${str_link}' type='audio/mpeg'></audio>`+
        "<button onclick='play()'>收藏</button>")

    L.marker(e.latlng).addTo(mymap)
        .bindPopup(popup);


    L.marker([22.62, 120.29]).addTo(mymap)
        .bindPopup(popup);


    L.circle(e.latlng, 750).addTo(mymap);
    L.circle([22.62, 120.29], 750).addTo(mymap);
}

function onLocationError(e) {
    alert(e.message);
}

mymap.on('locationfound', onLocationFound);

function play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
}