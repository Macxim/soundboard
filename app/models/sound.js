import DS from 'ember-data';

var Sound = DS.Model.extend({
  title: DS.attr('string'),
  fileName: DS.attr('string'),
  coverUrl: function() {
        return '/assets/images/' + this.get('fileName') + '.png';
    }.property('coverName')
});

Sound.reopenClass({
  FIXTURES: [{
  id: 1,
  title: 'Non mais ça va pas ?',
  fileName: 'non_mais_ca_va_pas'
}, {
  id: 2,
  title: 'Terrrrrible !',
  fileName: 'terrrrrible'
}
]});

export default Sound;
