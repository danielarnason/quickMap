let L = require('leaflet')
let css = require('./style.css')

const adresse = document.querySelector('#map').dataset.adresse
const zoomLevel = document.querySelector('#map').dataset.zoomlevel
const navn = document.querySelector('#map').dataset.navn

const createMap = async adresse => {
    let url = `https://api.dataforsyningen.dk/adgangsadresser?q=${adresse}&struktur=mini`
    let dawaData = await fetch(url)
    let data = await dawaData.json()
    let adressCoordinates = [data[0].y, data[0].x]

    let cartoPositronBaseMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 20
    });
    
    let map = L.map('map', {
        center: adressCoordinates,
        zoom: zoomLevel,
        zoomControl: false,
        layers: [
            cartoPositronBaseMap
        ]
    });
    map.attributionControl.setPrefix('<a href="https://leafletjs.com" title="A Javascript library for interactve maps">Leaflet</a>')

    let adresseMarker = L.marker(adressCoordinates).addTo(map)

    adresseMarker.bindPopup(`<h3>${navn}</h3><br><p>${adresse}</p>`)
    
}

createMap(adresse)