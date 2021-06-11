import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { Observable } from 'rxjs';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
  
  public observableObj:Observable<IEmployee[]> = null;

  constructor(private emplService:DataServiceService,private router:Router) {  }

  emplDatafromService=[];

  ngOnInit(): void {
    this.observableObj = this.emplService.getAllEmployes()
    this.observableObj.subscribe(i=>{
      this.emplDatafromService=i
    });
  }

  delEmployee(id){
    this.emplService.deleteEmployee(id);
  }

  editEmployee(id){
   const employeeForEdit = this.emplService.getSingleEmployee(id);
   this.router.navigate(["addEmployee"],{queryParams:employeeForEdit})

    // console.log(employeeForEdit);
    

  }

  // editEmployee(id){
  //   const employeeForEdit = this.emplService.empArray;
  //   this.router.navigate(["addEmployee"],{queryParams:employeeForEdit})
 
  //  //  console.log(employeeForEdit);
     
 
  //  }
  

}
