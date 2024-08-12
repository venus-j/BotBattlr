
**Bot Battlr**

**Bot Battlr** is a React web application designed to let users build and manage their own bot army. The app provides an interactive interface to view a list of available bots, enlist them into your army, and remove or discharge them as needed.

**Features**

**Browse Bots:** View detailed profiles of all available bots in a visually appealing collection.**Manage Your Army:** Add bots to your army, which will be displayed in a separate section.
**Remove Bots:** Release bots from your army or discharge them permanently, with updates reflected in real-time.
**Responsive Design:** Enjoy a seamless experience across different devices with a responsive and user-friendly layout.

**Technologies Used**


*   **React:** For building the user interface and managing state.
*   **JSON Server:** For simulating a backend API to fetch and manage bot data.
*   **CSS:** For styling and layout adjustments.

**Getting Started**

1.  **Clone the Repository:**
    
    ```bash
    git clone git@github.com:venus-j/Bots.git
    ```
    
2.  **Install Dependencies:**
    
    ```bash
    
    cd bot-battlr
    npm install
    ```
    
3.  **Run JSON Server:**
    
    *   Create a `db.json` file with your bot data.
        
    *   Start the server:
        
        ```bash
        json-server --watch db.json --port 8001
        ```
        
4.  **Start the React App:**
    
    ```bash
    npm start
    ```
    
5.  **Visit the App:**
    
    Open `http://localhost:3000` in your browser to view and interact with the app.
    

**License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
