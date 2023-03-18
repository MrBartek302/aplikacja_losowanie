<?php
// połączenie z bazą danych
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "losowanie1";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// pobranie listy kandydatów
$kandydaci_query = "SELECT nazwa_kandydata FROM kandydaci";
$kandydaci_result = $conn->query($kandydaci_query);
$kandydaci = array();
$num_kandydatow = $kandydaci_result->num_rows;

if ($kandydaci_result->num_rows > 0) {
  while($row = $kandydaci_result->fetch_assoc()) {
    $kandydaci[] = $row['nazwa_kandydata'];
  }
}

// utworzenie tabeli z listą kandydatów i peselami wyborców
echo "<table>";
echo "<tr>";

// dodanie nagłówka z nazwami kandydatów
foreach ($kandydaci as $kandydat) {
  echo "<th>" . $kandydat . "</th>";
}
echo "</tr>";

// pobranie peseli wyborców dla każdego kandydata
foreach ($kandydaci as $kandydat) {
  echo "<td>";
  $losowanie_query = "SELECT pesel_losujacego FROM losowanie WHERE nazwa_wylosowanego_kandydata = '$kandydat'";
  $losowanie_result = $conn->query($losowanie_query);

  if ($losowanie_result->num_rows > 0) {
    while($row = $losowanie_result->fetch_assoc()) {
      echo $row['pesel_losujacego'] . "<br>";
    }
  } else {
    echo "Brak wyborów";
  }

  echo "</td>";
}

echo "</table>";

$conn->close();
?>
