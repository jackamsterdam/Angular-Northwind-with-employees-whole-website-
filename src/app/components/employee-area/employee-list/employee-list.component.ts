import { Component, OnInit } from '@angular/core';
import EmployeeModel from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeImagesUrl = environment.employeeImagesUrl
  employees: EmployeeModel[]
  constructor(private employeesService: EmployeesService) { }

  async ngOnInit(){
try {
  
     this.employees =  await this.employeesService.getAllEmployees()
     console.log(this.employees)
} catch (err: any) {
  alert(err.message)
}

  }

  formatDate(date: string): string {
    const d = new Date(date)
    return d.toDateString()
  }

}
