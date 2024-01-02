function validateForm() {
    let x = document.forms["Contacts"]["fname"].value;
    let y = document.forms["Contacts"]["lname"].value;
    let z = document.forms["Contacts"]["phone"].value;
    let a = document.forms["Contacts"]["email"].value;

    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }
    if (z == "") {
        alert("Phone number must be filled out");
        return false;
    }
    if (a == "") {
        alert("Email must be filled out");
        return false;
    }
}
