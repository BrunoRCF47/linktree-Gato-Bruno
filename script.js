function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //Pegar Tag da img
  const img = document.querySelector("#profile img")
  const text = document.querySelector("#GatoPreto")
  const footerText = document.querySelector("#designer")
  const nickname = document.querySelector("#nickname")

  const link01 = document.querySelector("#link-01")
  const link02 = document.querySelector("#link-02")
  const link03 = document.querySelector("#link-03")
  const link04 = document.querySelector("#link-04")

  const socialLinks = document.querySelector("#social-links")

  //Substituir a imagem
  if (html.classList.contains("light")) {
    //Se tiver light mode ligado, adicionar a imagem light.
    // console.log(icon01)
    img.setAttribute("src", "./assets/avatar-light.png")
    nickname.innerText = "@BrunoRCF"

    link01.innerHTML = `Acesse meu LinkedIn 
              <ion-icon
              id="link-01-icon"
              class="icon"
              name="logo-linkedin"
              ></ion-icon>`
    link01.setAttribute(
      "href",
      "https://www.linkedin.com/in/bruno-rojas-a63aa4133/"
    )

    link02.innerHTML = `Acesse meu Github 
              <ion-icon
              id="link-01-icon"
              class="icon"
              name="logo-github"
              ></ion-icon>`
    link02.setAttribute("href", "https://github.com/BrunoRCF47")

    link03.innerHTML = `Acesse meu Portfólio 
              <ion-icon
              id="link-01-icon"
              class="icon"
              name="globe-outline"
              ></ion-icon>`
    link03.setAttribute("href", "https://brunorcf.myportfolio.com/")

    link04.setAttribute("style", "display: none;")
    socialLinks.setAttribute("style", "display: none;")

    text.innerText = "Bruno Rojas"
    text.setAttribute("href", "https://brunorcf.myportfolio.com/")
    footerText.innerText =
      "sou Designer Gráfico - Mídia Digital. Formado na Universidade PUC-Rio no Brasil."

    // footerText.setAttribute("id", "designer-light")
  } else {
    //Se tiver light mode desligado, manter a imagem original.
    img.setAttribute("src", "./assets/avatar.png")
    nickname.innerText = "@Gatopretonline"

    link01.innerHTML = `Siga no Twitter 
              <ion-icon
              id="link-01-icon"
              class="icon"
              name="logo-twitter"
              ></ion-icon>`
    link01.setAttribute("href", "https://twitter.com/GatoPretonline")

    link02.innerHTML = `Siga no Instagram 
              <ion-icon
              id="link-01-icon"
              class="icon"
              name="logo-instagram"
              ></ion-icon>`
    link02.setAttribute("href", "https://www.instagram.com/gatopretonline")

    link03.innerHTML = `Siga no Tiktok 
              <ion-icon
              id="link-01-icon"
              class="icon"
              name="logo-tiktok"
              ></ion-icon>`
    link03.setAttribute("href", "https://www.tiktok.com/@gatopretonline")

    link04.setAttribute("style", "display: initial;")
    socialLinks.setAttribute("style", "display: flex;")

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
