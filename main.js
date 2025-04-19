import { GoogleGenerativeAI } from "@google/generative-ai";

const doctorAppointmentData = `

General Appointment Information:
Website: www.indiahealthcare.com

Return/Reschedule Policy:
Appointments can be canceled or rescheduled up to 24 hours before the scheduled time.
To cancel or reschedule, please contact support@indiahealthcare.com.
Refunds for no-shows are not applicable.

Support Email: support@indiahealthcare.com

Available Specializations:
Cardiology: Heart health, chest pain, arrhythmias.
Dermatology: Skin conditions, acne, rashes, eczema.
Pediatrics: Child health, vaccinations, growth monitoring.
Orthopedics: Bone health, fractures, joint pain, arthritis.
Gastroenterology: Digestive system health, stomach issues, ulcers.
Neurology: Brain, spine, and nervous system health.
Psychiatry: Mental health, anxiety, depression.

Available Doctors in Major Cities:

**Delhi**:
Dr. Gupta (Cardiology)
- Monday: 9:00 AM - 12:00 PM
- Wednesday: 3:00 PM - 6:00 PM
- Friday: 10:00 AM - 1:00 PM

Dr. Sharma (Dermatology)
- Tuesday: 10:00 AM - 1:00 PM
- Thursday: 11:00 AM - 2:00 PM

**Mumbai**:
Dr. Patel (Pediatrics)
- Monday: 9:00 AM - 1:00 PM
- Thursday: 2:00 PM - 5:00 PM

Dr. Desai (Orthopedics)
- Tuesday: 9:00 AM - 12:00 PM
- Friday: 3:00 PM - 6:00 PM

**Bangalore**:
Dr. Reddy (Gastroenterology)
- Monday: 10:00 AM - 1:00 PM
- Wednesday: 2:00 PM - 5:00 PM

Dr. Iyer (Neurology)
- Tuesday: 9:00 AM - 12:00 PM
- Friday: 1:00 PM - 4:00 PM

**Chennai**:
Dr. Kumar (Psychiatry)
- Monday: 10:00 AM - 12:00 PM
- Thursday: 2:00 PM - 4:00 PM

**Hyderabad**:
Dr. Rao (Cardiology)
- Monday: 9:00 AM - 11:00 AM
- Wednesday: 1:00 PM - 3:00 PM

**Kolkata**:
Dr. Das (Dermatology)
- Tuesday: 9:00 AM - 12:00 PM
- Thursday: 3:00 PM - 6:00 PM

**Pune**:
Dr. Joshi (Orthopedics)
- Monday: 10:00 AM - 1:00 PM
- Friday: 3:00 PM - 6:00 PM

**Ahmedabad**:
Dr. Mehta (Gastroenterology)
- Tuesday: 10:00 AM - 12:00 PM
- Thursday: 2:00 PM - 5:00 PM

**Jaipur**:
Dr. Soni (Pediatrics)
- Wednesday: 9:00 AM - 12:00 PM
- Friday: 1:00 PM - 3:00 PM

**Lucknow**:
Dr. Verma (Cardiology)
- Monday: 9:00 AM - 11:00 AM
- Thursday: 2:00 PM - 4:00 PM

**Chandigarh**:
Dr. Bhullar (Psychiatry)
- Tuesday: 10:00 AM - 1:00 PM
- Friday: 3:00 PM - 5:00 PM

**Coimbatore**:
Dr. Nair (Orthopedics)
- Wednesday: 10:00 AM - 12:00 PM
- Saturday: 2:00 PM - 5:00 PM

**Phagwara**:
Dr. Sharma (Dermatology)
- Monday: 10:00 AM - 12:00 PM
- Thursday: 3:00 PM - 6:00 PM

Dr. Singh (Pediatrics)
- Tuesday: 9:00 AM - 1:00 PM
- Friday: 1:00 PM - 4:00 PM

**Jalandhar**:
Dr. Gill (Cardiology)
- Monday: 9:00 AM - 11:00 AM
- Wednesday: 2:00 PM - 5:00 PM

Dr. Bedi (Neurology)
- Tuesday: 10:00 AM - 1:00 PM
- Thursday: 2:00 PM - 4:00 PM

**Amritsar**:
Dr. Kapoor (Orthopedics)
- Monday: 9:00 AM - 12:00 PM
- Thursday: 2:00 PM - 5:00 PM

Dr. Kaur (Gastroenterology)
- Tuesday: 10:00 AM - 1:00 PM
- Friday: 1:00 PM - 3:00 PM

**Patna**:
Dr. Mishra (Cardiology)
- Monday: 9:00 AM - 12:00 PM
- Wednesday: 3:00 PM - 6:00 PM

Dr. Ranjan (Pediatrics)
- Tuesday: 10:00 AM - 1:00 PM
- Friday: 2:00 PM - 5:00 PM

FAQs:
General:
1. How can I book an appointment with a doctor?
   - We are happy to book an appointment for you. Once your appointment is confirmed, you will receive a confirmation email with all details.

2. Can I reschedule or cancel my appointment?
   - Yes, you can cancel or reschedule an appointment up to 24 hours before your appointment time. Please contact support@indiahealthcare.com for assistance.

3. Do you offer telemedicine consultations?
   - Yes, we offer telemedicine consultations with certain doctors. Please check with the specific doctor’s availability.

4. What do I need to bring for my appointment?
   - Please bring a valid ID, insurance details (if applicable), and any relevant medical records.

**Delhi**:
What are your opening hours in Delhi?
- Monday to Friday: 9:00 AM to 6:00 PM
- Saturday: 10:00 AM to 4:00 PM
- Sunday: Closed

Is parking available in Delhi?
- Yes, we provide parking at the clinic. Please contact us for more information.

**Mumbai**:
What are your opening hours in Mumbai?
- Monday to Friday: 9:00 AM to 6:00 PM
- Saturday: 10:00 AM to 4:00 PM
- Sunday: Closed

Can I book a teleconsultation with a doctor in Mumbai?
- Yes, some doctors in Mumbai offer teleconsultations. Please specify which doctor you wish to consult for more details.

**Bangalore**:
What are your opening hours in Bangalore?
- Monday to Friday: 9:00 AM to 6:00 PM
- Saturday: 10:00 AM to 3:00 PM
- Sunday: Closed

**Chennai**:
How can I contact the Chennai office?
- You can call us at +91 44 1234 5678 or email chennai@indiahealthcare.com.

**Phagwara**:
What are your opening hours in Phagwara?
- Monday to Friday: 9:00 AM to 5:00 PM
- Saturday: 10:00 AM to 2:00 PM
- Sunday: Closed

**Jalandhar**:
How can I contact the Jalandhar office?
- You can call us at +91 181 123 4567 or email jalandhar@indiahealthcare.com.

**Amritsar**:
What are your opening hours in Amritsar?
- Monday to Friday: 9:00 AM to 6:00 PM
- Saturday: 10:00 AM to 4:00 PM
- Sunday: Closed

**Patna**:
How can I contact the Patna office?
- You can call us at +91 612 123 4567 or email patna@indiahealthcare.com.

Tone Instructions:
Conciseness: Keep responses short and to the point.
Formality: Use polite, professional language (e.g., “Please let us know how we can assist,” “We are happy to help”).
Clarity: Use simple and clear language, avoid jargon unless necessary.
Consistency: Maintain the same tone and response style across all locations.

Example: "Thank you for reaching out! Your appointment with Dr. Reddy in Bangalore has been scheduled. We look forward to seeing you."

`


