const ws = new WebSocket("ws://YOUR_PC_IP:8080"); // Change YOUR_PC_IP

ws.onopen = function () {
    console.log("Connected to PC WebSocket Server");
};

ws.onerror = function (error) {
    console.log("WebSocket Error: " + error);
};

ws.onclose = function () {
    console.log("Connection to PC lost");
};

// Function to send key commands
function sendCommand(command) {
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(command);
    } else {
        alert("Connection to PC is not active!");
    }
}

// Add a new button for Ctrl+T
document.getElementById("newTabBtn").addEventListener("click", () => sendCommand("CTRL_T"));
