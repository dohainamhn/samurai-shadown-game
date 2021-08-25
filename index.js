const haomaru = {
  characterPosition: 0,
  currentAction: 'standing'
}
function game() {
  const character = document.querySelector('.character')
  window.addEventListener('keydown', (e) => {
    console.log(e.keyCode)
    if (e.keyCode === 68) {
      haomaru.characterPosition += 5
      character.style.transform = `translateX(${haomaru.characterPosition}px)`;
      haomaru.currentAction = 'moveForWard'

    }
    if (haomaru.currentAction === 'moveForWard') {
      character.classList.add('haomaru-move-forward')
    }
  })
  window.addEventListener('keyup', (e) => {
    if (e.keyCode === 68) {
      character.classList.remove('haomaru-move-forward')
      character.classList.add('haomaru-standing')

    }
  })
}
game()