export interface IEmployee {
    id:number;
    name: string;
    cnic:string;
    salary:number;
  }
  export class Employee {
    id:number;
    name:string;
    cnic:string;
    salary:number;
    
    
    constructor(id?:number,name?:string,cnic?:string,salary?:number){
        this.id=id;
        this.name = name;
        this.cnic = cnic;
        this.salary = salary;
        
    }
  }