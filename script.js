document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get input values
    const pressure = parseFloat(document.getElementById('pressure').value);
    const diameter = parseFloat(document.getElementById('diameter').value);
    const viscosity = parseFloat(document.getElementById('viscosity').value);

    // Validate input
    if (isNaN(pressure) || isNaN(diameter) || isNaN(viscosity) || pressure <= 0 || diameter <= 0 || viscosity <= 0) {
        document.getElementById('result').textContent = "⚠️ Please enter valid positive numbers for all fields.";
        return;
    }

    // Calculate flow rate using Hagen-Poiseuille equation
    const radius = diameter / 2;
    const flowRate = (Math.PI * Math.pow(radius, 4) * pressure) / (8 * viscosity); // m³/s

    // Display result
    document.getElementById('result').textContent = `🌊 Flow Rate: ${flowRate.toFixed(4)} m³/s`;
});
