---
title: Du MVP à l'application stable
excerpt: >-
  Si la réalisation d'un MVP ( Minimum viable product ) est l'étape la plus importante pour lancer un concept, le passage à une version réellement stable est certainement la plus critique.
date: '2017-08-09T23:46:37.121Z'
type: post
thumb_img_path: images/pages/posts/du-mvp-a-lapplication-stable/preview.jpeg
content_img_path: images/pages/posts/du-mvp-a-lapplication-stable/preview.jpeg
tags: ['mvp', 'projet']
layout: post
---

Si la réalisation d'un MVP ( Minimum viable product ) est l'étape la plus importante pour lancer un concept, le passage à une version réellement stable est certainement la plus critique.
La réalisation d'un MVP se doit d'être rapide, chaque jour ou semaine de perdu est un risque supplémentaire de perdre son marché, de se faire dépasser.
De ce fait, il faut agir vite, et pour agir vite il faut souvent bricoler, faire appel au premier développeur chaud pour pas de salaire en échange d'un poste de CTO, prendre des cours en ligne pour tenter de se débrouiller soi-même, ... agir vite n'est que très rarement synonyme de qualité et de performance.

*Après, il faut être clair, un MVP a un objectif:* tester un marché. Rien de plus. Alors il serait dans bien des cas contre productif de vouloir appliquer toutes les best practices dès le départ, au commencement d'un projet qui risque de ne pas se développer, qui risque de faire un flop.

## Mais si il n'y avait pas de flop ?
Si le projet se développe ? Est-ce que le bricolage initial va tenir la route ? 

Dans la majorité des cas la startup va se retrouver dans la situation suivante :
Le premier développeur de la boite ( qui est aussi CTO, DSI, Lead Développeur, ... ) détient la quasi totalité des connaissances métiers et de l'application.

Même sans le vouloir, il sera dans une situation assez catastrophique de rétention d'informations car il lui sera plus rapide de corriger les bugs lui-même, la nuit ou le week-end, que de déléguer, car pour déléguer il faut du temps, et le premier développeur de la boite, avec toutes ses casquettes, du temps, il n'en a pas.

Cette situation n'est la faute de personne, elle est presque un passage obligé car rare son les entrepreneurs qui peuvent aligner de quoi avoir une dream team dès le départ. Vu comment les cabinets de recrutement IT tournent à plein régime, il serait irréaliste de croire que trouver des ingénieurs est chose aisée.

À un moment la technique sera submergée par des bugs incessants, des demandes de features toutes plus importantes les unes que les autres car sans elles, les gros comptes prêts à signer ne signeront pas, mais à cause des bugs à fixer, il n'y a pas de temps pour les features, même en bossant le week-end.

Ce qui nous donne une situation où les clients actuels sont de moins en moins satisfaits à cause des bugs, des account managers qui en peuvent plus de gérer les remontés client, des sales qui désespèrent en ne voyant pas arriver les features conditionnants la signature des contrats juteux. Bref, c'est un bordel sans nom, toute la boîte a la tête dans le guidon ce qui empêche totalement de prendre des initiatives avec du recul.

Vous voyez de quoi je parle ?

## Vite des devs pour aider !

Vous devez recruter des devs, plus de devs, quoi qu'il en coûte, il en va de la survie du projet, mais les nouveaux devs, durement recrutés, il faut les former, leur permettre de prendre le produit en main, de se l'approprier, mais ca n'arrivera pas, ou difficilement, car n'oubliez pas, le Dev / CTO / DSI n'a pas le temps de déléguer, alors former ...

Arrivé à ce point c'est du coup de poker. La solution serait de faire une refonte, il y a un ou deux dev super chauds dans l'équipe et qui annoncent des délais de livraisons super courts. Pourquoi ne pas tenter le coup après-tout ? Ok ils ne produiront pas de feature pendant toute la période de refonte, mais après l'application sera stable !!

Sauf que, la connaissance métier est logée dans la tête du CTO / DSI / ... le délai annoncé d'un mois passe à deux, puis à trois, puis ...

Parce que pour faire une refonte il faut déjà avoir une connaissance des fonctionnalités, des échanges de données, il faut une doc ...

## Quelques conseils

* Dès le départ, versionnez
* Pour votre API, ayez une doc Swagger. Pour de vrai ! Pas une liste de routes sans la moindre info sur les entités et les paramètres
* Toujours pour l’API, vous utilisez Postman ? Super ! Partagez vos collections, en plus de proposer une collection des endpoints vous avez de quoi mettre en place des tests automatisées avec Newman
* La UI doit être documentée, partez d’un fork d’un framework comme Bootstrap
* Le code auto documenté n'existe pas, ajouter des commentaires ne prend pas longtemps et les commentaires peuvent même permettre de générer la documentation Swagger 
* Documentez vos fonctionnalités ! Qu’est-ce qui se passe quand je fais telle action métier ?