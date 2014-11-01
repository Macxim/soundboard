import DS from 'ember-data';

var Sound = DS.Model.extend({
  title: DS.attr('string'),
  fileName: DS.attr('string'),
  coverUrl: function() {
        return 'assets/images/' + this.get('fileName') + '.png';
    }.property('coverUrl')
});

Sound.reopenClass({
  FIXTURES: [{
  id: 1,
  title: 'Non mais ça va pas ?',
  fileName: 'non-mais-ca-va-pas'
}, {
  id: 2,
  title: 'Terrible !',
  fileName: 'terrible'
}, {
  id: 3,
  title: 'Ça marche bien !',
  fileName: 'ca-marche-bien'
}, {
  id: 4,
  title: 'Cela ne nous regarde pas !',
  fileName: 'cela-ne-nous-regarde-pas'
}, {
  id: 5,
  title: 'Eh, pour quoi faire ?',
  fileName: 'pour-quoi-faire'
}, {
  id: 6,
  title: 'Quelle clette !',
  fileName: 'quelle-clette'
}, {
  id: 7,
  title: 'Saleté va !',
  fileName: 'salete-va'
}, {
  id: 8,
  title: 'Salut !',
  fileName: 'salut'
}, {
  id: 9,
  title: 'J\'suis tellement famous !',
  fileName: 'tellement-famous'
}, {
  id: 10,
  title: 'Il comprend rien !',
  fileName: 'il-comprend-rien'
}, {
  id: 11,
  title: 'Ah la la c\'est chelou !',
  fileName: 'alala-cest-chelou'
}, {
  id: 12,
  title: 'Alors arrête...',
  fileName: 'alors-arrete'
}, {
  id: 13,
  title: 'C\'est pas du caca...',
  fileName: 'cest-pas-du-caca'
}, {
  id: 14,
  title: 'C\'est pas possible.',
  fileName: 'cest-pas-possible'
}, {
  id: 15,
  title: 'Je m\'en vais comme un prince.',
  fileName: 'comme-un-prince'
}, {
  id: 16,
  title: 'Stéphanie de Monacooo',
  fileName: 'stephanie-de-monaco'
}, {
  id: 17,
  title: 'Je ne comprends pas.',
  fileName: 'je-ne-comprends-pas'
}, {
  id: 18,
  title: 'Est-ce que tu baises ?',
  fileName: 'est-ce-que-tu-baises'
}, {
  id: 19,
  title: 'C\'est des malades !',
  fileName: 'des-malades'
}
]});

export default Sound;
