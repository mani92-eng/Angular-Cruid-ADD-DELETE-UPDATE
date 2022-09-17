import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder}from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !:FormGroup;

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }
 

 
  ngOnInit() {
    this.signupForm=this.formbuilder.group({
      fullname:[''],
      mobile:[''],
      email:[''],
      password:[''],
    


    });
    
  }

  signUp(){
    this.http.post('http://localhost:3000/signupUsers',this.signupForm.value).subscribe(res=>{
      alert('signup successfully');
      this.signupForm.reset();
      this.router.navigate(['/login']);
    },err=>{
      console.log(err);
    }
    );
 
}
}

