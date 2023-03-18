function zmienNazwyKolumn() {
  // Pobranie tabeli HTML
  const tabela = document.querySelector("table");

  // Pobranie nazw kandydatów z bazy danych
  const nazwyKandydatow = ['Jan Kowalski', 'Anna Nowak', 'Adam Wiśniewski']; // Tutaj należy umieścić kod, który pobiera nazwy kandydatów z bazy danych

  // Zmiana nazw kolumn w tabeli HTML
  const nazwyKolumn = tabela.querySelectorAll("th");
  for (let i = 0; i < nazwyKolumn.length; i++) {
    nazwyKolumn[i].textContent = nazwyKandydatow[i];
  }
}
