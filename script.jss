
let apps = [
    {name: "WhatsApp", camera: true, mic: true, location: true},
    {name: "Instagram", camera: true, mic: true, location: false},
    {name: "Flashlight", camera: false, mic: false, location: true},
    {name: "Calculator", camera: false, mic: false, location: false}
];


function calculateRisk(app) {
    let score = 0;

    if (app.camera) score++;
    if (app.mic) score++;
    if (app.location) score++;

    if (score >= 3) return "High";
    if (score == 2) return "Medium";
    return "Low";
}


function scanApps() {
    let list = document.getElementById("appList");
    list.innerHTML = "";

    let high = 0, medium = 0, low = 0;

    apps.forEach(app => {
        let risk = calculateRisk(app);

        if (risk === "High") high++;
        else if (risk === "Medium") medium++;
        else low++;

        let div = document.createElement("div");

        div.innerHTML = `
            <p><b>${app.name}</b> - 
            <span class="${risk.toLowerCase()}">${risk} Risk</span></p>
        `;

        list.appendChild(div);

        // Add alert for high risk apps
        if (risk === "High") {
            addAlert(app.name + " is accessing sensitive permissions!");
        }
    });

    
    document.getElementById("totalApps").innerText = apps.length;
    document.getElementById("highRisk").innerText = high;
    document.getElementById("mediumRisk").innerText = medium;
    document.getElementById("lowRisk").innerText = low;
}


function addAlert(message) {
    let alertBox = document.getElementById("alerts");

    let li = document.createElement("li");
    li.innerText = message;

    alertBox.appendChild(li);
}


function unlockVault() {
    let password = document.getElementById("vaultPass").value;

    if (password === "1234") {
        document.getElementById("vaultContent").classList.remove("hidden");
        alert("Vault Unlocked!");
    } else {
        alert("Wrong Password!");
    }
}