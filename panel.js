
function updateTime() {
    const sriLankaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" });
    const usaTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
    const dubaiTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" });

    document.getElementById("sri-lanka-time").innerText = sriLankaTime;
    document.getElementById("usa-time").innerText = usaTime;
    document.getElementById("dubai-time").innerText = dubaiTime;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call to set time immediately
