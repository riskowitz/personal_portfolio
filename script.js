document.addEventListener('DOMContentLoaded', function() {
  let clicker = document.querySelector('#message')
  let msgContainer = document.querySelector('#msgContainer')

  clicker.addEventListener('click', projectRevealer)

  function projectRevealer() {
    if (msgContainer.style.display === "block") {
      msgContainer.style.display = "none"
      msgContainer.innerHTML = ''
    } else {
      msgContainer.innerHTML = '<iframe id="message" src="/Users/ryan/Desktop/message_generator/message_generator.html" width="1200" height="800"></iframe>'
      msgContainer.style.display = "block"
      msgContainer.style.visibility="visible"
    }
  }
})
