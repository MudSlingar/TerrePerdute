> Questa è una funzione ancora non attiva per il sito, che servirà a mostrare la mappa in maniera interattiva, con indicatori che linkano alle pagine o sezioni correlate alla zona della mappa.
> 
> Se avete soluzioni ai problemi che descrivo scrivetemi.

## Implementazione
Al momento non è funzionante perché per esserlo è necessario visualizzare il file markdown presente nel [[Mappa Interattiva#Codice Implementazione|codice]] che si può vedere di seguito con il plugin di markdown "Leaflet", che non è ancora implementato nella trasformazione dei file markdown in html statico tramite Quartz 4.0

Per adesso un paio di esempi per come apparirà:
![[Selection_005.png]]
_La mappa apparirà così, con indicatori sui vari luoghi di interesse. Potrà essere aumentato lo zoom e mossa la mappa, come su google maps._

![[Selection_006.png]]
_Quando il cursore è sopra un indicatore si apre un popup della pagina linkata, e se clickato apre la pagina._

---
## Prova
Se qualcuno fosse interessato a visualizzare la mappa in maniera interattiva può farlo in questo modo:
1. Clonando la repo con `git clone git@github.com:MudSlingar/TerrePerdute.git` 
2. Creando una vault nella cartella della repository appena clonata
3. Attivando il plugin "Leaflet" nella sezione "community plugins" di Obsidian `Per farlo vai su Impostazioni>Community Plugins>Turn On Community Plugins; poi Browse Community Plugins>Leaflet`
4. Aprendo [[Mappa Interattiva|questo file]] con [Obsidian](https://obsidian.md/)

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
