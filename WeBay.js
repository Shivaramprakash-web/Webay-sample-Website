let cartCount = 0;
  let cartLink = document.querySelector(".cart");
  let buttons = document.querySelectorAll(".buy-button");

  
  for (let i = 0; i < 7; i++) {
    buttons[i].addEventListener("click", function (event) {
      event.preventDefault();         
      cartCount = cartCount + 1;
      cartLink.textContent = `Cart (` + cartCount + `)`;
    });
  }

  