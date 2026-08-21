import type { Week } from '../types'

export const week4: Week = {
  week: 4,
  title: 'Raconter le passé, donner son avis',
  focus:
    "Le passage du niveau « je survis » au niveau « je discute » : parler d'hier, exprimer une opinion, décrire les gens.",
  lessons: [
    /* ------------------------------------------------------------ J22 */
    {
      id: 'd22',
      day: 22,
      week: 4,
      title: 'Le passé composé régulier — et ’t kofschip',
      goal: 'Raconter ce que tu as fait, avec la bonne terminaison de participe.',
      grammar: [
        {
          title: 'La construction : hebben/zijn + participe à la fin',
          body:
            "Comme en français, deux briques : un auxiliaire conjugué en position 2, et le **participe passé à la toute fin**.\n*Ik **heb** gisteren een film **gekeken**.*\n*We **zijn** naar Utrecht **gegaan**.*\nLe participe régulier se fabrique ainsi : **ge-** + radical + **-t** ou **-d**.\n*werken → radical werk → **gewerkt*** · *wonen → woon → **gewoond***",
          examples: [
            { nl: 'Ik heb gisteren gewerkt.', fr: 'J’ai travaillé hier.' },
            { nl: 'Zij heeft in Gent gewoond.', fr: 'Elle a habité à Gand.' },
          ],
        },
        {
          title: '’t kofschip : -t ou -d ?',
          body:
            "La règle mnémotechnique que tout néerlandophone connaît. Si la **dernière lettre du radical** est dans **’t kofschip** — c'est-à-dire **t, k, f, s, ch, p** — le participe prend **-t**. Sinon **-d**.\n- *werken* → radical *wer**k*** → k est dans kofschip → **gewerkt**\n- *praten* → *praa**t*** → t oui → **gepraat**\n- *wonen* → *woo**n*** → n non → **gewoond**\n- *leren* → *lee**r*** → non → **geleerd**\nAstuce supplémentaire : pour *v* et *z*, remonte à l'infinitif. *reizen → rei**z*** → z n'est pas dans kofschip → **gereisd**. *leven → lee**f***… mais l'infinitif a un v → **geleefd**.\n**Pas de ge-** si le verbe commence par *be-, ge-, ver-, ont-, her-, er-* : *betalen → **betaald***, *vertellen → **verteld***.",
          examples: [
            { nl: 'Ik heb de rekening betaald.', fr: 'J’ai payé l’addition.' },
            { nl: 'We hebben veel gepraat.', fr: 'On a beaucoup parlé.' },
            { nl: 'Ik heb Nederlands geleerd.', fr: 'J’ai appris le néerlandais.' },
          ],
        },
        {
          title: 'hebben ou zijn ?',
          body:
            "**zijn** avec :\n- les verbes de **déplacement d'un point à un autre** : *gaan, komen, vertrekken, fietsen naar…*\n- les verbes de **changement d'état** : *worden* (devenir), *beginnen*, *stoppen*, *sterven*\n- trois irréguliers à retenir : *zijn* (geweest), *blijven* (gebleven), *gebeuren* (gebeurd)\n**hebben** partout ailleurs. Dans le doute, *hebben* est le bon pari.",
          examples: [
            { nl: 'Ik ben naar de markt gefietst.', fr: 'Je suis allé au marché à vélo.' },
            { nl: 'Ben je ooit in Maastricht geweest?', fr: 'Es-tu déjà allé à Maastricht ?' },
          ],
        },
      ],
      vocab: [
        { id: 'd22-gewerkt', nl: 'gewerkt', fr: 'travaillé' },
        { id: 'd22-gewoond', nl: 'gewoond', fr: 'habité' },
        { id: 'd22-gepraat', nl: 'gepraat', fr: 'parlé / discuté' },
        { id: 'd22-geleerd', nl: 'geleerd', fr: 'appris' },
        { id: 'd22-gemaakt', nl: 'gemaakt', fr: 'fait / fabriqué' },
        { id: 'd22-gekocht', nl: 'gekocht', fr: 'acheté (irrégulier)' },
        { id: 'd22-betaald', nl: 'betaald', fr: 'payé' },
        { id: 'd22-gehoord', nl: 'gehoord', fr: 'entendu' },
        { id: 'd22-gekeken', nl: 'gekeken', fr: 'regardé' },
        { id: 'd22-gefietst', nl: 'gefietst', fr: 'allé à vélo' },
        { id: 'd22-geweest', nl: 'geweest', fr: 'été / allé' },
        { id: 'd22-gebleven', nl: 'gebleven', fr: 'resté' },
        { id: 'd22-gisteravond', nl: 'gisteravond', fr: 'hier soir' },
        { id: 'd22-vorigeweek', nl: 'vorige week', fr: 'la semaine dernière' },
        { id: 'd22-net', nl: 'net', fr: 'à l’instant / juste' },
        { id: 'd22-al', nl: 'al', fr: 'déjà' },
        { id: 'd22-nog', nl: 'nog', fr: 'encore' },
        { id: 'd22-ooit', nl: 'ooit', fr: 'jamais / un jour (passé)' },
      ],
      phrases: [
        { id: 'd22-p1', nl: 'Ik heb gisteren gewerkt.', fr: 'J’ai travaillé hier.' },
        { id: 'd22-p2', nl: 'We hebben een film gekeken.', fr: 'On a regardé un film.' },
        { id: 'd22-p3', nl: 'Ben je ooit in België geweest?', fr: 'Es-tu déjà allé en Belgique ?' },
        { id: 'd22-p4', nl: 'Ik heb net gegeten.', fr: 'Je viens de manger.' },
        { id: 'd22-p5', nl: 'Wat heb je vorige week gedaan?', fr: 'Qu’as-tu fait la semaine dernière ?' },
      ],
      dialogue: {
        title: 'Hoe was je weekend?',
        context: 'Lundi matin. La question rituelle du bureau néerlandais.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Karin', nl: 'Goedemorgen! Hoe was je weekend?', fr: 'Bonjour ! Comment s’est passé ton week-end ?' },
          { speaker: 'Uri', nl: 'Heel leuk. We zijn naar het strand geweest.', fr: 'Très sympa. On est allés à la plage.' },
          { speaker: 'Karin', nl: 'Met dit weer? Dapper!', fr: 'Avec ce temps ? Courageux !' },
          { speaker: 'Uri', nl: 'Zaterdag scheen de zon. We hebben gewandeld en gepraat.', fr: 'Samedi il y avait du soleil. On s’est promenés et on a discuté.' },
          { speaker: 'Karin', nl: 'En zondag?', fr: 'Et dimanche ?' },
          { speaker: 'Uri', nl: 'Zondag ben ik thuis gebleven. Ik heb Nederlands geleerd.', fr: 'Dimanche je suis resté à la maison. J’ai appris le néerlandais.' },
          { speaker: 'Karin', nl: 'Dat merk ik! Je praat veel makkelijker.', fr: 'Ça se remarque ! Tu parles beaucoup plus facilement.' },
          { speaker: 'Uri', nl: 'Dank je. En jij, wat heb jij gedaan?', fr: 'Merci. Et toi, qu’as-tu fait ?' },
        ],
      },
      speaking: [
        { prompt: 'Dis que tu as travaillé hier.', accept: ['Ik heb gisteren gewerkt'] },
        { prompt: 'Demande à quelqu’un ce qu’il a fait le week-end dernier.', accept: ['Wat heb je afgelopen weekend gedaan?', 'Wat heb je vorige week gedaan?'] },
        { prompt: 'Dis que tu es resté à la maison et que tu as appris le néerlandais.', accept: ['Ik ben thuis gebleven en ik heb Nederlands geleerd'] },
      ],
    },

    /* ------------------------------------------------------------ J23 */
    {
      id: 'd23',
      day: 23,
      week: 4,
      title: 'Les participes irréguliers essentiels',
      goal: 'Les trente participes que tu utiliseras 80 % du temps.',
      grammar: [
        {
          title: 'Les incontournables',
          body:
            "À apprendre par cœur, comme une liste de courses. Ils reviennent sans arrêt.\n- zijn → **geweest** · hebben → **gehad** · gaan → **gegaan** · komen → **gekomen**\n- doen → **gedaan** · zien → **gezien** · eten → **gegeten** · drinken → **gedronken**\n- lezen → **gelezen** · schrijven → **geschreven** · spreken → **gesproken** · zeggen → **gezegd**\n- nemen → **genomen** · geven → **gegeven** · krijgen → **gekregen** · vinden → **gevonden**\n- kopen → **gekocht** · brengen → **gebracht** · denken → **gedacht** · zoeken → **gezocht**\n- slapen → **geslapen** · lopen → **gelopen** · rijden → **gereden** · blijven → **gebleven**\n- staan → **gestaan** · zitten → **gezeten** · liggen → **gelegen** · begrijpen → **begrepen**\n- vergeten → **vergeten** · verliezen → **verloren** · worden → **geworden**",
          examples: [
            { nl: 'Ik heb je bericht gelezen.', fr: 'J’ai lu ton message.' },
            { nl: 'We hebben te veel gedronken.', fr: 'On a trop bu.' },
            { nl: 'Ik ben mijn sleutels verloren.', fr: 'J’ai perdu mes clés.' },
          ],
        },
        {
          title: 'Où se placent les compléments ?',
          body:
            "Entre l'auxiliaire et le participe, tout le reste s'empile dans cet ordre : **Temps – Manière – Lieu**, et l'objet défini vient tôt.\n*Ik **heb** het boek **gisteren** in de bibliotheek **gevonden**.*\nLe participe ferme la phrase comme une porte. Prends l'habitude de le « garder en main » pendant que tu construis le milieu de ta phrase.",
          examples: [
            { nl: 'Ik heb hem gisteren op het station gezien.', fr: 'Je l’ai vu hier à la gare.' },
            { nl: 'Zij heeft mij een mailtje gestuurd.', fr: 'Elle m’a envoyé un mail.' },
          ],
        },
      ],
      vocab: [
        { id: 'd23-gehad', nl: 'gehad', fr: 'eu' },
        { id: 'd23-gegaan', nl: 'gegaan', fr: 'allé' },
        { id: 'd23-gekomen', nl: 'gekomen', fr: 'venu' },
        { id: 'd23-gedaan', nl: 'gedaan', fr: 'fait' },
        { id: 'd23-gezien', nl: 'gezien', fr: 'vu' },
        { id: 'd23-gegeten', nl: 'gegeten', fr: 'mangé' },
        { id: 'd23-gedronken', nl: 'gedronken', fr: 'bu' },
        { id: 'd23-gelezen', nl: 'gelezen', fr: 'lu' },
        { id: 'd23-geschreven', nl: 'geschreven', fr: 'écrit' },
        { id: 'd23-gesproken', nl: 'gesproken', fr: 'parlé' },
        { id: 'd23-gezegd', nl: 'gezegd', fr: 'dit' },
        { id: 'd23-genomen', nl: 'genomen', fr: 'pris' },
        { id: 'd23-gekregen', nl: 'gekregen', fr: 'reçu' },
        { id: 'd23-gevonden', nl: 'gevonden', fr: 'trouvé' },
        { id: 'd23-gebracht', nl: 'gebracht', fr: 'apporté' },
        { id: 'd23-gedacht', nl: 'gedacht', fr: 'pensé' },
        { id: 'd23-geslapen', nl: 'geslapen', fr: 'dormi' },
        { id: 'd23-verloren', nl: 'verloren', fr: 'perdu' },
        { id: 'd23-begrepen', nl: 'begrepen', fr: 'compris' },
        { id: 'd23-sturen', nl: 'sturen', fr: 'envoyer' },
      ],
      phrases: [
        { id: 'd23-p1', nl: 'Ik heb je bericht gelezen.', fr: 'J’ai lu ton message.' },
        { id: 'd23-p2', nl: 'Ik heb slecht geslapen.', fr: 'J’ai mal dormi.' },
        { id: 'd23-p3', nl: 'Ik ben mijn sleutels verloren.', fr: 'J’ai perdu mes clés.' },
        { id: 'd23-p4', nl: 'Heb je hem vandaag gezien?', fr: 'Tu l’as vu aujourd’hui ?' },
        { id: 'd23-p5', nl: 'Ik heb het niet goed begrepen.', fr: 'Je n’ai pas bien compris.' },
        { id: 'd23-p6', nl: 'Wat heb je gezegd?', fr: 'Qu’as-tu dit ?' },
      ],
      dialogue: {
        title: 'Sleutels kwijt',
        context: 'Tu as perdu tes clés. Un exercice de passé composé sous stress.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Uri', nl: 'Ik denk dat ik mijn sleutels verloren ben.', fr: 'Je crois que j’ai perdu mes clés.' },
          { speaker: 'Sanne', nl: 'Oei. Waar ben je vandaag geweest?', fr: 'Aïe. Où es-tu allé aujourd’hui ?' },
          { speaker: 'Uri', nl: 'Naar kantoor, en daarna heb ik boodschappen gedaan.', fr: 'Au bureau, et ensuite j’ai fait les courses.' },
          { speaker: 'Sanne', nl: 'Heb je in de supermarkt betaald met de pas?', fr: 'Tu as payé par carte au supermarché ?' },
          { speaker: 'Uri', nl: 'Ja. Ik heb mijn jas daar open gehad.', fr: 'Oui. J’ai eu mon manteau ouvert là-bas.' },
          { speaker: 'Sanne', nl: 'Heb je al gebeld naar de winkel?', fr: 'Tu as déjà appelé le magasin ?' },
          { speaker: 'Uri', nl: 'Nee, nog niet. Ik heb het net gemerkt.', fr: 'Non, pas encore. Je viens de m’en apercevoir.' },
          { speaker: 'Sanne', nl: 'Bel maar. Vaak hebben ze het gevonden.', fr: 'Appelle donc. Souvent ils l’ont trouvé.' },
        ],
      },
      speaking: [
        { prompt: 'Dis que tu as mal dormi.', accept: ['Ik heb slecht geslapen'] },
        { prompt: 'Dis que tu n’as pas bien compris.', accept: ['Ik heb het niet goed begrepen'] },
        { prompt: 'Dis que tu es allé au bureau puis que tu as fait les courses.', accept: ['Ik ben naar kantoor gegaan en daarna heb ik boodschappen gedaan'] },
      ],
    },

    /* ------------------------------------------------------------ J24 */
    {
      id: 'd24',
      day: 24,
      week: 4,
      title: 'L’imparfait : was, had, ging',
      goal: 'Décrire un état passé, poser un décor, raconter une histoire.',
      grammar: [
        {
          title: 'Quand utiliser l’imparfait plutôt que le passé composé',
          body:
            "Le néerlandais parlé utilise surtout le **passé composé**. L'imparfait (*imperfectum*) sert à :\n- **zijn, hebben** et les modaux, presque toujours : *Het **was** leuk*, *Ik **had** geen tijd*, *Ik **kon** niet komen*\n- décrire un **décor** ou un état : *Het regende en het was koud.*\n- raconter une **suite d'évènements** dans un récit un peu long\nDans le doute, pour une action ponctuelle : passé composé. Pour « c'était / j'avais / je pouvais » : imparfait.",
          examples: [
            { nl: 'Het was heel gezellig.', fr: 'C’était très convivial.' },
            { nl: 'Ik had geen tijd.', fr: 'Je n’avais pas le temps.' },
            { nl: 'Ik kon niet komen, sorry.', fr: 'Je ne pouvais pas venir, désolé.' },
          ],
        },
        {
          title: 'Les formes à connaître',
          body:
            "**zijn** : ik/hij **was**, wij/jullie/zij **waren**\n**hebben** : ik/hij **had**, wij **hadden**\n**kunnen** : **kon / konden** · **moeten** : **moest / moesten** · **willen** : **wilde / wilden** · **mogen** : **mocht / mochten**\n**gaan** : **ging / gingen** · **komen** : **kwam / kwamen** · **doen** : **deed / deden** · **zien** : **zag / zagen** · **zeggen** : **zei / zeiden** · **worden** : **werd / werden**\nVerbes **réguliers** : radical + **-te(n)** ou **-de(n)**, selon la même règle ’t kofschip. *werken → **werkte***, *wonen → **woonde***.",
          examples: [
            { nl: 'Vroeger woonde ik in Parijs.', fr: 'Avant j’habitais à Paris.' },
            { nl: 'Toen ik jong was, speelde ik voetbal.', fr: 'Quand j’étais jeune, je jouais au foot.' },
          ],
        },
      ],
      vocab: [
        { id: 'd24-was', nl: 'was', fr: 'était / étais' },
        { id: 'd24-waren', nl: 'waren', fr: 'étions / étaient' },
        { id: 'd24-had', nl: 'had', fr: 'avait / avais' },
        { id: 'd24-kon', nl: 'kon', fr: 'pouvais / pouvait' },
        { id: 'd24-moest', nl: 'moest', fr: 'devais / devait' },
        { id: 'd24-wilde', nl: 'wilde', fr: 'voulais / voulait' },
        { id: 'd24-ging', nl: 'ging', fr: 'allais / allait' },
        { id: 'd24-kwam', nl: 'kwam', fr: 'venais / venait' },
        { id: 'd24-zag', nl: 'zag', fr: 'voyais / voyait' },
        { id: 'd24-zei', nl: 'zei', fr: 'disais / disait' },
        { id: 'd24-werd', nl: 'werd', fr: 'devenais / devenait' },
        { id: 'd24-vroeger', nl: 'vroeger', fr: 'autrefois / avant' },
        { id: 'd24-toen', nl: 'toen', fr: 'quand (passé) / alors' },
        { id: 'd24-eerst', nl: 'eerst', fr: 'd’abord' },
        { id: 'd24-daarna', nl: 'daarna', fr: 'ensuite' },
        { id: 'd24-uiteindelijk', nl: 'uiteindelijk', fr: 'finalement' },
        { id: 'd24-plotseling', nl: 'plotseling', fr: 'soudain' },
        { id: 'd24-gelukkig', nl: 'gelukkig', fr: 'heureusement / heureux' },
      ],
      phrases: [
        { id: 'd24-p1', nl: 'Het was heel gezellig.', fr: 'C’était très convivial.' },
        { id: 'd24-p2', nl: 'Ik had geen tijd, sorry.', fr: 'Je n’avais pas le temps, désolé.' },
        { id: 'd24-p3', nl: 'Vroeger woonde ik in Parijs.', fr: 'Avant j’habitais à Paris.' },
        { id: 'd24-p4', nl: 'Toen ik jong was, sprak ik geen Nederlands.', fr: 'Quand j’étais jeune, je ne parlais pas néerlandais.' },
        { id: 'd24-p5', nl: 'Gelukkig ging alles goed.', fr: 'Heureusement tout s’est bien passé.' },
      ],
      dialogue: {
        title: 'Een verhaal vertellen',
        context: 'Tu racontes une petite mésaventure. Imparfait pour le décor, passé composé pour les actions.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Joost', nl: 'Je klinkt moe. Wat is er gebeurd?', fr: 'Tu as l’air fatigué. Que s’est-il passé ?' },
          { speaker: 'Uri', nl: 'Gisteravond was ik op de fiets. Het regende hard.', fr: 'Hier soir j’étais à vélo. Il pleuvait fort.' },
          { speaker: 'Joost', nl: 'Oei, en toen?', fr: 'Aïe, et alors ?' },
          { speaker: 'Uri', nl: 'Plotseling had ik een lekke band, midden op de brug.', fr: 'Soudain j’ai eu un pneu crevé, au milieu du pont.' },
          { speaker: 'Joost', nl: 'Wat heb je gedaan?', fr: 'Qu’as-tu fait ?' },
          { speaker: 'Uri', nl: 'Ik moest lopen. Veertig minuten in de regen.', fr: 'J’ai dû marcher. Quarante minutes sous la pluie.' },
          { speaker: 'Joost', nl: 'Kon je niemand bellen?', fr: 'Tu ne pouvais appeler personne ?' },
          { speaker: 'Uri', nl: 'Mijn telefoon was leeg. Maar uiteindelijk was het wel grappig.', fr: 'Mon téléphone était déchargé. Mais finalement c’était plutôt drôle.' },
        ],
      },
      speaking: [
        { prompt: 'Dis que c’était très convivial.', accept: ['Het was heel gezellig'] },
        { prompt: 'Excuse-toi : tu n’avais pas le temps.', accept: ['Sorry, ik had geen tijd'] },
        { prompt: 'Dis qu’avant tu habitais à Paris.', accept: ['Vroeger woonde ik in Parijs'] },
      ],
    },

    /* ------------------------------------------------------------ J25 */
    {
      id: 'd25',
      day: 25,
      week: 4,
      title: 'Raconter sa journée',
      goal: 'Enchaîner cinq phrases au passé sans t’arrêter.',
      grammar: [
        {
          title: 'Les connecteurs qui font tenir un récit',
          body:
            "Sans connecteurs, tu produis des phrases isolées. Avec, tu racontes.\nCes cinq-là ne changent **pas** l'ordre des mots (le verbe reste en 2, ou plutôt il suit) : **en** (et), **maar** (mais), **want** (car), **of** (ou), **dus** (donc).\n*Ik was moe **maar** ik ben toch gegaan.*\nCeux-ci **provoquent l'inversion** parce qu'ils occupent la première place : **toen** (puis/alors), **daarna** (ensuite), **eerst** (d'abord), **later** (plus tard), **daarom** (c'est pourquoi).\n*Eerst **heb** ik gegeten, daarna **ben** ik gaan lopen.*",
          examples: [
            { nl: 'Eerst heb ik gewerkt, daarna ben ik naar de sportschool gegaan.', fr: 'D’abord j’ai travaillé, ensuite je suis allé à la salle.' },
            { nl: 'Ik was moe, dus ik ben vroeg naar bed gegaan.', fr: 'J’étais fatigué, donc je me suis couché tôt.' },
          ],
        },
        {
          title: 'Le squelette d’un récit de journée',
          body:
            "Apprends ce squelette et remplis-le chaque soir à voix haute. C'est le meilleur exercice de production libre qui existe.\n1. *Vanmorgen ben ik om … opgestaan.*\n2. *Eerst heb ik …*\n3. *Daarna ben ik naar … gegaan.*\n4. *’s Middags heb ik …*\n5. *Het was … (leuk / druk / saai).*\n6. *Vanavond ga ik …*",
          examples: [
            { nl: 'Vanmorgen ben ik om zeven uur opgestaan.', fr: 'Ce matin je me suis levé à sept heures.' },
            { nl: '’s Middags heb ik met een collega geluncht.', fr: 'L’après-midi j’ai déjeuné avec un collègue.' },
          ],
        },
      ],
      vocab: [
        { id: 'd25-vanmorgen', nl: 'vanmorgen', fr: 'ce matin' },
        { id: 'd25-vanmiddag', nl: 'vanmiddag', fr: 'cet après-midi' },
        { id: 'd25-vanavond', nl: 'vanavond', fr: 'ce soir' },
        { id: 'd25-gisternacht', nl: 'vannacht', fr: 'cette nuit' },
        { id: 'd25-daarom', nl: 'daarom', fr: 'c’est pourquoi' },
        { id: 'd25-dus', nl: 'dus', fr: 'donc' },
        { id: 'd25-want', nl: 'want', fr: 'car' },
        { id: 'd25-maar2', nl: 'maar', fr: 'mais' },
        { id: 'd25-later', nl: 'later', fr: 'plus tard' },
        { id: 'd25-meteen', nl: 'meteen', fr: 'tout de suite' },
        { id: 'd25-saai', nl: 'saai', fr: 'ennuyeux' },
        { id: 'd25-moe', nl: 'moe', fr: 'fatigué' },
        { id: 'd25-blij', nl: 'blij', fr: 'content', hint: 'blaï' },
        { id: 'd25-boos', nl: 'boos', fr: 'fâché' },
        { id: 'd25-verdrietig', nl: 'verdrietig', fr: 'triste' },
        { id: 'd25-vergadering', nl: 'vergadering', fr: 'réunion', article: 'de' },
        { id: 'd25-lunchen', nl: 'lunchen', fr: 'déjeuner' },
        { id: 'd25-sporten', nl: 'sporten', fr: 'faire du sport' },
      ],
      phrases: [
        { id: 'd25-p1', nl: 'Vanmorgen ben ik om zeven uur opgestaan.', fr: 'Ce matin je me suis levé à sept heures.' },
        { id: 'd25-p2', nl: 'Eerst heb ik koffie gedronken.', fr: 'D’abord j’ai bu un café.' },
        { id: 'd25-p3', nl: 'Daarna ben ik naar kantoor gefietst.', fr: 'Ensuite je suis allé au bureau à vélo.' },
        { id: 'd25-p4', nl: 'Ik was moe, dus ik ben vroeg naar bed gegaan.', fr: 'J’étais fatigué, donc je me suis couché tôt.' },
        { id: 'd25-p5', nl: 'Het was een drukke dag.', fr: 'C’était une journée chargée.' },
        { id: 'd25-p6', nl: 'Hoe was jouw dag?', fr: 'Comment s’est passée ta journée ?' },
      ],
      dialogue: {
        title: 'Aan tafel, ’s avonds',
        context: 'Le débriefing du soir. Cinq minutes de récit, en néerlandais.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Lisa', nl: 'Hoe was jouw dag?', fr: 'Comment s’est passée ta journée ?' },
          { speaker: 'Uri', nl: 'Druk. Vanmorgen ben ik vroeg opgestaan.', fr: 'Chargée. Ce matin je me suis levé tôt.' },
          { speaker: 'Lisa', nl: 'Hoe laat dan?', fr: 'À quelle heure alors ?' },
          { speaker: 'Uri', nl: 'Half zeven. Eerst heb ik koffie gedronken, daarna ben ik gefietst.', fr: 'Six heures et demie. D’abord j’ai bu un café, ensuite j’ai pédalé.' },
          { speaker: 'Lisa', nl: 'En op kantoor?', fr: 'Et au bureau ?' },
          { speaker: 'Uri', nl: 'Twee vergaderingen. In het Nederlands, dat was zwaar.', fr: 'Deux réunions. En néerlandais, c’était dur.' },
          { speaker: 'Lisa', nl: 'Maar je hebt het gedaan!', fr: 'Mais tu l’as fait !' },
          { speaker: 'Uri', nl: 'Ja. Ik begreep niet alles, maar genoeg. En jouw dag?', fr: 'Oui. Je n’ai pas tout compris, mais assez. Et ta journée ?' },
        ],
      },
      speaking: [
        { prompt: 'Raconte ta matinée en trois phrases : lever, café, trajet.', accept: ['Vanmorgen ben ik om zeven uur opgestaan, eerst heb ik koffie gedronken en daarna ben ik naar kantoor gefietst'] },
        { prompt: 'Dis que c’était une journée chargée.', accept: ['Het was een drukke dag'] },
        { prompt: 'Demande à quelqu’un comment s’est passée sa journée.', accept: ['Hoe was jouw dag?', 'Hoe was je dag?'] },
      ],
    },

    /* ------------------------------------------------------------ J26 */
    {
      id: 'd26',
      day: 26,
      week: 4,
      title: 'Donner son avis — et la subordonnée',
      goal: 'Exprimer une opinion, avec le verbe rejeté à la fin de la subordonnée.',
      grammar: [
        {
          title: 'Dans une subordonnée, le verbe va à la fin',
          body:
            "Après **dat, omdat, als, of, terwijl, hoewel, wanneer, die/dat** (relatifs), le verbe conjugué **quitte la place 2 et file en dernier**.\n- *Ik denk **dat** het morgen **regent**.*\n- *Ik leer Nederlands **omdat** ik hier **woon**.*\n- *Weet je **of** de winkel open **is**?*\nS'il y a deux verbes, ils partent **tous les deux** à la fin : *Ik denk dat hij morgen **kan komen**.*\nEt si la subordonnée vient **en premier**, la principale inverse : ***Omdat** ik moe **was**, **ben** ik vroeg naar bed gegaan.*",
          examples: [
            { nl: 'Ik vind dat Nederlands mooi klinkt.', fr: 'Je trouve que le néerlandais sonne bien.' },
            { nl: 'Ik weet niet of hij komt.', fr: 'Je ne sais pas s’il vient.' },
            { nl: 'Omdat het regent, blijf ik thuis.', fr: 'Comme il pleut, je reste à la maison.' },
          ],
        },
        {
          title: 'La boîte à outils de l’opinion',
          body:
            "- **Ik vind dat…** — Je trouve que… (opinion personnelle, le plus courant)\n- **Ik denk dat…** — Je pense que…\n- **Volgens mij…** — Selon moi… (suivi d'une phrase normale, sans rejet !)\n- **Ik ben het ermee eens / oneens.** — Je suis d'accord / pas d'accord.\n- **Dat klopt.** — C'est exact.\n- **Dat valt mee.** — Ce n'est pas si terrible. / **Dat valt tegen.** — C'est décevant.\n- **Ik weet het niet zeker.** — Je n'en suis pas sûr.\nNote : **Volgens mij** est suivi de l'ordre normal, pas de rejet. *Volgens mij **is** het te duur.*",
          examples: [
            { nl: 'Volgens mij is het te duur.', fr: 'Selon moi c’est trop cher.' },
            { nl: 'Ik ben het niet met je eens.', fr: 'Je ne suis pas d’accord avec toi.' },
          ],
        },
      ],
      vocab: [
        { id: 'd26-dat', nl: 'dat', fr: 'que' },
        { id: 'd26-omdat', nl: 'omdat', fr: 'parce que' },
        { id: 'd26-als', nl: 'als', fr: 'si / quand' },
        { id: 'd26-of2', nl: 'of', fr: 'si (interrogatif) / ou' },
        { id: 'd26-terwijl', nl: 'terwijl', fr: 'pendant que' },
        { id: 'd26-hoewel', nl: 'hoewel', fr: 'bien que' },
        { id: 'd26-mening', nl: 'mening', fr: 'opinion', article: 'de' },
        { id: 'd26-eens', nl: 'eens', fr: 'd’accord' },
        { id: 'd26-oneens', nl: 'oneens', fr: 'en désaccord' },
        { id: 'd26-kloppen', nl: 'kloppen', fr: 'être exact' },
        { id: 'd26-geloven', nl: 'geloven', fr: 'croire' },
        { id: 'd26-weten', nl: 'weten', fr: 'savoir' },
        { id: 'd26-zeker', nl: 'zeker', fr: 'sûr / certainement' },
        { id: 'd26-belangrijk', nl: 'belangrijk', fr: 'important' },
        { id: 'd26-interessant', nl: 'interessant', fr: 'intéressant' },
        { id: 'd26-vreemd', nl: 'vreemd', fr: 'étrange' },
        { id: 'd26-eerlijk', nl: 'eerlijk', fr: 'honnête / franchement' },
      ],
      phrases: [
        { id: 'd26-p1', nl: 'Ik vind dat Nederlands mooi klinkt.', fr: 'Je trouve que le néerlandais sonne bien.' },
        { id: 'd26-p2', nl: 'Ik denk dat het morgen regent.', fr: 'Je pense qu’il va pleuvoir demain.' },
        { id: 'd26-p3', nl: 'Volgens mij is het te duur.', fr: 'Selon moi c’est trop cher.' },
        { id: 'd26-p4', nl: 'Ik ben het niet met je eens.', fr: 'Je ne suis pas d’accord avec toi.' },
        { id: 'd26-p5', nl: 'Ik leer Nederlands omdat ik hier woon.', fr: 'J’apprends le néerlandais parce que j’habite ici.' },
        { id: 'd26-p6', nl: 'Weet je of de winkel open is?', fr: 'Sais-tu si le magasin est ouvert ?' },
      ],
      dialogue: {
        title: 'Discussie over de stad',
        context: 'Une vraie petite discussion d’opinion. Chaque réplique contient une subordonnée.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Bram', nl: 'Wat vind je van Amsterdam?', fr: 'Que penses-tu d’Amsterdam ?' },
          { speaker: 'Uri', nl: 'Ik vind dat het een mooie stad is, maar het is erg druk.', fr: 'Je trouve que c’est une belle ville, mais c’est très bondé.' },
          { speaker: 'Bram', nl: 'Dat klopt. Veel mensen denken dat het te toeristisch is.', fr: 'C’est exact. Beaucoup pensent que c’est trop touristique.' },
          { speaker: 'Uri', nl: 'Volgens mij is het buiten het centrum veel rustiger.', fr: 'Selon moi c’est beaucoup plus calme hors du centre.' },
          { speaker: 'Bram', nl: 'Precies. Woon je daarom in Oost?', fr: 'Exactement. C’est pour ça que tu habites à l’Est ?' },
          { speaker: 'Uri', nl: 'Ja, omdat het daar goedkoper en rustiger is.', fr: 'Oui, parce que c’est moins cher et plus calme là-bas.' },
          { speaker: 'Bram', nl: 'En mis je Frankrijk niet?', fr: 'Et la France ne te manque pas ?' },
          { speaker: 'Uri', nl: 'Soms wel. Maar ik denk dat ik hier gelukkiger ben.', fr: 'Parfois si. Mais je pense que je suis plus heureux ici.' },
        ],
      },
      speaking: [
        { prompt: 'Donne ton avis : tu trouves que le néerlandais est difficile mais utile.', accept: ['Ik vind dat Nederlands moeilijk maar nuttig is'] },
        { prompt: 'Dis que tu apprends le néerlandais parce que tu habites ici.', accept: ['Ik leer Nederlands omdat ik hier woon'] },
        { prompt: 'Demande si quelqu’un sait si le magasin est ouvert.', accept: ['Weet je of de winkel open is?'] },
      ],
    },

    /* ------------------------------------------------------------ J27 */
    {
      id: 'd27',
      day: 27,
      week: 4,
      title: 'Décrire les gens',
      goal: 'Parler de quelqu’un : son apparence, son caractère, ce qu’il fait.',
      grammar: [
        {
          title: 'Les pronoms objets',
          body:
            "**mij / me** (moi), **jou / je** (toi), **u** (vous), **hem** (lui), **haar** (elle), **ons** (nous), **jullie** (vous), **hen / ze** (eux).\nLes formes courtes (*me, je, ze*) sont les plus fréquentes à l'oral ; les longues (*mij, jou, hen*) servent à insister.\n*Ik ken **hem** goed.* — Je le connais bien.\n*Zij heeft **mij** geholpen.* — Elle m'a aidé.\nAvec une préposition, on garde la forme objet : *met **haar***, *voor **ons***, *over **hem***.",
          examples: [
            { nl: 'Ik ken haar van het werk.', fr: 'Je la connais du travail.' },
            { nl: 'Hij heeft ons uitgenodigd.', fr: 'Il nous a invités.' },
          ],
        },
        {
          title: 'Décrire sans vexer',
          body:
            "Les Néerlandais sont directs mais pas grossiers. Quelques tournures utiles :\n- **Hij is een beetje…** — Il est un peu…\n- **Zij kan soms wat … zijn.** — Elle peut parfois être un peu…\n- **Hij lijkt op zijn vader.** — Il ressemble à son père.\n- **Ze heeft een goed gevoel voor humor.** — Elle a de l'humour.\n- **Hij is heel direct — dat ben ik nog niet gewend.** — Il est très direct, je n'y suis pas encore habitué.\nPour l'apparence : *Hij **heeft** blond haar en blauwe ogen.* / *Zij **is** lang / klein.*",
          examples: [
            { nl: 'Ze heeft donker haar en bruine ogen.', fr: 'Elle a les cheveux foncés et les yeux marron.' },
            { nl: 'Hij is heel aardig maar een beetje verlegen.', fr: 'Il est très gentil mais un peu timide.' },
          ],
        },
      ],
      vocab: [
        { id: 'd27-aardig', nl: 'aardig', fr: 'gentil' },
        { id: 'd27-vriendelijk', nl: 'vriendelijk', fr: 'aimable' },
        { id: 'd27-verlegen', nl: 'verlegen', fr: 'timide' },
        { id: 'd27-grappig', nl: 'grappig', fr: 'drôle' },
        { id: 'd27-serieus', nl: 'serieus', fr: 'sérieux' },
        { id: 'd27-direct', nl: 'direct', fr: 'direct / franc' },
        { id: 'd27-slim', nl: 'slim', fr: 'intelligent' },
        { id: 'd27-lui', nl: 'lui', fr: 'paresseux' },
        { id: 'd27-streng', nl: 'streng', fr: 'strict' },
        { id: 'd27-geduldig', nl: 'geduldig', fr: 'patient' },
        { id: 'd27-haar2', nl: 'haar', fr: 'cheveux', article: 'het' },
        { id: 'd27-ogen', nl: 'ogen', fr: 'yeux', article: 'de' },
        { id: 'd27-blond', nl: 'blond', fr: 'blond' },
        { id: 'd27-donker', nl: 'donker', fr: 'foncé / sombre' },
        { id: 'd27-jong', nl: 'jong', fr: 'jeune' },
        { id: 'd27-kennen', nl: 'kennen', fr: 'connaître' },
        { id: 'd27-lijkenop', nl: 'lijken op', fr: 'ressembler à' },
        { id: 'd27-collega', nl: 'collega', fr: 'collègue', article: 'de' },
      ],
      phrases: [
        { id: 'd27-p1', nl: 'Ik ken haar van het werk.', fr: 'Je la connais du travail.' },
        { id: 'd27-p2', nl: 'Hij is heel aardig maar een beetje verlegen.', fr: 'Il est très gentil mais un peu timide.' },
        { id: 'd27-p3', nl: 'Ze heeft donker haar en bruine ogen.', fr: 'Elle a les cheveux foncés et les yeux marron.' },
        { id: 'd27-p4', nl: 'Nederlanders zijn heel direct.', fr: 'Les Néerlandais sont très directs.' },
        { id: 'd27-p5', nl: 'Hij lijkt op zijn vader.', fr: 'Il ressemble à son père.' },
      ],
      dialogue: {
        title: 'Wie is dat?',
        context: 'À une fête, tu demandes qui sont les gens.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Uri', nl: 'Wie is die man daar, met de bril?', fr: 'Qui est cet homme là-bas, avec les lunettes ?' },
          { speaker: 'Fleur', nl: 'Dat is Thomas, een collega van mij.', fr: 'C’est Thomas, un collègue à moi.' },
          { speaker: 'Uri', nl: 'Hoe is hij?', fr: 'Comment est-il ?' },
          { speaker: 'Fleur', nl: 'Heel slim, maar een beetje serieus.', fr: 'Très intelligent, mais un peu sérieux.' },
          { speaker: 'Uri', nl: 'En die vrouw met het blonde haar?', fr: 'Et cette femme aux cheveux blonds ?' },
          { speaker: 'Fleur', nl: 'Zijn zus. Zij is juist heel grappig.', fr: 'Sa sœur. Elle, au contraire, est très drôle.' },
          { speaker: 'Uri', nl: 'Ze lijken niet op elkaar!', fr: 'Ils ne se ressemblent pas !' },
          { speaker: 'Fleur', nl: 'Nee, echt niet. Zal ik je voorstellen?', fr: 'Non, vraiment pas. Je te présente ?' },
          { speaker: 'Uri', nl: 'Graag. Maar praat alsjeblieft langzaam met me.', fr: 'Volontiers. Mais parlez lentement avec moi s’il vous plaît.' },
        ],
      },
      speaking: [
        { prompt: 'Décris quelqu’un : gentil mais un peu timide.', accept: ['Hij is heel aardig maar een beetje verlegen'] },
        { prompt: 'Dis que tu connais quelqu’un du travail.', accept: ['Ik ken haar van het werk', 'Ik ken hem van het werk'] },
        { prompt: 'Demande qui est la personne là-bas.', accept: ['Wie is die man daar?', 'Wie is dat?'] },
      ],
    },

    /* ------------------------------------------------------------ J28 */
    {
      id: 'd28',
      day: 28,
      week: 4,
      title: 'Révision semaine 4 — parler de soi pendant deux minutes',
      goal: 'Produire un monologue continu : passé, présent, opinion.',
      grammar: [
        {
          title: 'Le monologue des deux minutes',
          body:
            "L'épreuve reine de tout examen oral, et le meilleur entraînement qui existe. Structure à mémoriser :\n1. **Qui je suis** : *Ik heet…, ik kom uit…, ik woon nu in…*\n2. **Mon passé** : *Vroeger woonde ik in… Ik heb daar… gewerkt.*\n3. **Mon présent** : *Nu werk ik bij… Elke dag fiets ik…*\n4. **Mon avis** : *Ik vind dat Nederland… Volgens mij is…*\n5. **Mon projet** : *Ik wil graag beter Nederlands leren, omdat…*\nChronomètre-toi. Deux minutes sans repasser au français, c'est l'objectif de la semaine 4.",
          examples: [
            { nl: 'Vroeger woonde ik in Parijs, nu woon ik in Amsterdam.', fr: 'Avant j’habitais à Paris, maintenant j’habite à Amsterdam.' },
            { nl: 'Ik wil graag beter Nederlands leren, omdat ik hier blijf.', fr: 'Je veux mieux apprendre le néerlandais, parce que je reste ici.' },
          ],
        },
      ],
      vocab: [
        { id: 'd28-nu2', nl: 'nu', fr: 'maintenant' },
        { id: 'd28-sinds', nl: 'sinds', fr: 'depuis' },
        { id: 'd28-geleden', nl: 'geleden', fr: 'il y a (temps)' },
        { id: 'd28-binnenkort', nl: 'binnenkort', fr: 'bientôt' },
        { id: 'd28-voorlopig', nl: 'voorlopig', fr: 'pour l’instant' },
        { id: 'd28-eindelijk', nl: 'eindelijk', fr: 'enfin' },
        { id: 'd28-trots', nl: 'trots', fr: 'fier' },
        { id: 'd28-missen', nl: 'missen', fr: 'manquer / rater' },
        { id: 'd28-wennen', nl: 'wennen', fr: 's’habituer' },
        { id: 'd28-veranderen', nl: 'veranderen', fr: 'changer' },
        { id: 'd28-verhuizen', nl: 'verhuizen', fr: 'déménager' },
        { id: 'd28-ervaring', nl: 'ervaring', fr: 'expérience', article: 'de' },
        { id: 'd28-reden', nl: 'reden', fr: 'raison', article: 'de' },
        { id: 'd28-doel', nl: 'doel', fr: 'objectif', article: 'het' },
      ],
      phrases: [
        { id: 'd28-p1', nl: 'Ik woon hier sinds drie maanden.', fr: 'J’habite ici depuis trois mois.' },
        { id: 'd28-p2', nl: 'Twee jaar geleden ben ik verhuisd.', fr: 'Il y a deux ans j’ai déménagé.' },
        { id: 'd28-p3', nl: 'Ik moet nog wennen aan het weer.', fr: 'Je dois encore m’habituer au temps.' },
        { id: 'd28-p4', nl: 'Mijn doel is om vloeiend te worden.', fr: 'Mon objectif est de devenir fluide.' },
        { id: 'd28-p5', nl: 'Soms mis ik het Franse eten.', fr: 'Parfois la nourriture française me manque.' },
      ],
      dialogue: {
        title: 'Twee minuten over jezelf',
        context: 'Un monologue modèle. Apprends-le, puis remplace chaque élément par le tien.',
        learnerRole: 'Uri',
        lines: [
          { speaker: 'Uri', nl: 'Ik heet Uri en ik kom uit Frankrijk.', fr: 'Je m’appelle Uri et je viens de France.' },
          { speaker: 'Uri', nl: 'Vroeger woonde ik in Parijs, waar ik acht jaar heb gewerkt.', fr: 'Avant j’habitais à Paris, où j’ai travaillé huit ans.' },
          { speaker: 'Uri', nl: 'Drie maanden geleden ben ik naar Amsterdam verhuisd.', fr: 'Il y a trois mois j’ai déménagé à Amsterdam.' },
          { speaker: 'Uri', nl: 'Nu werk ik bij een klein bedrijf in het centrum.', fr: 'Maintenant je travaille dans une petite entreprise au centre.' },
          { speaker: 'Uri', nl: 'Elke dag fiets ik naar kantoor, ook als het regent.', fr: 'Chaque jour je vais au bureau à vélo, même quand il pleut.' },
          { speaker: 'Uri', nl: 'Ik vind Nederland prettig, want de mensen zijn direct en eerlijk.', fr: 'Je trouve les Pays-Bas agréables, car les gens sont directs et honnêtes.' },
          { speaker: 'Uri', nl: 'Soms mis ik mijn familie, maar ik ben blij dat ik hier ben.', fr: 'Parfois ma famille me manque, mais je suis content d’être ici.' },
          { speaker: 'Uri', nl: 'Mijn doel is om over drie maanden vloeiend te praten.', fr: 'Mon objectif est de parler couramment dans trois mois.' },
        ],
      },
      speaking: [
        { prompt: 'Dis depuis combien de temps tu habites ici.', accept: ['Ik woon hier sinds drie maanden'] },
        { prompt: 'Dis ton objectif avec le néerlandais.', accept: ['Mijn doel is om vloeiend te worden'] },
        { prompt: 'Fais ton monologue complet : nom, origine, passé, présent, avis, objectif.', accept: ['Ik heet Uri, ik kom uit Frankrijk, vroeger woonde ik in Parijs, nu werk ik in Amsterdam en ik wil vloeiend Nederlands leren'] },
      ],
    },
  ],
}
