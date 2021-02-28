class Developer { 
    constructor(id, name, relationship, company, type, languagesKnown) {
        this.id = id;
        this.name = name; 
        this.relationship = relationship; 
        this.company = company; 
        this.type = type; 
        this.languagesKnown = languagesKnown;
    }
}

class Language {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class Company {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
}