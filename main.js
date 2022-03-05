const OpenMenu = document.getElementById('open_menu')
      CloseMenu = document.getElementById('close_menu')
      nav=document.querySelector('nav');

      OpenMenu.addEventListener('click', () =>{
          nav.classlist.add('nav')
      })