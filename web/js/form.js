/**
 * Created by Murdock on 25/9/2016.
 */
function isFieldEmpty(field) {
    return (field.value == null || field.value == "");
}

function validateForm() {
    var result = true;
    var feedback = "";
    var form = document.forms["contactform"];

    if (isFieldEmpty(form["firstname"])) {
        feedback += "Het verplichte veld 'voornaam' bevat geen geldige tekst\n";
        result = false;
    }

    if (isFieldEmpty(form["lastname"])) {
        feedback += "Het verplichte veld 'achternaam' bevat geen geldige tekst\n";
        result = false;
    }

    if (isFieldEmpty(form["email"])) {
        feedback += "Het verplichte veld 'email' bevat geen geldige tekst\n";
        result = false;
    }

    if (isFieldEmpty(form["zip"])) {
        feedback += "Het verplichte veld 'postcode' bevat geen geldige tekst\n";
        result = false;
    }

    if (isFieldEmpty(form["message"])) {
        feedback += "Het verplichte veld 'bericht' bevat geen geldige tekst\n";
        result = false;
    }

    if (result)
        feedback = "Dankuwel voor uw bericht, we zullen het zo spoedig mogelijk behandelen";

    alert(feedback);
    return result;
}