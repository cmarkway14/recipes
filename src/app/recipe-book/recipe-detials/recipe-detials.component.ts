import { Ingredient } from './../../Models/Ingredient';
import { Recipe } from 'src/app/Models/Recipe';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatStepper } from '@angular/material';

@Component({
  selector: 'app-recipe-detials',
  templateUrl: './recipe-detials.component.html',
  styleUrls: ['./recipe-detials.component.css']
})
export class RecipeDetialsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public recipe: Recipe) { 
  }

  ngOnInit() {
  }

  public Next(stepper : MatStepper) : void{
    stepper.next();
  }

  public Pervious(stepper: MatStepper) : void{
    stepper.previous();
  }
}
