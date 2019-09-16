(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <span>Recipes</span>\n  <span class=\"spacer\"></span>\n  <div class=\"user\" *ngIf=\"auth.user$ | async as user; else login\">\n    <span>Welcome, {{user.displayName}}</span>\n    <br />\n    <button mat-raised-button color=\"primary\" class=\"button\" id='signout' (click)=\"auth.signOut()\">Sign Out</button>\n  </div>\n  <div class=\"user\">\n    <ng-template #login>\n      <button mat-raised-button color=\"primary\" class=\"inline\" (click)=\"auth.googleSignIn()\">\n        Login\n      </button>\n    </ng-template>\n  </div>\n\n</div>\n\n\n<router-outlet></router-outlet>\n<!-- <app-home></app-home> -->\n\n<div id=\"footer\">\n  Testing footer\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipe-book/add-recipe/add-recipe.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipe-book/add-recipe/add-recipe.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content id=\"add-recipe-container\">\n    <form #recipeForm='ngForm' (ngSubmit)=\"onSubmit($event)\">\n\n        {{recipeForm.form.valid}}\n        <div id=\"submit-button-container\">\n            <button [disabled]=\"recipeForm.form.invalid\" type=\"submit\" id=\"submit-recipe-button\" mat-raised-button\n                color=\"primary\">Submit</button>\n        </div>\n        <mat-accordion>\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    Recipe Name\n                </mat-expansion-panel-header>\n                <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Recipe Name\" [(ngModel)]=\"recipe.name\" name=\"RecipeName\">\n                </mat-form-field>\n            </mat-expansion-panel>\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    Cook Time\n                </mat-expansion-panel-header>\n                <mat-form-field class=\"full-width\">\n                    <input type=\"number\" matInput placeholder=\"Cook Time (In Minutes)\" [(ngModel)]=\"recipe.cookTime\"\n                        name=\"RecipeCookTime\" required>\n                </mat-form-field>\n            </mat-expansion-panel>\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    Servings\n                </mat-expansion-panel-header>\n                <mat-form-field class=\"full-width\">\n                    <input type=\"number\" matInput placeholder=\"Number of servings for recipe\"\n                        [(ngModel)]=\"recipe.servings\" name=\"recipeServings\" required>\n                </mat-form-field>\n            </mat-expansion-panel>\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    Directions\n                </mat-expansion-panel-header>\n                <div>\n                    <div *ngFor=\"let step of directionsArr\" id=\"directions-container\">\n                        <p>Step {{step}}</p>\n                        <mat-form-field class=\"full-width\">\n                            <input matInput placeholder=\"Directions\" [(ngModel)]=\"recipe.directions[step - 1]\"\n                                name=\"RecipeDirections{{step - 1}}\" required>\n                        </mat-form-field>\n                        <button *ngIf=\"step === directionsArr.length\" type=\"button\" mat-icon-button color=\"black\"\n                            (click)=\"AddDirectionStep()\">\n                            <mat-icon>\n                                add\n                            </mat-icon>\n                        </button>\n                        <button *ngIf=\"step !== directionsArr.length && step !== 1\" type=\"button\" mat-icon-button\n                            color=\"black\" (click)=\"RemoveDirectionStep()\">\n                            <mat-icon>\n                                remove\n                            </mat-icon>\n                        </button>\n                    </div>\n                </div>\n            </mat-expansion-panel>\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    Ingredients\n                </mat-expansion-panel-header>\n                <div *ngFor=\"let ingred of ingredientArr\" id=\"ingredient-container\">\n                    <mat-form-field class=\"ingredient\">\n                        <input matInput placeholder=\"Ingredient\" [(ngModel)]=\"recipe.ingredients[ingred].name\"\n                            name=\"RecipeIngredientName{{ingred}}\" required>\n                    </mat-form-field>\n                    <mat-form-field class=\"ingredient\">\n                        <input matInput type=\"number\" placeholder=\"Amount\"\n                            [(ngModel)]=\"recipe.ingredients[ingred].amount\" name=\"RecipeIngredientAmount{{ingred}}\"\n                            required>\n                    </mat-form-field>\n                    <mat-form-field class=\"measurement\">\n                        <mat-label>Measurement</mat-label>\n                        <mat-select [(ngModel)]=\"recipe.ingredients[ingred].measurement\"\n                            name=\"RecipeIngredientMeasurement{{ingred}}\" required>\n                            <mat-option *ngFor=\"let measurement of measurements\" [value]=\"measurement\" required>\n                                {{measurement}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <span class=\"spacer\"></span>\n                    <button *ngIf=\"ingred === ingredientArr.length - 1\" type=\"button\" mat-icon-button color=\"black\"\n                        (click)=\"AddIngredient()\">\n                        <mat-icon>\n                            add\n                        </mat-icon>\n                    </button>\n\n                    <button *ngIf=\"ingred !== ingredientArr.length - 1\" type=\"button\" mat-icon-button color=\"black\"\n                        (click)=\"RemoveIngredient(ingred)\">\n                        <mat-icon>\n                            remove\n                        </mat-icon>\n                    </button>\n                </div>\n            </mat-expansion-panel>\n\n        </mat-accordion>\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipe-book/recipes/recipes.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipe-book/recipes/recipes.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"recipe-wrapper\">\n  <!-- <div>\n    <button (click)=\"AddRecipe()\">Add</button>\n  </div> -->\n  <div class=\"recipe-container\">\n    <div *ngFor=\"let recipe of recipes\" class=\"recipe\">\n      <mat-card class=\"recipe-card\">\n        <mat-card-header>\n          <img mat-card-avatar class=\"header-image\" src=\"{{recipe.image}}\" alt=\"Photo of a Shiba Inu\">\n          {{recipe.name}}\n        </mat-card-header>\n\n        <mat-card-content>\n          <p>Cook time (In minutes): {{recipe.cookTime}}</p>\n          <br>\n        </mat-card-content>\n\n        <mat-card-actions align=\"center\">\n          <button mat-button class=\"recipe-details\">Details</button>\n          <!-- <span class=\"spacer\"></span>\n          <button mat-button>Select Workout</button> -->\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Models/FireStoreIngredient.ts":
/*!***********************************************!*\
  !*** ./src/app/Models/FireStoreIngredient.ts ***!
  \***********************************************/
/*! exports provided: FireStoreIngredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireStoreIngredient", function() { return FireStoreIngredient; });
var FireStoreIngredient = /** @class */ (function () {
    function FireStoreIngredient(key, value) {
        this.key = key;
        this.value = value;
    }
    FireStoreIngredient.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return FireStoreIngredient;
}());



/***/ }),

