import DS from 'ember-data';

var Sound = DS.Model.extend({
  title: DS.attr('string'),
  fileName: DS.attr('string')
});

Sound.reopenClass({
  FIXTURES: [{
  id: 1,
  title: 'Non mais ça va pas ?',
  fileName: 'non_mais_ca_va_pas.mp3'
}, {
  id: 2,
  title: 'Terrrrrible !',
  fileName: 'terrrrrible.mp3'
}
]});

export default Sound;
