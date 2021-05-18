import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { Global } from '../services/global.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ContactService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public contact: Contact | undefined;

  constructor(
    private _contactService: ContactService,
    private _router: Router,
		private _route: ActivatedRoute
  ) { 
    this.url = Global.url;
    
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
			let id:string = params.id;

      console.log(id);

			this.getMessage(id);
		});
  }

  getMessage(id: string){
		this._contactService.getMessage(id).subscribe(
			response =>{
				this.contact = response.contact;
			},
			error =>{
				console.log(<any>error);
			}
		)
	}

}