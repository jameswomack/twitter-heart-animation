const Classes = Object.freeze({
  isAni : 'is-animating',
  fave  : 'favorited'
})

function onHeartClick (e) {
  const heartEl = e.currentTarget
  const tweetEl = heartEl.closest('[data-container-type="tweet"]')

  e.stopPropagation()
  e.preventDefault()

  if (heartEl.classList.contains(Classes.isAni))
    return

  heartEl.classList.add(Classes.isAni)
  heartEl.addEventListener('animationend', function () {
    heartEl.classList.remove(Classes.isAni)
    tweetEl.classList.toggle(Classes.fave)
  })
}

// jscs:disable requirePaddingNewLinesBeforeExport
typeof module !== 'undefined' && (module.exports = onHeartClick)