const API_KEY = ""; // "Write your API";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    systemInstruction: doctorAppointmentData
});

let messages = {
    history: [],
}

async function sendMessage() {

    console.log(messages);
    const userMessage = document.querySelector(".chat-window input").value;

    if (userMessage.length) {

        try {
            document.querySelector(".chat-window input").value = "";
            document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
                <div class="user">
                    <p>${userMessage}</p>
                </div>
            `);

            document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
                <div class="loader"></div>
            `);

            const chat = model.startChat(messages);

            let result = await chat.sendMessageStream(userMessage);

            document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
                <div class="model">
                    <p></p>
                </div>
            `);

            let modelMessages = '';

            for await (const chunk of result.stream) {
                const chunkText = chunk.text();
                modelMessages = document.querySelectorAll(".chat-window .chat div.model");
                modelMessages[modelMessages.length - 1].querySelector("p").insertAdjacentHTML("beforeend", `
                ${chunkText}
            `);
            }

            messages.history.push({
                role: "user",
                parts: [{ text: userMessage }],
            });

            messages.history.push({
                role: "model",
                parts: [{ text: modelMessages[modelMessages.length - 1].querySelector("p").innerHTML }],
            });

        } catch (error) {
            document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
                <div class="error">
                    <p>The message could not be sent. Please try again.</p>
                </div>
            `);
        }

        document.querySelector(".chat-window .chat .loader").remove();

    }
}

document.querySelector(".chat-window .input-area button")
    .addEventListener("click", () => sendMessage());

document.querySelector(".chat-button")
    .addEventListener("click", () => {
        document.querySelector("body").classList.add("chat-open");
    });

document.querySelector(".chat-window button.close")
    .addEventListener("click", () => {
        document.querySelector("body").classList.remove("chat-open");
    });

// heartbeat_anim

const heartbeatIcon = document.getElementById("heartbeat-icon");
const backButton = document.getElementById("back_button");

// Add an event listener to detect clicks on the heartbeat icon
heartbeatIcon.addEventListener("click", function() {
    // Add 'clicked' class to stop the animation and 'hidden' class to hide the icon
    heartbeatIcon.classList.add("clicked");
    heartbeatIcon.classList.add("hidden");
});

// Add event listener to the "back" button to restart the animation and make the icon visible again
backButton.addEventListener("click", function() {
    // Remove the 'clicked' class to restart the animation
    heartbeatIcon.classList.remove("clicked");
    heartbeatIcon.classList.remove("hidden");
});
let modelMessages = '';

// Process the model's streamed response and sanitize it
for await (const chunk of result.stream) {
    const chunkText = await chunk.text();

    // Sanitize chunk text by removing unwanted asterisks
    const sanitizedText = chunkText.replace(/\*/g, ''); // Remove all asterisks

    // Insert sanitized text into the model's message
    modelMessages = document.querySelectorAll(".chat-window .chat div.model");
    modelMessages[modelMessages.length - 1].querySelector("p").insertAdjacentHTML("beforeend", sanitizedText);
}
