📊 Google Scholar Category Score Visualizer
This project scrapes real-time academic scores from the Google Scholar Categories site and displays the data using interactive charts. It helps professors visualize their and their scholars' scores year-wise on their websites.

🚀 Features
Real-time data scraping from Google Scholar Category pages.

Browser automation using Puppeteer.

HTML parsing and data extraction using Cheerio.

Interactive charts using Chart.js.

Clean, responsive frontend UI.

Easy integration in any professor's personal webpage.

🛠️ Tech Stack
JavaScript (Vanilla)

Puppeteer – Headless browser automation.

Cheerio – jQuery-like HTML parser.

Chart.js – Visualize the data.

HTML5, CSS3

📁 Project Structure
bash
Copy
Edit
.
├── chart.js         # Chart.js integration for data visualization
├── data.js          # Script to fetch/prepare data
├── data.json        # Stores processed data from scraping
├── index.html       # Main frontend page (embeddable)
├── main.js          # Entry script for page logic
├── package.json     # Project metadata and dependencies
└── style.css        # Custom styling for the page
📦 Installation
Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/google-scholar-visualizer.git
cd google-scholar-visualizer
Install dependencies

bash
Copy
Edit
npm install
⚙️ Run the Scraper
bash
Copy
Edit
node data.js
This script uses Puppeteer and Cheerio to scrape real-time scores from the Google Category site and stores it in data.json.

🌐 View the Frontend
Just open index.html in your browser. It loads the data from data.json and visualizes it using Chart.js.

✅ You can also embed index.html into any webpage using <iframe> or direct include.

🧠 How it Works
data.js: Launches a headless browser with Puppeteer, scrapes scholar data, processes it with Cheerio, and saves the result to data.json.

main.js: Fetches the data.json and passes it to Chart.js to generate dynamic graphs.

chart.js: Handles chart configuration and rendering.

📬 Contact
Got questions or feedback? Reach out at ashishvs605.email@example.com
