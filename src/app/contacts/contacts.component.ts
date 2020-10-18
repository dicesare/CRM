import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
const contacts = [{first_name: 'Tatum', last_name: 'Vernon', email: 'tvernon0@lycos.com', gender: 'Female', company: 'Youopia'},
  {first_name: 'Anet', last_name: 'Bellis', email: 'abellis1@cnn.com', gender: 'Female', company: 'Oloo'},
  {first_name: 'Pippa', last_name: 'Goymer', email: 'pgoymer2@ihg.com', gender: 'Female', company: 'Browsecat'},
  {first_name: 'Addison', last_name: 'Lawther', email: 'alawther3@walmart.com', gender: 'Male', company: 'Yoveo'},
  {first_name: 'Anya', last_name: 'Franzman', email: 'afranzman4@bravesites.com', gender: 'Female', company: 'Twitterbeat'}];
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('contactsAnimation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateY(-100px)', opacity: '0'}),
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})
export class ContactsComponent implements OnInit {
  contacts= contacts;
  person: any;
  input = {
    'width':'360px',
    'background': '#ff0',
    'box-Shadow':'0 6px 10px 0 rgba(0, 0, 0, .1)',
    'border': '0',
    'outline': '0',
    'padding': '22px 18px'
  };
  first_name='';
  last_name='';
  gender='';
  email='';
  company='';
  constructor() { }


  ngOnInit(): void {
    this.person=contacts[shuffle(contacts.length)].first_name;
  }

  addContact(value: any) {
    this.contacts.unshift({
      first_name: value.first_name,
      last_name: value.last_name,
      gender: value.gender,
      email: value.email,
      company: value.company
    });
    this.first_name='';
    this.last_name='';
    this.gender='';
    this.email='';
    this.company='';
  }
}
function shuffle(contactsLength) {
  return (Math.floor(Math.random() * Math.floor(contactsLength)));
}
