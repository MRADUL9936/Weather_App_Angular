const toggleicon=document.querySelector('.toggle-icon')
    const menubar=document.querySelector('.navbar-menu')
    const body_content=document.querySelector('.body-content')
    toggleicon.onclick=function(){
      var classes=toggleicon.classList;
      if(classes[1]==="fa-bars"){
      toggleicon.classList.replace("fa-bars","fa-xmark")
    menubar.style.top="4.5rem"
    menubar.style.position="fixed"
            }     else{
              toggleicon.classList.replace("fa-xmark","fa-bars")
              menubar.style.top="-300px"
            }
       body_content.classList.toggle('blur')
       console.log(body_content.classList)
    }
