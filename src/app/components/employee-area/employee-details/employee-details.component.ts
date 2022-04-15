import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import EmployeeModel from 'src/app/models/employee.model';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeImagesUrl = environment.employeeImagesUrl
  employee: EmployeeModel
  constructor(private activatedRoute: ActivatedRoute, private employeesService: EmployeesService, private notify: NotifyService, private router: Router) { }

  async ngOnInit(){
  try {
      const id = +this.activatedRoute.snapshot.params['id']
      this.employee = await this.employeesService.getOneEmployee(id)
  } catch (err: any) {
    this.notify.error(err)
  }
  
  }

  formatDate(date: string):string {
    const d = new Date(date)
    return d.toDateString()
  }

  async deleteEmployee() {
    try {
      const ok = confirm('האם אתה בטוח?')
      if(!ok) return 
      await this.employeesService.deleteEmployee(this.employee.id)
      this.notify.success('העובד נמחק')
      this.router.navigateByUrl('/employees')
    } catch (err: any) {
      this.notify.error(err)
    }
  }

}
