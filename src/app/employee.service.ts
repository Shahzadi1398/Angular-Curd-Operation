import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8081/api";
  constructor(private httpClient : HttpClient) { }

  getEmployeesList() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`+`/list`);
  }

  createEmployee(employee :Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`+ `/save`,employee);
  }

  getEmployee(id: number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/list/${id}`);
  }
  updateEmployee(id: number,employee:Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update/${id}`,employee);
  }
  
  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }


}
