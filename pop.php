<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    .appointment-success {
        background-color:rgba(0, 175, 175, 0.1);;
        border: 1px solid #eee;
        padding: 40px;
        border-radius: 8px;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        font-family: sans-serif;
        margin: 120px auto;
        max-width: 400px;

    }

    .checkmark-container {
        width: 100px;
        height: 100px;
        margin: 20px auto;
    }

    .checkmark__circle {
    stroke: #5cb85c;
    fill: none;
    stroke-width: 6;
    stroke-miterlimit: 10;
    stroke-dasharray: none;       /* Remove animation stroke effect */
    stroke-dashoffset: 0;         /* Show full stroke */
}
.checkmark__check {
    transform-origin: 50% 50%;
    stroke: #5cb85c;
    stroke-width: 6;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 100;   /* Increased for full-length appearance */
    stroke-dashoffset: 0;
}


    @keyframes stroke {
        100% {
            stroke-dashoffset: 0;
        }
    }

    h2 {
        color: #333;
        margin-bottom: 15px;
    }

    .success-message {
        color: #666;
        margin-bottom: 20px;
    }

    .additional-info {
        color: #777;
        margin-bottom: 25px;
        font-size: 0.9em;
    }

    .button-container {
        display: flex;
        justify-content: center;
    }

    .back-to-home-button {
        display: inline-flex;
        align-items: center;
        background-color: #007bff;
        color: white;
        padding: 12px 25px;
        border: none;
        border-radius: 5px;
        text-decoration: none;
        font-size: 1em;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .back-to-home-button svg {
        margin-right: 8px;
    }

    .back-to-home-button:hover {
        background-color: #0056b3;
    }
</style>
</head>
<body>
<div class="appointment-success">
    <div class="checkmark-container">
        <svg viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg">
            <circle class="checkmark__circle" cx="65" cy="65" r="57" fill="none" stroke="#5cb85c" stroke-width="6" stroke-miterlimit="10"/>
            <path class="checkmark__check" fill="none" stroke="#5cb85c" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" d="M41 70 l13 13 l39 -39"/>
        </svg>
    </div>
    <h2>Appointment Successfully Booked!</h2>
    <p class="success-message">Thank you, Your appointment has been saved .</p>
    <p class="additional-info">We will send a confirmation email shortly.<br> Kindly go back to the homepage</p>
    <div class="button-container">
        <a href="index.html" class="back-to-home-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Back to Home</span>
        </a>
    </div>
</div>

</body>
</html>