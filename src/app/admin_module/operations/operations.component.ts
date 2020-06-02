import { RecipeService } from './../../services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  constructor(private recipeSrv : RecipeService) { }

  ngOnInit() {
  }

  public GetAllRecipeData() {
    //saves a file to your computer with the json object
    
    this.recipeSrv.GetAllRecipes().subscribe(x => {
      const blob = new Blob([JSON.stringify(x )], {type: 'application/json'})
      saveAs(blob, 'recipedata.json');
    })

    
  }

}