/***/ "./src/app/Models/Ingredient.ts":
/*!**************************************!*\
  !*** ./src/app/Models/Ingredient.ts ***!
  \**************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient() {
    }
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/Models/Measurements.ts":
/*!****************************************!*\
  !*** ./src/app/Models/Measurements.ts ***!
  \****************************************/
/*! exports provided: Measurements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Measurements", function() { return Measurements; });
var Measurements = /** @class */ (function () {
    function Measurements() {
        this.type = [];
        this.type.push("Cup");
        this.type.push("Tps");
        this.type.push("Tbs");
        this.type.push("Grams");
        this.type.push("Ounces");
        this.type.push("Lbs");
        this.type.push("Kgs");
        this.type.push("N/A");
    }
    Measurements.prototype.getMeasurements = function () {
        return this.type;
    };
    return Measurements;
}());



/***/ }),

/***/ "./src/app/Models/Recipe.ts":
/*!**********************************!*\
  !*** ./src/app/Models/Recipe.ts ***!
  \**********************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe() {
        this.name = '';
        this.ingredients = [];
        this.directions = [];
    }
    return Recipe;
}());



/***/ }),

/***/ "./src/app/angular.materials.ts":
/*!**************************************!*\
  !*** ./src/app/angular.materials.ts ***!
  \**************************************/
/*! exports provided: materials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materials", function() { return materials; });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");










var materials = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"]
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipe_book_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-book/recipes/recipes.component */ "./src/app/recipe-book/recipes/recipes.component.ts");




