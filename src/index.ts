import * as _ from 'lodash';
import './css/style.css';

function component() {
  let element = document.createElement('div')
  element.innerHTML = _.join(['test', 1], " ")
  element.classList.add('red');
  return element
}

document.body.appendChild(component());