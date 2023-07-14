// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//==== Task 1.0
const mainEl = document.querySelector('main')
console.log(mainEl)

//====== 1.1

mainEl.style.background= 'var(--main-bg)'

//===== 1.2

mainEl.innerHTML = '<h1>SEI ROCKS!</h1>'

//===== 1.3

mainEl.classList.add('flex-ctr')


//==== task 2.0

const topMenuEl = document.querySelector("nav")
console.log(topMenuEl)

//===== 2.1
topMenuEl.style.height= '100%'

//==== task 2.2

topMenuEl.style.backgroundColor= 'var(--top-menu-bg)'

//====== task 2.3

topMenuEl.classList.add('flex-around')

//===== task 3.0

//see top


//==== task 3.1

for( let link of menuLinks ){
    const menu =document.createElement('a')
    menu.setAttribute('href', link.href)
    menu.innerHTML= link.text
    topMenuEl.append(menu)
} 