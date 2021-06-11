import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee, IEmployee } from '../employee';
import { DataServiceService } from '../data-service.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
 
  public emplDatafromService:Observable<IEmployee[]> = null;
  updateUser={};
  ngIf:boolean=true;
  objToArray = Object.values(this.updateUser)

  constructor(private emplService:DataServiceService,private route:ActivatedRoute, private router:Router) {  }

  ngOnInit(): void {
    this.updateUser = this.route.snapshot.queryParams;
    if((Object.keys(this.updateUser).length != 0)){
      this.ngIf=false;
      // console.log("in add"+this.updateUser);
    }
    
  }
  empForUp=[];
  ngAfterContentInit(){
    this.updateUser = this.route.snapshot.queryParams;
    this.empForUp=Object.values(this.updateUser);
    // console.log(Object.values(this.updateUser));
  }
  
  
  onSubmit(form:NgForm){
      const empl =new Employee();
         empl.name = form.value.name;
         empl.cnic = form.value.cnic;
         empl.salary = form.value.salary;
         empl.id=form.value.id

        this.emplService.addNewEmployes(empl);
		this.router.navigate(["showEmployee"])
        //form.reset();
        //console.log(form);
  }
  
  updateUserfunction(form:NgForm){
    const empl =new Employee();
         empl.name = form.value.name;
         empl.cnic = form.value.cnic;
         empl.salary = form.value.salary;
         empl.id=form.value.id
          this.emplService.updateEmployee(empl,this.empForUp[0]);
          this.empForUp[0]=empl.id;
          this.router.navigate(["showEmployee"])

  }


   
}
