function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.key}"]`);
    const btnKey = document.querySelector(`.btnKey[data-key="${event.key}"]`);
    if (!audio) return;
    btnKey.classList.add('playing');
    
    audio.currentTime = 0;
    audio.play();
    
}

window.addEventListener('keydown', playSound);

window.addEventListener('keyup', event => {
    const btnKey = document.querySelector(`.btnKey[data-key="${event.key}"]`);
    if (!btnKey) return;
    btnKey.classList.remove('playing');
});