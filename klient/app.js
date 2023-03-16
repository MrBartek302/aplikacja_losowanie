var json = []
async function getkandydat(){
    const data = await fetch(baseurl+"/pobierz_nazwe_kandydata")
    json = await data.json()
    console.log(json)
    }
getkandydat()
function zagraj(){
    
    document.getElementById("prawogra").innerHTML = "";
    document.getElementById("goralewo").innerHTML= "";
    document.getElementById("interfejs").innerHTML = "";
    document.getElementById("dollewo").innerHTML = "";


    const zagrajbutton = document.createElement("button")
    zagrajbutton.setAttribute("onclick", "zagraj()")
    zagrajbutton.setAttribute("id", "Zacznij")
    zagrajbutton.innerHTML = "Zagraj!"
    document.getElementById("goralewo").appendChild(zagrajbutton)


    const btnadmin = document.createElement("button");
    btnadmin.setAttribute("id", "adminbtn")
    btnadmin.innerHTML = "Strona admina!";
    btnadmin.setAttribute("onclick", "wyslijadmin()") 
    document.getElementById("goralewo").appendChild(btnadmin)

    const napis1 = document.createElement("h3")
    napis1.innerHTML = "Wpisz swój Pesel"
    napis1.setAttribute("id", "napisnadpeselem")
    document.getElementById("dollewo").appendChild(napis1)

    const inputpesel = document.createElement("input")
    inputpesel.setAttribute("id", "pesel")
    inputpesel.setAttribute("maxlength", "11")
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
    
    for(var i =0; i<= json.length - 1;i++){
    const div_kandydat = document.createElement("div")
    div_kandydat.classList.add("uzytkownicy")
    const nazwa = document.createElement("h1")
    nazwa.classList.add("nazwa1")
    nazwa.innerHTML = json[i].nazwa_kandydata
    div_kandydat.appendChild(nazwa)
    const div_zdj = document.createElement("img")
    div_zdj.setAttribute("src", json[i].zdj_kandydata)
    div_zdj.classList.add("zdjecia")
    div_kandydat.appendChild(div_zdj)
    const button = document.createElement("button")
    button.setAttribute("onclick", `wybierz(${i})`)
    button.classList.add("wybieranie")
    button.innerHTML = "Wybierz!"
    div_kandydat.appendChild(button)

    
    document.getElementById("prawogra").appendChild(div_kandydat)
    }
    const napispesel= document.createElement("h2")
    napispesel.innerHTML = "Twój Pesel to: "
    napispesel.setAttribute("id", "napispesel11")
    document.getElementById("interfejs").appendChild(napispesel)

    const napiskandydat= document.createElement("h2")
    napiskandydat.innerHTML = "Twój wybór to: "
    napiskandydat.setAttribute("id", "napiskandydat11")
    document.getElementById("interfejs").appendChild(napiskandydat)
    
    
}

function wyslijadmin(){
     // Przekierowanie użytkownika na inną stronę
     window.location.href = "admin/index.html";
}


let pesel;
let peselpoprawny;
var wybrane1=0
function zapisz(){
    pesel = document.getElementById("pesel").value;

    if(pesel.length<11){
        document.getElementById("napisnadpeselem").innerHTML = "Za mało znaków w Peselu!! Wpisz poprawny Pesel."
        document.getElementById("pesel").style.backgroundColor = "red"
    }

    //else if(pesel==undefined){
    //    document.getElementById("napisnadpeselem").innerHTML = "Nic nie wpisałeś!! Wpisz poprawny Pesel."
    //}

    else{
        if(wybrane1==0){
        peselpoprawny=document.getElementById("pesel").value
        document.getElementById("napispesel11").innerHTML = "Twój Pesel to: "+peselpoprawny
        document.getElementById("napisnadpeselem").innerHTML=""
        document.getElementById("napisnadpeselem").innerHTML="Pesel poprawnie zapisany!"
        document.getElementById("pesel").style.backgroundColor = "green"
       
        wybrane1=1
       }
    
      }
}
var wybrany = 0;
var nazwakandy;
function losuj(){
   if(wybrany==0){
   
    if(peselpoprawny!=undefined){
        const peseluzytkownik = peselpoprawny;
    const nazwakandy = document.getElementById("nazwakandydata").innerHTML;
    const url = `${baseurl}/add/${nazwakandy}/${peseluzytkownik}`;

    fetch(url);
    wybrany = 1   
    
    console.log("Dodano los!!")
}

    else{
        console.log(peselpoprawny)
        alert("Coś nie tak z Peselem, sprawdź komunikat nad miejscem do wpisania Peselu")
    }
}

getkandydat()
}
var wybrane = 0
function wybierz(nr){
    if(wybrane==0){
    const nazwauzytkownika = document.getElementsByClassName("nazwa1");
    
        nazwauzytkownika[nr].setAttribute("id", "nazwakandydata")
        document.getElementById("napiskandydat11").innerHTML = "Twój wybór to: "+json[nr].nazwa_kandydata
       
        wybrane=1
    }
    getkandydat()
}

