export interface SurvivalPhrase {
  id: string
  nl: string
  fr: string
  note?: string
}

export interface SurvivalSection {
  title: string
  intro: string
  phrases: SurvivalPhrase[]
}

/** Carnet de survie : consultable hors leçon, à parcourir avant une situation qui stresse. */
export const survival: SurvivalSection[] = [
  {
    title: 'Débloquer une conversation',
    intro:
      "Les huit phrases les plus rentables de tout le programme. Sues par cœur, elles t'évitent le repli vers l'anglais.",
    phrases: [
      { id: 'sv-01', nl: 'Sorry, ik versta het niet.', fr: 'Désolé, je ne comprends pas.' },
      { id: 'sv-02', nl: 'Kunt u het herhalen, alstublieft?', fr: 'Pouvez-vous répéter, s’il vous plaît ?' },
      { id: 'sv-03', nl: 'Kunt u langzamer praten?', fr: 'Pouvez-vous parler plus lentement ?' },
      { id: 'sv-04', nl: 'Hoe zeg je dat in het Nederlands?', fr: 'Comment dit-on ça en néerlandais ?' },
      { id: 'sv-05', nl: 'Wat betekent dat?', fr: 'Qu’est-ce que ça veut dire ?' },
      { id: 'sv-06', nl: 'Mogen we Nederlands praten? Ik ben aan het leren.', fr: 'On peut parler néerlandais ? Je suis en train d’apprendre.', note: 'La phrase qui empêche le passage à l’anglais.' },
      { id: 'sv-07', nl: 'Even denken...', fr: 'Laisse-moi réfléchir...', note: 'Te donne trois secondes sans laisser de blanc.' },
      { id: 'sv-08', nl: 'Sorry, ik ben even de draad kwijt.', fr: 'Désolé, j’ai perdu le fil.' },
    ],
  },
  {
    title: 'Politesse de base',
    intro: 'Le minimum vital, à dire sans réfléchir.',
    phrases: [
      { id: 'sv-10', nl: 'Alstublieft / Alsjeblieft', fr: 'S’il vous plaît / s’il te plaît — et aussi « voilà »' },
      { id: 'sv-11', nl: 'Dank u wel / Dank je wel', fr: 'Merci (vous / tu)' },
      { id: 'sv-12', nl: 'Graag gedaan.', fr: 'Je vous en prie.' },
      { id: 'sv-13', nl: 'Pardon / Sorry', fr: 'Pardon / désolé' },
      { id: 'sv-14', nl: 'Mag ik er even langs?', fr: 'Puis-je passer ?' },
      { id: 'sv-15', nl: 'Geen probleem, hoor.', fr: 'Pas de souci.' },
      { id: 'sv-16', nl: 'Fijne dag nog!', fr: 'Bonne journée !' },
      { id: 'sv-17', nl: 'Tot ziens / Doei', fr: 'Au revoir / salut' },
    ],
  },
  {
    title: 'Se présenter',
    intro: 'Les cinq informations qu’on te demandera toujours dans le même ordre.',
    phrases: [
      { id: 'sv-20', nl: 'Ik heet ...', fr: 'Je m’appelle ...' },
      { id: 'sv-21', nl: 'Ik kom uit Frankrijk.', fr: 'Je viens de France.' },
      { id: 'sv-22', nl: 'Ik woon in ...', fr: 'J’habite à ...' },
      { id: 'sv-23', nl: 'Ik werk bij ...', fr: 'Je travaille chez ...' },
      { id: 'sv-24', nl: 'Ik spreek nog niet goed Nederlands.', fr: 'Je ne parle pas encore bien néerlandais.' },
      { id: 'sv-25', nl: 'Aangenaam kennis te maken.', fr: 'Enchanté de faire votre connaissance.' },
      { id: 'sv-26', nl: 'Hoe gaat het met je?', fr: 'Comment vas-tu ?' },
      { id: 'sv-27', nl: 'Het gaat goed, en met jou?', fr: 'Ça va bien, et toi ?' },
    ],
  },
  {
    title: 'Au comptoir, en magasin',
    intro: 'Boulangerie, supermarché, marché, caisse.',
    phrases: [
      { id: 'sv-30', nl: 'Mag ik een ..., alstublieft?', fr: 'Puis-je avoir un ..., s’il vous plaît ?' },
      { id: 'sv-31', nl: 'Hoeveel kost dat?', fr: 'Combien ça coûte ?' },
      { id: 'sv-32', nl: 'Kan ik pinnen?', fr: 'Je peux payer par carte ?', note: 'Beaucoup de commerces n’acceptent pas les espèces.' },
      { id: 'sv-33', nl: 'Heeft u een tasje?', fr: 'Avez-vous un sac ?' },
      { id: 'sv-34', nl: 'Waar kan ik ... vinden?', fr: 'Où puis-je trouver ... ?' },
      { id: 'sv-35', nl: 'Anders nog iets? — Nee, dank u.', fr: 'Avec ceci ? — Non, merci.' },
      { id: 'sv-36', nl: 'Ik kijk alleen even rond.', fr: 'Je regarde juste.' },
      { id: 'sv-37', nl: 'Hoe laat gaat u dicht?', fr: 'À quelle heure fermez-vous ?' },
    ],
  },
  {
    title: 'Café et restaurant',
    intro: 'Du premier bonjour à l’addition.',
    phrases: [
      { id: 'sv-40', nl: 'Is dit tafeltje vrij?', fr: 'Cette table est-elle libre ?' },
      { id: 'sv-41', nl: 'Mag ik de kaart?', fr: 'Puis-je avoir la carte ?' },
      { id: 'sv-42', nl: 'Voor mij een ..., graag.', fr: 'Pour moi un ..., s’il vous plaît.' },
      { id: 'sv-43', nl: 'Doet u maar hetzelfde.', fr: 'La même chose pour moi.' },
      { id: 'sv-44', nl: 'Mag ik een kraantje water?', fr: 'Puis-je avoir un verre d’eau du robinet ?' },
      { id: 'sv-45', nl: 'Mag ik afrekenen?', fr: 'Je peux régler ?' },
      { id: 'sv-46', nl: 'Het was heerlijk, dank u wel.', fr: 'C’était délicieux, merci.' },
      { id: 'sv-47', nl: 'Laat maar zitten.', fr: 'Gardez la monnaie.' },
    ],
  },
  {
    title: 'Transports et direction',
    intro: 'Gare, tram, vélo, et se repérer.',
    phrases: [
      { id: 'sv-50', nl: 'Een retour naar ..., alstublieft.', fr: 'Un aller-retour pour ..., s’il vous plaît.' },
      { id: 'sv-51', nl: 'Van welk spoor vertrekt de trein?', fr: 'De quelle voie part le train ?' },
      { id: 'sv-52', nl: 'Moet ik overstappen?', fr: 'Dois-je changer de train ?' },
      { id: 'sv-53', nl: 'Hoe lang duurt de reis?', fr: 'Combien de temps dure le trajet ?' },
      { id: 'sv-54', nl: 'Stopt deze bus bij het station?', fr: 'Ce bus s’arrête-t-il à la gare ?' },
      { id: 'sv-55', nl: 'Weet u waar ... is?', fr: 'Savez-vous où se trouve ... ?' },
      { id: 'sv-56', nl: 'Is het ver hiervandaan?', fr: 'Est-ce loin d’ici ?' },
      { id: 'sv-57', nl: 'Ik ben verdwaald.', fr: 'Je suis perdu.' },
      { id: 'sv-58', nl: 'Kunt u het op de kaart aanwijzen?', fr: 'Pouvez-vous me le montrer sur la carte ?' },
    ],
  },
  {
    title: 'Santé',
    intro: 'Chez le médecin, à la pharmacie, en cas d’urgence.',
    phrases: [
      { id: 'sv-60', nl: 'Ik voel me niet lekker.', fr: 'Je ne me sens pas bien.' },
      { id: 'sv-61', nl: 'Ik heb pijn in mijn ...', fr: 'J’ai mal à ...' },
      { id: 'sv-62', nl: 'Ik heb sinds ... dagen koorts.', fr: 'J’ai de la fièvre depuis ... jours.' },
      { id: 'sv-63', nl: 'Ik ben allergisch voor ...', fr: 'Je suis allergique à ...' },
      { id: 'sv-64', nl: 'Ik wil graag een afspraak maken.', fr: 'Je voudrais prendre rendez-vous.' },
      { id: 'sv-65', nl: 'Heeft u iets tegen hoofdpijn?', fr: 'Avez-vous quelque chose contre le mal de tête ?' },
      { id: 'sv-66', nl: 'Hoe vaak moet ik dit innemen?', fr: 'Combien de fois dois-je le prendre ?' },
      { id: 'sv-67', nl: 'Ik heb hulp nodig. Bel 112.', fr: 'J’ai besoin d’aide. Appelez le 112.', note: '112 est le numéro d’urgence unique.' },
    ],
  },
  {
    title: 'Administration et logement',
    intro: 'Guichets, contrats, pannes.',
    phrases: [
      { id: 'sv-70', nl: 'Ik heb een afspraak om ... uur.', fr: 'J’ai un rendez-vous à ... heures.' },
      { id: 'sv-71', nl: 'Mag ik het in het Nederlands doen? Ik ben aan het leren.', fr: 'Puis-je le faire en néerlandais ? Je suis en train d’apprendre.' },
      { id: 'sv-72', nl: 'Wat heb ik daarvoor nodig?', fr: 'De quoi ai-je besoin pour ça ?' },
      { id: 'sv-73', nl: 'Kunt u dat in makkelijke woorden uitleggen?', fr: 'Pouvez-vous l’expliquer en mots simples ?' },
      { id: 'sv-74', nl: 'Kunt u dat opschrijven?', fr: 'Pouvez-vous l’écrire ?' },
      { id: 'sv-75', nl: 'De verwarming doet het niet.', fr: 'Le chauffage ne fonctionne pas.' },
      { id: 'sv-76', nl: 'Kunt u iemand sturen?', fr: 'Pouvez-vous envoyer quelqu’un ?' },
      { id: 'sv-77', nl: 'Wanneer kan ik iemand verwachten?', fr: 'Quand puis-je attendre quelqu’un ?' },
    ],
  },
  {
    title: 'Téléphone',
    intro: 'Sans visage ni gestes, il faut des formules exactes.',
    phrases: [
      { id: 'sv-80', nl: 'Met Uri.', fr: 'Uri à l’appareil.', note: 'En décrochant, on annonce toujours son nom.' },
      { id: 'sv-81', nl: 'U spreekt met ...', fr: '... à l’appareil.' },
      { id: 'sv-82', nl: 'Mag ik ... spreken?', fr: 'Puis-je parler à ... ?' },
      { id: 'sv-83', nl: 'Ik versta u slecht.', fr: 'Je vous entends mal.' },
      { id: 'sv-84', nl: 'Wilt u vragen of hij mij terugbelt?', fr: 'Pouvez-vous lui demander de me rappeler ?' },
      { id: 'sv-85', nl: 'Kunt u uw naam spellen?', fr: 'Pouvez-vous épeler votre nom ?' },
      { id: 'sv-86', nl: 'Een moment, ik verbind u door.', fr: 'Un instant, je vous transfère.' },
    ],
  },
  {
    title: 'Social',
    intro: 'Inviter, accepter, refuser, remercier — la partie qui fait des amis.',
    phrases: [
      { id: 'sv-90', nl: 'Heb je zin om ... te ...?', fr: 'As-tu envie de ... ?' },
      { id: 'sv-91', nl: 'Zullen we ...?', fr: 'Si on ... ?' },
      { id: 'sv-92', nl: 'Dat lijkt me leuk!', fr: 'Ça me semble sympa !' },
      { id: 'sv-93', nl: 'Helaas kan ik niet, maar een andere keer graag.', fr: 'Malheureusement je ne peux pas, mais une autre fois volontiers.' },
      { id: 'sv-94', nl: 'Het was gezellig, bedankt!', fr: 'C’était sympa, merci !', note: 'À dire en partant de chez quelqu’un. Toujours.' },
      { id: 'sv-95', nl: 'Wat vervelend voor je!', fr: 'C’est embêtant pour toi !' },
      { id: 'sv-96', nl: 'Gefeliciteerd!', fr: 'Félicitations / joyeux anniversaire !' },
      { id: 'sv-97', nl: 'Proost!', fr: 'Santé !' },
      { id: 'sv-98', nl: 'Lekker weertje, hè?', fr: 'Beau temps, hein ?' },
    ],
  },
]
