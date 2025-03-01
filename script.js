const socket = new WebSocket("ws://192.168.1.10:8080"); // Change this to your PC's local IP

socket.onopen = function () {
    console.log("Connected to server");
};

socket.onerror = function (error) {
    console.error("WebSocket Error: ", error);
};

socket.onmessage = function (event) {
    console.log("Received:", event.data);
};

function openNewTab() {
    socket.send("CTRL_T"); // Send message to server
}

document.getElementById("newTabButton").addEventListener("click", openNewTab);
