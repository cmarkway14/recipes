import { RecipeService } from './recipe.service';
import { TestBed } from '@angular/core/testing';


describe('RecipeServiceTests', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeService = TestBed.get(RecipeService);
    expect(service).toBeTruthy();
  });

  it('should call an api', () => {
    const service: RecipeService = TestBed.get(RecipeService);

    expect(service.GetAllRecipes()).toBeGreaterThan(1);
  })

});
