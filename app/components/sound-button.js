import Ember from 'ember';

export default Ember.Component.extend({
  coverUrl: function() {
    var fileName = this.get('fileName');
    return 'assets/images/' + fileName + '.png';
  }.property('fileName'),
  soundUrl: function() {
    var fileName = this.get('fileName');
    return 'assets/sounds/' + fileName + '.mp3';
  }.property('fileName'),
  actions:{
    playSound: function(){
      var soundUrl = this.get('soundUrl');
      // Ideally we  should maybe make the soundmanager.sound
      // object the computed property of the model, rather than a string
      this.sound =  soundManager.createSound({
        url: soundUrl
      });
      this.sound.play();
    }
  }
});
