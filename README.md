# 🌐 Network Uptime Monitor

An offline-first desktop application for monitoring and logging your network connection status. Built using **Electron**, with data persistence powered by **sql.js** and **IndexedDB**.

## ✨ Features

* **Offline-First**: The application is fully self-contained and does not require an internet connection to run after installation.
* **Real-time Monitoring**: Continuously checks the network status at user-defined intervals.
* **Persistent Data Storage**: All connection status changes are logged locally to a SQLite database, powered by `sql.js` and persisted using the browser's IndexedDB. Your data remains safe and accessible even after the application is closed.
* **Cross-Platform**: Built with Electron, the application can be packaged and run on Windows, macOS, and Linux.

## 🚀 Getting Started

### Prerequisites

* Node.js (LTS version recommended)
* npm (comes with Node.js)

### Installation

1.  Clone this repository to your local machine:

    ```bash
    git clone https://github.com/woliul/networkuptime.git
    cd networkuptime
    ```

2.  Install the project dependencies:

    ```bash
    npm install
    ```

### Running the Application

To start the application in development mode:

```bash
npm start
```

### Building for Production

To create a distributable installer for Windows, macOS, or Linux, use Electron Builder. The following commands will create an installer in the `dist` folder:

* **Windows**:

  ```bash
  npm run dist
  ```

  *(Note: This command may require administrator privileges on Windows to complete successfully.)*

* **macOS**:

  ```bash
  npm run dist
  ```

* **Linux**:

  ```bash
  npm run dist
  ```

## 📂 Project Structure

```
networkuptime/
├── node_modules/           # Project dependencies
├── css/
│   └── bootstrap.min.css   # Local Bootstrap CSS
├── js/
│   └── bootstrap.bundle.min.js # Local Bootstrap JS
├── sql/
│   ├── sql-wasm.js         # SQL.js library
│   └── sql-wasm.wasm       # WebAssembly module for sql.js
├── index.html              # The application's user interface
├── main.js                 # The Electron main process script
├── package.json            # Project manifest and build configuration
├── package-lock.json       # Exact dependency tree
└── README.md
```

## 🛠️ Built With

* **Electron**: For building a cross-platform desktop application.
* **sql.js**: A pure JavaScript implementation of SQLite, compiled to WebAssembly.
* **IndexedDB**: A web browser API used for client-side storage of the SQLite database file.
* **Bootstrap**: For responsive and clean UI components.
