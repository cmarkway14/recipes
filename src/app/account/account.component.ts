import { AccountService } from './../services/account.service';
import { FormGroup } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  firstName: string;
  lastName: string;
  edit: boolean = false;
  accountForm: FormGroup;


  constructor(public auth: AuthService, private accountService: AccountService) { 
    this.auth.user$.subscribe(user => {
      let displayNameArr = user.displayName.split(" ");
      if(displayNameArr.length > 0){
        this.firstName = this.capFirstLetter(displayNameArr[0]);
        this.lastName = this.capFirstLetter(displayNameArr[1]);
      }      
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
      this.accountService.updateUserInformation(user);
    });
  }

  private capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
