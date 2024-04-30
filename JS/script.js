const menuButton = document.querySelector('.menu-btn')
const hamburger = document.querySelector('.menu-btn__burger')
const nav = document.querySelector('.nav')
const navMenu = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.menu-nav__item')


let showMenu = false

menuButton.addEventListener('click',()=>{
   if(!showMenu){
    hamburger.classList.add('open')
    navMenu.classList.add('open')
    nav.classList.add('open')
    navItems.forEach(item=>item.classList.add('open'))
    showMenu = true
   }

   else{
    hamburger.classList.remove('open')
    navMenu.classList.remove('open')
    nav.classList.remove('open')
    navItems.forEach(item=>item.classList.remove('open'))
    showMenu = false
   }
})



// I added something for mobile devices :


const projects = document.querySelectorAll ('.projects__item')
const project_btn = document.querySelectorAll('.projects__btn')

const project_WebSite = document.querySelectorAll('.projectWebSite')
const project_GitHub = document.querySelectorAll('.projectGitHub')


projects.forEach(project=>project.addEventListener('click', ()=>{
   
   if(project.classList.contains('click')){

      project.classList.remove('click')
   }
  else {
   
   projects.forEach(project=>project.classList.remove('click'))

   project.classList.add('click')
}

}))


//let project_animation=false

function project_clicked(){
   

   projects.forEach(project=>project.classList.remove('click'))
  
 /*  if(!project_animation ){
   this.classList.add('click')
   project_animation = true
   this.classList.remove('click')
 
}

   else if (project_animation ){
      this.classList.remove('click')
      project_animation = false
    
   }*/
}

project_WebSite.forEach(project=>project.addEventListener('click',()=>{

      project_WebSite.forEach(project=>project.classList.add('click'))
      projects.forEach(project=>project.addEventListener('click',()=>project.classList.add('click')))

     setTimeout(href,1000)

     function href(){
      window.location.href = "https://www.google.com"
     }
}))


project_GitHub.forEach(project=> project.addEventListener('click',()=>{

project_GitHub.forEach(project=>project.classList.add('click'))
   projects.forEach(project=>project.addEventListener('click',()=>project.classList.add('click')))

  setTimeout(href,1000)

  function href(){
   window.location.href = "https://github.com/YassirDevv"
  }
}))



