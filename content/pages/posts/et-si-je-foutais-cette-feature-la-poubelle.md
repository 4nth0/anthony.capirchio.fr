---
title: Et si je foutais cette feature la poubelle ?
excerpt: >-
  J’aime coder, et parce que j’aime coder, il peut m’arriver de me convaincre que telle ou telle fonctionnalité pourrait être super utile, simplement parce que la développer serait assez excitant. Mais n’est-ce pas en réalité une forme de pollution du projet ?.
date: '2022-10-10'
type: post
thumb_img_path: images/pages/posts/et-si-je-foutais-cette-feature-la-poubelle/illustration.jpeg
content_img_path: images/pages/posts/et-si-je-foutais-cette-feature-la-poubelle/illustration.jpeg
tags: ['mvp', 'projet']
layout: post
---
Je suis développeur, le code j’aime ça, je dirais même que j’adore. Plus que ça, c’est la résolution de problèmes à l’aide du code qui me fait palpiter. 

Dans mon métier, au quotidien, c’est plutôt un avantage non négligeable, mais assez fréquemment c’est un poison. Un poison pour la simple et bon raison que si mon plaisir est dans la résolution de problèmes, ça veut également dire que j’aime les problèmes… Comme beaucoup de dev, je joue régulièrement le rôle du pompier pyromane en créant moi-même des problèmes. 

Non, pas des bugs ou des dysfonctionnements, ça n’aurait pas beaucoup de sens, mais des fonctionnalités. Après tout, comment pourrais-je me voir reprocher l’ajout de nouvelles fonctionnalités ? C’est toujours bien d’avoir de nouvelles fonctionnalités dans un système non ?

Dans une grande partie des cas, **non**, ça n’est pas forcément une bonne chose d’ajouter de nouvelles fonctionnalités. Ce n’est pas une bonne idée parce qu’une feature, c’est au minimum :

- De la modélisation / conception
- De l’écriture de code
- De l’écriture de tests
- De l’écriture de documentation
- Très potentiellement de la refacto
- Un risque de régression

En gros, ça prend du temps, de l’énergie, et ça risque même de foutre le bazar dans le projet. 

La question qui se pose ici c’est : est-ce que le jeu en vaut la chandelle ? 

Plus exactement, est-ce que cette nouvelle fonctionnalité a un intérêt fondé autre que simplement venir nourrir mon besoin de résoudre des problèmes ? 

C’est une vraie question. Encore aujourd’hui j’ai stoppé un dev en plein milieu simplement parce que j’ai réalisé qu’il avait des conséquences non négligeables sur mon projet alors que sa seule raison d’être était un « ça pourrait être vachement utile cette fonctionnalité ». 

À vrai dire, dès que cette idée fait surface, il y a potentiellement une embrouille à venir. 

Comme assez souvent, pour se remettre sur les rails, il faut retourner à une certaine forme de radicalité. C’est de cette manière que je tente de plus en plus de prendre en compte deux approches majeures :

- YAGNI
- Philosophie UNIX

## YAGNI

> «*You ain’t gonna need it »*

Pourquoi ajouter cette fonctionnalité alors que tu n’en auras pas besoin ?

Globalement l’idée est de se limiter à ajouter des fonctionnalités qui sont véritablement  nécessaires. C’est assez radical, mais il faut voir ça comme une cure de désintoxication, car il est bien question de toxicité. 

Toxicité parce qu’en plus de faire consommer du temps inutilement, le développement pour l’auto satisfaction risque d’introduire des régressions ou encore de la dette technique. Ça apporte plus de galères qu’autre chose. 

L’idée est donc de se poser une question simple : mon projet a-t-il un besoin vital de cette fonctionnalité ?

L’idée d’un besoin « vital » est centrale ici. Il est vaguement question de se demander si le projet peut simplement exister sans la fonctionnalité en question.

Est-ce que le projet peut vivre sans cette feature ? Alors cette fonctionnalité  n’est absolument pas nécessaire, elle peut être mise à l’écart. 

## Philosophie UNIX

> Fais une chose et fais le bien

C’est probablement un des principes les plus importants de la philosophie UNIX. 

C’est l’idée qu’un programme doit se limiter à un domaine bien précis et ne pas déborder sur un autre. 

Par exemple, le programme `ls` se contente de lister le contenu d’un répertoire. Il possède pas mal d’options, mais se contente de rester dans son domaine : lister le contenu d’un répertoire. 

Il existe bien évidemment des programmes plus complexes comme `ssh` mais concrètement, il se limite à établir une connexion SSH. Il est possible de faire de la redirection de port, d’exécuter une commande à distance, mais il reste dans son domaine : établir une connexion SSH. 

Vous voulez copier un fichier via SSH ?

Pas de soucis, le programme `scp` est là pour ça, mais ça n’est pas une fonctionnalité du programme `ssh`. 

## Attendre un besoin signifie-t-il ne plus anticiper ?

C’est exactement à ce moment que nous pouvons être tentés de retomber dans la création de features non sollicités et malheureusement, je ne connais pas d’acronyme faisant référence à une quelconque philosophie.

Ici, pas de règle, simplement se faire confiance à soi-même. Faire confiance à son expérience, à sa connaissance du métier / produit.

Les principes comme YAGNI ne permettent en réalité que d’apprendre à se maîtriser soi-même. Il n’est aucunement question de règles à suivre de manière dogmatique, mais plutôt d’outils pour alimenter son auto discipline.