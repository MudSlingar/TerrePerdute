---
title: Music Player
---
Idealmente caricabile semplicemente con 
```
<audio control autoplay loop>
<source src=/media/music/canzone.mp3 type=audio.mpeg>
</audio>
```
al momento non sembra riconoscere facilmente file audio caricatici.
L'alternativa è streammare con embed di youtube ma diventano troppo invasivi, quindi eviterei.
Servirà avere musica non proprietaria per poterla caricare in sicurezza ovviamente.

Il risultato dovrebbe essere un elemento di questo tipo all'inizio della pagina, ma in grado di riprodurre musica:

<audio controls autoplay loop>
<source src="/media/music/musica.mp3" type="audio/mpeg">
</audio>
