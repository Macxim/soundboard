import Ember from 'ember';

export default Ember.Component.extend({
  title: '',
  fileName: '',
  soundUrl: function() {
    var fileName = this.get('fileName');
    return 'assets/sounds/' + fileName;
  }.property('fileName'),
  actions:{
    playPause: function(){
      console.log(this.get('soundUrl'));
    }
  }

});
