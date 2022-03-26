const OpenMenu = document.getElementById('open_menu')
      CloseMenu = document.getElementById('close_menu')
      Nav=document.querySelector('nav');
      Menu=document.getElementById('menu1')

      OpenMenu.addEventListener('click', () => {
          //Nav.classlist.add('mobile_menu');
          Nav.style.display="block";
      })

      CloseMenu.addEventListener('click', () => {
        Nav.style.display ="none";
    })

    Menu.addEventListener('click', () => {
        Nav.style.display = "none";
    })