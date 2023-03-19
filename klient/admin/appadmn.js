var json = []
var kandydacinazwa = []
async function pobierzdane(){
  const data = await fetch(baseurl+"/nazwakandy")
  json = await data.json()
  console.log(json)
  for(var i =0; i<=json.length-1;i++){
    kandydacinazwa.push(json[i].nazwa_kandydata)
  }
  console.log(kandydacinazwa)
}
pobierzdane()
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
  let lables = kandydacinazwa;

  let itemData = [6, 2, 3];

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