var routes = [
    { path: 'Book', pathMatch: 'full', component: _recipe_book_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__["RecipesComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header{\r\n    width: 100%;\r\n    height: 75px;\r\n    padding: 25px;\r\n    background: slategray;\r\n    display: flex;\r\n}\r\n\r\n#footer{\r\n    width: 100%;\r\n    height: 40px;\r\n    padding: 10px;\r\n    background: slategray;\r\n    overflow: hidden;\r\n    position: fixed;\r\n    bottom: 0;\r\n}\r\n\r\n.inline{\r\n    display: inline-block;\r\n}\r\n\r\n.user{\r\n    margin-right: 3em;\r\n}\r\n\r\n.mat-raised-button{\r\n    min-width: 145px !important;\r\n    height: 45px !important;\r\n}\r\n\r\n#signout {\r\n    min-width: 0px !important;\r\n    float: right;\r\n    margin-top: .25em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IHNsYXRlZ3JheTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiNmb290ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBzbGF0ZWdyYXk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4uaW5saW5le1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udXNlcntcclxuICAgIG1hcmdpbi1yaWdodDogM2VtO1xyXG59XHJcblxyXG4ubWF0LXJhaXNlZC1idXR0b257XHJcbiAgICBtaW4td2lkdGg6IDE0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI3NpZ25vdXQge1xyXG4gICAgbWluLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC4yNWVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'Recipes';
    }
    AppComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _recipe_book_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-book/add-recipe/add-recipe.component */ "./src/app/recipe-book/add-recipe/add-recipe.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _recipe_book_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipe-book/recipes/recipes.component */ "./src/app/recipe-book/recipes/recipes.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_materials__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./angular.materials */ "./src/app/angular.materials.ts");
/* harmony import */ var _firestore_imports__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./firestore.imports */ "./src/app/firestore.imports.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _recipe_book_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_8__["RecipesComponent"],
                _recipe_book_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_1__["AddRecipeComponent"]
            ],
            entryComponents: [_recipe_book_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_1__["AddRecipeComponent"]],
            imports: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_firestore_imports__WEBPACK_IMPORTED_MODULE_11__["firestoreImports"], _angular_materials__WEBPACK_IMPORTED_MODULE_10__["materials"], [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ]),
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/firestore.imports.ts":
/*!**************************************!*\
  !*** ./src/app/firestore.imports.ts ***!
  \**************************************/
/*! exports provided: firestoreImports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firestoreImports", function() { return firestoreImports; });
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var firestoreImports = [
    _angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebaseConfig),
    _angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"],
    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestoreModule"],
    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorageModule"],
    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"],
];


/***/ }),

/***/ "./src/app/recipe-book/add-recipe/add-recipe.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/recipe-book/add-recipe/add-recipe.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form{\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n}\r\n\r\n.full-width{\r\n    width: 100%;\r\n}\r\n\r\n.ingredient{\r\n    width: 33%;\r\n    display: inline-block;\r\n    padding-right: 10px;\r\n}\r\n\r\n.measurement{\r\n    width: 20%;\r\n    display: inline-block;\r\n}\r\n\r\n#ingredient-container{\r\n    display: flex;\r\n}\r\n\r\n#add-recipe-container{\r\n    overflow: visible;\r\n}\r\n\r\n#submit-recipe-button{\r\n    float: right;\r\n\r\n}\r\n\r\n#submit-button-container{\r\n    width: 100%;\r\n    overflow: auto;\r\n    padding-bottom: 1em;\r\n}\r\n\r\n#directions-container{\r\n    display: flex;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlLWJvb2svYWRkLXJlY2lwZS9hZGQtcmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS1ib29rL2FkZC1yZWNpcGUvYWRkLXJlY2lwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm17XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZnVsbC13aWR0aHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5ncmVkaWVudHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubWVhc3VyZW1lbnR7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4jaW5ncmVkaWVudC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jYWRkLXJlY2lwZS1jb250YWluZXJ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuI3N1Ym1pdC1yZWNpcGUtYnV0dG9ue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxufVxyXG5cclxuI3N1Ym1pdC1idXR0b24tY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbiNkaXJlY3Rpb25zLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/recipe-book/add-recipe/add-recipe.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/recipe-book/add-recipe/add-recipe.component.ts ***!
  \****************************************************************/
/*! exports provided: AddRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecipeComponent", function() { return AddRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Models_Measurements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Models/Measurements */ "./src/app/Models/Measurements.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Models_Recipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/Recipe */ "./src/app/Models/Recipe.ts");
/* harmony import */ var src_app_Models_Ingredient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/Ingredient */ "./src/app/Models/Ingredient.ts");
/* harmony import */ var src_app_services_recipe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/recipe.service */ "./src/app/services/recipe.service.ts");






