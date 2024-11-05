<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Mengambil dan membersihkan data dari formulir
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validasi email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Email tidak valid.");
    }

    // Alamat email tujuan
    $to = "las.v3rnaa@gmail.com"; // Ganti dengan email Anda
    $subject = "Pesan dari Kontak: $name";
    
    // Isi email
    $body = "Nama: $name\nEmail: $email\nPesan:\n$message";
    
    // Header email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Mengirim email
    if (mail($to, $subject, $body, $headers)) {
        echo "Email berhasil dikirim!";
    } else {
        echo "Gagal mengirim email.";
    }
} else {
    // Jika bukan permintaan POST
    echo "Permintaan tidak valid.";
}
?>
