function zapisz(){
    document.getElementById("prawogra").innerHTML = ""
    document.getElementById("pesel").style.backgroundColor = "green"
    
    const div_kandydat1 = document.createElement("div")
    div_kandydat1.classList.add("uzytkownicy")
    div_kandydat1.setAttribute("id", "uzytkownik1")
    div_kandydat1.innerHTML = "Kandydat Nr.1"
    const div1_zdj = document.createElement("img")
    div1_zdj.setAttribute("src","https://www.ubutik.pl/img/cms/kiedy%20okulary%20dla%20nauczyciela.jpg" )
    div1_zdj.classList.add("zdjecia")
    div_kandydat1.appendChild(div1_zdj)
    const button1 = document.createElement("button")
    button1.setAttribute("onclick", "wybierz(1)")
    button1.setAttribute("id", "przycisk1")
    button1.classList.add("wybieranie")
    button1.innerHTML = "Wybierz!"
    div_kandydat1.appendChild(button1)

    const div_kandydat2 = document.createElement("div")
    div_kandydat2.classList.add("uzytkownicy")
    div_kandydat2.setAttribute("id", "uzytkownik1")
    div_kandydat2.innerHTML = "Kandydat Nr.2"
    const div2_zdj = document.createElement("img")
    div2_zdj.setAttribute("src"," https://st.depositphotos.com/1637787/3445/i/600/depositphotos_34453787-stock-photo-businessman-portrait.jpg" )
    div2_zdj.classList.add("zdjecia")
    div_kandydat2.appendChild(div2_zdj)
    const button2 = document.createElement("button")
    button2.setAttribute("onclick", "wybierz(2)")
    button2.setAttribute("id", "przycisk2")
    button2.classList.add("wybieranie")
    button2.innerHTML = "Wybierz!"
    div_kandydat2.appendChild(button2)

    const div_kandydat3 = document.createElement("div")
    div_kandydat3.classList.add("uzytkownicy")
    div_kandydat3.setAttribute("id", "uzytkownik1")
    div_kandydat3.innerHTML = "Kandydat Nr.3"
    const div3_zdj = document.createElement("img")
    div3_zdj.setAttribute("src","https://st2.depositphotos.com/2501025/5654/i/450/depositphotos_56545139-stock-photo-password.jpg" )
    div3_zdj.classList.add("zdjecia")
    div_kandydat3.appendChild(div3_zdj)
    const button3 = document.createElement("button")
    button3.setAttribute("onclick", "wybierz(3)")
    button3.setAttribute("id", "przycisk3")
    button3.classList.add("wybieranie")
    button3.innerHTML = "Wybierz!"
    div_kandydat3.appendChild(button3)

    document.getElementById("prawogra").appendChild(div_kandydat1)
    document.getElementById("prawogra").appendChild(div_kandydat2)
    document.getElementById("prawogra").appendChild(div_kandydat3)
    const pesel = document.getElementById("pesel").value

    const url = `${baseurl}/add/${pesel}`

    fetch(url)
}