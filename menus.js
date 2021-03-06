
function mainMenu(developers, companies, languages) {
    let choice = window.prompt("1. Search\n2. Add\n3. List\n4. Edit\n5. Remove", "enter choice here");

    switch (choice) {
        case "1":
            searchMenu(developers, companies, languages);
            break;
        case "2":
            addMenu(developers, companies, languages);
            break;
        case "3":
            listMenu(developers, companies, languages);
            break;
        case "4":
            editMenu(developers, companies, languages);
            break;
        case "5":
            removeMenu(developers, companies, languages);
            break;
        default:
            alert("wrong input")
            break;
    }

    mainMenu(developers, companies, languages)
}

function searchMenu(developers, companies, languages) {
    let choice = window.prompt("1. Search Developers\n2. Search Companies\n3. Search Developers by Type\n4. Search Developers by Relationship\n5. Search Developers by Language", "enter choice here");

    switch (choice) {
        case "1":
            searchDeveloperByName(developers, window.prompt("Enter the name of the developer you want to find", "Enter the name here"));
            break;
        case "2":
            searchCompanyByName(companies, window.prompt("Enter the name of the company you want to find", "Enter the name here"));
            break;
        case "3":
            alert(searchByType(developers, window.prompt("enter the type of the developer you want to search for")))
            break;
        case "4":
            alert(searchByRelationship(developers, window.prompt("Enter the type of the relationship you want to search for")));
            break;
        case "5":
            alert(searchByLanguage(developers, window.prompt("Enter the name of the language you want to search for:")))
            break;
        default:
            alert("wrong input")
            break;
    }

    mainMenu(developers, companies, languages);

}

function addMenu(developers, companies, languages) {
    let choice = window.prompt("1. Add Developer\n2. Add Company\n3. Add Language\n4. Add Language to Developer", "enter choice here");

    switch (choice) {
        case "1":
            addDeveloperPrompt(developers, languages, companies)
            break;
        case "2":
            addCompanyPrompt(companies)
            break;
        case "3":
            addLanguagePrompt(languages)
            break;
        case "4":
            addLanguageToDeveloperPrompt(developers, languages);
            break;
        default:
            alert("wrong input")
            break;
    }

    mainMenu(developers, companies, languages);
}

function listMenu(developers, companies, languages) {
    let choice = window.prompt("1. List Developers\n2. List Companies\n3. List Languages\n", "enter choice here");

    switch (choice) {
        case "1":
            alert(listDevelopers(developers));
            break;
        case "2":
            alert(listCompanies(companies));
            break;
        case "3":
            alert(listLanguages(languages));
            break;
        default:
            alert("wrong input")
            break;
    }

    mainMenu(developers, companies, languages);
}

function editMenu(developers, companies, languages) {
    let choice = window.prompt("1. Edit Developers\n2. Edit Companies\n3. Edit Languages\n", "enter choice here");

    switch (choice) {
        case "1":
            editDeveloperPrompt(chooseByIdPrompt(developers, "developer"), developers, languages, companies);
            break;
        case "2":
            editCompanyPrompt(chooseByIdPrompt(companies, "company"), companies)
            break;
        case "3":
            editLanguagePrompt(chooseByIdPrompt(languages, "company"), languages)
            break;
        default:
            alert("wrong input")
            break;
    }

    mainMenu(developers, companies, languages);
}

function removeMenu(developers, companies, languages) {
    let choice = window.prompt("1. Remove Developers\n2. Remove Companies\n3. Remove Languages\n", "enter choice here");

    switch (choice) {
        case "1":
            developer = chooseByIdPrompt(developers, "developer");
            if (!window.confirm("Are you sure you want to delete that?")) {break;}
            removeItemOnce(developers, developer);
            if (developer.relationship === relationshipTypeEnum.EMPLOYED) {
                removeItemOnce(developer.company.employees, developer);
            }
            break;
        case "2":
            company = chooseByIdPrompt(companies, "company");
            if (!window.confirm("Are you sure you want to delete that?")) {break;}
            company.employees.forEach(developer => {
                developer.company = relationshipTypeEnum.UNEMPLOYED
                developer.relationship = relationshipTypeEnum.UNEMPLOYED
            });
            removeItemOnce(companies, company);
            break;
        case "3":
            language = chooseByIdPrompt(languages, "language")
            if (!window.confirm("Are you sure you want to delete that?")) {break;}
            
            developers.forEach(developer => {
                if (developer.languagesKnown.some(lang => lang.id == language.id))
                    removeItemOnce(developer.languagesKnown, developer.languagesKnown.find(lang => lang.id = language.id));
            });
            removeItemOnce(languages, language);
            break;
        default:
            alert("wrong input")
            break;
    }

    mainMenu(developers, companies, languages);
}