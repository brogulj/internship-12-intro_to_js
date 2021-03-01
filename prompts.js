function addDeveloperPrompt(developers, languages, companies) {
    let id = getMaxId(developers) + 1;
    let name = formatDeveloperName(window.prompt("Please enter the full name of the developer", "enter the name here"));
    let relationship = formatRelationship(window.prompt("Please enter the relationship of the developer: \n1 (employed), 2 (freelancing), 3 (unemployed)", "enter the number here"));
    let company = relationshipTypeEnum.UNEMPLOYED;

    if (relationship == relationshipTypeEnum.EMPLOYED && relationship != "wrong input") {
        company = window.prompt("Enter the company name: ", "enter the name here");
        if (!companies.some(comp => comp.name.toLowerCase() == company.toLowerCase())) {
            company = relationshipTypeEnum.UNEMPLOYED;
            relationship = relationshipTypeEnum.UNEMPLOYED;
        } else {
            company = companies.find(comp => comp.name.toLowerCase() == company.toLowerCase());
        }
    }

    let type = formatType(window.prompt("Please enter the type of the developer: \n1 (backend), 2 (frontend), 3 (fullstack)", "enter the number here"))
    let languagesKnown = [];

    language = Object.assign(formatLanguage(window.prompt("Enter the name of the language developer knows", "enter the name here"), languages));
    languagesKnown.push(language);

    if (window.confirm("Are you sure you want to add this developer")
        && relationship != "wrong input"
        && type != "wrong input"
        && languagesKnown[0] != "wrong input") {
        developers.push({ id: id, name: name, relationship: relationship, company: company, type: type, languagesKnown: languagesKnown });

        developers.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

        if (relationship == relationshipTypeEnum.EMPLOYED) {
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

    if (name != "" && !companies.some(comp => comp.name.toLowerCase() == name.toLowerCase())) {
        companies.push({ id: id, name: name, employees: [] });

        companies.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }
}

function addLanguagePrompt(languages) {
    let id = getMaxId(languages) + 1;
    let name = window.prompt("Enter the name of the laguage", "enter the name here");

    if (name != "" && !languages.some(lang => lang.name.toLowerCase() == name.toLowerCase())) {
        languages.push({ id: id, name: name });

        languages.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }

}

function addLanguageToDeveloperPrompt(developers, languages) {
    developer = chooseByIdPrompt(developers, "developer");
    language = chooseByIdPrompt(languages, "language");
    if (!developer.languagesKnown.includes(language)) {
        developer.languagesKnown.push(language);
    }
}

function chooseByIdPrompt(list, type) {
    switch (type) {
        case "developer":
            choice = window.prompt(listDevelopers(list), "enter the developer id here");
            break;
        case "company":
            choice = window.prompt(listCompanies(list), "enter the company id here");
            break;
        case "language":
            choice = window.prompt(listLanguages(list), "enter the language id here");
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

function editCompanyPrompt(company, companies) {
    if (company == 0) {
        alert("wrong input");
        return;
    }

    let name = window.prompt("Enter the new company name: ", "enter the name here");

    if (name != "" && !companies.some(comp => comp.name.toLowerCase() == name.toLowerCase())) {
        companies.find(comp => comp.name == company.name).name = name;
        companies.find(comp => comp.name == comp.name).employees.forEach(employee => {
            employee.company = companies.find(comp => comp.name == comp.name);
        })

        companies.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }
}

function editLanguagePrompt(language, languages) {
    if (language == 0) {
        alert("wrong input");
        return;
    }

    let name = window.prompt("Enter the new language name: ", "enter the name here");

    if (name != "" && !languages.some(lang => lang.name.toLowerCase() == name.toLowerCase())) {
        languages[languages.indexOf(language)].name = name;
        languages.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }
}

function editDeveloperPrompt(developer, developers, languages, companies) {
    if (developer == 0) {
        alert("wrong input");
        return;
    }

    let name = formatDeveloperName(window.prompt("Please enter the full name of the developer", "enter the name here"));
    let relationship = formatRelationship(window.prompt("Please enter the relationship of the developer: \n1 (employed), 2 (freelancing), 3 (unemployed)", "enter the number here"));
    let company = relationshipTypeEnum.UNEMPLOYED;

    if (relationship == relationshipTypeEnum.EMPLOYED && relationship != "wrong input") {
        company = window.prompt("Enter the company name: ", "enter the name here");
        if (!companies.some(comp => comp.name.toLowerCase() == company.toLowerCase())) {
            company = relationshipTypeEnum.UNEMPLOYED;
            relationship = relationshipTypeEnum.UNEMPLOYED;
        } else {
            company = companies.find(comp => comp.name.toLowerCase() == company.toLowerCase());
        }
    }

    let type = formatType(window.prompt("Please enter the type of the developer: \n1 (backend), 2 (frontend), 3 (fullstack)", "enter the number here"));
    let languagesKnown = [];

    language = Object.assign(formatLanguage(window.prompt("Enter the name of the language developer knows", "enter the name here"), languages));
    languagesKnown.push(language);

    if (window.confirm("Are you sure you want to edit this developer")
        && relationship != "wrong input"
        && type != "wrong input"
        && languagesKnown[0] != "wrong input") {
        developers[developers.indexOf(developer)] = { id: developer.id, name: name, relationship: relationship, company: company, type: type, languagesKnown: languagesKnown };

        if (relationship == relationshipTypeEnum.EMPLOYED) {
            companies.find(comp => comp.name == company.name).employees.push(developers.find(dev => dev.id === developer.id));
        }

        developers.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }
    else {
        alert("Developer not edited!");
    }
}
