var json = []
var jsonl = []
var losowanietablica = []
var k = []
var d =[]
var kandydacilosowanie  =[]
async function start(){
  
  await pobierzkandydaci()
  await pobierzlosowanie()
  await liczlosy()
}
start()

async function liczlosy(){
  for(var o=0;o<=json.length-1;o++){
      var votes=0
      var kandydat = json[o].nazwa_kandydata
      for(var i=0;i<=jsonl.length-1;i++){
          if(jsonl[i].nazwa_wylosowanego_kandydata==json[o].nazwa_kandydata){
              votes++
          }
      }
      kandydacilosowanie.push({kandydat:kandydat,  losy:votes})
  }
  for(var i = 0;i<=kandydacilosowanie.length-1;i++){
      k.push(kandydacilosowanie[i].kandydat)
      d.push(kandydacilosowanie[i].losy)
  }
  console.log(kandydacilosowanie)
}

async function pobierzlosowanie(){
  const data = await fetch(baseurl+"/wynikilos")
  jsonl = await data.json()
}


async function pobierzkandydaci(){
  const data = await fetch(baseurl+"/nazwakandy")
  json = await data.json()
}

async function losowaniedotabeli(){
  for(var i=0; i<=kandydacilosowanie.length;i++){
  const data = await fetch(`${baseurl}/losowanietabela/${json[i].nazwa_kandydata}`)
  const jsontab = await data.json()
  losowanietablica.push({kandydattabela:jsontab})
  }
}


function tableCreate() {
  var div = document.getElementById("lewo");
  var tbl = document.createElement('table');
  var tbdy = document.createElement('tbody');

  // pobieramy nazwy kandydatów z serwera i ustawiamy jako nazwy kolumn w tabeli
  
      var tr = document.createElement('tr');
      for (var i = 0; i < kandydacilosowanie.length; i++) {
        var th = document.createElement('th');
        th.textContent = kandydacilosowanie[i].kandydat;
        tr.appendChild(th);
      }
      tbdy.appendChild(tr);

      // tworzymy wiersze z pustymi komórkami, które zostaną wypełnione danymi z bazy danych
      for (var i = 0; i < 20; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < json.length; j++) {
          var td = document.createElement('td');
          if (j == 0) {
            td.classList.add("td1");
          } else if (j == 1) {
            td.classList.add("td2");
          } else {
            td.classList.add("td3");
          }
          td.appendChild(document.createTextNode(''));
          tr.appendChild(td)
        }
        tbdy.appendChild(tr);
      }

      // tworzymy kolejny wiersz z trzema komórkami i klasą tdilosc
      var tr_ilosc = document.createElement('tr');
      for (var i = 0; i < kandydacilosowanie.length; i++) {
        var td = document.createElement('td');
        td.classList.add("tdilosc");
        if (i == 0) {
          td.setAttribute("id", "tdilosc1");
          td.innerHTML = kandydacilosowanie[i].losy
        } else if (i == 1) {
          td.setAttribute("id", "tdilosc2");
          td.innerHTML = kandydacilosowanie[i].losy
        } else {
          td.setAttribute("id", "tdilosc3");
          td.innerHTML = kandydacilosowanie[i].losy
        }
        td.appendChild(document.createTextNode(''));
        tr_ilosc.appendChild(td)
      }
      tbdy.insertBefore(tr_ilosc, tbdy.children[1]);

      tbl.appendChild(tbdy);
      div.appendChild(tbl)
      tbl.style.width = '70%';
      tbl.style.height = '85%';
  
  }


function createChart() {
  let lables = k;

  let itemData = d;

  const data ={
   labels: lables,
   datasets: [{
       data: itemData,
       backgroundColor: ["rgb(127,255,212)",
       "rgb(0, 255, 255)",
       "rgb(255, 228, 196)"],
       borderColor: ["rgb(40, 157, 140)",
       "rgb(36, 157, 159",
       "rgb(196, 150, 93)"],
       borderWidth: 2.5,

   }]

  };


  const config = {
   type: 'bar',
   data: data,
   options:{
       plugins: {
           legend:{
               display: false
           },
           title: {
               display: true, 
               text: 'Głosy'
           }
       }
   }  
  };

   const chart = new Chart(
   document.getElementById("wykres"),
   config
  );
}

// Wywołanie funkcji createChart() po załadowaniu strony
window.onload = function() {
createChart();
}