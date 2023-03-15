var json = []

async function getkandydat(){
    const data = await fetch(baseurl+"/pobierz_nazwe_kandydata")
    json = await data.json()
    console.log(json)
    
}

function zagraj(){
    getkandydat()
    document.getElementById("prawogra").innerHTML = ""
    document.getElementById("interfejs").innerHTML =""
    document.getElementById("dollewo").innerHTML = ""


    for(var i =0; i<= json.length - 1;i++){

    const napis1 = document.createElement("h3")
    napis1.innerHTML = "Wpisz swój Pesel"
    document.getElementById("dollewo").appendChild(napis1)
    
    const inputpesel = document.createElement("input")
    inputpesel.setAttribute("id", "pesel")
    inputpesel.setAttribute("type", "text")
    inputpesel.setAttribute("onchange", "zapisz()")
    document.getElementById("dollewo").appendChild(inputpesel)

    const napis2 = document.createElement("h3")
    napis2.innerHTML = "Kliknij przycisk poniżej gdy już wpiszesz Pesel i wybierzesz kandydata aby wysłać los"
    document.getElementById("dollewo").appendChild(napis2)

    const buttonwyslij = document.createElement("button")
    buttonwyslij.setAttribute("id", "przycisk")
    buttonwyslij.setAttribute("onclick", "losuj()")
    document.getElementById("dollewo").appendChild(buttonwyslij)
    
    const div_kandydat1 = document.createElement("div")
    div_kandydat1.classList.add("uzytkownicy")
    div_kandydat1.setAttribute("id", "uzytkownik1")
    const nazwa1 = document.createElement("h1")
    nazwa1.setAttribute("id", "nazwa1")
    nazwa1.innerHTML = json[i].nazwa_kandydata
    div_kandydat1.appendChild(nazwa1)
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
    const nazwa2 = document.createElement("h1")
    nazwa2.setAttribute("id", "nazwa2")
    nazwa2.innerHTML = json[i].nazwa_kandydata
    div_kandydat2.appendChild(nazwa2)
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
    const nazwa3 = document.createElement("h1")
    nazwa3.setAttribute("id", "nazwa3")
    nazwa3.innerHTML = json[i].nazwa_kandydata
    div_kandydat3.appendChild(nazwa3)
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

    const napispesel= document.createElement("h2")
    napispesel.innerHTML = "Twój Pesel to: "
    napispesel.setAttribute("id", "napispesel11")
    document.getElementById("interfejs").appendChild(napispesel)

    const napiskandydat= document.createElement("h2")
    napiskandydat.innerHTML = "Twój wybór to: "
    napiskandydat.setAttribute("id", "napiskandydat11")
    document.getElementById("interfejs").appendChild(napiskandydat)
    }
    
}


let pesel;
function zapisz(){
    pesel = document.getElementById("pesel").value;
}
var wybrany = 0;
function losuj(){
   if(wybrany==0){
    const napispesel1 = document.getElementById("napispesel11");
    const napiskandydat1 = document.getElementById("napiskandydat11");
    
    const peseluzytkownik = pesel;
    const nazwakandy = document.getElementById("nazwakandydata").innerHTML;

    
    const url = `${baseurl}/add/${nazwakandy}/${peseluzytkownik}`;

    fetch(url);

    napispesel1.innerHTML = "Twój Pesel to: "+peseluzytkownik;
    napiskandydat1.innerHTML = "Wybrałeś kandydata: "+nazwakandy;

    wybrany = 1

    console.log("Dodano los!!")
}
getkandydat()
}

function wybierz(nr){
    const nazwauzytkownika = document.getElementById("nazwa"+nr)
    nazwauzytkownika.setAttribute("id", "nazwakandydata")

getkandydat()
}
