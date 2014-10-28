import DS from 'ember-data';

var SoundItem = DS.Model.extend({
  title               : DS.attr('string'),
  fileName            : DS.attr('string'),
  soundUrl: function() {
    return '/assets/sounds/' + this.get('fileName');
  }
});

SoundItem.reopenClass({
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

export default SoundItem;