function LOTR_Dictionary() {  /*Defined function to create a dictionary*/
    var Narya = {  /*Defined variable Narya and assigned attributes in following code*/
        AltNames: "Ring of Fire, Red Ring",
        Owner: "Gandalf",
        Color: "Red",
        Ability: "Hope",
    }

    var Nenya = {   /*Defined variable Nenya and assigned attributes in following code*/
        AltNames: "Ring of Water, White Ring, Ring of Adamant",
        Owner: "Galadriel",
        Color: "White",
        Ability: "Protection",
    };

    var Vilya = {  /*Defined variable Vilya and assigned attributes in following code*/
        AltNames: "Ring of Air, Blue Ring, Dominant Ring, Ring of Sapphire",
        Owner: "Gil-galad/Elrond",
        Color: "Blue",
        Ability: "Speculated Elemental Control, Healing, and possibly foresight",
    };
    
    var TheOneRing = {   /*Defined variable TheOneRing and assigned attributes in following code*/
        AltNames: "The One Ring to Rule Them All, Ring of Power, Ruling Ring, Isildur's Bane",
        Owner: "Sauron",
        Color: "Gold",
        Ability: "Domination Through Evil",
    };
    delete Vilya.Owner   /*Deleted Vilya.Owner value*/
    document.getElementById("Dictionary").innerHTML = Vilya.Owner; /*Attempt to define element with Vilya.owner*/
}