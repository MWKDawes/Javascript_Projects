function displayType(character) {
    var charaterType = character.getAttribute("data-character-type");
    alert(charaterType + " is the main killer in the " + character.innerHTML + " universe!");
}