import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.id, this.employee)
    .subscribe(data => {
      console.log(data);
      this.employee = new Employee();
      this.gotoEmployeeList();
    }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoEmployeeList() {
    this.router.navigate(['/employees']);
  }
}