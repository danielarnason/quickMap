# quickMap

Jeg manglede et værktøj til at kunne producere "Her bor jeg/vi" kort, som kan placeres på en hjemmeside.

Kortene skulle vær enkle, dvs. en prik på en adresse med en popup. Opsætningen skulle helst også være så enkel som overhoved mulig, så det kunne gå hurtigt med at pumpe de her kort ud 😀

Så derfor lavede jeg **quickMap**.

quickMap er baseret på [Leaflet](https://leafletjs.com) og bruger [DAWA API'et](https://dawadocs.dataforsyningen.dk/) til at geokode en given adresse.

# Brug af værktøj

Filen _index.html_ er et eksempel på, hvordan man kan inkludere et kort i en html side.

1. Inkluder _quickMap.js_ filen fra dist i din html
2. Tilføj et div element, med _id='map'_
3. Sæt en _data-adresse_ attribut på elementet og indtast den adresse, hvor punktet skal vises. F.eks. `data-adresse='Rådhuspladsen 11, 4200 Slagelse'`.
4. Sæt en _data-navn_ attribut på elementet og indtast den tekst, som skal være i en popup på punktet. F.eks. `data-navn='Slagelse Rådhus'`.
5. Sæt en _data-zoomlevel_ attribut på elementet og indtast det zoomniveau kortet skal vises i. F.eks. `data-zoomlevel='17'` 

Eksempel på html;
```html
<body>
    <h1>Leaflet test</h1>
    <div id="map" 
        data-adresse="Rådhuspladsen 11, 4200 Slagelse" 
        data-navn="Slagelse Rådhus" 
        data-zoomlevel="17">
    </div>
    <script src="dist/quickMap.js"></script>
</body>
```