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
