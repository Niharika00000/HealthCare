<?php
$fullName = $_POST['fullName'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$doctor = $_POST['doctor'] ?? '';
$consultationDate = $_POST['consultationDate'] ?? '';
$consultationTime = $_POST['consultationTime'] ?? '';
$reason = $_POST['reason'] ?? '';





// Create database connection
$conn = new mysqli('localhost', 'root', '', 'niharika');

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Database connection failed'
    ]);
    exit;
}

// Prepare SQL statement
$stmt = $conn->prepare("INSERT INTO video_consultation(fullName, email, phone, doctor, consultationDate, consultationTime, reason) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssss", $fullName, $email, $phone, $doctor, $consultationDate, $consultationTime, $reason);

// Execute and check result
if ($stmt->execute()) {
    header("Location: pop.php"); // Redirect after success
    exit;
   
} else {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Failed to save appointment'
    ]);
}

// Close statement and connection
$stmt->close();
$conn->close();
?>
