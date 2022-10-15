
// PersonAccount Details

class PersonAccount {
    constructor(firstName, lastName, incomes, expenses, properties) {
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = incomes
        this.expenses = expenses
        this.properties = properties
    };
    totalIncome() {
        let total = 0;
        this.incomes.forEach(income => {
            total += income;
        });
        console.log("Total income = " + total);
        return total;
    }
    totalExpense() {
        let total = 0;
        this.expenses.forEach(expense => {
            total += expense;
        });
        console.log("Total Expenses = " + total);
        return total;
    }
    addIncome(amount) {
        this.incomes.push(amount);
        console.log(this.incomes);
    }
    addExpense(amount) {
        this.expenses.push(amount);
        console.log(this.expenses);
    }
    accountBalance() {
        let accountBalance = this.totalIncome() - this.totalExpense();
        console.log("Total Account Balance = " + accountBalance);
    }
}
const account = new PersonAccount("Fayaz", "Khan", [40000, 25000, 50000, 60000], [10000, 2400, 36844, 25900], [12000, 1400, 55844, 55987]);
// console.log(account.incomes);
document.write(account.incomes);

account.totalIncome();
account.totalExpense();
account.addIncome(12000);
account.addExpense(15500);
account.accountBalance();
account.addIncome(101260);
account.addExpense(1556);
account.accountBalance();


// 02

class automobile {
    constructor(name, model, color, type) {
        this.name = name
        this.model = model
        this.color = color
        this.type = type === "m" ? "manual" : "auto"
    }
    start() {
        console.log(`${this.name} is ready for drive.`);
    }
    opendoor() {
        console.log(`${this.name}'s door is open.`);
    }
}
class Car extends automobile {
    constructor(name, model, color, type, doors, maxspeed) {
        super(name, model, color, type)
        this.doors = doors
        this.maxspeed = maxspeed
    }
}

const car = new Car("Civic", "2022", "black", "a", "4", "160");
car.start();
car.opendoor();

class Truck extends automobile {
    constructor(name, model, color, type, doors, maxspeed) {
        super(name, model, color, type)
        this.doors = doors
        this.maxspeed = maxspeed
    }
}

const truck = new Truck("Hino", "2015", "white", "m", "2", "120");
truck.start();
truck.opendoor();

class Bus extends automobile {
    constructor(name, model, color, type, doors, maxspeed) {
        super(name, model, color, type)
        this.doors = doors
        this.maxspeed = maxspeed
    }
}
const bus = new Bus("youtang-master", "2020", "yellow", "m", "3", "180");
bus.start();
bus.opendoor();