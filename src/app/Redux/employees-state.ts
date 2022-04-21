import EmployeeModel from "../models/employee.model";
//Employees State - products data neeed in the application level:

export class EmployeesState {
    employees: EmployeeModel[] = []
}
//Employees Action Type -any action which can be done on the above Employees state
export enum EmployeesActionType {
    FetchEmployees = 'FetchEmployees',
    AddEmployee = 'AddEmployee',
    UpdateEmployee = 'UpdateEmployee',
    DeleteEmployee = 'DeleteEmployee'
}
//Employees Action - any single object sent to the store during 'dispatch':

export interface EmployeesAction {
    type: EmployeesActionType
    payload: any 
}
//Employees Action Creators - function for creating EmployeesAction objects. each function crates on Action object:
export function fetchEmployeesAction(employees: EmployeeModel[]): EmployeesAction {
    return {type: EmployeesActionType.FetchEmployees, payload: employees}
}

export function addEmployeeAction(employee: EmployeeModel): EmployeesAction {
    return {type: EmployeesActionType.AddEmployee, payload: employee}
}

export function udpateEmployeeAction(employee: EmployeeModel): EmployeesAction {
    return {type: EmployeesActionType.UpdateEmployee, payload: employee}
}
export function deleteEmployeeAction(id: number):EmployeesAction {
    return {type: EmployeesActionType.DeleteEmployee, payload: id}
}

//Employees Reducer - the main function performing any action on employees state: 
//the new EmployeesState() is a default valuue for the first time only 
export function employeesReducer(currentState = new EmployeesState(), action: EmployeesAction): EmployeesState {
    const newState = {...currentState}
    switch(action.type) {
        case EmployeesActionType.FetchEmployees:
          newState.employees = action.payload
        break;
        case EmployeesActionType.AddEmployee:
          newState.employees.push(action.payload)
        break;
        case EmployeesActionType.UpdateEmployee:
        const indexToUpdate = newState.employees.findIndex(e => e.id === action.payload.id)
        if (indexToUpdate >= 0) {
            newState.employees[indexToUpdate] = action.payload
        }
        break;
        case EmployeesActionType.DeleteEmployee:
            const indexToDelete = newState.employees.findIndex(e => e.id === action.payload)
            if (indexToDelete >=0) {

                newState.employees.splice(indexToDelete, 1)
            }
        break;
    }

    return newState
}
