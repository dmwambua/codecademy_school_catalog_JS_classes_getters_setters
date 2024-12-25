class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(numberOfStudents) {
        if (typeof numberOfStudents === "number") {
            this._numberOfStudents = numberOfStudents;
        }
        else {
            console.log("Invalid input: numberOfStudents must be set to a Number.");
        }
    }
    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers) {
        const i = Math.floor(substituteTeachers.length * Math.random());
        return substituteTeachers[i];
    }
}

class Primary extends School {
    constructor(name, numberOfStudents, pickUpPolicy) {
        super(name, "primary", numberOfStudents);
        this._pickupPolicy = pickUpPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}
class Middle extends School {
    constructor(name, numberOfStudents) {
        super(name, "middle", numberOfStudents);
    }
}
class High extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, "high", numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        return this._sportsTeams;
    }
}
const LorraineHansbury = new Primary("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");
LorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford',
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli"]));
const alSmith = new High('Al E. Smith', 415, ['Baseball',
    "Basketball",
    "Volleyball",
    "Track and Field"]);
console.log(alSmith.sportsTeams);