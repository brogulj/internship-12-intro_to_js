function addDeveloperPrompt(developers, languages, companies) {
    let id = getMaxId(developers) + 1;
    let name = formatDeveloperName(window.prompt("Please enter the full name of the developer", "enter the name here"));
    let relationship = formatRelationship(window.prompt("Please enter the relationship of the developer: \n1 (employed), 2 (freelancing), 3 (unemployed)", "enter the number here"))
    let company = "unemployed";
    console.log(companies);
    console.log(company);
    if (relationship == "employed" && relationship != "wrong input") {
        company = window.prompt("Enter the company name: ", "enter the name here")
        if (!companies.some(comp => comp.name.toLowerCase() == company.toLowerCase())) {
            company = "unemployed";
            relationship = "unemployed";
        } else {
            company = companies.find(comp => comp.name.toLowerCase() == company.toLowerCase())
        }
    }
    console.log(company)
    let type = formatType(window.prompt("Please enter the type of the developer: \n1 (backend), 2 (frontend), 3 (fullstack)", "enter the number here"))
    let languagesKnown = []
    languagesKnown.push(formatLanguage(window.prompt("Enter the name of the language developer knows", "enter the name here"), languages));
    console.log(languagesKnown)
    if (window.confirm("Are you sure you want to add this developer")
        && relationship != "wrong input"
        && type != "wrong input"
        && languagesKnown[0] != "wrong input") {
        developers.push({ id: id, name: name, relationship: relationship, company: company, type: type, languagesKnown: languagesKnown });
        if (relationship == "employed") {
            companies.find(comp => comp.name == company.name).employees.push(developers.find(dev => dev.id === id));
        }
    }
    else {
        alert("Developer not added!")
    }
}

function addCompanyPrompt(companies) {
    let id = getMaxId(companies) + 1;
    let name = window.prompt("Enter the name of the company", "enter the name here");
    if (name != "" && !companies.some(comp => comp.name.toLowerCase() == name.toLowerCase()))
        companies.push({ id: id, name: name, employees: [] });
}

function addLanguagePrompt(languages) {
    let id = getMaxId(languages) + 1;
    let name = window.prompt("Enter the name of the laguage", "enter the name here");
    if (name != "" && !languages.some(lang => lang.name.toLowerCase() == name.toLowerCase()))
        languages.push({ id: id, name: name });
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

function chooseByIdPrompt(list, type) {
    switch (type) {
        case "developer":
            choice = window.prompt(listDevelopers(list), "enter the developer id here")
            break;
        case "company":
            choice = window.prompt(listCompanies(list), "enter the company id here")
            break;
        case "language":
            choice = window.prompt(listLanguages(list), "enter the language id here")
            break;
        default:
            break;
    }
    if (list.some(element => element.id == choice)) {
        return list.find(element => element.id == choice);
    } else {
        return 0;
    }
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

function editCompanyPrompt(company, companies) {
    if (company == 0) {
        alert("wrong input");
        return
    }
    let name = window.prompt("Enter the new company name: ", "enter the name here")
    console.log(companies);
    if (name != "" && !companies.some(comp => comp.name.toLowerCase() == name.toLowerCase())) {
        companies.find(comp => comp.name == company.name).name = name;
        companies.find(comp => comp.name == comp.name).employees.forEach(employee => {
            employee.company = companies.find(comp => comp.name == comp.name);
        })
    }
    console.log(companies);
}

function editLanguagePrompt(language, languages) {
    if (language == 0) {
        alert("wrong input");
        return;
    }
    let name = window.prompt("Enter the new language name: ", "enter the name here")
    console.log(languages);
    if (name != "" && !languages.some(lang => lang.name.toLowerCase() == name.toLowerCase())) {
        developers.forEach(developer => {
            if (developer.languagesKnown.includes(language)) {
                developer.languagesKnown[developer.languagesKnown.indexOf(language)].name = name;
            }
        });
        languages[languages.indexOf(language)].name = name
    }
}

function editDeveloperPrompt(developer, developers, languages, companies) {
    if (developer == 0) {
        alert("wrong input");
        return
    }
    let name = formatDeveloperName(window.prompt("Please enter the full name of the developer", "enter the name here"));
    let relationship = formatRelationship(window.prompt("Please enter the relationship of the developer: \n1 (employed), 2 (freelancing), 3 (unemployed)", "enter the number here"))
    let company = "unemployed";
    if (relationship == "employed" && relationship != "wrong input") {
        company = window.prompt("Enter the company name: ", "enter the name here")
        if (!companies.some(comp => comp.name.toLowerCase() == company.toLowerCase())) {
            company = "unemployed";
            relationship = "unemployed";
        } else {
            company = companies.find(comp => comp.name.toLowerCase() == company.toLowerCase())
        }
    }
    let type = formatType(window.prompt("Please enter the type of the developer: \n1 (backend), 2 (frontend), 3 (fullstack)", "enter the number here"))
    let languagesKnown = []
    languagesKnown.push(formatLanguage(window.prompt("Enter the name of the language developer knows", "enter the name here"), languages));
    if (window.confirm("Are you sure you want to edit this developer")
    && relationship != "wrong input"
    && type != "wrong input"
    && languagesKnown[0] != "wrong input") {
        developers[developers.indexOf(developer)] = { id: developer.id, name: name, relationship: relationship, company: company, type: type, languagesKnown: languagesKnown };
        if (relationship == "employed") {
            companies.find(comp => comp.name == company.name).employees.push(developers.find(dev => dev.id === developer.id));
        }
    }
    else {
        alert("Developer not edited!")
    }
}
