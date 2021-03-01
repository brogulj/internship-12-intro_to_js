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

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

function formatRelationship(relationship) {
    switch (relationship) {
        case "1":
            relationship = relationshipTypeEnum.EMPLOYED;
            break;
        case "2": 
            relationship = relationshipTypeEnum.FREELANCER; 
            break;
        case "3":
            relationship = relationshipTypeEnum.UNEMPLOYED;
            break; 
        default:
            break;
    }
    if (relationship != relationshipTypeEnum.EMPLOYED && relationship != relationshipTypeEnum.UNEMPLOYED && relationship != relationshipTypeEnum.FREELANCER) {
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
            type = developerTypeEnum.BACKEND;
            break;
        case "2": 
            type = developerTypeEnum.FRONTEND; 
            break;
        case "3":
            type = developerTypeEnum.FULLSTACK;
            break; 
        default:
            type = "wrong input"
            break;
    }
    if (type != "backend" && type != developerTypeEnum.FRONTEND && type != developerTypeEnum.FULLSTACK) {
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


function listDevelopers(developers) {
    let developersList = "";
    developers.forEach(developer => {
        developersList += "ID: " + developer.id + "\n";
        developersList += "Name: " + developer.name + "\n";
        developersList += "Work relationship: " + developer.relationship + "\n";
        developersList += "Employment place: " + developer.company.name + "\n";
        developersList += "Type of developer: " + developer.type + "\n";
        developersList += "Languages known: " + listLanguages(developer.languagesKnown) + "\n";
    });
    return developersList
}

function listCompanies(companies) {
    let companiesList = "";
    companies.forEach(company => {
        companiesList += "ID: " + company.id + "\n";
        companiesList += "Name: " + company.name + "\n";
        companiesList += "Employees: \n";
        if (company.employees != undefined) {
            company.employees.forEach(employee => {
                companiesList += "  " + employee.name + "\n";
            });
        }
    });
    return companiesList;
}

function listLanguages(languages) {
    let languagesList = "";
    languages.forEach(language => {
        languagesList += language.name + "\n";
    });
    return languagesList;
}

function searchDeveloperByName(developers, searchValue) {
    developersMatching = [];
    developers.forEach(developer => {
        if (developer.name.toLowerCase().includes(searchValue.toLowerCase())) {
            developersMatching.push(developer);
        }
    });
    window.alert(listDevelopers(developersMatching));
}

function searchCompanyByName(companies, searchValue) {
    companiesMatching = [];
    companies.forEach(company => {
        if (company.name.toLowerCase().includes(searchValue.toLowerCase())) {
            companiesMatching.push(company);
        }
    });
    window.alert(listCompanies(companiesMatching));
}

function searchByType(developers, searchValue) {
    developersChosen = [];
    developers.forEach(developer => {
        if (developer.type.toLowerCase().includes(searchValue.toLowerCase())) {
            developersChosen.push(developer);
        }
    });
    return listDevelopers(developersChosen);
}

function searchByRelationship(developers, searchValue) {
    developersChosen = [];
    developers.forEach(developer => {
        if (developer.relationship.toLowerCase().includes(searchValue.toLowerCase())) {
            developersChosen.push(developer);
        }
    });
    return listDevelopers(developersChosen);
}

function searchByLanguage(developers, searchValue) {
    developersChosen = [];
    developers.forEach(developer => {
        developer.languagesKnown.forEach(language => {
            if (language.name.toLowerCase().includes(searchValue.toLowerCase())) {
                developersChosen.push(developer);
            }
        });
    });
    return listDevelopers(developersChosen);
}