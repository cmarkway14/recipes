import { USStates } from './../Models/USStates';
import { AccountService } from './../services/account.service';
import { FormGroup } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Address } from '../Models/Address';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  firstName: string;
  lastName: string;
  address1: string
  address2: string
  edit: boolean = false;
  accountForm: FormGroup;
  selectedState: string;
  states: Array<string> = [];
  zip: number;
  city: string;


  constructor(public auth: AuthService, private accountService: AccountService) { 

    this.states = USStates;
    this.auth.user$.subscribe(user => {
      let displayNameArr = user.displayName.split(" ");

      if(displayNameArr.length > 0){
        this.firstName = this.capFirstLetter(displayNameArr[0]);
        this.lastName = this.capFirstLetter(displayNameArr[1]);
      }      

      this.address1 = user.address.addressLine1;
      this.address2 = user.address.addressLine2;
      this.selectedState = user.address.state;
      this.zip = user.address.zip;
      this.city = user.address.city;
      
    });
  }

  ngOnInit() {
    
  }

  public enableEdit(){
    this.edit = true;
  }

  public saveInformation() {
    this.edit = false;
    this.auth.user$.subscribe(user => {
      user.displayName = this.firstName + " " + this.lastName;
      user.address.zip = 63021;
      user.address.state = this.selectedState;
      user.address.addressLine1 = this.address1;
      user.address.addressLine2 = this.address2;
      user.address.city = this.city;

      this.accountService.updateUserInformation(user);
    });
  }

  private capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
