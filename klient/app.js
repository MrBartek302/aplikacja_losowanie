function zacznij(){
    document.getElementById("prawogra").innerHTML = ""

    const div_kandydat1 = document.createElement("div")
    div_kandydat1.classList.add("uzytkownicy")
    div_kandydat1.setAttribute("id", "uzytkownik1")
    div_kandydat1.innerHTML = "Kandydat Nr.1"

    const div_kandydat2 = document.createElement("div")
    div_kandydat2.classList.add("uzytkownicy")
    div_kandydat2.setAttribute("id", "uzytkownik1")
    div_kandydat2.innerHTML = "Kandydat Nr.2"

    const div_kandydat3 = document.createElement("div")
    div_kandydat3.classList.add("uzytkownicy")
    div_kandydat3.setAttribute("id", "uzytkownik1")
    div_kandydat3.innerHTML = "Kandydat Nr.3"

    document.getElementById("prawogra").appendChild(div_kandydat1)
    document.getElementById("prawogra").appendChild(div_kandydat2)
    document.getElementById("prawogra").appendChild(div_kandydat3)
}