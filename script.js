document.getElementById("copyBtn").addEventListener("click", async function () {
    try {
        await navigator.clipboard.writeText("Copied Text!");
        alert("Text copied!");
    } catch (err) {
        alert("Failed to copy!");
    }
});

document.getElementById("pasteBtn").addEventListener("click", async function () {
    try {
        const text = await navigator.clipboard.readText();
        alert("Pasted Text: " + text);
    } catch (err) {
        alert("Failed to paste!");
    }
});

// New Tab (Ctrl+T) Button
document.getElementById("newTabBtn").addEventListener("click", function () {
    window.open("https://www.google.com", "_blank"); // Opens Google in a new tab
});
