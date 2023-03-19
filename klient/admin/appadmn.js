var json = []
var jsonl = []
var kandydacilosowanie = []
var k = []
var d =[]


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

}

var kandydacinazwalos = []
async function pobierzlosowanie(){
  const data = await fetch(baseurl+"/wynikilos")
  jsonl = await data.json()
}


var kandydacinazwa = []
async function pobierzkandydaci(){
  const data = await fetch(baseurl+"/nazwakandy")
  json = await data.json()

  for(var i =0; i<=json.length-1;i++){
    kandydacinazwa.push(json[i].nazwa_kandydata)
  }

}


function tableCreate() {
  var div = document.getElementById("lewo");
  var tbl = document.createElement('table');
  var tbdy = document.createElement('tbody');

  // pobieramy nazwy kandydatów z serwera i ustawiamy jako nazwy kolumn w tabeli
  
      var tr = document.createElement('tr');
      for (var i = 0; i < json.length; i++) {
        var th = document.createElement('th');
        th.textContent = json[i].nazwa_kandydata;
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
      for (var i = 0; i < 3; i++) {
        var td = document.createElement('td');
        td.classList.add("tdilosc");
        if (i == 0) {
          td.setAttribute("id", "tdilosc1");
        } else if (i == 1) {
          td.setAttribute("id", "tdilosc2");
        } else {
          td.setAttribute("id", "tdilosc3");
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
       backgroundColor: 'rgb(66, 221, 245)'
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