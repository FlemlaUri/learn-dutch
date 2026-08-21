import type { Week } from '../types'

export const week6: Week = {
  week: 6,
  title: 'Sonner néerlandais : nuances, aisance, conversation libre',
  focus:
    "La dernière marche : les petits mots qui font qu'on te prend pour quelqu'un qui parle vraiment la langue, et une heure de conversation sans filet.",
  lessons: [
    /* ------------------------------------------------------------ J36 */
    {
      id: 'd36',
      day: 36,
      week: 6,
      title: 'Le small talk et le mot « gezellig »',
      goal: 'Meubler, relancer, être agréable — la compétence sociale n°1.',
      grammar: [
        {
          title: 'La météo, sujet national',
          body:
            "Aux Pays-Bas, on ouvre une conversation par le temps qu'il fait. Ce n'est pas un cliché, c'est un protocole.\n- *Lekker weertje, hè?* — Beau temps, hein ?\n- *Wat een weer!* — Quel temps ! (toujours négatif)\n- *Het valt wel mee vandaag.* — Ça va, aujourd'hui.\n- *Het waait hard.* — Il y a beaucoup de vent.\n- *Het is guur.* — Il fait un froid humide et venteux. Le mot le plus néerlandais qui soit.\n- *Eindelijk zon!* — Enfin du soleil !\nEt les relances universelles : *Echt waar? / Oh ja? / Wat leuk! / Wat vervelend! / Dat meen je niet!*",
          examples: [
            { nl: 'Lekker weertje, hè?', fr: 'Beau temps, hein ?' },
            { nl: 'Wat vervelend voor je!', fr: 'C’est embêtant pour toi !' },
          ],
        },
        {
          title: 'gezellig : le mot intraduisible',
          body:
            "**gezellig** décrit une ambiance chaleureuse, conviviale, agréable — un café, une soirée, une personne, un salon. C'est le mot que les Néerlandais citent en premier quand on leur demande ce qui les définit.\n- *Wat een gezellig café!*\n- *Het was gezellig, bedankt!* — à dire en partant de chez quelqu'un, toujours.\n- *Doe niet zo ongezellig!* — Ne sois pas rabat-joie !\nAutres mots de connivence à placer : **leuk** (sympa), **fijn** (agréable), **prima** (parfait), **top** (super), **jammer** (dommage), **balen** (râler, c'est nul).",
          examples: [
            { nl: 'Het was heel gezellig, bedankt!', fr: 'C’était très sympa, merci !' },
            { nl: 'Wat een gezellige buurt.', fr: 'Quel quartier agréable.' },
          ],
        },
      ],
      vocab: [
        { id: 'd36-weertje', nl: 'weertje', fr: 'petit temps (météo)', article: 'het' },
        { id: 'd36-bewolkt', nl: 'bewolkt', fr: 'nuageux' },
        { id: 'd36-zonnig', nl: 'zonnig', fr: 'ensoleillé' },
        { id: 'd36-guur', nl: 'guur', fr: 'froid et venteux' },
        { id: 'd36-waaien', nl: 'waaien', fr: 'venter' },
        { id: 'd36-sneeuw', nl: 'sneeuw', fr: 'neige', article: 'de' },
        { id: 'd36-mist', nl: 'mist', fr: 'brouillard', article: 'de' },
        { id: 'd36-graden', nl: 'graden', fr: 'degrés', article: 'de' },
        { id: 'd36-fijn', nl: 'fijn', fr: 'agréable' },
        { id: 'd36-prima', nl: 'prima', fr: 'parfait' },
        { id: 'd36-vervelend', nl: 'vervelend', fr: 'embêtant' },
        { id: 'd36-balen', nl: 'balen', fr: 'c’est nul / râler' },
        { id: 'd36-echtwaar', nl: 'echt waar?', fr: 'vraiment ?' },
        { id: 'd36-toevallig', nl: 'toevallig', fr: 'par hasard' },
        { id: 'd36-trouwens', nl: 'trouwens', fr: 'd’ailleurs' },
        { id: 'd36-eigenlijk', nl: 'eigenlijk', fr: 'en fait' },
      ],
      phrases: [
        { id: 'd36-p1', nl: 'Lekker weertje, hè?', fr: 'Beau temps, hein ?' },
        { id: 'd36-p2', nl: 'Wat een weer, zeg!', fr: 'Quel temps, dis donc !' },
        { id: 'd36-p3', nl: 'Het was heel gezellig, bedankt!', fr: 'C’était très sympa, merci !' },
        { id: 'd36-p4', nl: 'Wat vervelend voor je!', fr: 'C’est embêtant pour toi !' },
        { id: 'd36-p5', nl: 'Echt waar? Dat meen je niet!', fr: 'Vraiment ? Tu plaisantes !' },
        { id: 'd36-p6', nl: 'Hoe was het weekend, trouwens?', fr: 'Comment était le week-end, d’ailleurs ?' },
      ],
      dialogue: {
        title: 'Bij de fietsenstalling',
        context: 'Deux minutes de small talk sous la pluie. Rien d’important, tout est dans le ton.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Buurman', nl: 'Wat een weer, zeg!', fr: 'Quel temps, dis donc !' },
          { speaker: 'Uri', nl: 'Ja, verschrikkelijk. En het waait ook nog hard.', fr: 'Oui, terrible. Et en plus il y a beaucoup de vent.' },
          { speaker: 'Buurman', nl: 'Morgen wordt het beter, zeggen ze.', fr: 'Demain ça ira mieux, à ce qu’ils disent.' },
          { speaker: 'Uri', nl: 'Dat zeggen ze elke week!', fr: 'Ils disent ça toutes les semaines !' },
          { speaker: 'Buurman', nl: 'Haha, dat klopt. Ga je nog fietsen?', fr: 'Haha, c’est vrai. Tu y vas quand même à vélo ?' },
          { speaker: 'Uri', nl: 'Natuurlijk. Ik ben inmiddels een echte Nederlander.', fr: 'Bien sûr. Je suis devenu un vrai Néerlandais entre-temps.' },
          { speaker: 'Buurman', nl: 'Mooi zo! Kom je zaterdag trouwens borrelen?', fr: 'Très bien ! Tu viens à l’apéro samedi, au fait ?' },
          { speaker: 'Uri', nl: 'Graag. Dat is altijd gezellig bij jullie.', fr: 'Volontiers. C’est toujours convivial chez vous.' },
        ],
      },
      speaking: [
        { prompt: 'Commente le temps avec un voisin.', accept: ['Lekker weertje, hè?', 'Wat een weer, zeg!'] },
        { prompt: 'Remercie en partant d’une soirée.', accept: ['Het was heel gezellig, bedankt!'] },
        { prompt: 'Réagis à une mauvaise nouvelle d’un ami.', accept: ['Wat vervelend voor je!'] },
      ],
    },

    /* ------------------------------------------------------------ J37 */
    {
      id: 'd37',
      day: 37,
      week: 6,
      title: 'Les petits mots qui changent tout',
      goal: 'Placer even, wel, toch, hoor, maar, nou — la signature d’un locuteur naturel.',
      grammar: [
        {
          title: 'Les particules modales',
          body:
            "Ces mots n'ont presque pas de traduction, mais leur absence te fait sonner robotique et leur présence te fait sonner néerlandais.\n- **even** — « juste un instant », adoucit toute demande. *Kun je me **even** helpen?* Le mot le plus utile de la liste.\n- **maar** (hors du sens « mais ») — encourage, autorise. *Zeg het **maar**.* / *Ga **maar** zitten.*\n- **wel** — contredit une négation ou insiste. *Ik heb **wel** gebeld!* — Si, j'ai appelé !\n- **toch** — « quand même », ou cherche l'accord. *Je komt **toch**?* — Tu viens, hein ?\n- **hoor** — rassure, adoucit une réponse. *Geen probleem, **hoor**.*\n- **nou** — « bon », « eh bien ». *Nou, dat was leuk.*\n- **gewoon** — « juste, simplement ». *Doe **gewoon** normaal.*\n- **eens** — atténue une invitation. *Kom **eens** langs.*\nN'en mets pas trois par phrase. Un seul, bien placé, suffit.",
          examples: [
            { nl: 'Kun je me even helpen?', fr: 'Tu peux m’aider un instant ?' },
            { nl: 'Geen probleem, hoor.', fr: 'Pas de souci, va.' },
            { nl: 'Je komt toch morgen?', fr: 'Tu viens bien demain ?' },
          ],
        },
        {
          title: 'Où les placer',
          body:
            "Ces particules se glissent **après le verbe et le sujet**, avant le reste de la phrase — dans le « milieu » (*het middenveld*).\n*Ik ga **even** naar de winkel.*\n*Kun je dat **eens** uitleggen?*\nExceptions : **hoor** et **nou** se placent souvent **en fin** ou **en début** de phrase respectivement.\n*Dat is prima, **hoor**.* / ***Nou**, ik weet het niet.*\nMéthode : écoute une conversation néerlandaise et compte les *even*. Tu en entendras un toutes les trois phrases.",
          examples: [
            { nl: 'Ik ga even naar de winkel.', fr: 'Je vais juste faire un saut au magasin.' },
            { nl: 'Nou, dat viel mee!', fr: 'Eh bien, ce n’était pas si terrible !' },
          ],
        },
      ],
      vocab: [
        { id: 'd37-even', nl: 'even', fr: 'un instant / juste' },
        { id: 'd37-wel', nl: 'wel', fr: 'si / bien (contradiction)' },
        { id: 'd37-toch', nl: 'toch', fr: 'quand même / n’est-ce pas' },
        { id: 'd37-hoor', nl: 'hoor', fr: '(adoucit une phrase)' },
        { id: 'd37-nou', nl: 'nou', fr: 'eh bien / bon' },
        { id: 'd37-gewoon', nl: 'gewoon', fr: 'simplement / normal' },
        { id: 'd37-eens2', nl: 'eens', fr: 'une fois (atténuateur)' },
        { id: 'd37-zeg', nl: 'zeg', fr: 'dis donc' },
        { id: 'd37-joh', nl: 'joh', fr: '(marque de familiarité)' },
        { id: 'd37-hè', nl: 'hè', fr: 'hein ?' },
        { id: 'd37-inderdaad', nl: 'inderdaad', fr: 'en effet' },
        { id: 'd37-precies', nl: 'precies', fr: 'exactement' },
        { id: 'd37-sowieso', nl: 'sowieso', fr: 'de toute façon' },
        { id: 'd37-vallenmee', nl: 'meevallen', fr: 'être moins pire que prévu' },
        { id: 'd37-vallentegen', nl: 'tegenvallen', fr: 'être décevant' },
      ],
      phrases: [
        { id: 'd37-p1', nl: 'Kun je me even helpen?', fr: 'Tu peux m’aider un instant ?' },
        { id: 'd37-p2', nl: 'Geen probleem, hoor.', fr: 'Pas de souci, va.' },
        { id: 'd37-p3', nl: 'Je komt toch morgen?', fr: 'Tu viens bien demain ?' },
        { id: 'd37-p4', nl: 'Nou, dat viel mee!', fr: 'Eh bien, ce n’était pas si terrible !' },
        { id: 'd37-p5', nl: 'Zeg het maar.', fr: 'Dis-moi / je t’écoute.' },
        { id: 'd37-p6', nl: 'Dat is gewoon te duur.', fr: 'C’est tout simplement trop cher.' },
      ],
      dialogue: {
        title: 'Even bijpraten',
        context: 'Deux amis qui se croisent. Chaque réplique contient une particule modale.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Sanne', nl: 'Hé Uri! Heb je even?', fr: 'Hé Uri ! Tu as un instant ?' },
          { speaker: 'Uri', nl: 'Ja hoor, zeg het maar.', fr: 'Oui bien sûr, je t’écoute.' },
          { speaker: 'Sanne', nl: 'Je komt toch zaterdag? Ik heb je niet meer gehoord.', fr: 'Tu viens bien samedi ? Je n’ai plus eu de tes nouvelles.' },
          { speaker: 'Uri', nl: 'Ik heb wel gemaild, joh! Misschien in je spam.', fr: 'Mais si, j’ai envoyé un mail ! Peut-être dans tes spams.' },
          { speaker: 'Sanne', nl: 'Nou, dan kijk ik nog eens. Sorry!', fr: 'Bon, alors je regarderai encore. Désolée !' },
          { speaker: 'Uri', nl: 'Geeft niet, hoor. Ik kom sowieso.', fr: 'Ce n’est rien. Je viens de toute façon.' },
          { speaker: 'Sanne', nl: 'Top. Neem je gewoon iets te drinken mee?', fr: 'Super. Tu apportes juste quelque chose à boire ?' },
          { speaker: 'Uri', nl: 'Doe ik. Tot zaterdag dan, hè!', fr: 'Je le fais. À samedi alors, hein !' },
        ],
      },
      speaking: [
        { prompt: 'Demande de l’aide en adoucissant avec « even ».', accept: ['Kun je me even helpen?'] },
        { prompt: 'Rassure quelqu’un qui s’excuse.', accept: ['Geen probleem, hoor', 'Geeft niet, hoor'] },
        { prompt: 'Vérifie que quelqu’un vient bien demain.', accept: ['Je komt toch morgen?'] },
      ],
    },

    /* ------------------------------------------------------------ J38 */
    {
      id: 'd38',
      day: 38,
      week: 6,
      title: 'Les diminutifs et le registre familier',
      goal: 'Comprendre pourquoi tout finit en -je, et l’utiliser à bon escient.',
      grammar: [
        {
          title: 'Le -je est partout',
          body:
            "Le diminutif néerlandais ne dit pas seulement « petit ». Il dit **sympathique, léger, sans conséquence** — et il est omniprésent dans la conversation.\n- *een biertje* — une petite bière (ce qu'on commande, toujours)\n- *een kopje koffie* — une tasse de café\n- *een momentje* — un petit instant\n- *een praatje* — une petite conversation\n- *een uurtje* — une petite heure\n- *een dagje uit* — une journée d'excursion\nFormation : **-je** par défaut, **-tje** après voyelle longue ou *l, n, r, w* (*autootje, meisje, uurtje*), **-etje** après consonne courte (*kopje → kop**je***, *bal → bal**letje***), **-pje** après *m* (*boom → boompje*).\nUn diminutif est **toujours het** : *het biertje*, même si *de bier*… non, *het bier* justement.",
          examples: [
            { nl: 'Doe maar twee biertjes.', fr: 'Mets-nous deux bières.' },
            { nl: 'Heb je een momentje?', fr: 'Tu as un petit instant ?' },
          ],
        },
        {
          title: 'Les abréviations et le parler courant',
          body:
            "À l'oral, les Néerlandais avalent des syllabes. Reconnaître ces formes est indispensable pour **comprendre**, même si tu ne les produis pas :\n- *het* → **’t** · *een* → **’n** · *er* → **’r**\n- *ik* → souvent **’k** : *’k Weet het niet.*\n- *dat is* → **das** · *hoe is het* → **hoest**\n- *alsjeblieft* → **asjeblief** / **asjeblie**\n- *natuurlijk* → **tuurlijk**\n- *even* → **effe**\n- *eigenlijk* → **eiglijk**\nEt les tics d'hésitation à imiter pour gagner du temps : **uh…**, **nou ja…**, **hoe zeg je dat…**, **weet je wel…**",
          examples: [
            { nl: 'Tuurlijk, geen probleem.', fr: 'Bien sûr, pas de problème.' },
            { nl: 'Nou ja, hoe zeg je dat...', fr: 'Enfin bon, comment dit-on ça...' },
          ],
        },
      ],
      vocab: [
        { id: 'd38-biertje', nl: 'biertje', fr: 'une bière', article: 'het' },
        { id: 'd38-kopje', nl: 'kopje', fr: 'tasse', article: 'het' },
        { id: 'd38-momentje', nl: 'momentje', fr: 'petit instant', article: 'het' },
        { id: 'd38-praatje', nl: 'praatje', fr: 'petite conversation', article: 'het' },
        { id: 'd38-uurtje', nl: 'uurtje', fr: 'petite heure', article: 'het' },
        { id: 'd38-broodje2', nl: 'broodje', fr: 'petit pain / sandwich', article: 'het' },
        { id: 'd38-meisje', nl: 'meisje', fr: 'fille', article: 'het' },
        { id: 'd38-jongen', nl: 'jongen', fr: 'garçon', article: 'de' },
        { id: 'd38-tuurlijk', nl: 'tuurlijk', fr: 'bien sûr (familier)' },
        { id: 'd38-effe', nl: 'effe', fr: 'un instant (familier)' },
        { id: 'd38-weetjewel', nl: 'weet je wel', fr: 'tu vois' },
        { id: 'd38-zon', nl: 'zo’n', fr: 'un tel / ce genre de' },
        { id: 'd38-beetje', nl: 'beetje', fr: 'un peu', article: 'het' },
        { id: 'd38-stukje', nl: 'stukje', fr: 'petit morceau', article: 'het' },
        { id: 'd38-ietsje', nl: 'ietsje', fr: 'un tout petit peu' },
      ],
      phrases: [
        { id: 'd38-p1', nl: 'Doe maar twee biertjes.', fr: 'Mets-nous deux bières.' },
        { id: 'd38-p2', nl: 'Heb je een momentje voor me?', fr: 'Tu as un petit instant pour moi ?' },
        { id: 'd38-p3', nl: 'Zullen we een kopje koffie doen?', fr: 'On prend une petite tasse de café ?' },
        { id: 'd38-p4', nl: 'Nou ja, hoe zeg je dat ook alweer...', fr: 'Enfin bon, comment dit-on ça déjà...' },
        { id: 'd38-p5', nl: 'Een beetje meer, alsjeblieft.', fr: 'Un peu plus, s’il te plaît.' },
      ],
      dialogue: {
        title: 'Een biertje na het werk',
        context: 'Le vrai néerlandais parlé : diminutifs, abréviations, hésitations.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Bram', nl: 'Zin in een biertje? Effe ontspannen.', fr: 'Envie d’une bière ? Se détendre un peu.' },
          { speaker: 'Uri', nl: 'Tuurlijk. Ik heb wel een uurtje.', fr: 'Bien sûr. J’ai bien une petite heure.' },
          { speaker: 'Bram', nl: 'Top. Dat cafeetje op de hoek is gezellig.', fr: 'Super. Ce petit café au coin est sympa.' },
          { speaker: 'Uri', nl: 'Kennen we. Ze hebben daar van die kleine hapjes.', fr: 'On connaît. Ils ont là-bas ces petits amuse-bouches.' },
          { speaker: 'Bram', nl: 'Bitterballen! Doen we. Even mijn jas pakken.', fr: 'Des bitterballen ! On y va. Je prends juste mon manteau.' },
          { speaker: 'Uri', nl: 'Prima. Ik loop alvast een stukje mee.', fr: 'Parfait. Je fais déjà un bout de chemin avec toi.' },
          { speaker: 'Bram', nl: 'Hoe gaat het eigenlijk met je Nederlands?', fr: 'Comment ça va avec ton néerlandais, au fait ?' },
          { speaker: 'Uri', nl: 'Nou ja... beter dan vorige maand. Ik versta al veel meer.', fr: 'Eh bien... mieux que le mois dernier. Je comprends déjà beaucoup plus.' },
        ],
      },
      speaking: [
        { prompt: 'Commande deux bières de façon naturelle.', accept: ['Doe maar twee biertjes'] },
        { prompt: 'Propose de prendre un café.', accept: ['Zullen we een kopje koffie doen?'] },
        { prompt: 'Gagne du temps pendant que tu cherches un mot.', accept: ['Nou ja, hoe zeg je dat ook alweer'] },
      ],
    },

    /* ------------------------------------------------------------ J39 */
    {
      id: 'd39',
      day: 39,
      week: 6,
      title: 'Comparer et préférer',
      goal: 'Exprimer une préférence, comparer, nuancer.',
      grammar: [
        {
          title: 'Comparatif et superlatif',
          body:
            "- **Comparatif** : adjectif + **-er**. *goedkoop → goedkoper*, *klein → kleiner*.\n  Adjectif finissant par **-r** : on insère un **d**. *duur → duur**d**er*, *lekker → lekker**d**er*.\n- **Superlatif** : adjectif + **-st**, avec **het** devant. *het goedkoopst, het kleinst*.\n- Irréguliers : *goed → **beter → best*** · *veel → **meer → meest*** · *weinig → **minder → minst*** · *graag → **liever → liefst***.\n- Comparer : **dan** après un comparatif. *Dit is goedkoper **dan** dat.*\n- Égalité : **net zo … als**. *Even duur als.* / *Net zo groot als.*",
          examples: [
            { nl: 'Deze fiets is duurder dan die.', fr: 'Ce vélo est plus cher que celui-là.' },
            { nl: 'Dit is het lekkerste brood van de stad.', fr: 'C’est le meilleur pain de la ville.' },
          ],
        },
        {
          title: 'liever et het liefst : dire ce qu’on préfère',
          body:
            "C'est le comparatif de **graag**, et il sert tout le temps :\n- *Ik drink **graag** koffie.* — J'aime bien le café.\n- *Ik drink **liever** thee.* — Je préfère le thé.\n- *Ik drink **het liefst** water.* — Ce que je préfère, c'est l'eau.\nAutres tournures de préférence :\n- *Ik heb liever …* — Je préfère (avoir)…\n- *Wat mij betreft …* — En ce qui me concerne…\n- *Ik zou liever … willen.* — Je préférerais…\n- *Doe mij maar …* — Donnez-moi plutôt… (au comptoir)",
          examples: [
            { nl: 'Ik drink liever thee dan koffie.', fr: 'Je préfère le thé au café.' },
            { nl: 'Doe mij maar een biertje.', fr: 'Donnez-moi plutôt une bière.' },
          ],
        },
      ],
      vocab: [
        { id: 'd39-liever', nl: 'liever', fr: 'plutôt / de préférence' },
        { id: 'd39-hetliefst', nl: 'het liefst', fr: 'de préférence absolue' },
        { id: 'd39-beter2', nl: 'beter', fr: 'meilleur / mieux' },
        { id: 'd39-best', nl: 'best', fr: 'le meilleur' },
        { id: 'd39-meer', nl: 'meer', fr: 'plus' },
        { id: 'd39-minder', nl: 'minder', fr: 'moins' },
        { id: 'd39-dan', nl: 'dan', fr: 'que (comparaison)' },
        { id: 'd39-evenals', nl: 'net zo... als', fr: 'aussi... que' },
        { id: 'd39-hetzelfde', nl: 'hetzelfde', fr: 'la même chose' },
        { id: 'd39-verschil', nl: 'verschil', fr: 'différence', article: 'het' },
        { id: 'd39-keuze', nl: 'keuze', fr: 'choix', article: 'de' },
        { id: 'd39-kiezen', nl: 'kiezen', fr: 'choisir' },
        { id: 'd39-voorkeur', nl: 'voorkeur', fr: 'préférence', article: 'de' },
        { id: 'd39-vergelijken', nl: 'vergelijken', fr: 'comparer' },
        { id: 'd39-genieten', nl: 'genieten', fr: 'profiter' },
      ],
      phrases: [
        { id: 'd39-p1', nl: 'Ik drink liever thee dan koffie.', fr: 'Je préfère le thé au café.' },
        { id: 'd39-p2', nl: 'Deze is goedkoper dan die.', fr: 'Celui-ci est moins cher que celui-là.' },
        { id: 'd39-p3', nl: 'Doe mij maar hetzelfde.', fr: 'Donnez-moi la même chose.' },
        { id: 'd39-p4', nl: 'Wat vind jij het lekkerst?', fr: 'Qu’est-ce que tu préfères ?' },
        { id: 'd39-p5', nl: 'Het maakt mij niet uit.', fr: 'Ça m’est égal.' },
        { id: 'd39-p6', nl: 'Ik zou liever thuis blijven.', fr: 'Je préférerais rester à la maison.' },
      ],
      dialogue: {
        title: 'Kiezen in het restaurant',
        context: 'Choisir un plat, comparer, exprimer une préférence.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Lisa', nl: 'Wat neem jij? De vis of de pasta?', fr: 'Tu prends quoi ? Le poisson ou les pâtes ?' },
          { speaker: 'Uri', nl: 'Ik neem liever de pasta. Vis lust ik niet zo.', fr: 'Je préfère les pâtes. Le poisson, je n’aime pas trop.' },
          { speaker: 'Lisa', nl: 'De vis is hier wel het lekkerst, hoor.', fr: 'Le poisson est pourtant le meilleur ici.' },
          { speaker: 'Uri', nl: 'Dat kan, maar pasta is voor mij makkelijker.', fr: 'C’est possible, mais les pâtes c’est plus simple pour moi.' },
          { speaker: 'Lisa', nl: 'En te drinken? Wijn of bier?', fr: 'Et à boire ? Du vin ou de la bière ?' },
          { speaker: 'Uri', nl: 'Doe mij maar een biertje. Het is warmer dan gisteren.', fr: 'Donnez-moi plutôt une bière. Il fait plus chaud qu’hier.' },
          { speaker: 'Lisa', nl: 'Goed idee. Ik neem hetzelfde.', fr: 'Bonne idée. Je prends la même chose.' },
          { speaker: 'Uri', nl: 'En als nagerecht? Het maakt mij niet uit.', fr: 'Et comme dessert ? Ça m’est égal.' },
        ],
      },
      speaking: [
        { prompt: 'Dis que tu préfères le thé au café.', accept: ['Ik drink liever thee dan koffie'] },
        { prompt: 'Dis que ça t’est égal.', accept: ['Het maakt mij niet uit'] },
        { prompt: 'Compare : ce vélo est plus cher que celui-là.', accept: ['Deze fiets is duurder dan die'] },
      ],
    },

    /* ------------------------------------------------------------ J40 */
    {
      id: 'd40',
      day: 40,
      week: 6,
      title: 'Réparer une conversation',
      goal: 'Ne plus jamais te bloquer : reformuler, contourner, relancer.',
      grammar: [
        {
          title: 'Les stratégies de contournement',
          body:
            "Un locuteur B1 n'est pas quelqu'un qui connaît tous les mots : c'est quelqu'un qui sait faire **sans** le mot qui manque.\n- **Décrire** : *Hoe heet dat ding waarmee je … ?* — Comment s'appelle le truc avec lequel on… ?\n- **Approcher** : *Zoiets als …* — Quelque chose comme…\n- **Généraliser** : *een ding, een spullen, zo'n apparaat*\n- **Demander** : *Wat is het woord voor …?* / *Hoe noem je dat?*\n- **Vérifier** : *Bedoel je …?* — Tu veux dire… ? / *Begrijp ik het goed dat …?*\n- **Gagner du temps** : *Even denken… / Hoe zal ik het zeggen… / Nou ja…*\nCes six réflexes valent plus que trois cents mots de vocabulaire.",
          examples: [
            { nl: 'Hoe heet dat ding waarmee je de fles opent?', fr: 'Comment s’appelle le truc avec lequel on ouvre la bouteille ?' },
            { nl: 'Bedoel je dat ik morgen moet komen?', fr: 'Tu veux dire que je dois venir demain ?' },
          ],
        },
        {
          title: 'S’excuser, se plaindre, insister — poliment',
          body:
            "**S'excuser** : *Sorry, dat was mijn fout.* / *Neem me niet kwalijk.* (plus formel) / *Het spijt me.*\n**Se plaindre** : *Ik heb een klacht over …* / *Dit klopt niet.* / *Ik ben hier niet tevreden over.*\n**Insister sans agressivité** : *Ik begrijp het, maar …* / *Toch zou ik graag …* / *Kunnen we een oplossing vinden?*\n**Interrompre** : *Mag ik even iets zeggen?* / *Sorry dat ik je onderbreek.*\n**Clore** : *Goed, dan laten we het daarbij.* — Bon, on en reste là.",
          examples: [
            { nl: 'Sorry, dat was mijn fout.', fr: 'Désolé, c’était ma faute.' },
            { nl: 'Ik begrijp het, maar dit klopt niet.', fr: 'Je comprends, mais ce n’est pas correct.' },
          ],
        },
      ],
      vocab: [
        { id: 'd40-bedoelen', nl: 'bedoelen', fr: 'vouloir dire' },
        { id: 'd40-noemen', nl: 'noemen', fr: 'appeler / nommer' },
        { id: 'd40-uitdrukking', nl: 'uitdrukking', fr: 'expression', article: 'de' },
        { id: 'd40-ding', nl: 'ding', fr: 'chose / truc', article: 'het' },
        { id: 'd40-fout', nl: 'fout', fr: 'erreur', article: 'de' },
        { id: 'd40-spijten', nl: 'spijten', fr: 'regretter' },
        { id: 'd40-klacht2', nl: 'klacht', fr: 'réclamation', article: 'de' },
        { id: 'd40-tevreden', nl: 'tevreden', fr: 'satisfait' },
        { id: 'd40-oplossing', nl: 'oplossing', fr: 'solution', article: 'de' },
        { id: 'd40-onderbreken', nl: 'onderbreken', fr: 'interrompre' },
        { id: 'd40-uitleg', nl: 'uitleg', fr: 'explication', article: 'de' },
        { id: 'd40-samenvatten', nl: 'samenvatten', fr: 'résumer' },
        { id: 'd40-nogmaals', nl: 'nogmaals', fr: 'encore une fois' },
        { id: 'd40-duidelijk', nl: 'duidelijk', fr: 'clair' },
        { id: 'd40-onduidelijk', nl: 'onduidelijk', fr: 'pas clair' },
      ],
      phrases: [
        { id: 'd40-p1', nl: 'Hoe noem je dat ook alweer?', fr: 'Comment on appelle ça déjà ?' },
        { id: 'd40-p2', nl: 'Bedoel je dat ik morgen moet komen?', fr: 'Tu veux dire que je dois venir demain ?' },
        { id: 'd40-p3', nl: 'Sorry, dat was mijn fout.', fr: 'Désolé, c’était ma faute.' },
        { id: 'd40-p4', nl: 'Ik begrijp het, maar dit klopt niet.', fr: 'Je comprends, mais ce n’est pas correct.' },
        { id: 'd40-p5', nl: 'Mag ik even iets zeggen?', fr: 'Puis-je dire quelque chose ?' },
        { id: 'd40-p6', nl: 'Kunnen we samen een oplossing vinden?', fr: 'Pouvons-nous trouver une solution ensemble ?' },
      ],
      dialogue: {
        title: 'Een fout in de rekening',
        context: 'L’addition est fausse. Tu le signales — clairement, poliment, en néerlandais.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Uri', nl: 'Sorry, mag ik even iets vragen over de rekening?', fr: 'Pardon, puis-je poser une question sur l’addition ?' },
          { speaker: 'Ober', nl: 'Natuurlijk, wat is er?', fr: 'Bien sûr, qu’y a-t-il ?' },
          { speaker: 'Uri', nl: 'Hier staan drie biertjes, maar we hadden er twee.', fr: 'Ici il y a trois bières, mais nous en avions deux.' },
          { speaker: 'Ober', nl: 'Even kijken... U heeft gelijk. Mijn fout.', fr: 'Voyons voir... Vous avez raison. Ma faute.' },
          { speaker: 'Uri', nl: 'Geen probleem, hoor. Kan het aangepast worden?', fr: 'Pas de souci. Cela peut-il être corrigé ?' },
          { speaker: 'Ober', nl: 'Zeker, ik maak een nieuwe rekening.', fr: 'Certainement, je fais une nouvelle addition.' },
          { speaker: 'Uri', nl: 'Bedankt. En het eten was echt heerlijk, trouwens.', fr: 'Merci. Et le repas était vraiment délicieux, au fait.' },
          { speaker: 'Ober', nl: 'Fijn om te horen! Alstublieft, de nieuwe rekening.', fr: 'Content de l’entendre ! Voici, la nouvelle addition.' },
          { speaker: 'Uri', nl: 'Perfect, nu klopt het. Ik pin even.', fr: 'Parfait, maintenant c’est correct. Je paie par carte.' },
        ],
      },
      speaking: [
        { prompt: 'Signale poliment une erreur sur l’addition.', accept: ['Sorry, ik denk dat de rekening niet klopt'] },
        { prompt: 'Vérifie que tu as bien compris ce qu’on t’a dit.', accept: ['Bedoel je dat ik morgen moet komen?'] },
        { prompt: 'Demande comment on appelle un objet dont tu ignores le nom.', accept: ['Hoe noem je dat ook alweer?'] },
      ],
    },

    /* ------------------------------------------------------------ J41 */
    {
      id: 'd41',
      day: 41,
      week: 6,
      title: 'Conversation libre — dîner chez la belle-famille',
      goal: 'Une heure entière en néerlandais, sur des sujets variés, sans préparation.',
      grammar: [
        {
          title: 'Tenir un dîner de deux heures',
          body:
            "Le scénario le plus exigeant : plusieurs interlocuteurs, des sujets qui changent, du bruit, et personne qui ralentit pour toi.\n**Tes cinq outils :**\n1. **Poser des questions.** Celui qui questionne contrôle le rythme et parle moins. *En hoe was het bij jullie? En wat vind jij daarvan?*\n2. **Relancer.** *Echt waar? Wat leuk! Vertel eens.*\n3. **Signaler quand tu décroches.** *Sorry, ik ben even de draad kwijt.* — J'ai perdu le fil.\n4. **Résumer pour vérifier.** *Dus als ik het goed begrijp, …*\n5. **Assumer.** *Mijn Nederlands is nog niet perfect, maar ik doe mijn best.* Dit une fois, en début de soirée, et ne t'excuse plus ensuite.\nSujets à préparer : ton travail, ton pays, la nourriture, les vacances, le logement, le vélo, la météo, le néerlandais lui-même.",
          examples: [
            { nl: 'Sorry, ik ben even de draad kwijt.', fr: 'Désolé, j’ai perdu le fil.' },
            { nl: 'Dus als ik het goed begrijp, gaan jullie in mei verhuizen?', fr: 'Donc si je comprends bien, vous déménagez en mai ?' },
          ],
        },
        {
          title: 'Les codes de table néerlandais',
          body:
            "- On arrive **à l'heure**, pas plus tard, avec quelque chose pour l'hôte.\n- **Eet smakelijk!** au moment de commencer — attends que quelqu'un le dise.\n- On se sert modestement ; se resservir est un compliment : *Mag ik nog een beetje?*\n- Pour refuser : *Nee dank je, ik zit vol.* — Non merci, je n'ai plus faim.\n- En partant : *Bedankt voor de gezellige avond!* et *Het was heerlijk.*\n- Le lendemain, un petit message : *Nogmaals bedankt voor gisteren!*",
          examples: [
            { nl: 'Mag ik nog een beetje?', fr: 'Puis-je en reprendre un peu ?' },
            { nl: 'Nee dank je, ik zit vol.', fr: 'Non merci, je n’ai plus faim.' },
          ],
        },
      ],
      vocab: [
        { id: 'd41-schoonfamilie', nl: 'schoonfamilie', fr: 'belle-famille', article: 'de' },
        { id: 'd41-gastheer', nl: 'gastheer', fr: 'hôte', article: 'de' },
        { id: 'd41-bloemen', nl: 'bloemen', fr: 'fleurs', article: 'de' },
        { id: 'd41-cadeau', nl: 'cadeau', fr: 'cadeau', article: 'het' },
        { id: 'd41-toost', nl: 'proost', fr: 'santé ! (trinquer)' },
        { id: 'd41-bord', nl: 'bord', fr: 'assiette', article: 'het' },
        { id: 'd41-glas', nl: 'glas', fr: 'verre', article: 'het' },
        { id: 'd41-opscheppen', nl: 'opscheppen', fr: 'se servir' },
        { id: 'd41-zitvol', nl: 'ik zit vol', fr: 'je n’ai plus faim' },
        { id: 'd41-draadkwijt', nl: 'de draad kwijt', fr: 'perdu le fil' },
        { id: 'd41-vertellen', nl: 'vertellen', fr: 'raconter' },
        { id: 'd41-luisteren2', nl: 'luisteren naar', fr: 'écouter' },
        { id: 'd41-lachen', nl: 'lachen', fr: 'rire' },
        { id: 'd41-grap', nl: 'grap', fr: 'blague', article: 'de' },
        { id: 'd41-onderwerp', nl: 'onderwerp', fr: 'sujet', article: 'het' },
        { id: 'd41-bestmoeite', nl: 'mijn best doen', fr: 'faire de mon mieux' },
      ],
      phrases: [
        { id: 'd41-p1', nl: 'Bedankt voor de uitnodiging!', fr: 'Merci pour l’invitation !' },
        { id: 'd41-p2', nl: 'Mijn Nederlands is nog niet perfect, maar ik doe mijn best.', fr: 'Mon néerlandais n’est pas encore parfait, mais je fais de mon mieux.' },
        { id: 'd41-p3', nl: 'Sorry, ik ben even de draad kwijt.', fr: 'Désolé, j’ai perdu le fil.' },
        { id: 'd41-p4', nl: 'Mag ik nog een beetje?', fr: 'Puis-je en reprendre un peu ?' },
        { id: 'd41-p5', nl: 'Nee dank je, ik zit vol.', fr: 'Non merci, je n’ai plus faim.' },
        { id: 'd41-p6', nl: 'Bedankt voor de gezellige avond!', fr: 'Merci pour cette soirée conviviale !' },
      ],
      dialogue: {
        title: 'Aan tafel bij de familie',
        context: 'Le grand oral. Plusieurs interlocuteurs, plusieurs sujets, une heure de néerlandais.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Moeder', nl: 'Kom binnen, kom binnen! Wat leuk dat je er bent.', fr: 'Entre, entre ! Quelle joie que tu sois là.' },
          { speaker: 'Uri', nl: 'Dank u wel. Deze bloemen zijn voor u.', fr: 'Merci beaucoup. Ces fleurs sont pour vous.' },
          { speaker: 'Moeder', nl: 'Ach, wat lief! Dat had niet gehoeven.', fr: 'Oh, comme c’est gentil ! Ce n’était pas nécessaire.' },
          { speaker: 'Vader', nl: 'Zo, dus jij bent de Fransman. Wat drink je?', fr: 'Alors, c’est toi le Français. Que bois-tu ?' },
          { speaker: 'Uri', nl: 'Een biertje graag. En sorry, mijn Nederlands is nog niet perfect.', fr: 'Une bière volontiers. Et désolé, mon néerlandais n’est pas encore parfait.' },
          { speaker: 'Vader', nl: 'Het klinkt prima, joh. Beter dan mijn Frans!', fr: 'Ça sonne très bien. Mieux que mon français !' },
          { speaker: 'Moeder', nl: 'Eet smakelijk allemaal. Uri, hou je van stamppot?', fr: 'Bon appétit à tous. Uri, tu aimes le stamppot ?' },
          { speaker: 'Uri', nl: 'Ik heb het nog nooit gegeten. Wat zit erin precies?', fr: 'Je n’en ai jamais mangé. Qu’y a-t-il dedans exactement ?' },
          { speaker: 'Vader', nl: 'Aardappel, boerenkool en worst. Echt Hollands.', fr: 'Pomme de terre, chou frisé et saucisse. Vraiment hollandais.' },
          { speaker: 'Uri', nl: 'Dan probeer ik het. Mag ik nog een beetje?', fr: 'Alors j’essaie. Puis-je en reprendre un peu ?' },
          { speaker: 'Moeder', nl: 'Natuurlijk! Fijn dat het smaakt.', fr: 'Bien sûr ! Content que ça te plaise.' },
          { speaker: 'Uri', nl: 'Het was heerlijk. Bedankt voor de gezellige avond!', fr: 'C’était délicieux. Merci pour cette soirée conviviale !' },
        ],
      },
      speaking: [
        { prompt: 'Arrive chez quelqu’un avec un cadeau et remercie pour l’invitation.', accept: ['Bedankt voor de uitnodiging, deze bloemen zijn voor u'] },
        { prompt: 'Préviens une fois que ton néerlandais n’est pas parfait mais que tu fais de ton mieux.', accept: ['Mijn Nederlands is nog niet perfect, maar ik doe mijn best'] },
        { prompt: 'Signale que tu as perdu le fil de la conversation.', accept: ['Sorry, ik ben even de draad kwijt'] },
      ],
    },

    /* ------------------------------------------------------------ J42 */
    {
      id: 'd42',
      day: 42,
      week: 6,
      title: 'Bilan et plan de maintien',
      goal: 'Mesurer le chemin parcouru et organiser la suite pour ne pas tout perdre.',
      grammar: [
        {
          title: 'Ton examen blanc',
          body:
            "Enregistre-toi en répondant à ces huit questions, sans notes, en continu. Réécoute-toi. C'est ton niveau réel.\n1. *Kunt u zich even voorstellen?*\n2. *Wat doet u voor werk?*\n3. *Hoe ziet uw dag eruit?*\n4. *Wat heeft u afgelopen weekend gedaan?*\n5. *Wat vindt u van Nederland?*\n6. *Wat gaat u volgend jaar doen?*\n7. *Kunt u de weg uitleggen naar uw huis?*\n8. *Waarom leert u Nederlands?*\nCritère de réussite : deux minutes par question, pas plus de trois blocages, zéro mot d'anglais.",
          examples: [
            { nl: 'Kunt u zich even voorstellen?', fr: 'Pouvez-vous vous présenter ?' },
            { nl: 'Waarom leert u Nederlands?', fr: 'Pourquoi apprenez-vous le néerlandais ?' },
          ],
        },
        {
          title: 'Après les six semaines : le plan de maintien',
          body:
            "Six semaines t'ont amené à un A2 solide, orienté oral. Voici comment ne pas redescendre — et monter vers le B1.\n**Chaque jour, 15 minutes** : les révisions espacées de cette app. Ne les saute jamais, c'est ce qui empêche l'oubli.\n**Trois fois par semaine, 30 minutes** : une conversation réelle. Un tandem, un collègue, un voisin. Une règle unique : **pas d'anglais**.\n**Chaque semaine** : un épisode de série néerlandaise avec sous-titres **néerlandais**, pas français. Et un podcast lent en fond.\n**Chaque mois** : relis une leçon de grammaire de cette app. Les règles V2, la subordonnée et le placement de *niet* méritent trois passages.\n**Le piège à éviter** : les Néerlandais passeront à l'anglais dès qu'ils sentent une hésitation. Prépare ta phrase et redis-la à chaque fois : *Mogen we Nederlands blijven praten? Ik ben aan het leren.*",
          examples: [
            { nl: 'Mogen we Nederlands blijven praten? Ik ben aan het leren.', fr: 'Peut-on continuer en néerlandais ? Je suis en train d’apprendre.' },
            { nl: 'Ik oefen elke dag een kwartiertje.', fr: 'Je m’entraîne un petit quart d’heure chaque jour.' },
          ],
        },
      ],
      vocab: [
        { id: 'd42-voorstellen', nl: 'zich voorstellen', fr: 'se présenter' },
        { id: 'd42-vooruitgang', nl: 'vooruitgang', fr: 'progrès', article: 'de' },
        { id: 'd42-niveau', nl: 'niveau', fr: 'niveau', article: 'het' },
        { id: 'd42-vloeiend', nl: 'vloeiend', fr: 'couramment' },
        { id: 'd42-woordenschat', nl: 'woordenschat', fr: 'vocabulaire', article: 'de' },
        { id: 'd42-uitspraak', nl: 'uitspraak', fr: 'prononciation', article: 'de' },
        { id: 'd42-grammatica', nl: 'grammatica', fr: 'grammaire', article: 'de' },
        { id: 'd42-herhaling', nl: 'herhaling', fr: 'révision', article: 'de' },
        { id: 'd42-volhouden', nl: 'volhouden', fr: 'persévérer' },
        { id: 'd42-opgeven', nl: 'opgeven', fr: 'abandonner' },
        { id: 'd42-lukken', nl: 'lukken', fr: 'réussir / marcher' },
        { id: 'd42-durven', nl: 'durven', fr: 'oser' },
        { id: 'd42-gewend', nl: 'gewend', fr: 'habitué' },
        { id: 'd42-kwartiertje', nl: 'kwartiertje', fr: 'petit quart d’heure', article: 'het' },
        { id: 'd42-taal', nl: 'taal', fr: 'langue', article: 'de' },
      ],
      phrases: [
        { id: 'd42-p1', nl: 'Kunt u zich even voorstellen?', fr: 'Pouvez-vous vous présenter ?' },
        { id: 'd42-p2', nl: 'Mogen we Nederlands blijven praten? Ik ben aan het leren.', fr: 'Peut-on continuer en néerlandais ? Je suis en train d’apprendre.' },
        { id: 'd42-p3', nl: 'Ik oefen elke dag een kwartiertje.', fr: 'Je m’entraîne un petit quart d’heure chaque jour.' },
        { id: 'd42-p4', nl: 'Ik durf nu veel meer te zeggen.', fr: 'J’ose dire beaucoup plus maintenant.' },
        { id: 'd42-p5', nl: 'Het lukt steeds beter.', fr: 'Ça marche de mieux en mieux.' },
        { id: 'd42-p6', nl: 'Ik ga niet opgeven.', fr: 'Je ne vais pas abandonner.' },
      ],
      dialogue: {
        title: 'Zes weken later',
        context: 'La même conversation que le jour 7, six semaines plus tard. Compare.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Tess', nl: 'Uri! Lang niet gezien. Hoe gaat het met je Nederlands?', fr: 'Uri ! Ça fait longtemps. Comment va ton néerlandais ?' },
          { speaker: 'Uri', nl: 'Veel beter, geloof ik. Ik oefen elke dag een kwartiertje.', fr: 'Bien mieux, je crois. Je m’entraîne un petit quart d’heure chaque jour.' },
          { speaker: 'Tess', nl: 'Dat hoor ik! Je aarzelt bijna niet meer.', fr: 'Ça s’entend ! Tu n’hésites presque plus.' },
          { speaker: 'Uri', nl: 'Ik maak nog fouten, maar ik durf nu gewoon te praten.', fr: 'Je fais encore des fautes, mais maintenant j’ose simplement parler.' },
          { speaker: 'Tess', nl: 'Dat is het belangrijkste. Wat was het moeilijkst?', fr: 'C’est le plus important. Qu’est-ce qui était le plus difficile ?' },
          { speaker: 'Uri', nl: 'De woordvolgorde. En "half acht" natuurlijk!', fr: 'L’ordre des mots. Et « half acht » bien sûr !' },
          { speaker: 'Tess', nl: 'Haha, iedereen struikelt daarover. En nu?', fr: 'Haha, tout le monde trébuche là-dessus. Et maintenant ?' },
          { speaker: 'Uri', nl: 'Nu wil ik naar B1. Ik ga niet opgeven.', fr: 'Maintenant je veux atteindre le B1. Je ne vais pas abandonner.' },
          { speaker: 'Tess', nl: 'Zullen we elke week een half uur afspreken? Alleen Nederlands.', fr: 'On se voit une demi-heure par semaine ? Seulement néerlandais.' },
          { speaker: 'Uri', nl: 'Afgesproken. Dat is precies wat ik nodig heb.', fr: 'Marché conclu. C’est exactement ce dont j’ai besoin.' },
        ],
      },
      speaking: [
        { prompt: 'Réponds à « Kunt u zich even voorstellen? » — deux minutes, sans notes.', accept: ['Ik heet Uri, ik kom uit Frankrijk en ik woon in Amsterdam'] },
        { prompt: 'Explique pourquoi tu apprends le néerlandais.', accept: ['Ik leer Nederlands omdat ik hier woon en met mensen wil praten'] },
        { prompt: 'Demande à continuer la conversation en néerlandais.', accept: ['Mogen we Nederlands blijven praten? Ik ben aan het leren'] },
      ],
    },
  ],
}
