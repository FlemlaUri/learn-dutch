export interface SoundEntry {
  /** Graphie néerlandaise. */
  sound: string
  /** Explication articulatoire pour un francophone. */
  how: string
  /** Mots d'exemple à écouter et répéter. */
  words: { nl: string; fr: string }[]
  /** Le piège classique. */
  trap?: string
}

export interface SoundGroup {
  title: string
  intro: string
  entries: SoundEntry[]
}

export const pronunciation: SoundGroup[] = [
  {
    title: 'Les consonnes qui grattent',
    intro:
      "Le fameux son néerlandais. Il se produit au fond de la gorge, comme la jota espagnole ou le ch allemand de « Bach ». Aux Pays-Bas il racle fort ; en Belgique il est nettement plus doux — les deux sont corrects.",
    entries: [
      {
        sound: 'g / ch',
        how: "Racle le fond de la gorge sans faire vibrer les cordes vocales. Commence par un « r » français grasseyé, puis durcis-le.",
        words: [
          { nl: 'goed', fr: 'bon' },
          { nl: 'acht', fr: 'huit' },
          { nl: 'lachen', fr: 'rire' },
          { nl: 'gracht', fr: 'canal' },
        ],
        trap: 'Ne le prononce jamais comme le « g » de « gare » : tu deviens incompréhensible.',
      },
      {
        sound: 'sch',
        how: "s + le son raclé, l'un après l'autre. En fin de mot (-isch), il se réduit à « ss ».",
        words: [
          { nl: 'school', fr: 'école' },
          { nl: 'schrijven', fr: 'écrire' },
          { nl: 'Scheveningen', fr: '(le test ultime)' },
        ],
      },
      {
        sound: 'r',
        how: "Roulé du bout de la langue dans la plupart des régions, ou à l'anglaise en fin de mot chez les jeunes. Les deux passent.",
        words: [
          { nl: 'rood', fr: 'rouge' },
          { nl: 'straat', fr: 'rue' },
        ],
      },
      {
        sound: 'w / v',
        how: "Le w est entre notre v et un « ou » : lèvres presque jointes. Le v initial se prononce souvent comme un f dur.",
        words: [
          { nl: 'water', fr: 'eau' },
          { nl: 'vader', fr: 'père' },
          { nl: 'vier', fr: 'quatre' },
        ],
        trap: 'wij se dit « vaï », pas « ouaï ».',
      },
      {
        sound: 'j',
        how: 'Comme le « y » de « yaourt », jamais comme le j français.',
        words: [
          { nl: 'ja', fr: 'oui' },
          { nl: 'jij', fr: 'tu' },
          { nl: 'jong', fr: 'jeune' },
        ],
      },
    ],
  },
  {
    title: 'Les voyelles longues et courtes',
    intro:
      "En néerlandais, la longueur d'une voyelle change le mot. C'est une distinction que le français n'a pas : il faut l'installer consciemment.",
    entries: [
      {
        sound: 'a / aa',
        how: "a court et sec, aa tenu deux fois plus longtemps et plus ouvert.",
        words: [
          { nl: 'man', fr: 'homme' },
          { nl: 'maan', fr: 'lune' },
          { nl: 'straat', fr: 'rue' },
        ],
        trap: 'man / maan : deux mots différents. Tiens la voyelle.',
      },
      {
        sound: 'e / ee',
        how: 'e court comme dans « mets », ee long comme dans « thé » tenu.',
        words: [
          { nl: 'bed', fr: 'lit' },
          { nl: 'beet', fr: 'morsure' },
          { nl: 'twee', fr: 'deux' },
        ],
      },
      {
        sound: 'o / oo',
        how: 'o court et fermé, oo long comme un « ô » tenu.',
        words: [
          { nl: 'bos', fr: 'forêt' },
          { nl: 'boos', fr: 'fâché' },
          { nl: 'rood', fr: 'rouge' },
        ],
      },
      {
        sound: 'u / uu',
        how: 'u court entre notre « eu » et notre « u », uu comme notre « u » de « mur », tenu.',
        words: [
          { nl: 'bus', fr: 'bus' },
          { nl: 'duur', fr: 'cher' },
          { nl: 'uur', fr: 'heure' },
        ],
      },
      {
        sound: 'e final (schwa)',
        how: "Le e en fin de mot ou en syllabe atone se réduit à un « e » très mou, comme le « e » de « petit ».",
        words: [
          { nl: 'lopen', fr: 'marcher' },
          { nl: 'de', fr: 'le / la' },
          { nl: 'gezellig', fr: 'convivial' },
        ],
      },
    ],
  },
  {
    title: 'Les diphtongues qui font peur',
    intro:
      "Trois sons composés n'existent pas en français. Ils sont la signature de l'accent néerlandais — et donc la clé pour être compris.",
    entries: [
      {
        sound: 'ui',
        how: "Le plus dur. Positionne la bouche pour dire « eu » de « peur », puis glisse vers « ï » sans bouger les lèvres. Résultat : quelque chose entre « euï » et « aï ».",
        words: [
          { nl: 'huis', fr: 'maison' },
          { nl: 'ui', fr: 'oignon' },
          { nl: 'buiten', fr: 'dehors' },
          { nl: 'uit', fr: 'de / hors de' },
        ],
        trap: "Une approximation en « aï » sera comprise. Le silence, non. N'attends pas de le maîtriser pour parler.",
      },
      {
        sound: 'ij / ei',
        how: "Les deux graphies donnent exactement le même son, entre « eille » et « aï ». Seule l'orthographe diffère.",
        words: [
          { nl: 'mijn', fr: 'mon' },
          { nl: 'trein', fr: 'train' },
          { nl: 'vijf', fr: 'cinq' },
          { nl: 'klein', fr: 'petit' },
        ],
      },
      {
        sound: 'ou / au',
        how: "Comme le « aou » de « caoutchouc », compressé. Encore une fois, deux graphies, un seul son.",
        words: [
          { nl: 'koud', fr: 'froid' },
          { nl: 'vrouw', fr: 'femme' },
          { nl: 'blauw', fr: 'bleu' },
        ],
      },
      {
        sound: 'eu',
        how: 'Identique au « eu » français de « feu ». Un cadeau.',
        words: [
          { nl: 'deur', fr: 'porte' },
          { nl: 'neus', fr: 'nez' },
          { nl: 'keuken', fr: 'cuisine' },
        ],
      },
      {
        sound: 'oe',
        how: 'Notre « ou ». Autre cadeau.',
        words: [
          { nl: 'boek', fr: 'livre' },
          { nl: 'goed', fr: 'bon' },
          { nl: 'moe', fr: 'fatigué' },
        ],
      },
    ],
  },
  {
    title: 'Le rythme et l’accent tonique',
    intro:
      "Le français accentue la fin des groupes ; le néerlandais accentue une syllabe fixe dans chaque mot. Se tromper d'accent rend un mot méconnaissable, plus encore qu'un son mal formé.",
    entries: [
      {
        sound: 'Accent sur la première syllabe',
        how: "C'est le cas par défaut pour les mots germaniques.",
        words: [
          { nl: 'WOnen', fr: 'habiter' },
          { nl: 'MAandag', fr: 'lundi' },
          { nl: 'BOOdschappen', fr: 'les courses' },
        ],
      },
      {
        sound: 'Verbes à particule',
        how: "L'accent tombe sur la particule, jamais sur le verbe.",
        words: [
          { nl: 'ÓPstaan', fr: 'se lever' },
          { nl: 'MÉÉgaan', fr: 'venir avec' },
          { nl: 'ÁFspreken', fr: 'convenir d’un rendez-vous' },
        ],
      },
      {
        sound: 'Préfixes non accentués',
        how: 'be-, ge-, ver-, ont-, her- ne portent jamais l’accent.',
        words: [
          { nl: 'beTAlen', fr: 'payer' },
          { nl: 'verTELlen', fr: 'raconter' },
          { nl: 'begRIJpen', fr: 'comprendre' },
        ],
      },
      {
        sound: 'Mots composés',
        how: "L'accent principal va sur le premier élément — c'est lui qui porte le sens.",
        words: [
          { nl: 'TREINstation', fr: 'gare' },
          { nl: 'HUISarts', fr: 'médecin généraliste' },
          { nl: 'FIETSenstalling', fr: 'parking à vélos' },
        ],
      },
    ],
  },
]
