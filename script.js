function generatePassword() {
    const length = document.getElementById("length").value;
    const useUpper = document.getElementById("upper").checked;
    const useLower = document.getElementById("lower").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    let charset = "";
    if (useUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLower) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) charset += "0123456789";
    if (useSymbols) charset += "!@#$%^&*()_+";

    if (charset === "") {
        alert("Select at least one option!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset[Math.floor(Math.random() * charset.length)];
    }

    document.getElementById("password").innerText = password;
    checkStrength(password);
}

function checkStrength(password) {
    let strength = "WEAK";
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score >= 4) strength = "STRONG";
    else if (score === 3) strength = "MEDIUM";

    document.getElementById("strength").innerText =
        "Strength: " + strength;
}
