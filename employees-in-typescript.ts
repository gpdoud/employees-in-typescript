// import { Employee } from './Employee';

function ready() {

	var tbodyCtrl = document.getElementById('employees');

	let employees: Employee[] = [];
	let phuc = new Employee("1","Phuc",new Date(), "phuc@max.com", "CEO", true, 1000000);
	employees.push(phuc);
	let eric = new Employee("2","Eric", new Date(), "eric@max.com", "CIO", true, 750000);
	employees.push(eric);
	let elisha = new Employee("3","elisha", new Date(), "elisha@max.com", "CSO", true, 750000);
	employees.push(elisha);
	let long = new Employee("4","long", new Date(), "long@max.com", "CMO", true, 750000);
	employees.push(long);
	let kim = new Employee("5","kim", new Date(), "kim@max.com", "CPO", true, 750000);
	employees.push(kim);
	console.log(employees);

	for(let idx = 0; idx < employees.length; idx++) {
		let employee = employees[idx];
		let trData = "<tr>";
		trData += "<td>" + employee.id + "</td>";
		trData += "<td>" + employee.name + "</td>";
		trData += "<td>" + employee.dateOfHire.toDateString() + "</td>";
		trData += "<td>" + employee.email + "</td>";
		trData += "<td>" + employee.job + "</td>";
		trData += "<td>" + employee.active + "</td>";
		trData += "<td>" + Number(employee.salary.toFixed(2)).toLocaleString() + "</td>";
		tbodyCtrl.innerHTML += trData;
	}
};

class Employee {
	// properties go here
	id: string;
	name: string;
	dateOfHire: Date;
	email: string;
	job: string;
	active: boolean;
	salary: number;
	// constructor goes here
	constructor(id: string, name: string, dataOfHire: Date, email: string, 
				job: string, active: boolean, salary: number) {
		this.id = id;
		this.name = name;
		this.dateOfHire = dataOfHire;
		this.email = email;
		this.job = job;
		this.active = active;
		this.salary = salary;
	}
	// functions go here
}