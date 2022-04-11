import { Component} from '@angular/core';
import { Router } from '@angular/router';
import EmployeeModel from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent{
 employee = new EmployeeModel()
  constructor(private employeesService: EmployeesService, private router: Router) { }

async submit() {
  try {
    console.log(this.employee)
    const addedEmployee = await this.employeesService.addEmployee(this.employee)
    alert('העובד הוסף למאגר' + this.employee.id)
   this.router.navigateByUrl('/employees')
    
  } catch (err: any) {
    alert(err.message)
  }
}



}
