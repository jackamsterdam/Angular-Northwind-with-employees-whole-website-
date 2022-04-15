import { NotifyService } from './../../../services/notify.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import EmployeeModel from 'src/app/models/employee.model';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
 employee: EmployeeModel

 @ViewChild('imageBox')
 imageBoxRef: ElementRef<HTMLInputElement>

  constructor(private activatedRoute: ActivatedRoute, private notify: NotifyService, private employeesService: EmployeesService, private router: Router) { }

  async ngOnInit() {
    try {
           const id = +this.activatedRoute.snapshot.params['id']
          this.employee = await this.employeesService.getOneEmployee(id)
    } catch (err: any) {
      this.notify.error(err)
    }
 

  }

  async update() {
    try {
      this.employee.image = this.imageBoxRef.nativeElement.files[0]

      await this.employeesService.updateEmployee(this.employee)
      this.notify.success('העובד עודכן')
      this.router.navigateByUrl('/employees')


    } catch (err: any) {
      this.notify.error(err)
    }
  }

}
