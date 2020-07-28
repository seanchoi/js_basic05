// append
document.getElementsByClassName('classname')[index].append(variable)

// prepend
document.getElementsByClassName('classname')[index].prepend(variable)

// innerHTML
document.getElementsByClassName('classname')[index].children[index].innerHTML = '<b>12</b>'

document.getElementsByClassName('classname')[index].children[index].innerText = '12'

// className
document.getElementsByClassName('classname')[index].className = 'new class name'

// classList   add, remove, contains(check if has)
document.getElementsByClassName('classname')[index].classList.add('classname')
document.getElementsByClassName('classname')[index].classList
document.getElementsByClassName('classname')[index].classList.remove('classname')
document.getElementsByClassName('classname')[index].classList.toggle('classname') // on and off
document.getElementsByClassName('classname')[index].classList.contains('classname') // check if it's there


