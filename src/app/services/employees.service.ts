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
    const addedEmployee = firstValueFrom(this.http.post<EmployeeModel>(environment.employeesUrl, employee))
    return addedEmployee
  }
}
