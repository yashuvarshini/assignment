function checkEligibility() {

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let nationality = document.getElementById("nationality").value;

    let result = document.getElementById("result");

    if (age >= 18 && nationality === "indian") {

        result.innerHTML =
            "🎉 Congratulations, " + name + "!<br><br>" +
            "You are eligible to vote.";

        result.className = "success";

    } else {

        result.innerHTML =
            "Sorry, " + name + ".<br><br>" +
            "You are not eligible to vote.";

        result.className = "error";
    }
}


function resetForm() {

    document.getElementById("name").value = "Varshini";
    document.getElementById("age").value = "";
    document.getElementById("nationality").value = "";

    document.getElementById("result").innerHTML = "";
    document.getElementById("result").className = "";
}