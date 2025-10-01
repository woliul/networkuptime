const { contextBridge, ipcRenderer } = require('electron');

// Expose secure functions to the renderer process (index.html)
contextBridge.exposeInMainWorld('api', {
    // Data operations
    getLogs: () => ipcRenderer.invoke('load-logs'),
    saveLog: (logEntry) => ipcRenderer.invoke('insert-log', logEntry),
    clearLogs: () => ipcRenderer.invoke('clear-logs'),
    exportLogCsv: () => ipcRenderer.invoke('export-log-csv'),

    // Communication channel for main process status updates
    onBackupStatus: (callback) => ipcRenderer.on('backup-status', (event, message) => callback(message))
});
