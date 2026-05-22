// Loan Eligibility Checker

function checkEligibility() {

    let name = document.getElementById("name").value;

    let salary = parseFloat(document.getElementById("salary").value);

    let score = parseFloat(document.getElementById("score").value);

    let emi = parseFloat(document.getElementById("emiInput").value);

    let age = parseFloat(document.getElementById("age").value);

    let result = document.getElementById("result");

    let resultText = "";

    if (salary > 30000 && score > 700 && emi < 20000 && age >= 21) {

        let eligibleLoan = salary * 20;

        resultText = "Approved";

        result.innerHTML = `

        <h3>Loan Approved ✅</h3>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Risk Level:</strong> Low</p>

        <p><strong>Eligible Loan Amount:</strong> ₹${eligibleLoan}</p>

        `;

    } else {

        resultText = "Rejected";

        result.innerHTML = `

        <h3>Loan Rejected ❌</h3>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Risk Level:</strong> High</p>

        `;
    }

    // Google Sheets Storage

    fetch("https://script.google.com/macros/s/AKfycbzznLZMbfU0517KPPXpafXGn0T2-DuknDCe-G29UGC3AZU7LYXU7lP6ppU_iMuHX4hM/exec", {

        method: "POST",

        body: JSON.stringify({
            name: name,
            salary: salary,
            score: score,
            emi: emi,
            result: resultText
        })

    })
    .then(response => response.json())
    .then(data => {
        console.log("Data Saved");
    });

}



// Credit Score Analyzer

function analyzeCredit() {

    let score = parseFloat(document.getElementById("creditInput").value);

    let result = document.getElementById("creditResult");

    if(score >= 750){

        result.innerHTML = `

        <h3>Excellent Credit Score ✅</h3>

        <p>You have very low financial risk.</p>

        `;

    }

    else if(score >= 650){

        result.innerHTML = `

        <h3>Good Credit Score ⚡</h3>

        <p>Your financial profile is stable.</p>

        `;

    }

    else{

        result.innerHTML = `

        <h3>Poor Credit Score ❌</h3>

        <p>Improve repayment history and reduce debts.</p>

        `;
    }
}



// EMI Calculator

function calculateEMI() {

    let P = parseFloat(document.getElementById("loan").value);

    let annualRate = parseFloat(document.getElementById("rate").value);

    let N = parseFloat(document.getElementById("time").value);

    let result = document.getElementById("emiResult");

    let R = annualRate / 12 / 100;

    let EMI = (P * R * Math.pow(1 + R, N)) /

              (Math.pow(1 + R, N) - 1);

    if(isNaN(EMI)){

        result.innerHTML = `

        <h3>Please Enter Valid Inputs</h3>

        `;

    }

    else{

        result.innerHTML = `

        <h3>Monthly EMI: ₹${EMI.toFixed(2)}</h3>

        <p>Loan Amount: ₹${P}</p>

        <p>Interest Rate: ${annualRate}%</p>

        `;

    }

}
