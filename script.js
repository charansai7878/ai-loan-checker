function checkEligibility() {

    let name = document.getElementById("name").value;
    let salary = document.getElementById("salary").value;
    let score = document.getElementById("score").value;
    let emi = document.getElementById("emi").value;
    let age = document.getElementById("age").value;

    let result = document.getElementById("result");

    let resultText = "";

    if (salary > 30000 && score > 700 && emi < 20000 && age >= 21) {

        let eligibleLoan = salary * 20;

        resultText = "Approved";

        result.innerHTML = `
        <h3>Loan Approved ✅</h3>
        <p>Name: ${name}</p>
        <p>Risk Level: Low</p>
        <p>Eligible Loan Amount: ₹${eligibleLoan}</p>
        `;

    } else {

        resultText = "Rejected";

        result.innerHTML = `
        <h3>Loan Rejected ❌</h3>
        <p>Name: ${name}</p>
        <p>Risk Level: High</p>
        `;
    }

    // Send Data to Google Sheets

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
