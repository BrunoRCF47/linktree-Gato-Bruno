function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //Pegar Tag da img
  const img = document.querySelector("#profile img")
  const text = document.querySelector("#GatoPreto")
  const footerText = document.querySelector("#designer")

  //Substituir a imagem
  if (html.classList.contains("light")) {
    //Se tiver light mode ligado, adicionar a imagem light.
    console.log(footerText)
    img.setAttribute("src", "./assets/avatar-light.png")
    text.innerText = "Bruno Rojas"
    text.setAttribute("href", "https://brunorcf.myportfolio.com/")
    footerText.innerText =
      "sou Designer Gráfico - Mídia Digital. Formado na Universidade PUC-Rio no Brasil."
    // footerText.setAttribute("id", "designer-light")
  } else {
    //Se tiver light mode desligado, manter a imagem original.
    console.log(footerText)
    img.setAttribute("src", "./assets/avatar.png")
    text.innerText = "Gato Preto"
    text.setAttribute("href", "https://www.twitch.tv/gatopretonline")
    footerText.innerText =
      "streamer Vtuber. Então vem fazer parte da ninhada e bora curtir a live juntos!!!"
    // footerText.setAttribute("id", "designer")
  }
}

//Primeira forma de fazer função de ligar e desligar luz!!!
// if(html.classList.contains('light')) {
//  html.classList.remove('light')
//} else {
//  html.classList.add('light')
// }

//Segunda forma de fazer a mesma função!!!
//html.classList.toggle("light")