var AddRecipeComponent = /** @class */ (function () {
    function AddRecipeComponent(recipeService) {
        this.recipeService = recipeService;
        this.directionsCounter = 1;
        this.ingredCounter = 0;
        this.measurements = new _Models_Measurements__WEBPACK_IMPORTED_MODULE_1__["Measurements"]().getMeasurements();
        this.recipe = new src_app_Models_Recipe__WEBPACK_IMPORTED_MODULE_3__["Recipe"]();
        this.recipe.ingredients = Array();
        this.recipe.ingredients.push(new src_app_Models_Ingredient__WEBPACK_IMPORTED_MODULE_4__["Ingredient"]());
    }
    AddRecipeComponent.prototype.ngOnInit = function () {
        //this is a hack need to find a better way to do this
        this.directionsArr = [1];
        this.ingredientArr = [0];
    };
    AddRecipeComponent.prototype.AddDirectionStep = function () {
        this.directionsCounter++;
        this.directionsArr.push(this.directionsCounter);
    };
    AddRecipeComponent.prototype.RemoveDirectionStep = function () {
        this.directionsCounter--;
        this.directionsArr.pop();
    };
    AddRecipeComponent.prototype.AddIngredient = function () {
        this.ingredCounter++;
        this.ingredientArr.push(this.ingredCounter);
        this.recipe.ingredients.push(new src_app_Models_Ingredient__WEBPACK_IMPORTED_MODULE_4__["Ingredient"]());
    };
    AddRecipeComponent.prototype.RemoveIngredient = function (index) {
        this.ingredientArr.pop();
        this.recipe.ingredients.splice(index, 1);
    };
    AddRecipeComponent.prototype.onSubmit = function (event) {
        event.preventDefault();
        this.recipe.ingredients.forEach(function (x) {
            x.amount += ' ';
            x.amount += x.measurement;
        });
        this.recipeService.AddRecipe(this.recipe);
    };
    AddRecipeComponent.ctorParameters = function () { return [
        { type: src_app_services_recipe_service__WEBPACK_IMPORTED_MODULE_5__["RecipeService"] }
    ]; };
    AddRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-recipe',
            template: __webpack_require__(/*! raw-loader!./add-recipe.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipe-book/add-recipe/add-recipe.component.html"),
            styles: [__webpack_require__(/*! ./add-recipe.component.css */ "./src/app/recipe-book/add-recipe/add-recipe.component.css")]
        })
    ], AddRecipeComponent);
    return AddRecipeComponent;
}());



/***/ }),

/***/ "./src/app/recipe-book/recipes/recipes.component.css":
/*!***********************************************************!*\
  !*** ./src/app/recipe-book/recipes/recipes.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .recipe-container{\r\n    width: 33%;\r\n    margin-right: 5px;\r\n    margin-bottom: 15px;\r\n    display: inline-block;\r\n    max-height: 300px;\r\n    min-height: 300px;\r\n    height: 100%;\r\n    min-width: 200px;\r\n} */\r\n\r\n.recipe-container{\r\n    width: 100%;\r\n    display: inline-block;\r\n}\r\n\r\n#recipe-wrapper{\r\n    padding: 10px 10px;\r\n    height: 100%;\r\n    display: flex;\r\n}\r\n\r\n.header-image{\r\n    background-size: cover;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.recipe-card{\r\n    width: 33%;\r\n    margin-right: 5px;\r\n    margin-bottom: 15px;\r\n    display: inline-block;\r\n    max-height: 300px;\r\n    min-height: 300px;\r\n    height: 100%;\r\n    min-width: 200px;\r\n}\r\n\r\n.recipe{\r\n    display: inline-block;\r\n}\r\n\r\nmat-card{\r\n    max-height: 180px !important;\r\n    min-height: 180px !important;\r\n    max-width: 210px !important;\r\n    min-width: 210px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlLWJvb2svcmVjaXBlcy9yZWNpcGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHOztBQUVIO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBR0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlLWJvb2svcmVjaXBlcy9yZWNpcGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAucmVjaXBlLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxufSAqL1xyXG5cclxuLnJlY2lwZS1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4jcmVjaXBlLXdyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaGVhZGVyLWltYWdle1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLnJlY2lwZS1jYXJke1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4ucmVjaXBle1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuICAgIG1heC1oZWlnaHQ6IDE4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxODBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAyMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/recipe-book/recipes/recipes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/recipe-book/recipes/recipes.component.ts ***!
  \**********************************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../add-recipe/add-recipe.component */ "./src/app/recipe-book/add-recipe/add-recipe.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var RecipesComponent = /** @class */ (function () {
    function RecipesComponent(recipeService, dialog) {
        this.recipeService = recipeService;
        this.dialog = dialog;
        this.recipes = new Array();
    }
    RecipesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var recipeObservable$ = this.recipeService.GetAllRecipes();
        recipeObservable$.subscribe(function (recipes) {
            recipes.forEach(function (recipe) {
                _this.recipes.push(_this.recipeService.mapRecipe(recipe));
            });
        });
    };
    RecipesComponent.prototype.AddRecipe = function () {
        var dialogRef = this.dialog.open(_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_1__["AddRecipeComponent"], {
            width: '75%',
            height: '75%',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    RecipesComponent.ctorParameters = function () { return [
        { type: src_app_services_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    RecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! raw-loader!./recipes.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipe-book/recipes/recipes.component.html"),
            styles: [__webpack_require__(/*! ./recipes.component.css */ "./src/app/recipe-book/recipes/recipes.component.css")]
        })
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.user$ = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
            }
        }));
    }
    AuthService.prototype.googleSignIn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var provider, credential;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
                        return [4 /*yield*/, this.afAuth.auth.signInWithPopup(provider)];
                    case 1:
                        credential = _a.sent();
                        return [2 /*return*/, this.updateUserData(credential.user)];
                }
            });
        });
    };
    AuthService.prototype.signOut = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.signOut()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.router.navigate(['/'])];
                }
            });
        });
    };
    AuthService.prototype.updateUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };
        return userRef.set(data, { merge: true });
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/recipe.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/recipe.service.ts ***!
  \********************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _Models_Recipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/Recipe */ "./src/app/Models/Recipe.ts");
