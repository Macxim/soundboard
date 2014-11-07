import DS from 'ember-data';

var Sound = DS.Model.extend({
  title: DS.attr('string'),
  fileName: DS.attr('string'),
  source: DS.attr('string')
});

Sound.reopenClass({
  FIXTURES: [{
  id: 1,
  title: 'Non mais ça va pas ?',
  fileName: 'non-mais-ca-va-pas',
  source: 'https://www.youtube.com/watch?v=bqa7BkP2ZEs'
}, {
  id: 2,
  title: 'Terrible !',
  fileName: 'terrible',
}, {
  id: 3,
  title: 'Ça marche bien !',
  fileName: 'ca-marche-bien',
  source: ''
}, {
  id: 4,
  title: 'Cela ne nous regarde pas !',
  fileName: 'cela-ne-nous-regarde-pas',
  source: ''
}, {
  id: 5,
  title: 'Eh, pour quoi faire ?',
  fileName: 'pour-quoi-faire',
  source: ''
}, {
  id: 6,
  title: 'Quelle clette !',
  fileName: 'quelle-clette',
  source: ''
}, {
  id: 7,
  title: 'Saleté va !',
  fileName: 'salete-va',
  source: ''
}, {
  id: 8,
  title: 'Salut !',
  fileName: 'salut',
  source: ''
}, {
  id: 9,
  title: 'J\'suis tellement famous !',
  fileName: 'tellement-famous',
  source: ''
}, {
  id: 10,
  title: 'Il comprend rien !',
  fileName: 'il-comprend-rien',
  source: ''
}, {
  id: 11,
  title: 'Ah la la c\'est chelou !',
  fileName: 'alala-cest-chelou',
  source: ''
}, {
  id: 12,
  title: 'Alors arrête...',
  fileName: 'alors-arrete',
  source: ''
}, {
  id: 13,
  title: 'C\'est pas du caca...',
  fileName: 'cest-pas-du-caca',
  source: ''
}, {
  id: 14,
  title: 'C\'est pas possible.',
  fileName: 'cest-pas-possible',
  source: ''
}, {
  id: 15,
  title: 'Je m\'en vais comme un prince.',
  fileName: 'comme-un-prince',
  source: ''
}, {
  id: 16,
  title: 'Stéphanie de Monacooo',
  fileName: 'stephanie-de-monaco',
  source: ''
}, {
  id: 17,
  title: 'Je ne comprends pas.',
  fileName: 'je-ne-comprends-pas',
  source: ''
}, {
  id: 18,
  title: 'Est-ce que tu baises ?',
  fileName: 'est-ce-que-tu-baises',
  source: ''
}, {
  id: 19,
  title: 'C\'est des malades !',
  fileName: 'des-malades',
  source: ''
}, {
  id: 20,
  title: 'Tu ne me vois pas ?',
  fileName: 'tu-ne-me-vois-pas',
  source: ''
}, {
  id: 21,
  title: 'La même ?',
  fileName: 'la-meme',
  source: ''
}, {
  id: 22,
  title: 'Le rire de L\'Embrouille',
  fileName: 'rire-lembrouille',
  source: ''
}, {
  id: 23,
  title: 'Oh la la, c\'est pourri !',
  fileName: 'olala-cest-pourri',
  source: ''
}, {
  id: 24,
  title: 'Ils sont pas aware',
  fileName: 'ils-sont-pas-aware',
  source: ''
}, {
  id: 25,
  title: 'Éducation minimum',
  fileName: 'education-minimum',
  source: ''
}, {
  id: 26,
  title: 'Ct\'un truc anglais',
  fileName: 'un-truc-anglais',
  source: ''
}
]});

export default Sound;
