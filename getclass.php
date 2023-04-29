<?php

// Kapcsolódás az adatbázishoz
$conn = mysqli_connect("localhost", "u142909563_LEAdmin", "LEadmin2@23", "u142909563_LEARN");

// Ellenőrzés, hogy sikeres volt-e a kapcsolódás
if (!$conn) {
    die("Kapcsolódási hiba: " . mysqli_connect_error());
}

// SQL lekérdezés futtatása
$sql = "SELECT * FROM `lessons`";
$result = mysqli_query($conn, $sql);

// Ellenőrzés, hogy sikeres volt-e a lekérdezés
if (mysqli_num_rows($result) > 0) {
    // Az eredményt tömbbe mentjük
    $items = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $items[] = $row;
    }
} else {
    $items = array();
}

echo json_encode($items);

// Kapcsolat bezárása
mysqli_close($conn);

