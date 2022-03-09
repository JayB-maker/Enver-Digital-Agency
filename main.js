const OpenMenu = document.getElementById('open_menu')
      CloseMenu = document.getElementById('close_menu')
      Nav=document.querySelector('nav');

      OpenMenu.addEventListener('click', () => {
          Nav.classlist.add('mobile_menu');
      })

      CloseMenu.addEventListener('click', () => {
        Nav.classlist.remove('mobile_menu');
    })