import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { Global } from '../services/global.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [ContactService]
})
export class MessagesComponent implements OnInit {
  public url: string;
  public contacts: Contact[] | undefined;

  constructor(
    private _contactService: ContactService,
  ){ 
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(){
    this._contactService.getMessages().subscribe(
      response => {
        if(response.contacts){
					this.contacts = response.contacts
				}
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}