let languages = [
    { id: 1, name: "python" },
    { id: 2, name: "javascript" },
    { id: 3, name: "c#" },
    { id: 4, name: "php" },
    { id: 5, name: "java" },
]

let developers = [
    {
        id: 1,
        name: "Bruno Rogulj",
        relationship: relationshipTypeEnum.UNEMPLOYED,
        company: relationshipTypeEnum.UNEMPLOYED,
        type: developerTypeEnum.FRONTEND,
        languagesKnown: [Object.assign(languages[0]), Object.assign(languages[1]), Object.assign(languages[2])]
    },
    {
        id: 2,
        name: "Ante Vuletić",
        relationship: relationshipTypeEnum.FREELANCER,
        company: relationshipTypeEnum.UNEMPLOYED,
        type: developerTypeEnum.BACKEND,
        languagesKnown: [Object.assign(languages[1]), Object.assign(languages[2])]
    },
    {
        id: 3,
        name: "Matija Luketin",
        relationship: relationshipTypeEnum.UNEMPLOYED,
        company: relationshipTypeEnum.UNEMPLOYED,
        type: developerTypeEnum.FULLSTACK,
        languagesKnown: [Object.assign(languages[1]), Object.assign(languages[2])]
    },
    {
        id: 4,
        name: "Nino Borović",
        relationship: relationshipTypeEnum.UNEMPLOYED,
        company: relationshipTypeEnum.UNEMPLOYED,
        type: developerTypeEnum.FULLSTACK,
        languagesKnown: [Object.assign(languages[1]), Object.assign(languages[2])]
    },
]

let companies = [
    {
        id: 1,
        name: "lilcodelab",
        employees: []
    },
    {
        i: 2,
        name: "DUMP",
        employees: []
    }
]
developers.sort(function(a, b) {
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

languages.sort(function(a, b) {
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

companies.sort(function(a, b) {
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


mainMenu(developers, companies, languages)