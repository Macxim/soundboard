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
