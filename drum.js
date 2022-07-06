
function audioPlay(button, audio, keys){
document.querySelector('.' + button).addEventListener('keydown', (e) => {

   if(e.keyCode === keys)
   audios.pause();
    console.log('clicked')
    let audios = new Audio(audio);
    audios.play();
  

})
}

audioPlay("drumTwo", 'shotgun.mp3', 81)
audioPlay('drumOne', 'sniper.mp3', 87)
audioPlay('bassOne', 'light.mp3', 69)
audioPlay('bassTwo', 'heavy.mp3', 82)
audioPlay('boom', 'gunloop.mp3', 70)
