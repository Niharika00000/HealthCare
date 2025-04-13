<?php
$fullName = $_POST['fullName'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$doctor = $_POST['doctor'] ?? '';
$appointmentDate = $_POST['appointmentDate'] ?? '';
$appointmentTime = $_POST['appointmentTime'] ?? '';
$reason = $_POST['reason'] ?? '';

$conn = new mysqli('localhost', 'root', '', 'niharika');
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed']);
    exit;
}

$stmt = $conn->prepare("INSERT INTO appointment_form (fullName, email, phone, doctor, appointmentDate, appointmentTime, reason) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssss", $fullName, $email, $phone, $doctor, $appointmentDate, $appointmentTime, $reason);

if ($stmt->execute()) {
    header("Location: pop.php"); // Replace with your desired URL
    exit; // Ensure no further code is executed
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to save appointment']);
}

$stmt->close();
$conn->close();
?>