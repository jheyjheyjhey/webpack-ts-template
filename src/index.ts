import * as _ from 'lodash';

function component() {
  let element = document.createElement('div')
  element.innerHTML = _.join(['test', 1], " ")
  return element
}

document.body.appendChild(component());