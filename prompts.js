function addDeveloperPrompt(developers, languages, companies) {
    let id = getMaxId(developers) + 1;
    let name = formatDeveloperName(window.prompt("Please enter the full name of the developer", "enter the name here"));
    let relationship = formatRelationship(window.prompt("Please enter the relationship of the developer: \n1 (employed), 2 (freelancing), 3 (unemployed)", "enter the number here"))
    let company = "unemployed";
    if (relationship != "unemployed" && relationship != "wrong input") {
        company = window.prompt("Enter the company name: ", "enter the name here")
        if (!companies.includes(comp => comp.name.toLowerCase() == company.toLowerCase())) {
            company = "wrong input"
        } else {
            company = companies.find(comp => comp.name.toLowerCase() == company.toLowerCase)
        }
    }
    let type = formatType(window.prompt("Please enter the type of the developer: \n1 (backend), 2 (frontend), 3 (fullstack)", "enter the number here"))
    let languagesKnown = []
    languagesKnown.push(formatLanguage(window.prompt("Enter the name of the language developer knows", "enter the name here"), languages));
    if (window.confirm("Are you sure you want to add this developer")
        && relationship != "wrong input"
        && company != "wrong input"
        && type != "wrong input"
        && !languagesKnown.includes(lang => lang.name == "wrong input")) {
        developers.push(new Developer(id, name, relationship, company, type, languagesKnown));
        companies.find(company).employees.push(developers.find(dev => dev.id == id))
    }
    else {
        alert("Developer not added!")
    }
}

function addCompanyPrompt(companies) {
    let id = getMaxId(companies) + 1;
    let name = window.prompt("Enter the name of the company", "enter the name here");
    if (name != "" && !companies.includes(comp => comp.name.toLowerCase() == name.toLowerCase()))
        companies.push(new Company(id, name));
}

function addLanguagePrompt(languages) {
    let id = getMaxId(languages) + 1;
    let name = window.prompt("Enter the name of the laguage", "enter the name here");
    if (name != "" && !languages.includes(lang => lang.name.toLowerCase() == name.toLowerCase()))
        languages.push(new Language(id, name));
}

function listDevelopers(developers) {
    let developersList = "";
    developers.forEach(developer => {
        developersList += "ID: " + developer.id + "\n";
        developersList += "Name: " + developer.name + "\n";
        developersList += "Work relationship: " + developer.relationship + "\n";
        developersList += "Employment place: " + developer.company.name + "\n";
        developersList += "Type of developer: " + developer.type + "\n";
        developersList += "Languages known: " + developer.languages + "\n";
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

function chooseByIdPrompt(list, type) {
    switch (type) {
        case "developer":
            choice = window.prompt(listDevelopers(), "enter the developer id here")
            break;
        case "company":
            choice = window.prompt(listCompanies(), "enter the company id here")
        case "language":
            choice = window.prompt(listLanguages(), "enter the language id here")
        default:
            break;
    }
    if (list.includes(element => element.id == choice)) {
        return list.find(element => element.id == choice);
    } else {
        return 0;
    }
}

function editCompanyPrompt(company, companies) {
    let name = window.prompt("Enter the new company name: ", "enter the name here")
    if (name != "" && !companies.includes(comp => comp.name.toLowerCase() == name.toLowerCase()))
        company.name = name;
}

function editDeveloperPrompt(developer, developers, languages, companies) {
    let name = formatDeveloperName(window.prompt("Please enter the full name of the developer", "enter the name here"));
    let relationship = formatRelationship(window.prompt("Please enter the relationship of the developer: \n1 (employed), 2 (freelancing), 3 (unemployed)", "enter the number here"))
    let company = "unemployed";
    if (relationship != "unemployed" && relationship != "wrong input") {
        company = window.prompt("Enter the company name: ", "enter the name here")
        if (!companies.includes(comp => comp.name.toLowerCase() == company.toLowerCase())) {
            company = "wrong input"
        } else {
            company = companies.find(comp => comp.name.toLowerCase() == company.toLowerCase)
        }
    }
    let type = formatType(window.prompt("Please enter the type of the developer: \n1 (backend), 2 (frontend), 3 (fullstack)", "enter the number here"))
    let languagesKnown = []
    languagesKnown.push(formatLanguage(window.prompt("Enter the name of the language developer knows", "enter the name here"), languages));
    if (window.confirm("Are you sure you want to edit this developer")
        && relationship != "wrong input"
        && company != "wrong input"
        && type != "wrong input"
        && !languagesKnown.includes(lang => lang.name == "wrong input")) {
        developers.indexOf(developer) = new Developer(developer.id, name, relationship, company, type, languagesKnown);
        companies.find(company).employees.push(developers.find(dev => dev.id == id))
    }
    else {
        alert("Developer not edited!")
    }
}

