---
title: Comment bien choisir son side project ?
excerpt: >-
  Que nous débutions dans le développement ou que nsou soyons dans ce monde depuis un bail, nous galérons généralement à choisir et terminer nos Side project.
date: '2022-06-14'
type: post
thumb_img_path: images/pages/posts/choisir-son-side-project/illustration.jpeg
content_img_path: images/pages/posts/choisir-son-side-project/illustration.jpeg
tags: ['mvp', 'projet']
layout: post
---
Le dev c'est en grande partie le plaisir de résoudre des problèmes, alors quand il n'y a pas de problème, ou pas assez, nous avons une étrange tendance à en créer de nouveaux.
Pour dédramatiser la situation et surtout pour justifier le temps passé, nous les appelons "Side Project".
On ne va pas se mentir, en règle générale, nos Side Projects n'aboutissent jamais vraiment. Il y a plusieurs raisons à ça :
Aucun objectif précis.
Manque de temps et/ou de motivation une fois les premières heures passées sur le sujet.
Blocage technique

Pour ce qui est du manque d'objectifs précis, c'est un véritable problème, parce que sans savoir où nous allons, nous ne pouvons pas savoir quand mettre un terme au projet.
Nous avons tendance à toujours vouloir en ajouter un peu plus, toujours plus, de sorte que ce Side Project finit par devenir un chewing-gum collé à nos chaussures.
Il est donc nécessaire de tenter de fixer des objectifs assez rapidement dans le processus de mise en place du side project.

En ce qui concerne le manque de motivation, c'est assez fréquemment pour la même raison : le projet est souvent bien excitant que l'image que nous nous en faisions. Il y a souvent un écart assez important entre l'idée que nous nous faisions initialement de l'outil, avec une pelletée de fonctionnalités toutes aussi géniales les unes que les autres, et la réalité de l'exécution qui prend du temps, nous laisse confrontés à des blocages techniques ou même tout simplement une absence d’inspiration. A qui ça n'est pas arrivé de perdre un temps précieux par manque d'idée pour simplement nommer une fonction ?
Ajoutez à ça la nouvelle saison de Peaky Blinders et là c'est le drame.

## Choisir son Side Project

Pour résoudre en partie les problèmes présentés plus haut, nous pouvons nous baser sur une sorte d'arbre de décision pour bien choisir un Side Project.
En premier lieu, quel est l'objectif principal ?
Découvrir une nouvelle techno / technique / méthodo ?
Réalisation d'un outil exploitable ?
Se faire plaisir à coder ?
Évidemment, nous ne nous attarderons uniquement sur les deux premiers point, pour le dernier c'est comme le téléphone à table, chacun gère ça comme il veut.

### Side Project de découverte 

C'est très clairement le plus simple à cadrer.
L'objectif ici est d'obtenir une nouvelle compétence. Qu'il s’agisse d'une techno ou d'une technique, il suffit de fixer une destination et si tenir.

Par exemple, j'ai envie de mieux maîtriser Elastic Search. Aimant le rap et cherchant à voir les occurrences de certains mots pour voir comment ils s'imposent dans les titres, je vais me définir l'objectif suivant : 

Avoir une application me permettant d’indexer des paroles de rap avec les attributs suivants : <longue liste d’attributs...>.

* Cette application doit me permettre de faire une recherche pour un terme donné et me retourner les titres utilisant le terme.

* L'application doit également me retourner la fréquence d'utilisation de terme recherché par année, par mois et par département de l'artiste (ça peut être sympa d'observer comme un terme se répand).

À partir de cette description, je sais exactement où je veux aller. Je ne sais absolument pas comment m'y rendre au début, mais je sais ce que je veux faire et donc quand m'arrêter.

Autre exemple, je cherchais récemment à utiliser les fonctions d'agréation et de manipulation d'objet proposées par Postgresql. Pour atteindre cet objectif, je me suis listé le rapport que je souhaitais générer et à partir de là, j'ai travaillé dessus pour atteindre cet objectif. Une fois terminé, je suis simplement passé à autre chose.

## Side project All Inclusive

Là c'est le même problème que pour le Side Project de découverte sauf que pour celui-ci, en plus la nécessité de définir des objectifs, il faut embarquer des utilisateurs.

Concrètement, l'idée n'est pas de simplement se faire un outil pour le kif, mais de le faire pour quelqu'un, voir plusieurs personnes.

Nous avons tous dans l’entourage des gens qui ont des problèmes pas trop compliqués auxquelles nous pourrions apporter une solution passant par un projet web.

Je vais prendre un exemple tout simple et après j'arrête de raconter ma vie. Avec la nounou de mon fils, nous ne sommes pas à temps plein. Il y a donc un planning qui change chaque semaine. À côté de ça, nous sommes suivis pour le sommeil d'Ismaël et nous avons besoin d'alimenter un journal de sommeil avec les heures où il est couché, les heures d'endormissement et les heures de réveil.

Un Side Project All Inclusive pourrait être de faire une simple interface, idéalement orienté mobile, pour que notre nounou nous partage le planning et les informations relatives à la journée qui vient de se passer (dodo, repas, selles, ...).

De cette manière, nous aurions tout un tas d'avantages à résoudre ce problème :

1. De vrais utilisateurs font un retour sur l'application 
Des fonctionnalités peuvent émergées de la demande des utilisateurs 
2. Le fait que des vrais utilisateurs ajoute un peu de pression pour livrer quelque chose d'un minimum fonctionnel
3. Il va falloir livrer de nouvelles features, donc avoir la main sur la chaîne de déploiement de l'application

Alors là, tu vas me dire que c'est super tendu de vouloir faire ça, c'est un coup à passer pour une truffe si le projet est complètement buggé ou inachevé. Ce à quoi je te réponds que non, ça n'est clairement pas le cas pour les raisons suivantes :

* __Tu vas d'abord faire un MVP__, c’est-à-dire une version ultra-minimale du projet qui se contente de proposer la fonction la plus élémentaire de l'app (dans notre cas, soit le planning, soit les notes sur la journée), ensuite tu pourras itérer
* __Tu vas expliquer que c'est un prototype__ à la (ou "les") première personne qui va utiliser ton application et c'est impressionnant comment les gens peuvent faire preuve d'une véritable bienveillance

En plus, si ce projet fonctionne bien, qui sait, il y aura peut-être même moyen de le faire grossir et de le monétiser !
