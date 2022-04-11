import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import EmployeeModel from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeImagesUrl = environment.employeeImagesUrl
  employee: EmployeeModel
  constructor(private activatedRoute: ActivatedRoute, private employeesService: EmployeesService) { }

  async ngOnInit(){
  try {
      const id = this.activatedRoute.snapshot.params['id']
      this.employee = await this.employeesService.getOneEmployee(id)
  } catch (err: any) {
    alert(err.message)
  }
  
  }

  formatDate(date: string):string {
    const d = new Date(date)
    return d.toDateString()
  }

}
