let developers = [
    new Developer(1, "Bruno Rogulj", "unemployed", "unemployed", "fullstack", []),
    new Developer(2, "Bruno Rogulj2", "unemployed", "unemployed", "fullstack", [])
]
let companies = [
]
let languages = [
    new Language(1, "python"),
    new Language(2, "javascript"),
    new Language(3, "c#"),
    new Language(4, "php"),
    new Language(5, "java"),

]

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
            removeMenu();
            break;
        default:
            alert("wrong input")
            break;
    }
    mainMenu(developers, companies, languages)
}

function addMenu(developers, companies, languages) {
    let choice = window.prompt("1. Add Developer\n2. Add Company\n3. Add Language", "enter choice here");
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
            arrayRemove(developers, developer);
            arrayRemove(developer.company.employees, developer)
            break;
        case "2":
            company = chooseByIdPrompt(companies, "company");
            developers.forEach(developer => {
                if (developer.company == company) {
                    developer.company = "unemployed"
                    developer.relationship = "unemployed"
                }
            });
            arrayRemove(companies, company);
            break;
        case "3":
            language = chooseByIdPrompt(languages, "language")
            developers.forEach(developer => {
                arrayRemove(developer.languagesKnown, language)
            });
            arrayRemove(languages, language);
            break;
        default:
            alert("wrong input")
            break;
    }
    mainMenu(developers, companies, languages);
}


mainMenu(developers, companies, languages)