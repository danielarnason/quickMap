let L = require('leaflet')
let css = require('./style.css')

const adresse = document.querySelector('#map').dataset.adresse
const zoomLevel = document.querySelector('#map').dataset.zoomlevel
const navn = document.querySelector('#map').dataset.navn

const addAdresseToMap = async adresse => {
    let url = `https://api.dataforsyningen.dk/adgangsadresser?q=${adresse}&struktur=mini`
    let dawaData = await fetch(url)
    let data = await dawaData.json()
    let adressCoordinates = [data[0].y, data[0].x]

    let map = L.map('map', {
        center: adressCoordinates,
        zoom: zoomLevel,
        zoomControl: false,
        attributionControl: false
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    

    let adresseMarker = L.marker(adressCoordinates).addTo(map)

    adresseMarker.bindPopup(`<h3>${navn}</h3><br><p>${adresse}</p>`)
    
}

addAdresseToMap(adresse)