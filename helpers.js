function formatDeveloperName(name) {
    let nameAndSurname = name.split(" ");
    fullName = "";
    nameAndSurname.forEach(word => {
        word = word.toLowerCase();
        word[0] = word[0].toUpperCase();
        fullName += word + " ";
    });
    return fullName;
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
    if (!languages.some(lang => lang.name = language)) {
        return "wrong input"; 
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
