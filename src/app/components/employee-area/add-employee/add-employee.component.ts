import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import EmployeeModel from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
// Decidd to d Reactive forms for add employee and tempalte forms for update employee 
export class AddEmployeeComponent implements OnInit{
 employee = new EmployeeModel()  //Why do i nbeed this?
//  employee: EmployeeModel

  employeeForm: FormGroup

  firstNameInput: FormControl
  lastNameInput: FormControl 
  titleInput: FormControl 
  titleOfCourtesyInput: FormControl 
  birthDateInput: FormControl 
  addressInput: FormControl 
  cityInput: FormControl 
  countryInput: FormControl 
  homePhoneInput: FormControl
  imageInput: FormControl 

  @ViewChild('imageBox')
  imageBoxRef: ElementRef<HTMLInputElement>


  constructor(private employeesService: EmployeesService, private router: Router, private notify: NotifyService) { }

  ngOnInit(): void {
    try {   //!Do i need try catch for this and does it go in ngoninit??
      //!It works even without Validators ??? 
      this.firstNameInput = new FormControl('', [Validators.required])
      this.lastNameInput = new FormControl('', [Validators.required, Validators.minLength(3)]) 
      this.titleInput = new FormControl('', [Validators.required, Validators.minLength(3)]) 
      this.titleOfCourtesyInput = new FormControl('', [Validators.required, Validators.minLength(3)])
      this.birthDateInput = new FormControl('', [Validators.required, Validators.minLength(3)]) 
      this.addressInput = new FormControl('', [Validators.required, Validators.minLength(10)])
      this.cityInput = new FormControl('', [Validators.required, Validators.minLength(3)]) 
      this.countryInput = new FormControl('', [Validators.required, Validators.minLength(3)])
      this.homePhoneInput = new FormControl('', [Validators.required, Validators.minLength(3)])
      this.imageInput = new FormControl() 
      this.employeeForm = new FormGroup({
        firstNameBox: this.firstNameInput,
        lastNameBox:this.lastNameInput ,
        titleBox :this.titleInput,
        titleOfCourtesyBox:this.titleOfCourtesyInput ,
        birthDateBox :this.birthDateInput,
        addressBox :this.addressInput,
        cityBox :this.cityInput,
        countryBox:this.countryInput,
        homePhoneBox :this.homePhoneInput,
        imageBox :this.imageInput
      })
    } catch (err: any) {
      this.notify.error(err)
    }
  
  }











async add() {
  try {
  console.log('emplyee before ', this.employee);
  
  this.employee.firstName = this.firstNameInput.value
  this.employee.lastName = this.lastNameInput.value
  this.employee.title = this.titleInput.value
  this.employee.titleOfCourtesy = this.titleOfCourtesyInput.value
  this.employee.birthDate = this.birthDateInput.value
  this.employee.address = this.addressInput.value
  this.employee.city = this.cityInput.value
  this.employee.country = this.countryInput.value
  this.employee.homePhone = this.homePhoneInput.value

  this.employee.image = this.imageBoxRef.nativeElement.files[0]






    console.log('employee after ', this.employee)
    const addedEmployee = await this.employeesService.addEmployee(this.employee)
    this.notify.success('העובד הוסף למאגר' + this.employee.id)
   this.router.navigateByUrl('/employees')
    
  } catch (err: any) {
    this.notify.error(err)
  }
}



}
