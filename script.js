const body=document.querySelector("body"),
      menuicon=body.querySelector(".menu-icon"),
      menu=body.querySelector(".menu"),
      close=body.querySelector(".close-icon");

      menuicon.addEventListener('click', () =>{
      	menu.classList.add("true");
      })
      close.addEventListener("click",() =>{
      	menu.classList.remove("true");
      })