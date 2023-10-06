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

    let mapPin = L.divIcon({
        className: 'custom-marker',
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#5274c5" viewBox="0 0 256 256"><path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path></svg>',
        iconSize: [42, 42],
        popupAnchor: [0, -21]
    })

    let adresseMarker = L.marker(adressCoordinates, {icon: mapPin}).addTo(map)

    adresseMarker.bindPopup(`<h3>${navn}</h3><br><p>${adresse}</p>`).openPopup()
    
}

createMap(adresse)