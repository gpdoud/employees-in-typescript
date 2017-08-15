// import { Employee } from './Employee';
function ready() {
    var tbodyCtrl = document.getElementById('employees');
    var employees = [];
    var phuc = new Employee("1", "Phuc", new Date(), "phuc@max.com", "CEO", true, 1000000);
    employees.push(phuc);
    var eric = new Employee("2", "Eric", new Date(), "eric@max.com", "CIO", true, 750000);
    employees.push(eric);
    var elisha = new Employee("3", "elisha", new Date(), "elisha@max.com", "CSO", true, 750000);
    employees.push(elisha);
    var long = new Employee("4", "long", new Date(), "long@max.com", "CMO", true, 750000);
    employees.push(long);
    var kim = new Employee("5", "kim", new Date(), "kim@max.com", "CPO", true, 750000);
    employees.push(kim);
    console.log(employees);
    for (var idx = 0; idx < employees.length; idx++) {
        var employee = employees[idx];
        var trData = "<tr>";
        trData += "<td>" + employee.id + "</td>";
        trData += "<td>" + employee.name + "</td>";
        trData += "<td>" + employee.dateOfHire.toDateString() + "</td>";
        trData += "<td>" + employee.email + "</td>";
        trData += "<td>" + employee.job + "</td>";
        trData += "<td>" + employee.active + "</td>";
        trData += "<td>" + Number(employee.salary.toFixed(2)).toLocaleString() + "</td>";
        tbodyCtrl.innerHTML += trData;
    }
}
;
var Employee = (function () {
    // constructor goes here
    function Employee(id, name, dataOfHire, email, job, active, salary) {
        this.id = id;
        this.name = name;
        this.dateOfHire = dataOfHire;
        this.email = email;
        this.job = job;
        this.active = active;
        this.salary = salary;
    }
    return Employee;
}());
