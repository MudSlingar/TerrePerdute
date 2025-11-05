---
title: Music Player
---
> [!abstract] Abstract
> Funzione non attualmente implementata per il sito, dovrebbe permettere la riproduzione di audio su determinate pagine del sito tramite un semplice set di controlli.
> Funziona su obsidian, non funziona né in locale né in distribuzione sul sito.

> [!bug] Bug
> Appare il set di controlli audio ma non viene caricato al suo interno nessun tipo di file audio, sebbene sia indicato nella sua implementazione.
> È un problema della conversione a sito, perché su Obsidian funziona.

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
