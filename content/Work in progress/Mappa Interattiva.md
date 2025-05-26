> [!Abstract] Abstract 
> Questa è una funzione parzialmente attiva per il sito, che permette di linkare sezioni della mappa alle corrispettive pagine.
> Manca la possibilità di gestire la mappa in maniera interattiva, inserire marker ed ottenere preview dei contenuti.
## Implementazione 1: HTML map
È possibile impostare una "mappa" sovrapposta ad un'immagine in HTML. 

Non presenta tutte le funzioni invece disponibili tramite Leaflet o Google Maps, come effettivi disegni, marker o simili, ma permette la creazione di link interni.

Per adesso sto facendo riferimento a [questa guida](https://www.w3schools.com/html/html_images_imagemap.asp) di w3school sulla creazione di mappe in hmtl, e sembra star funzionando.
### Come funziona
Creiamo un'immagine sulla pagina con `<img src="qualcosa" opzionivarie>`, seguendo le indicazioni sull'[inserimento immagini in hmtl](https://www.w3schools.com/html/html_images.asp) 
```
<img src="link o percorso e nome immagine" [opzioni di formattamento dell'immagine]>
```

Inseriamo l'opzione `usemap="nomemappa"` all'interno della dichiarazione dell'immagine
```
<img src="link o percorso e nome immagine" [opzioni di formattamento dell'immagine] usemap="nomemappa">
```

> [!question] Coordinate ed unità di misura
> Lo zero di entrambi gli assi è in alto a sinistra, con l'asse Y crescente verso il basso e l'asse X crescente verso destra.
> Le misure sono date in pixel se non diversamente specificato.

A seguire descriviamo effettivamente com'è fatta questa mappa, dove sono definite le sue aree e cosa succede quando vengono cliccate:
```
<map name="nomemappa">  
  <area shape="rect" coords="34,44,270,350" href="pagina.html">  
  <area shape="rect" coords="290,172,333,250" href="pagina2.html">  
  <area shape="circle" coords="337,300,44" href="pagina3.html">  
</map>
```
Nel caso di sopra sono definite:
* una forma di rettangolo con il punto in alto a sinistra nelle coordinate (34, 44) e quello in basso a destra nelle coordinate (270, 350), che se cliccato porta a "pagina.html"
* un'altra forma di rettangolo con diverse coordinate
* una forma di cerchio con centro nelle coordinate (337, 300), di raggio 44, che porta a "pagina3.html"

## Implementazione 2: Leaflet
> [!failure] Problema
> Implementare il plugin **Leaflet** su Github Pages tramite Quartz 4

Al momento non è funzionante perché per esserlo è necessario visualizzare il file markdown presente nel [[Mappa Interattiva#Codice Implementazione|codice]] che si può vedere di seguito con il plugin di markdown "Leaflet", che non è ancora implementato nella trasformazione dei file markdown in html statico tramite Quartz 4.0

Per adesso un paio di esempi per come apparirà:
![[Selection_005.png]]
_La mappa apparirà così, con indicatori sui vari luoghi di interesse. Potrà essere aumentato lo zoom e mossa la mappa, come su google maps._

![[Selection_006.png]]
_Quando il cursore è sopra un indicatore si apre un popup della pagina linkata, e se clickato apre la pagina._

---
> [!question] Prova
Se qualcuno fosse interessato a visualizzare la mappa in maniera interattiva può farlo in questo modo: 
> 1. Clonando la repo con `git clone git@github.com:MudSlingar/TerrePerdute.git` 
> 2. Creando una vault nella cartella della repository appena clonata 
> 3. 3.2. tivando il plugin "Leaflet" nella sezione "community plugins" di Obsidian `Per farlo vai su Impostazioni>Community Plugins>Turn On Community Plugins; poi Browse Community Plugins>Leaflet`
> 4. 4.3. rendo [[Mappa Interattiva|questo file]] con [Obsidian](https://obsidian.md/)
---
## Codice Implementazione
Segue il codice utilizzato per implementare questa funzione in locale:

```leaflet
id: mappa-interattiva-terre-perdute
image: https://i.pinimg.com/736x/c2/35/c5/c235c59a24f16cc7456952d36f1646ff.jpg
width: 735px
height: 461px
lat: 50
long: 50
minZoom: 1
maxZoom: 10
defaultZoom: 9
zoomDelta: 0.2
unit: meters
scale: 1
darkMode: false

```
