// Menu data structure
//========task 5.0
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
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

//=== Task 4.0

const subMenuEl =document.querySelector('#sub-menu')
console.log(subMenuEl)


//====== task 4.1
subMenuEl.style.height = '100%'

//======= task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

//====== task 4.3
subMenuEl.classList.add('flex-around')

//=== task 4.4
subMenuEl.style.position = 'absolute'

//==== task 4.5
subMenuEl.style.top = '0';

//=== task 5.1
const topMenuLinks = document.querySelectorAll('a')
console.log(topMenuLinks)

const showingSubMenu = false;


//============ task 5.2
topMenuEl.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.textContent !== "a"){
        return 
    }else{
      console.log(e.target.innerHTML)
    }
   // =======5.3
if(e.target.classList.contains('active')){
  e.target.classList.remove('active')
  showingSubMenu = false;
  subMenuEl.style.top = '0';
return
}
//====== 5.4
for(let link of topMenuLinks){
  link.classList.remove('active')
}
//====5.5

e.target.classList.add('active')

//=====5.6
const findLink = menuLinks.find(obj => obj.text === e.target.textContent)

if( findLink.subLinks !== undefined){
  showingSubMenu = true
}else{
  showingSubMenu = false
}

//=======5.7
if(showingSubMenu === true){
buildSubMenu(findLink.subLinks)
subMenuEl.style.top = '100%'
}else{
  subMenuEl.style.top='0'
}
//====5.8
let buildSubMenu = (subLink) => {
  subMenuEl.textContent = ''

  for(let link of subLink){
const alink = document.createElement('a')
alink.setAttribute("href", link.href)
alink.textContent = link.text
subMenuEl.appendChild(alink)
  }
}


})

// ======= 6.0
subMenuEl.addEventListener('click', function(e){
  e.preventDefault();
  if(e.target.textContent !== "a"){
    return 
}else{
  console.log(e.target.innerHTML)
}

//===6.1
showingSubMenu = false
subMenuEl.style.top = '0'


//===6.2

for(link of topMenuLinks){
  link.classList.remove('active')
}


//=====6.3
mainEl.textContent = e.target.textContent
})



//Task 6.4
// If the ABOUT link is clicked, an <h1>about</h1>should be displayed.

