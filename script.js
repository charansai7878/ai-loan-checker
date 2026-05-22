function checkEligibility() {

    let salary = document.getElementById("salary").value;
    let score = document.getElementById("score").value;
    let emi = document.getElementById("emi").value;
    let age = document.getElementById("age").value;

    let result = document.getElementById("result");

    if (salary > 30000 && score > 700 && emi < 20000 && age >= 21) {

        let eligibleLoan = salary * 20;

        result.innerHTML = `
        <h3>Loan Approved ✅</h3>
        <p>Risk Level: Low</p>
        <p>Eligible Loan Amount: ₹${eligibleLoan}</p>
        `;

    } else {

        result.innerHTML = `
        <h3>Loan Rejected ❌</h3>
        <p>Risk Level: High</p>
        `;
    }
}

// Credit Score Analyzer
function analyzeCredit() {

    let score = document.getElementById("creditInput").value;
    let result = document.getElementById("creditResult");

    if(score >= 750){
        result.innerHTML = "Excellent Credit Score ✅";
    }
    else if(score >= 650){
        result.innerHTML = "Good Credit Score ⚡";
    }
    else{
        result.innerHTML = "Poor Credit Score ❌";
    }
}

// EMI Calculator
function calculateEMI() {

    let P = document.getElementById("loan").value;
    let annualRate = document.getElementById("rate").value;
    let N = document.getElementById("time").value;

    let R = annualRate / 12 / 100;

    let EMI = (P * R * Math.pow(1 + R, N)) /
              (Math.pow(1 + R, N) - 1);

    document.getElementById("emiResult").innerHTML =
        `Monthly EMI: ₹${EMI.toFixed(2)}`;
}