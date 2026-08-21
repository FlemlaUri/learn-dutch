import type { Week } from '../types'

export const week1: Week = {
  week: 1,
  title: 'Les sons, se présenter, exister',
  focus:
    "Sortir un son néerlandais crédible, dire qui tu es, poser une question. À la fin de la semaine tu tiens deux minutes de conversation d'ouverture.",
  lessons: [
    /* ------------------------------------------------------------ J1 */
    {
      id: 'd01',
      day: 1,
      week: 1,
      title: 'Les sons du néerlandais et dire bonjour',
      goal: "Produire les huit sons qui n'existent pas en français, et saluer à n'importe quelle heure.",
      grammar: [
        {
          title: 'Les huit sons qui vont te trahir',
          body:
            "Le néerlandais se joue à la gorge et sur la longueur des voyelles. Travaille ces huit sons aujourd'hui, tu les réutiliseras 42 jours.\n- **g / ch** : le son raclé, comme la jota espagnole. *goed, acht, lachen*. Aux Pays-Bas il gratte fort, en Belgique il est plus doux.\n- **ui** : bouche en « eu » de *peur*, mais on dit « aï ». *huis, ui, buiten*. Le son le plus difficile : accepte d'être approximatif au début.\n- **ij / ei** : les deux se prononcent pareil, entre « eille » et « aï ». *mijn, trein*.\n- **oe** : notre « ou ». *goed, boek, moe*.\n- **eu** : notre « eu » de *feu*. *deur, neus*.\n- **uu** : notre « u » de *mur*, tenu long. *duur, uur*.\n- **aa / ee / oo** : voyelles **longues**, tenues deux fois plus. *maan* (lune) ≠ *man* (homme). La longueur change le mot.\n- **w** : entre notre « v » et « ou ». **v** se prononce souvent « f ». *water, vader*.",
          examples: [
            { nl: 'goedemorgen', fr: 'bonjour (le matin) — deux g raclés' },
            { nl: 'het huis', fr: 'la maison — le fameux ui' },
            { nl: 'de maan / de man', fr: 'la lune / l’homme — longueur = sens' },
          ],
        },
        {
          title: 'Tu ou vous : je / u',
          body:
            "Le néerlandais tutoie beaucoup plus que le français.\n- **je / jij** = tu. Avec les collègues, les voisins, les commerçants jeunes, la famille : c'est la norme.\n- **u** = vous de politesse. Personnes âgées, guichets officiels, médecin, première rencontre formelle.\nDans le doute avec quelqu'un de plus âgé : commence par **u**, on te dira très vite *je mag je zeggen* (« tu peux me tutoyer »).",
          examples: [
            { nl: 'Hoe gaat het met je?', fr: 'Comment ça va ? (tu)' },
            { nl: 'Hoe gaat het met u?', fr: 'Comment allez-vous ? (vous)' },
          ],
        },
      ],
      vocab: [
        { id: 'd01-hallo', nl: 'hallo', fr: 'bonjour (passe-partout)', hint: 'HA-lo' },
        { id: 'd01-hoi', nl: 'hoi', fr: 'salut', hint: 'hoï' },
        { id: 'd01-goedemorgen', nl: 'goedemorgen', fr: 'bonjour (le matin)', hint: 'GHOU-de-mor-ghe' },
        { id: 'd01-goedemiddag', nl: 'goedemiddag', fr: "bonjour (l'après-midi)", hint: 'ghou-de-MI-dagh' },
        { id: 'd01-goedenavond', nl: 'goedenavond', fr: 'bonsoir', hint: 'ghou-de-NA-vont' },
        { id: 'd01-welterusten', nl: 'welterusten', fr: 'bonne nuit (avant de dormir)', hint: 'vèl-te-RUS-te' },
        { id: 'd01-dag', nl: 'dag', fr: 'bonjour / au revoir', article: 'de', hint: 'dagh' },
        { id: 'd01-doei', nl: 'doei', fr: 'salut ! (en partant)', hint: 'douï' },
        { id: 'd01-totziens', nl: 'tot ziens', fr: 'au revoir', hint: 'tot ziens' },
        { id: 'd01-totmorgen', nl: 'tot morgen', fr: 'à demain' },
        { id: 'd01-alsjeblieft', nl: 'alsjeblieft', fr: "s'il te plaît / tiens", hint: 'als-je-BLIEFT' },
        { id: 'd01-alstublieft', nl: 'alstublieft', fr: "s'il vous plaît / voilà" },
        { id: 'd01-dankjewel', nl: 'dank je wel', fr: 'merci (tu)' },
        { id: 'd01-dankuwel', nl: 'dank u wel', fr: 'merci (vous)' },
        { id: 'd01-sorry', nl: 'sorry', fr: 'pardon / désolé' },
        { id: 'd01-ja', nl: 'ja', fr: 'oui', hint: 'ya' },
        { id: 'd01-nee', nl: 'nee', fr: 'non', hint: 'né (long)' },
      ],
      phrases: [
        { id: 'd01-p1', nl: 'Hoe gaat het?', fr: 'Comment ça va ?' },
        { id: 'd01-p2', nl: 'Het gaat goed, dank je.', fr: 'Ça va bien, merci.' },
        { id: 'd01-p3', nl: 'En met jou?', fr: 'Et toi ?', note: 'Version formelle : En met u?' },
        { id: 'd01-p4', nl: 'Tot straks!', fr: 'À tout à l’heure !' },
        { id: 'd01-p5', nl: 'Fijne dag nog!', fr: 'Bonne journée !', note: 'Ce que dit le caissier quand tu pars.' },
      ],
      dialogue: {
        title: 'Bij de bakker',
        context: "Chez le boulanger, un matin. Le premier échange que tu auras vraiment.",
        learnerRole: 'Klant',
        lines: [
          { speaker: 'Bakker', nl: 'Goedemorgen! Zegt u het maar.', fr: 'Bonjour ! Je vous écoute.' },
          { speaker: 'Klant', nl: 'Goedemorgen. Een bruin brood, alstublieft.', fr: 'Bonjour. Un pain complet, s’il vous plaît.' },
          { speaker: 'Bakker', nl: 'Alstublieft. Anders nog iets?', fr: 'Voilà. Avec ceci ?' },
          { speaker: 'Klant', nl: 'Nee, dank u wel.', fr: 'Non, merci.' },
          { speaker: 'Bakker', nl: 'Dat is dan drie euro twintig.', fr: 'Cela fait donc trois euros vingt.' },
          { speaker: 'Klant', nl: 'Alstublieft.', fr: 'Voilà.' },
          { speaker: 'Bakker', nl: 'Dank u wel. Fijne dag nog!', fr: 'Merci. Bonne journée !' },
          { speaker: 'Klant', nl: 'Dank u, tot ziens!', fr: 'Merci, au revoir !' },
        ],
      },
      speaking: [
        { prompt: 'Il est 9h, tu entres dans une boulangerie. Salue.', accept: ['Goedemorgen', 'Goedemorgen!', 'Hallo, goedemorgen'] },
        { prompt: 'Demande à un voisin de ton âge comment il va.', accept: ['Hoe gaat het?', 'Hoe gaat het met je?'] },
        { prompt: 'Réponds que ça va bien et remercie (informel).', accept: ['Het gaat goed, dank je', 'Goed, dank je'] },
      ],
    },

    /* ------------------------------------------------------------ J2 */
    {
      id: 'd02',
      day: 2,
      week: 1,
      title: 'Se présenter — le verbe zijn',
      goal: 'Dire ton nom, ta nationalité, où tu habites. Maîtriser le verbe « être ».',
      grammar: [
        {
          title: 'zijn — être',
          body:
            "Le verbe le plus utilisé de la langue. Apprends-le par cœur aujourd'hui.\n- ik **ben** — je suis\n- jij / je **bent** — tu es\n- u **bent** — vous êtes (politesse)\n- hij / zij / het **is** — il / elle est\n- wij / we **zijn** — nous sommes\n- jullie **zijn** — vous êtes (pluriel)\n- zij / ze **zijn** — ils / elles sont\nAstuce : quand le sujet **jij** passe **après** le verbe, le **-t** tombe : *Ben jij Frans?* et non *bent jij*.",
          examples: [
            { nl: 'Ik ben Frans.', fr: 'Je suis français.' },
            { nl: 'Ben jij Belgisch?', fr: 'Tu es belge ?' },
            { nl: 'Wij zijn hier nieuw.', fr: 'Nous sommes nouveaux ici.' },
          ],
        },
        {
          title: 'Trois façons de donner son nom',
          body:
            "- **Ik ben Marie.** — le plus courant, neutre.\n- **Ik heet Marie.** — littéralement « je m'appelle ».\n- **Mijn naam is Marie.** — un peu formel, au téléphone ou à un guichet.\nPour demander : **Hoe heet je?** (tu) / **Hoe heet u?** (vous).",
          examples: [
            { nl: 'Hoe heet je?', fr: 'Comment tu t’appelles ?' },
            { nl: 'Ik heet Uri. En jij?', fr: 'Je m’appelle Uri. Et toi ?' },
          ],
        },
      ],
      vocab: [
        { id: 'd02-ik', nl: 'ik', fr: 'je' },
        { id: 'd02-jij', nl: 'jij / je', fr: 'tu' },
        { id: 'd02-hij', nl: 'hij', fr: 'il', hint: 'haï' },
        { id: 'd02-zij', nl: 'zij / ze', fr: 'elle / ils / elles' },
        { id: 'd02-wij', nl: 'wij / we', fr: 'nous', hint: 'vaï' },
        { id: 'd02-jullie', nl: 'jullie', fr: 'vous (plusieurs)', hint: 'YU-li' },
        { id: 'd02-zijn', nl: 'zijn', fr: 'être', hint: 'zaïn' },
        { id: 'd02-heten', nl: 'heten', fr: "s'appeler", hint: 'HÉ-te' },
        { id: 'd02-naam', nl: 'naam', fr: 'nom', article: 'de', plural: 'namen' },
        { id: 'd02-wonen', nl: 'wonen', fr: 'habiter', hint: 'VÔ-ne' },
        { id: 'd02-komen', nl: 'komen', fr: 'venir' },
        { id: 'd02-uit', nl: 'uit', fr: 'de (provenance)', hint: 'euït' },
        { id: 'd02-frans', nl: 'Frans', fr: 'français' },
        { id: 'd02-nederlands', nl: 'Nederlands', fr: 'néerlandais' },
        { id: 'd02-belgie', nl: 'België', fr: 'la Belgique', hint: 'BÈL-ghi-e' },
        { id: 'd02-nederland', nl: 'Nederland', fr: 'les Pays-Bas' },
        { id: 'd02-aangenaam', nl: 'aangenaam', fr: 'enchanté' },
      ],
      phrases: [
        { id: 'd02-p1', nl: 'Ik heet Uri.', fr: 'Je m’appelle Uri.' },
        { id: 'd02-p2', nl: 'Ik kom uit Frankrijk.', fr: 'Je viens de France.' },
        { id: 'd02-p3', nl: 'Ik woon in Amsterdam.', fr: 'J’habite à Amsterdam.' },
        { id: 'd02-p4', nl: 'Aangenaam kennis te maken.', fr: 'Enchanté de faire votre connaissance.' },
        { id: 'd02-p5', nl: 'Ik spreek nog niet goed Nederlands.', fr: 'Je ne parle pas encore bien néerlandais.' },
        { id: 'd02-p6', nl: 'Hoe heet je?', fr: 'Comment tu t’appelles ?' },
      ],
      dialogue: {
        title: 'Op een verjaardagsfeestje',
        context: "À un anniversaire — le fameux cercle de chaises néerlandais. Tu ne connais personne.",
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Sanne', nl: 'Hoi! Ik ben Sanne. En jij?', fr: 'Salut ! Moi c’est Sanne. Et toi ?' },
          { speaker: 'Uri', nl: 'Hoi Sanne, ik heet Uri. Aangenaam.', fr: 'Salut Sanne, je m’appelle Uri. Enchanté.' },
          { speaker: 'Sanne', nl: 'Waar kom je vandaan?', fr: 'D’où viens-tu ?' },
          { speaker: 'Uri', nl: 'Ik kom uit Frankrijk, maar ik woon nu hier.', fr: 'Je viens de France, mais j’habite ici maintenant.' },
          { speaker: 'Sanne', nl: 'Wat leuk! En je spreekt al Nederlands?', fr: 'Super ! Et tu parles déjà néerlandais ?' },
          { speaker: 'Uri', nl: 'Een beetje. Ik spreek nog niet goed Nederlands.', fr: 'Un peu. Je ne parle pas encore bien néerlandais.' },
          { speaker: 'Sanne', nl: 'Je doet het prima, hoor!', fr: 'Tu t’en sors très bien !' },
          { speaker: 'Uri', nl: 'Dank je wel. Praat je langzaam, alsjeblieft?', fr: 'Merci. Tu parles lentement, s’il te plaît ?' },
        ],
      },
      speaking: [
        { prompt: "Présente-toi en trois informations : nom, origine, ville où tu habites.", accept: ['Ik heet Uri, ik kom uit Frankrijk en ik woon in Amsterdam', 'Ik ben Uri, ik kom uit Frankrijk, ik woon in Amsterdam'] },
        { prompt: 'Demande à quelqu’un d’où il vient (tutoiement).', accept: ['Waar kom je vandaan?', 'Waar kom jij vandaan?'] },
        { prompt: 'Préviens ton interlocuteur que tu ne parles pas encore bien.', accept: ['Ik spreek nog niet goed Nederlands'] },
      ],
    },

    /* ------------------------------------------------------------ J3 */
    {
      id: 'd03',
      day: 3,
      week: 1,
      title: 'hebben, les chiffres et ton âge',
      goal: 'Compter jusqu’à 100, donner ton âge, ton numéro de téléphone, dire ce que tu as.',
      grammar: [
        {
          title: 'hebben — avoir',
          body:
            "- ik **heb**\n- jij / je **hebt** (mais *heb jij?* en question)\n- u **hebt** / **heeft**\n- hij / zij / het **heeft**\n- wij, jullie, zij **hebben**\nAttention : en néerlandais on **a** un âge comme en français, mais on dit *Ik ben 34 jaar* (« je **suis** 34 ans ») pour l'âge. Pour le reste, *hebben*.",
          examples: [
            { nl: 'Ik heb een fiets.', fr: 'J’ai un vélo.' },
            { nl: 'Heb je tijd?', fr: 'Tu as le temps ?' },
            { nl: 'Ik ben vierendertig jaar oud.', fr: 'J’ai trente-quatre ans.' },
          ],
        },
        {
          title: 'Les nombres — et l’inversion des dizaines',
          body:
            "0 nul, 1 een, 2 twee, 3 drie, 4 vier, 5 vijf, 6 zes, 7 zeven, 8 acht, 9 negen, 10 tien, 11 elf, 12 twaalf, 13 dertien, 14 veertien, 15 vijftien, 16 zestien, 17 zeventien, 18 achttien, 19 negentien, 20 twintig.\nPuis 30 dertig, 40 veertig, 50 vijftig, 60 zestig, 70 zeventig, 80 tachtig, 90 negentig, 100 honderd.\n**Le piège** : comme en allemand, on dit l'unité **avant** la dizaine, collée par *en*.\n- 21 = **eenentwintig** (un-et-vingt)\n- 47 = **zevenenveertig**\n- 99 = **negenennegentig**\nC'est ce qui te fera rater les prix et les numéros pendant deux semaines. Entraîne-toi à voix haute.",
          examples: [
            { nl: 'drieëntwintig', fr: '23' },
            { nl: 'zesenzestig', fr: '66' },
            { nl: 'honderd tweeëntwintig', fr: '122' },
          ],
        },
      ],
      vocab: [
        { id: 'd03-hebben', nl: 'hebben', fr: 'avoir' },
        { id: 'd03-nul', nl: 'nul', fr: 'zéro' },
        { id: 'd03-een1', nl: 'één', fr: 'un (1)', hint: 'ééne, long' },
        { id: 'd03-twee', nl: 'twee', fr: 'deux', hint: 'tvé' },
        { id: 'd03-drie', nl: 'drie', fr: 'trois' },
        { id: 'd03-vier', nl: 'vier', fr: 'quatre', hint: 'fir' },
        { id: 'd03-vijf', nl: 'vijf', fr: 'cinq', hint: 'faïf' },
        { id: 'd03-zes', nl: 'zes', fr: 'six' },
        { id: 'd03-zeven', nl: 'zeven', fr: 'sept' },
        { id: 'd03-acht', nl: 'acht', fr: 'huit', hint: 'agh-t' },
        { id: 'd03-negen', nl: 'negen', fr: 'neuf (9)' },
        { id: 'd03-tien', nl: 'tien', fr: 'dix' },
        { id: 'd03-twintig', nl: 'twintig', fr: 'vingt' },
        { id: 'd03-dertig', nl: 'dertig', fr: 'trente' },
        { id: 'd03-honderd', nl: 'honderd', fr: 'cent' },
        { id: 'd03-jaar', nl: 'jaar', fr: 'an / année', article: 'het', plural: 'jaren' },
        { id: 'd03-oud', nl: 'oud', fr: 'vieux / âgé' },
        { id: 'd03-telefoonnummer', nl: 'telefoonnummer', fr: 'numéro de téléphone', article: 'het' },
      ],
      phrases: [
        { id: 'd03-p1', nl: 'Hoe oud ben je?', fr: 'Quel âge as-tu ?' },
        { id: 'd03-p2', nl: 'Ik ben vierendertig jaar oud.', fr: 'J’ai trente-quatre ans.' },
        { id: 'd03-p3', nl: 'Wat is je telefoonnummer?', fr: 'Quel est ton numéro de téléphone ?' },
        { id: 'd03-p4', nl: 'Heb je een pen voor mij?', fr: 'Tu as un stylo pour moi ?' },
        { id: 'd03-p5', nl: 'Kun je dat langzamer zeggen?', fr: 'Peux-tu le dire plus lentement ?' },
      ],
      dialogue: {
        title: 'Inschrijven bij de sportschool',
        context: 'À la salle de sport, on te demande tes informations.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Medewerker', nl: 'Goedemiddag. Mag ik uw naam?', fr: 'Bonjour. Puis-je avoir votre nom ?' },
          { speaker: 'Uri', nl: 'Ja, ik heet Uri Mallant.', fr: 'Oui, je m’appelle Uri Mallant.' },
          { speaker: 'Medewerker', nl: 'En hoe oud bent u?', fr: 'Et quel âge avez-vous ?' },
          { speaker: 'Uri', nl: 'Ik ben vierendertig.', fr: 'J’ai trente-quatre ans.' },
          { speaker: 'Medewerker', nl: 'Heeft u een telefoonnummer?', fr: 'Avez-vous un numéro de téléphone ?' },
          { speaker: 'Uri', nl: 'Zes, één, twee, acht, zeven, vier, drie, negen.', fr: 'Six, un, deux, huit, sept, quatre, trois, neuf.' },
          { speaker: 'Medewerker', nl: 'Dat is dan negenentwintig euro per maand.', fr: 'Cela fait donc vingt-neuf euros par mois.' },
          { speaker: 'Uri', nl: 'Sorry, kunt u dat langzamer zeggen?', fr: 'Pardon, pouvez-vous le dire plus lentement ?' },
        ],
      },
      speaking: [
        { prompt: 'Demande son âge à quelqu’un (tutoiement).', accept: ['Hoe oud ben je?'] },
        { prompt: 'Dis à voix haute : 21, 47, 68.', accept: ['eenentwintig zevenenveertig achtenzestig'] },
        { prompt: 'Demande poliment qu’on répète plus lentement.', accept: ['Kunt u dat langzamer zeggen?', 'Kun je dat langzamer zeggen?'] },
      ],
    },

    /* ------------------------------------------------------------ J4 */
    {
      id: 'd04',
      day: 4,
      week: 1,
      title: 'de ou het, le pluriel, la famille',
      goal: 'Choisir le bon article, former les pluriels, parler de ta famille.',
      grammar: [
        {
          title: 'de ou het : le seul vrai casse-tête',
          body:
            "Il n'y a que deux articles définis : **de** et **het**. Environ 75 % des mots prennent *de*.\nPrennent **het** :\n- tous les **diminutifs** en *-je* : *het meisje, het broodje*\n- les langues et la plupart des noms de pays/villes\n- beaucoup de mots courts et concrets : *het huis, het boek, het kind, het water*\nL'article indéfini est toujours **een** (« un / une »), quel que soit le genre.\n**Conseil pratique** : n'apprends jamais un nom seul, apprends *de fiets*, *het huis*. L'app te fait toujours réviser l'article avec le mot.",
          examples: [
            { nl: 'de vrouw / het kind', fr: 'la femme / l’enfant' },
            { nl: 'een vrouw, een kind', fr: 'une femme, un enfant — même article indéfini' },
          ],
        },
        {
          title: 'Le pluriel : -en ou -s',
          body:
            "- Par défaut : **-en**. *boek → boeken*, *huis → huizen*.\n- **-s** après *-el, -em, -en, -er, -je* et les voyelles : *tafel → tafels*, *meisje → meisjes*.\n- Au pluriel, l'article est **toujours de** : *het boek → de boeken*. Une bonne nouvelle.\nOrthographe : la voyelle longue reste longue. *maan → manen* (on enlève un a), *man → mannen* (on double le n).",
          examples: [
            { nl: 'de fiets → de fietsen', fr: 'le vélo → les vélos' },
            { nl: 'het meisje → de meisjes', fr: 'la fille → les filles' },
          ],
        },
      ],
      vocab: [
        { id: 'd04-familie', nl: 'familie', fr: 'famille', article: 'de' },
        { id: 'd04-vader', nl: 'vader', fr: 'père', article: 'de', hint: 'FA-der' },
        { id: 'd04-moeder', nl: 'moeder', fr: 'mère', article: 'de', hint: 'MOU-der' },
        { id: 'd04-ouders', nl: 'ouders', fr: 'parents', article: 'de' },
        { id: 'd04-broer', nl: 'broer', fr: 'frère', article: 'de', plural: 'broers' },
        { id: 'd04-zus', nl: 'zus', fr: 'sœur', article: 'de', plural: 'zussen' },
        { id: 'd04-kind', nl: 'kind', fr: 'enfant', article: 'het', plural: 'kinderen' },
        { id: 'd04-zoon', nl: 'zoon', fr: 'fils', article: 'de', plural: 'zonen' },
        { id: 'd04-dochter', nl: 'dochter', fr: 'fille (de qqn)', article: 'de', plural: 'dochters' },
        { id: 'd04-man', nl: 'man', fr: 'homme / mari', article: 'de', plural: 'mannen' },
        { id: 'd04-vrouw', nl: 'vrouw', fr: 'femme / épouse', article: 'de', plural: 'vrouwen', hint: 'vrau' },
        { id: 'd04-vriend', nl: 'vriend', fr: 'ami / petit ami', article: 'de', plural: 'vrienden' },
        { id: 'd04-vriendin', nl: 'vriendin', fr: 'amie / petite amie', article: 'de' },
        { id: 'd04-opa', nl: 'opa', fr: 'grand-père', article: 'de' },
        { id: 'd04-oma', nl: 'oma', fr: 'grand-mère', article: 'de' },
        { id: 'd04-schoonmoeder', nl: 'schoonmoeder', fr: 'belle-mère', article: 'de' },
        { id: 'd04-getrouwd', nl: 'getrouwd', fr: 'marié' },
      ],
      phrases: [
        { id: 'd04-p1', nl: 'Ik heb twee kinderen.', fr: 'J’ai deux enfants.' },
        { id: 'd04-p2', nl: 'Mijn vriendin heet Lisa.', fr: 'Ma compagne s’appelle Lisa.' },
        { id: 'd04-p3', nl: 'Heb je broers of zussen?', fr: 'Tu as des frères et sœurs ?' },
        { id: 'd04-p4', nl: 'Nee, ik ben enig kind.', fr: 'Non, je suis enfant unique.' },
        { id: 'd04-p5', nl: 'Mijn ouders wonen in Frankrijk.', fr: 'Mes parents habitent en France.' },
      ],
      dialogue: {
        title: 'Foto’s op de telefoon',
        context: 'Une collègue te montre des photos et te pose des questions sur ta famille.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Fleur', nl: 'Kijk, dit is mijn gezin. Twee kinderen.', fr: 'Regarde, voici ma famille. Deux enfants.' },
          { speaker: 'Uri', nl: 'Wat leuk! Hoe oud zijn ze?', fr: 'Super ! Quel âge ont-ils ?' },
          { speaker: 'Fleur', nl: 'Mijn dochter is zeven en mijn zoon is vier.', fr: 'Ma fille a sept ans et mon fils quatre.' },
          { speaker: 'Uri', nl: 'Leuke kinderen. Ik heb geen kinderen.', fr: 'De beaux enfants. Moi, je n’ai pas d’enfants.' },
          { speaker: 'Fleur', nl: 'En heb je broers of zussen?', fr: 'Et tu as des frères et sœurs ?' },
          { speaker: 'Uri', nl: 'Ja, één zus. Zij woont in Frankrijk.', fr: 'Oui, une sœur. Elle habite en France.' },
          { speaker: 'Fleur', nl: 'Zie je haar vaak?', fr: 'Tu la vois souvent ?' },
          { speaker: 'Uri', nl: 'Niet zo vaak. Twee keer per jaar.', fr: 'Pas si souvent. Deux fois par an.' },
        ],
      },
      speaking: [
        { prompt: 'Dis combien de frères et sœurs tu as.', accept: ['Ik heb een zus', 'Ik heb twee broers', 'Ik ben enig kind'] },
        { prompt: 'Demande à quelqu’un s’il a des enfants.', accept: ['Heb je kinderen?', 'Heeft u kinderen?'] },
        { prompt: 'Dis que tes parents habitent en France.', accept: ['Mijn ouders wonen in Frankrijk'] },
      ],
    },

    /* ------------------------------------------------------------ J5 */
    {
      id: 'd05',
      day: 5,
      week: 1,
      title: 'La règle V2 et les mots interrogatifs',
      goal: 'Placer le verbe au bon endroit — la règle qui structure toute phrase néerlandaise.',
      grammar: [
        {
          title: 'V2 : le verbe conjugué est toujours en deuxième position',
          body:
            "C'est **la** règle du néerlandais. Dans une phrase déclarative, le verbe conjugué occupe la deuxième **place** (pas le deuxième mot : la deuxième *brique*).\n- *Ik* | **ga** | *morgen naar Amsterdam.*\n- *Morgen* | **ga** | *ik naar Amsterdam.* → si tu commences par autre chose que le sujet, le sujet passe **après** le verbe. C'est l'**inversion**.\n- *Naar Amsterdam* | **ga** | *ik morgen.*\nJamais deux briques avant le verbe. Si tu retiens une seule chose de la semaine, c'est celle-là.\nOrdre du reste de la phrase : **Temps – Manière – Lieu** (*Ik ga morgen met de trein naar Utrecht*).",
          examples: [
            { nl: 'Vandaag werk ik thuis.', fr: 'Aujourd’hui je travaille à la maison.' },
            { nl: 'Om acht uur eet ik.', fr: 'À huit heures je mange.' },
            { nl: 'Ik ga morgen met de fiets naar het werk.', fr: 'Demain je vais au travail à vélo.' },
          ],
        },
        {
          title: 'Questions : mot interrogatif, ou verbe en tête',
          body:
            "- **Question ouverte** : mot interrogatif + verbe + sujet. *Waar woon je?*\n- **Question fermée** (oui/non) : verbe + sujet. *Woon je hier?*\nRappel : devant *je/jij*, le **-t** de la 2ᵉ personne disparaît. *Je woont* → **Woon je?**\nLes mots interrogatifs : **wie** (qui), **wat** (quoi), **waar** (où), **wanneer** (quand), **hoe** (comment), **waarom** (pourquoi), **welke** (quel), **hoeveel** (combien).",
          examples: [
            { nl: 'Waarom leer je Nederlands?', fr: 'Pourquoi apprends-tu le néerlandais ?' },
            { nl: 'Hoeveel kost dat?', fr: 'Combien ça coûte ?' },
            { nl: 'Kom je vanavond?', fr: 'Tu viens ce soir ?' },
          ],
        },
      ],
      vocab: [
        { id: 'd05-wie', nl: 'wie', fr: 'qui' },
        { id: 'd05-wat', nl: 'wat', fr: 'quoi / que' },
        { id: 'd05-waar', nl: 'waar', fr: 'où' },
        { id: 'd05-wanneer', nl: 'wanneer', fr: 'quand' },
        { id: 'd05-hoe', nl: 'hoe', fr: 'comment' },
        { id: 'd05-waarom', nl: 'waarom', fr: 'pourquoi' },
        { id: 'd05-welke', nl: 'welke', fr: 'quel / quelle' },
        { id: 'd05-hoeveel', nl: 'hoeveel', fr: 'combien' },
        { id: 'd05-vandaag', nl: 'vandaag', fr: 'aujourd’hui' },
        { id: 'd05-morgen', nl: 'morgen', fr: 'demain' },
        { id: 'd05-gisteren', nl: 'gisteren', fr: 'hier' },
        { id: 'd05-nu', nl: 'nu', fr: 'maintenant' },
        { id: 'd05-hier', nl: 'hier', fr: 'ici' },
        { id: 'd05-daar', nl: 'daar', fr: 'là' },
        { id: 'd05-altijd', nl: 'altijd', fr: 'toujours' },
        { id: 'd05-soms', nl: 'soms', fr: 'parfois' },
        { id: 'd05-nooit', nl: 'nooit', fr: 'jamais' },
        { id: 'd05-vaak', nl: 'vaak', fr: 'souvent' },
      ],
      phrases: [
        { id: 'd05-p1', nl: 'Waar woon je precies?', fr: 'Où habites-tu exactement ?' },
        { id: 'd05-p2', nl: 'Waarom leer je Nederlands?', fr: 'Pourquoi apprends-tu le néerlandais ?' },
        { id: 'd05-p3', nl: 'Vandaag werk ik thuis.', fr: 'Aujourd’hui je travaille à la maison.' },
        { id: 'd05-p4', nl: 'Wanneer heb je tijd?', fr: 'Quand as-tu le temps ?' },
        { id: 'd05-p5', nl: 'Wat betekent dat?', fr: 'Qu’est-ce que ça veut dire ?' },
        { id: 'd05-p6', nl: 'Hoe zeg je dat in het Nederlands?', fr: 'Comment dit-on ça en néerlandais ?' },
      ],
      dialogue: {
        title: 'De nieuwe buurman',
        context: 'Ton voisin sonne pour se présenter. Il pose beaucoup de questions.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Buurman', nl: 'Hoi, ik ben Joost, van hiernaast.', fr: 'Salut, je suis Joost, d’à côté.' },
          { speaker: 'Uri', nl: 'Hallo Joost, ik ben Uri. Leuk je te ontmoeten.', fr: 'Bonjour Joost, je suis Uri. Content de te rencontrer.' },
          { speaker: 'Buurman', nl: 'Waar kom je vandaan? Je accent is grappig.', fr: 'D’où viens-tu ? Ton accent est amusant.' },
          { speaker: 'Uri', nl: 'Uit Frankrijk. Waarom, klink ik raar?', fr: 'De France. Pourquoi, je sonne bizarre ?' },
          { speaker: 'Buurman', nl: 'Nee hoor, juist leuk. Waarom leer je Nederlands?', fr: 'Pas du tout, c’est sympa. Pourquoi apprends-tu le néerlandais ?' },
          { speaker: 'Uri', nl: 'Omdat ik hier woon. Ik wil met mensen praten.', fr: 'Parce que j’habite ici. Je veux parler avec les gens.' },
          { speaker: 'Buurman', nl: 'Goed idee. Wanneer heb je tijd voor een biertje?', fr: 'Bonne idée. Quand as-tu le temps pour une bière ?' },
          { speaker: 'Uri', nl: 'Vrijdag? Dan werk ik niet.', fr: 'Vendredi ? Je ne travaille pas ce jour-là.' },
        ],
      },
      speaking: [
        { prompt: 'Commence ta phrase par « demain » : demain je travaille à la maison.', accept: ['Morgen werk ik thuis'] },
        { prompt: 'Demande ce que veut dire un mot que tu n’as pas compris.', accept: ['Wat betekent dat?'] },
        { prompt: 'Demande comment on dit quelque chose en néerlandais.', accept: ['Hoe zeg je dat in het Nederlands?'] },
      ],
    },

    /* ------------------------------------------------------------ J6 */
    {
      id: 'd06',
      day: 6,
      week: 1,
      title: 'Le présent des verbes réguliers',
      goal: 'Conjuguer n’importe quel verbe régulier et raconter une journée type.',
      grammar: [
        {
          title: 'La recette : radical + rien / -t / -en',
          body:
            "Prends l'infinitif, enlève **-en** : tu as le **radical**.\n*werken → werk*, *wonen → woon*, *praten → praat*.\n- ik → **radical** : *ik werk*\n- jij / hij / zij / u → **radical + t** : *jij werkt, hij werkt*\n- wij / jullie / zij → **infinitif** : *wij werken*\nDeux règles d'orthographe qui comptent :\n1. La voyelle longue reste longue au singulier : *wonen → ik **woon*** (deux o), *praten → ik **praat***.\n2. Un radical finissant par **v** ou **z** devient **f** ou **s** : *leven → ik leef*, *reizen → ik reis*.\n3. Radical déjà en **-t** : on n'ajoute rien. *praten → hij praat*.\nEt toujours : **inversion = pas de -t** avec *je/jij*. *Werk je vandaag?*",
          examples: [
            { nl: 'Ik werk in Utrecht.', fr: 'Je travaille à Utrecht.' },
            { nl: 'Hij woont in Gent.', fr: 'Il habite à Gand.' },
            { nl: 'Werk je op zaterdag?', fr: 'Tu travailles le samedi ?' },
          ],
        },
      ],
      vocab: [
        { id: 'd06-werken', nl: 'werken', fr: 'travailler' },
        { id: 'd06-praten', nl: 'praten', fr: 'parler / discuter' },
        { id: 'd06-spreken', nl: 'spreken', fr: 'parler (une langue)' },
        { id: 'd06-leren', nl: 'leren', fr: 'apprendre' },
        { id: 'd06-eten', nl: 'eten', fr: 'manger' },
        { id: 'd06-drinken', nl: 'drinken', fr: 'boire' },
        { id: 'd06-slapen', nl: 'slapen', fr: 'dormir' },
        { id: 'd06-lopen', nl: 'lopen', fr: 'marcher' },
        { id: 'd06-fietsen', nl: 'fietsen', fr: 'faire du vélo' },
        { id: 'd06-lezen', nl: 'lezen', fr: 'lire' },
        { id: 'd06-luisteren', nl: 'luisteren', fr: 'écouter' },
        { id: 'd06-kijken', nl: 'kijken', fr: 'regarder' },
        { id: 'd06-maken', nl: 'maken', fr: 'faire / fabriquer' },
        { id: 'd06-doen', nl: 'doen', fr: 'faire', hint: 'doune' },
        { id: 'd06-gaan', nl: 'gaan', fr: 'aller' },
        { id: 'd06-thuis', nl: 'thuis', fr: 'à la maison' },
        { id: 'd06-werk', nl: 'werk', fr: 'travail', article: 'het' },
        { id: 'd06-samen', nl: 'samen', fr: 'ensemble' },
      ],
      phrases: [
        { id: 'd06-p1', nl: 'Wat doe je voor werk?', fr: 'Qu’est-ce que tu fais comme travail ?' },
        { id: 'd06-p2', nl: 'Ik werk bij een klein bedrijf.', fr: 'Je travaille dans une petite entreprise.' },
        { id: 'd06-p3', nl: 'Ik fiets elke dag naar het werk.', fr: 'Je vais au travail à vélo tous les jours.' },
        { id: 'd06-p4', nl: 'We eten om zeven uur.', fr: 'Nous mangeons à sept heures.' },
        { id: 'd06-p5', nl: 'Wat doe je in het weekend?', fr: 'Qu’est-ce que tu fais le week-end ?' },
      ],
      dialogue: {
        title: 'Praatje bij de koffieautomaat',
        context: 'Petite conversation à la machine à café. Tu apprends à parler de ta routine.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Karin', nl: 'Goedemorgen! Kom je met de fiets?', fr: 'Bonjour ! Tu viens à vélo ?' },
          { speaker: 'Uri', nl: 'Ja, ik fiets elke dag. Twintig minuten.', fr: 'Oui, je fais du vélo tous les jours. Vingt minutes.' },
          { speaker: 'Karin', nl: 'Netjes. Ik neem meestal de trein.', fr: 'Bien joué. Moi je prends généralement le train.' },
          { speaker: 'Uri', nl: 'Waar woon je dan?', fr: 'Tu habites où alors ?' },
          { speaker: 'Karin', nl: 'In Haarlem. Ik werk hier drie dagen per week.', fr: 'À Haarlem. Je travaille ici trois jours par semaine.' },
          { speaker: 'Uri', nl: 'En wat doe je precies?', fr: 'Et tu fais quoi exactement ?' },
          { speaker: 'Karin', nl: 'Ik maak de planning voor het team.', fr: 'Je fais le planning de l’équipe.' },
          { speaker: 'Uri', nl: 'Interessant. Drink je koffie of thee?', fr: 'Intéressant. Tu bois du café ou du thé ?' },
        ],
      },
      speaking: [
        { prompt: 'Dis ce que tu fais comme travail (invente si besoin).', accept: ['Ik werk bij een klein bedrijf', 'Ik werk in een kantoor'] },
        { prompt: 'Dis que tu vas au travail à vélo tous les jours.', accept: ['Ik fiets elke dag naar het werk'] },
        { prompt: 'Demande à un collègue ce qu’il fait le week-end.', accept: ['Wat doe je in het weekend?'] },
      ],
    },

    /* ------------------------------------------------------------ J7 */
    {
      id: 'd07',
      day: 7,
      week: 1,
      title: 'Révision — ta première vraie conversation',
      goal: 'Enchaîner tout ce que tu sais sans réfléchir : saluer, te présenter, questionner, répondre.',
      grammar: [
        {
          title: 'Le kit de survie du débutant',
          body:
            "Ces sept phrases valent cent mots de vocabulaire. Elles te permettent de rester dans la conversation au lieu de repasser à l'anglais — le vrai risque aux Pays-Bas.\n- **Sorry, ik versta het niet.** — Désolé, je ne comprends pas.\n- **Kunt u het herhalen?** — Pouvez-vous répéter ?\n- **Langzamer, alstublieft.** — Plus lentement, s'il vous plaît.\n- **Hoe zeg je … in het Nederlands?** — Comment dit-on … en néerlandais ?\n- **Wat betekent …?** — Que veut dire … ?\n- **Mogen we Nederlands praten? Ik wil oefenen.** — On peut parler néerlandais ? Je veux m'entraîner.\n- **Even denken…** — Laisse-moi réfléchir… (te donne trois secondes précieuses)",
          examples: [
            { nl: 'Sorry, ik versta het niet.', fr: 'Désolé, je ne comprends pas.' },
            { nl: 'Mogen we Nederlands praten? Ik wil oefenen.', fr: 'On peut parler néerlandais ? Je veux m’entraîner.' },
          ],
        },
        {
          title: 'Bilan de la semaine',
          body:
            "Tu dois maintenant pouvoir, sans regarder :\n- conjuguer **zijn** et **hebben** au présent\n- former le présent de n'importe quel verbe régulier\n- placer le verbe en **deuxième position**, et inverser quand tu commences par un complément\n- poser une question ouverte et une question fermée\n- compter jusqu'à 100 en inversant les dizaines\nSi l'un de ces points cloche, refais la leçon concernée avant de passer à la semaine 2. La suite s'appuie dessus.",
          examples: [
            { nl: 'Morgen ga ik naar mijn zus.', fr: 'Demain je vais chez ma sœur. (inversion)' },
            { nl: 'Heb je zin in koffie?', fr: 'Tu as envie d’un café ?' },
          ],
        },
      ],
      vocab: [
        { id: 'd07-verstaan', nl: 'verstaan', fr: 'comprendre (entendre)' },
        { id: 'd07-begrijpen', nl: 'begrijpen', fr: 'comprendre (saisir le sens)' },
        { id: 'd07-herhalen', nl: 'herhalen', fr: 'répéter' },
        { id: 'd07-langzaam', nl: 'langzaam', fr: 'lentement' },
        { id: 'd07-snel', nl: 'snel', fr: 'vite / rapide' },
        { id: 'd07-oefenen', nl: 'oefenen', fr: 's’entraîner', hint: 'OU-fe-ne' },
        { id: 'd07-betekenen', nl: 'betekenen', fr: 'signifier' },
        { id: 'd07-zeggen', nl: 'zeggen', fr: 'dire' },
        { id: 'd07-vragen', nl: 'vragen', fr: 'demander' },
        { id: 'd07-antwoorden', nl: 'antwoorden', fr: 'répondre' },
        { id: 'd07-woord', nl: 'woord', fr: 'mot', article: 'het', plural: 'woorden' },
        { id: 'd07-zin', nl: 'zin', fr: 'phrase / envie', article: 'de' },
        { id: 'd07-natuurlijk', nl: 'natuurlijk', fr: 'bien sûr' },
        { id: 'd07-misschien', nl: 'misschien', fr: 'peut-être', hint: 'mi-SKHINE' },
        { id: 'd07-gezellig', nl: 'gezellig', fr: 'convivial / agréable', hint: 'ghe-ZÈ-legh' },
      ],
      phrases: [
        { id: 'd07-p1', nl: 'Sorry, ik versta het niet.', fr: 'Désolé, je ne comprends pas.' },
        { id: 'd07-p2', nl: 'Kunt u het herhalen, alstublieft?', fr: 'Pouvez-vous répéter, s’il vous plaît ?' },
        { id: 'd07-p3', nl: 'Mogen we Nederlands praten? Ik wil oefenen.', fr: 'On peut parler néerlandais ? Je veux m’entraîner.' },
        { id: 'd07-p4', nl: 'Even denken...', fr: 'Laisse-moi réfléchir...' },
        { id: 'd07-p5', nl: 'Hoe schrijf je dat?', fr: 'Comment ça s’écrit ?' },
        { id: 'd07-p6', nl: 'Dat was gezellig!', fr: 'C’était sympa !' },
      ],
      dialogue: {
        title: 'Alles bij elkaar',
        context: 'Récapitulatif de la semaine : une rencontre complète, du bonjour au au revoir.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Tess', nl: 'Goedemiddag! Jij bent nieuw hier, toch?', fr: 'Bonjour ! Tu es nouveau ici, non ?' },
          { speaker: 'Uri', nl: 'Ja, klopt. Ik ben Uri. Mogen we Nederlands praten? Ik wil oefenen.', fr: 'Oui, c’est ça. Je suis Uri. On peut parler néerlandais ? Je veux m’entraîner.' },
          { speaker: 'Tess', nl: 'Natuurlijk! Waar kom je vandaan?', fr: 'Bien sûr ! D’où viens-tu ?' },
          { speaker: 'Uri', nl: 'Uit Frankrijk. Ik woon nu drie maanden hier.', fr: 'De France. J’habite ici depuis trois mois.' },
          { speaker: 'Tess', nl: 'En bevalt het een beetje?', fr: 'Et ça te plaît un peu ?' },
          { speaker: 'Uri', nl: 'Sorry, ik versta het niet. Kun je het herhalen?', fr: 'Désolé, je ne comprends pas. Tu peux répéter ?' },
          { speaker: 'Tess', nl: 'Vind je het leuk hier?', fr: 'Tu te plais ici ?' },
          { speaker: 'Uri', nl: 'Ah, ja! Heel leuk. De mensen zijn aardig.', fr: 'Ah, oui ! Très bien. Les gens sont gentils.' },
          { speaker: 'Tess', nl: 'Fijn. Tot de volgende keer!', fr: 'Tant mieux. À la prochaine !' },
          { speaker: 'Uri', nl: 'Tot ziens, en bedankt. Dat was gezellig!', fr: 'Au revoir, et merci. C’était sympa !' },
        ],
      },
      speaking: [
        { prompt: 'Demande poliment à parler néerlandais parce que tu veux t’entraîner.', accept: ['Mogen we Nederlands praten? Ik wil oefenen'] },
        { prompt: 'Tu n’as pas compris. Dis-le et demande de répéter.', accept: ['Sorry, ik versta het niet. Kunt u het herhalen?', 'Sorry, ik versta het niet'] },
        { prompt: 'Enchaîne : bonjour, ton nom, ton origine, où tu habites.', accept: ['Hallo, ik ben Uri. Ik kom uit Frankrijk en ik woon in Amsterdam'] },
      ],
    },
  ],
}
