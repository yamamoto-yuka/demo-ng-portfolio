import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
name='';
email='';
message='';
formInValid= true;
formMessageHidden = true;

  constructor(private cs:CommonService) { }


  resolved(event:any){
    console.log(event);
    if(event){
      this.formInValid = false;
    }
  }

  submit(name:any, email:any, message:any){
    this.formInValid = true;
    let postData ={
      "data":{
        "ClientName":this.name,
        "ClientEmail":this.email,
        "Message":this.message
       }
    }
    this.cs.postMessage(postData).subscribe(res =>{
      console.log(res);
      this.formMessageHidden = false;
    })
  }

  

  ngOnInit(): void {
  }

}
