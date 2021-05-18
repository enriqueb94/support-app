import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { Global } from '../services/global.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {
  public contact: Contact;
  public save_contact: any | undefined;
  public status: string | undefined;

  constructor(
    private _contactService: ContactService,
  ) { 
    this.contact = new Contact('','','','','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    this._contactService.saveMessage(this.contact).subscribe(
      response =>{
        if(response.contact){
          this.save_contact = response.contact;
          console.log(this.save_contact);
				  form.reset();
          this.status = 'success';
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error);
        this.status = 'error';
      }
    )
  }
}