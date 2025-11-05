---
title: Contribuzione al mantenimento
---
> [!abstract] Abstract
> Guida indicativa per contribuire al mantenimento del sito, così da aggiornare pagine e crearne di nuove
# Funzionamento del Sito
Il sito viene visualizzato al link https://mudslingar.github.io/TerrePerdute/ dopo diversi passaggi di elaborazione:
1. Le pagine sono scritte ed organizzate in [Markdown](https://www.markdownguide.org/) utilizzando l'applicazione [Obsidian](https://obsidian.md/)
2. Il programma [Quartz](https://quartz.jzhao.xyz/) (funzionante tramite NodeJs, quindi javascript) traduce i file Markdown in HTML statici e file CSS e li carica su [Github](https://github.com/)
3. Sempre tramite Quartz a Github viene come interpretare e gestire gli HTML e CSS così da pubblicarli su [Github Pages](https://pages.github.com/)
# Come utilizzarlo
Per arrivare a questo punto e poter caricare le proprie note Markdown su Github Pages tramite Quartz bisogna:

> [!example] Passaggi necessari
> 1. Installare [NodeJs](https://nodejs.org/en). 
> 2. Avere [git](https://git-scm.com/) installato sul computer
> 3. Impostare il Github perché possa pubblicare con Quartz
> 4. Aprire e modificare il contenuto desiderato con Obsidian
> 5. OPZIONALE: Buildare la repository con Quartz
> 6. Creare il proprio Branch su GitHub e pushare

## 1. Installare NodeJs
Per farlo consiglio queste istruzioni: [askubuntu-Answer](https://askubuntu.com/questions/426750/how-can-i-update-my-nodejs-to-the-latest-version/1009527#1009527)
Se siete esclusivamente su Windows sono sicuro ci saranno altre istruzioni, basta che abbiate nodejs all'ultima versione disponibile
## 2. Avere git
Buona parte dei sistemi linux dovrebbero averlo installato di base, in alternativa potete installarlo con `sudo apt install git`.
Se avete esclusivamente Windows non saprei come fare.
## 3. Impostare Github
### 3.1 Avere una repo pubblica su cui voler pubblicare
Bisogna avere una repository pubblica, 
> [!tip] Per aggiornare Approdo
> Se volete aggiornare Approdo basta fare riferimento a quella del sito, non ne dovete fare una vostra. https://github.com/MudSlingar/TerrePerdute.
### 3.2 Avere una chiave ssh per il proprio dispositivo
Seguite la guida ufficiale di Github per [generare una chiave ssh](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) e [collegare la propria chiave all'account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
>[!warning] Necessario
>Non si può caricare su github in maniera ragionevole senza il passaggio 3.2
### 3.3 Impostare il metodo di pubblicazione della repo
>[!tip] Per aggiornare Approdo
>Non serve avere una propria repo, quindi nemmeno questo passaggio

Scegliere Github Actions nelle impostazioni di Github Pages della repo
### 3.4 Clonare la repo
Mettetevi in una cartella a vostro piacimento e copiate il contenuto della repository del sito con il comando
```
git clone git@github.com:MudSlingar/TerrePerdute.git
```
Verificate che le repository online siano quelle giuste eseguendo il comando
```
git remote -v
```
nella cartella che avete appena clonato
Il risultato dovrebbe essere del tipo
```
origin git@github.com:MudSlingar/TerrePerdute.git (fetch)
origin git@github.com:MudSlingar/TerrePerdute.git (push)
upstream https://github.com/jackyzha0/quartz.git (fetch)
upstream https://github.com/jackyzha0/quartz.git (push)
```
## 4 Modificare con Obsidian
Installate Obsidian (c'è di sicuro una guida online per qualunque OS)
Con Obsidian aprite la cartella `TerrePerdute/quartz/content/` come vault per poter vedere ed editare tutti i file necessari.
## 5 Buildare con Quartz
Nella cartella `TerrePerdute/` o `TerrePerdute/quartz/` usate i comandi:
```
npm ci      # aggiornare nodejs
quartz build --serve     # buildare una versione LOCALE del sito
quartz sync pull         # pullare gli update della repo
quartz sync push         # pushare le vostre modifiche
```

> [!warning] Attenzione
> Voi non potete usare semplicemente i comandi `quartz sync pull` e `quartz sync push` perché non essendo contributori approvati della repository dovete farlo tramite un branch secondario di GitHub.
> Potete però usare `quartz build --serve` per visualizzare una versione locale del sito (una specie di bozza) al link [localhost:8080](https://localhost:8080) (penso, altrimenti ditemi qualcosa)
## 6 Creare il proprio branch e pushare
Tornando a git create e spostatevi su un vostro branch con il comando
```
git checkout -b <nome del branch che state creando>
```
mi raccomando non scrivete le partentesi angolate.
Poi, come da utilizzo normale di git, committate e pushate con i comandi
```
git add --all          # aggiunge tutti i cambiamenti al commit
git commit -m <descrizione dei cambiamenti che state apportando>
git push origin <nome del vostro branch>
```

In tal modo io riceverò sia la notifica che la possibilità di controllare i vostri cambiamenti proposti ed applicarli al sito.

> [!danger] Se non avete letto bene
> Pushare il vostro branch non lo farà comparire sul sito, devo approvarlo affinché le modifiche si applichino al sito!
# GRAZIE
Se avete letto fin qua e non vi siete abbattuti di sicuro vi interessa davvero tanto aiutarmi in quest'impresa di gestire la campagna ed il sito.
Se avete domande fatemele pure e vedrò di darvi una mano!