import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import EmployeeModel from '../models/employee.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  async getAllEmployees():Promise<EmployeeModel[]>{
    const employees = firstValueFrom(this.http.get<EmployeeModel[]>(environment.employeesUrl))
    return employees 
  }

  async getOneEmployee(id: number) :Promise<EmployeeModel>{
    const employee = firstValueFrom(this.http.get<EmployeeModel>(environment.employeesUrl + id))
    return employee 
  }

  async addEmployee(employee: EmployeeModel):Promise<EmployeeModel> {
    // Convert EmployeeModel into FormData: ( for files/images)
    const formData = new FormData()
    formData.append('firstName', employee.firstName)
    formData.append('lastName', employee.lastName)
    formData.append('title', employee.title)
    formData.append('titleOfCourtesy', employee.titleOfCourtesy)
    formData.append('birthDate', employee.birthDate)
    formData.append('address', employee.address)
    formData.append('city', employee.city)
    formData.append('country', employee.country)
    formData.append('homePhone', employee.homePhone.toString())
    formData.append('image', employee.image)
    const addedEmployee = firstValueFrom(this.http.post<EmployeeModel>(environment.employeesUrl, formData))
    return addedEmployee
  }

  async updateEmployee(employee: EmployeeModel):Promise<EmployeeModel> {
    const formData = new FormData()
    formData.append('id', employee.id.toString())
    formData.append('firstName', employee.firstName)
    formData.append('lastName', employee.lastName)
    formData.append('title', employee.title)
    formData.append('titleOfCourtesy', employee.titleOfCourtesy)
    formData.append('birthDate', employee.birthDate)
    formData.append('address', employee.address)
    formData.append('city', employee.city)
    formData.append('country', employee.country)
    formData.append('homePhone', employee.homePhone.toString())
    formData.append('image', employee.image)
    const updatedEmployee = firstValueFrom(this.http.put<EmployeeModel>(environment.employeesUrl + employee.id, formData))
    return updatedEmployee
  }

  async deleteEmployee(id: number):Promise<void> {
    await firstValueFrom(this.http.delete(environment.employeesUrl + id))
  }
}
