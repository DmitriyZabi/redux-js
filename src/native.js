const $counter = document.querySelector('#counter')
const $add = document.querySelector('#add')
const $sub = document.querySelector('#sub')
const $async = document.querySelector('#async')
const $theme = document.querySelector('#theme')

let counter = 0

function render() {
  $counter.textContent = counter.toString()
}

render()

$add.addEventListener('click', () => {
  counter++
  render()
})
$sub.addEventListener('click', () => {
  counter--
  render()
})
$async.addEventListener('click', () => {
  setTimeout(() => {
    counter++
    render()
  }, 2000)
})
$theme.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})
