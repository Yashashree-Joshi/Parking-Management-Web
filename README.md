🚗 Web-Based Smart Parking Management System

A modern, browser-based Parking Management System built using vanilla HTML, CSS, and JavaScript.
This project is designed as an academic, viva-ready system that demonstrates clean business logic, time-based billing, proper data persistence, and web-appropriate file handling.

📌 Project Overview

The Smart Parking Management System simulates a real-world parking lot where an admin can manage parking for 2-wheelers and 4-wheelers.
The system automatically allocates slots, tracks entry/exit time, calculates parking charges, and generates bills — all through a clean dashboard interface.

This project intentionally avoids backend frameworks and instead focuses on core web concepts, making it ideal for academic evaluation.

✨ Key Features
🔐 Authentication

Admin-only login

Hardcoded credentials (academic use)

Session-style dashboard switching

🅿️ Parking Management

Separate parking areas for:

🏍️ 2-Wheelers

🚗 4-Wheelers

Fixed number of slots for each type

First-Fit slot allocation strategy

Automatic slot reuse after vehicle exit

⏱ Time Tracking

Automatic entry time capture

Automatic exit time capture

Human-readable timestamps

💰 Billing System

Minimum charge: 1 hour

Partial hours are rounded up

Rates:

2-Wheeler → ₹20/hour

4-Wheeler → ₹50/hour

🧾 Bill Generation

Automatically generated at vehicle exit

Displays:

Vehicle number

Vehicle type

Entry & exit time

Total duration

Total amount

🔍 Search Functionality

Search vehicle by number

Displays slot number and entry time

Works across both parking sections

💾 Data Persistence

Uses localStorage for live data storage

Parking state is restored on page reload

📂 File Handling (Web-Correct)

Export parking data to .txt file

Import parking data from .txt file

Demonstrates file handling within browser security constraints

🎨 User Interface Highlights

Modern dashboard layout with sidebar navigation

Visual parking slot grid:

🟥 Red → Occupied

🟩 Green → Available

Click on occupied slot to exit vehicle and generate bill

Smooth animations and hover effects

Responsive design for smaller screens

🧠 Core Concepts Demonstrated

First-Fit allocation algorithm

Time-based calculations in JavaScript

Data modeling using objects

Browser-based persistence

Client-side file handling

Separation of logic and UI

📂 Project Structure
/parking-system
│── index.html      # Main UI structure
│── style.css       # Styling & layout
│── script.js       # Core logic
│── README.md       # Documentation
│── assets/
│   ├── images/     # Placeholder images (optional)
│   └── icons/      # Icons (optional)
▶️ How to Run the Project

Download or clone the project

Open index.html in any modern web browser

Login using:

Username: Admin
Password: pass1

Start parking vehicles 🚗🏍️

No server or installation required.

🧪 How to Test

Park multiple vehicles

Wait a few minutes

Exit a vehicle by clicking an occupied slot

Verify:

Entry & exit time

Billing duration

Amount calculation

Export data → refresh page → import data

🎓 Viva Explanation (Important)
🔹 First-Fit Strategy

The system assigns the first available empty slot, ensuring efficient space usage and fast allocation.

🔹 Billing Logic

Parking duration is calculated using entry and exit timestamps. Partial hours are rounded up, with a minimum charge of one hour.

🔹 File Handling in Web

Due to browser security restrictions, direct file I/O is not allowed. Therefore, file handling is implemented using text file export and import, which enables backup and restoration of parking data.

🚀 Future Enhancements

Toast notifications instead of alerts

Printable bill modal

Dark mode toggle

Statistics dashboard cards

Admin activity logs

👨‍💻 Technologies Used

HTML5

CSS3

JavaScript (Vanilla)

Browser APIs (localStorage, FileReader)

✅ Conclusion

This project demonstrates a complete, realistic parking management workflow using only frontend technologies. It is designed to be simple, scalable, and academically strong, making it ideal for project submission and viva examinations.

⭐ If you found this project useful, feel free to enhance and extend it further!
