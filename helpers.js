function formatDeveloperName(name) {
    let nameAndSurname = name.split(" ");
    for (index = 0; index < 2; index++) {
        for (letter = 0; letter < nameAndSurname[index]; letter++) {
            if (letter != 0) {
                nameAndSurname.charAt(letter).toUpperCase();
            } else {
                nameAndSurname.charAt(letter).toLowerCase();
            }
        }
    }
    return nameAndSurname[1] + " " + nameAndSurname[2];
}

function formatRelationship(relationship) {
    switch (relationship) {
        case "1":
            relationship = "employed";
            break;
        case "2": 
            relationship = "freelancing"; 
            break;
        case "3":
            relationship = "unemployed";
            break; 
        default:
            break;
    }
    if (relationship != "employed" && relationship != "unemployed" && relationship != "freelancing") {
        relationship = "wrong input";
        alert("wrong relationship")
    }
    return relationship; 
}

function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

function formatType(type) {
    switch (type) {
        case "1":
            type = "backend";
            break;
        case "2": 
            type = "frontend"; 
            break;
        case "3":
            type = "fullstack";
            break; 
        default:
            type = "wrong input"
            break;
    }
    if (type != "backend" && type != "frontend" && type != "fullstack") {
        type = "wrong input";
        alert("wrong relationship")
    }
    return type; 
}

function formatLanguage(language, languages) {
    language = language.toLowerCase(); 
    if (!languages.includes(language)) {
        return; 
    } else {
        return languages.find(lang => lang.name == language);
    }
}

function getMaxId(elements) {
    maxId = 0;
    elements.forEach(element => {
        if (element.id > maxId) {
            maxId = element.id;
        }
    });
    return maxId;
}