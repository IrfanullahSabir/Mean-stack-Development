import { Injectable } from '@angular/core';
import { Employee,IEmployee } from './employee';
import { of, Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

   empArray:Array<Employee>=[
    {id:1,name:"irfan", cnic:"1210128743195",salary:10000 },
  ];
  

  constructor() { }

  addNewEmployes(emp:IEmployee):void{
   this.empArray.push(emp);
  }

  getAllEmployes():Observable<IEmployee[]>{
    return of(this.empArray)
  }

  getSingleEmployee(id):Employee{
    const index = this.empArray.findIndex(item => item.id === id);
    return this.empArray[index];
    
    
  }
  

  deleteEmployee(id):void{
    
    const index = this.empArray.findIndex(item => item.id === id);
    this.empArray.splice(index,1);
 
  }

  updateEmployee(emp:IEmployee,id):void{

     const index = this.empArray.findIndex(item => item.id == id);
     this.empArray[index] = emp;
  }




}


 


