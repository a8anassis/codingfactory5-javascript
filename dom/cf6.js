const containerDOM = document.querySelector('#container')
containerDOM.classList.add('container')

const clonedContainer = containerDOM.cloneNode(true)
document.body.appendChild(clonedContainer)