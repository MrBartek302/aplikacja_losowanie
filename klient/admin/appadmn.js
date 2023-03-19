function tableCreate() {
  var div = document.getElementById("lewo");
  var tbl = document.createElement('table');
  var tbdy = document.createElement('tbody');
  
  // pobieramy nazwy kandydatów z serwera i ustawiamy jako nazwy kolumn w tabeli
  fetch('http://localhost:3000/nazwakandy')
    .then(response => response.json())
    .then(data => {
      var tr = document.createElement('tr');
      for (var i = 0; i < data.length; i++) {
        var th = document.createElement('th');
        th.textContent = data[i].nazwa_kandydata;
        tr.appendChild(th);
      }
      tbdy.appendChild(tr);
      
      // tworzymy wiersze z pustymi komórkami, które zostaną wypełnione danymi z bazy danych
      for (var i = 0; i < 3; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < data.length; j++) {
          var td = document.createElement('td');
          td.appendChild(document.createTextNode(''));
          tr.appendChild(td)
        }
        tbdy.appendChild(tr);
      }
      
      tbl.appendChild(tbdy);
      div.appendChild(tbl)
      tbl.style.width = '70%';
      tbl.style.height = '45%';
    });
}
