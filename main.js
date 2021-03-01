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
        languagesKnown: [languages[1], languages[2], languages[0]],
    },
    {
        id: 2,
        name: "Ante Vuletić",
        relationship: relationshipTypeEnum.FREELANCER,
        company: relationshipTypeEnum.UNEMPLOYED,
        type: developerTypeEnum.BACKEND,
        languagesKnown: [languages[1], languages[2], languages[0]]
    },
    {
        id: 3,
        name: "Matija Luketin",
        relationship: relationshipTypeEnum.UNEMPLOYED,
        company: relationshipTypeEnum.UNEMPLOYED,
        type: developerTypeEnum.FULLSTACK,
        languagesKnown: [languages[1], languages[2], languages[0]]
    }
]

let companies = [
    {
        id: 1,
        name: "lilcodelab",
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