/* harmony import */ var _Models_FireStoreIngredient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/FireStoreIngredient */ "./src/app/Models/FireStoreIngredient.ts");





var RecipeService = /** @class */ (function () {
    function RecipeService(afs) {
        this.afs = afs;
        this.recipeCollection = this.afs.collection('recipes');
        this.recipe$ = this.recipeCollection.valueChanges();
    }
    RecipeService.prototype.GetAllRecipes = function () {
        this.recipeCollection = this.afs.collection('recipes');
        return this.recipeCollection.valueChanges();
    };
    RecipeService.prototype.mapRecipe = function (recipe) {
        var newRecipe = new _Models_Recipe__WEBPACK_IMPORTED_MODULE_3__["Recipe"]();
        newRecipe.name = recipe.Name;
        newRecipe.cookTime = recipe.CookTime;
        newRecipe.directions = recipe.Directions;
        newRecipe.image = recipe.Image;
        newRecipe.ingredients = new Array();
        newRecipe.ingredients = recipe.ingredients;
        return newRecipe;
    };
    RecipeService.prototype.AddRecipe = function (recipe) {
        var temp = [];
        recipe.ingredients.forEach(function (x) {
            temp.push(new _Models_FireStoreIngredient__WEBPACK_IMPORTED_MODULE_4__["FireStoreIngredient"](x.name, x.amount));
        });
        var ingredients = temp.map(function (obj) { return Object.assign({}, obj); });
        this.recipeCollection.doc(recipe.name).set({
            Name: recipe.name,
            CookTime: recipe.cookTime,
            Directions: recipe.directions,
            Servings: recipe.servings,
            ingredients: ingredients,
        })
            .then(function () {
            console.log("Document successfully written!");
        })
            .catch(function (error) {
            console.error("Error writing document: ", error);
        });
    };
    // Documentation Code on how to call for certain thins
    RecipeService.prototype.fireStoreGetBasedOnDocumentId = function () {
        var test = this.afs.doc("recipes/hI7FPCz11wifuWKaDk8l");
        var test2 = test.valueChanges();
        test2.subscribe(function (x) {
            console.log('x is: ', x);
        });
    };
    RecipeService.prototype.fireStoreGetBasedOnFieldName = function () {
        var test = this.afs.collection('recipes', function (ref) { return ref.where('Name', '==', 'Mac and Cheese'); });
        var test2 = test.valueChanges();
        test2.subscribe(function (x) {
            console.log('this is x: ', x);
        });
    };
    RecipeService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDoFGk-tg7_SrH8fFSHUDRjONpT5BbRZSY",
        authDomain: "recipe-book-aaa98.firebaseapp.com",
        databaseURL: "https://recipe-book-aaa98.firebaseio.com",
        projectId: "recipe-book-aaa98",
        storageBucket: "recipe-book-aaa98.appspot.com",
        messagingSenderId: "988770956087",
        appId: "1:988770956087:web:9d6ccb4d72a9f1cc"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\markwayc\Desktop\CurtisCode\Recipes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map