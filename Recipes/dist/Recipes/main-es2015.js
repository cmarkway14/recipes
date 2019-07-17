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

module.exports = "<div mat-dialog-content id=\"add-recipe-container\">\n    <form (ngSubmit)=\"onSubmit($event)\">\n        <div id=\"submit-button-container\">\n            <button type=\"submit\" id=\"submit-recipe-button\" mat-raised-button color=\"primary\">Submit</button>\n        </div>\n        <mat-accordion>\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    Recipe Name\n                </mat-expansion-panel-header>\n                <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Recipe Name\" [(ngModel)]=\"recipe.name\" name=\"RecipeName\">\n                </mat-form-field>\n            </mat-expansion-panel>\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    Cook Time\n                </mat-expansion-panel-header>\n                <mat-form-field class=\"full-width\">\n                    <input type=\"number\" matInput placeholder=\"Cook Time (In Minutes)\" [(ngModel)]=\"recipe.cookTime\"\n                        name=\"RecipeCookTime\">\n                </mat-form-field>\n            </mat-expansion-panel>\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    Servings\n                </mat-expansion-panel-header>\n                <mat-form-field class=\"full-width\">\n                    <input type=\"number\" matInput placeholder=\"Number of servings for recipe\" [(ngModel)]=\"recipe.servings\" name=\"recipeServings\">\n                </mat-form-field>\n            </mat-expansion-panel>\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    Directions\n                </mat-expansion-panel-header>\n                <div>\n                    <div *ngFor=\"let step of counterArr\">\n                        <p>Step {{step}}</p>\n                        <mat-form-field class=\"full-width\">\n                            <input matInput placeholder=\"Directions\" [(ngModel)]=\"recipe.directions[step - 1]\"\n                                name=\"RecipeDirections{{step - 1}}\">\n                        </mat-form-field>\n                        <button type=\"button\" mat-icon-button color=\"black\" (click)=\"AddDirectionStep()\">\n                            <mat-icon>\n                                add\n                            </mat-icon>\n                        </button>\n                    </div>\n                </div>\n            </mat-expansion-panel>\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    Ingredients\n                </mat-expansion-panel-header>\n                <div *ngFor=\"let ingred of ingredientArr\" id=\"ingredient-container\">\n                    <mat-form-field class=\"ingredient\">\n                        <input matInput placeholder=\"Ingredient\" [(ngModel)]=\"recipe.ingredients[ingred].name\"\n                            name=\"RecipeIngredientName{{ingred}}\">\n                    </mat-form-field>\n                    <mat-form-field class=\"ingredient\">\n                        <input matInput type=\"number\" placeholder=\"Amount\"\n                            [(ngModel)]=\"recipe.ingredients[ingred].amount\" name=\"RecipeIngredientAmount{{ingred}}\">\n                    </mat-form-field>\n                    <mat-form-field class=\"measurement\">\n                        <mat-label>Measurement</mat-label>\n                        <mat-select [(ngModel)]=\"recipe.ingredients[ingred].measurement\"\n                            name=\"RecipeIngredientMeasurement{{ingred}}\">\n                            <mat-option *ngFor=\"let measurement of measurements\" [value]=\"measurement\">\n                                {{measurement}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <span class=\"spacer\"></span>\n                    <button type=\"button\" mat-icon-button color=\"black\" (click)=\"AddIngredient()\">\n                        <mat-icon>\n                            add\n                        </mat-icon>\n                    </button>\n                </div>\n            </mat-expansion-panel>\n\n        </mat-accordion>\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipe-book/recipes/recipes.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipe-book/recipes/recipes.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"recipe-wrapper\">\n  <div>\n    <button (click)=\"AddRecipe()\">Add</button>\n  </div>\n    <div *ngFor=\"let recipe of recipes\" class=\"recipe-container\">\n      <mat-card>\n        <mat-card-header>\n          <img mat-card-avatar class=\"header-image\" src=\"{{recipe.image}}\" alt=\"Photo of a Shiba Inu\">\n          {{recipe.name}}\n        </mat-card-header>\n  \n        <mat-card-content>\n          <p>Cook time (In minutes): {{recipe.cookTime}}</p>\n          <br>\n        </mat-card-content>\n  \n        <mat-card-actions>\n          <button mat-button>Details</button>\n          <span class=\"spacer\"></span>\n          <button mat-button>Select Workout</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>"

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
class FireStoreIngredient {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
FireStoreIngredient.ctorParameters = () => [
    { type: String },
    { type: String }
];


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
class Ingredient {
}


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
class Measurements {
    constructor() {
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
    getMeasurements() {
        return this.type;
    }
}


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
class Recipe {
    constructor() {
        this.name = '';
        this.ingredients = [];
        this.directions = [];
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _recipe_book_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-book/recipes/recipes.component */ "./src/app/recipe-book/recipes/recipes.component.ts");




const routes = [
    { path: 'Book', pathMatch: 'full', component: _recipe_book_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__["RecipesComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AppComponent = class AppComponent {
    constructor(auth) {
        this.auth = auth;
        this.title = 'Recipes';
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _recipe_book_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./recipe-book/recipes/recipes.component */ "./src/app/recipe-book/recipes/recipes.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _recipe_book_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_18__["RecipesComponent"],
            _recipe_book_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_1__["AddRecipeComponent"]
        ],
        entryComponents: [_recipe_book_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_1__["AddRecipeComponent"]],
        imports: [
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebaseConfig),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/recipe-book/add-recipe/add-recipe.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/recipe-book/add-recipe/add-recipe.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form{\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n}\r\n\r\n.full-width{\r\n    width: 100%;\r\n}\r\n\r\n.ingredient{\r\n    width: 33%;\r\n    display: inline-block;\r\n    padding-right: 10px;\r\n}\r\n\r\n.measurement{\r\n    width: 20%;\r\n    display: inline-block;\r\n}\r\n\r\n#ingredient-container{\r\n    display: flex;\r\n}\r\n\r\n#add-recipe-container{\r\n    overflow: visible;\r\n}\r\n\r\n#submit-recipe-button{\r\n    float: right;\r\n\r\n}\r\n\r\n#submit-button-container{\r\n    width: 100%;\r\n    overflow: auto;\r\n    padding-bottom: 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlLWJvb2svYWRkLXJlY2lwZS9hZGQtcmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlLWJvb2svYWRkLXJlY2lwZS9hZGQtcmVjaXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybXtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbmdyZWRpZW50e1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5tZWFzdXJlbWVudHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbiNpbmdyZWRpZW50LWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiNhZGQtcmVjaXBlLWNvbnRhaW5lcntcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4jc3VibWl0LXJlY2lwZS1idXR0b257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG59XHJcblxyXG4jc3VibWl0LWJ1dHRvbi1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Models_Recipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/Recipe */ "./src/app/Models/Recipe.ts");
/* harmony import */ var src_app_Models_Ingredient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/Ingredient */ "./src/app/Models/Ingredient.ts");
/* harmony import */ var src_app_services_recipe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/recipe.service */ "./src/app/services/recipe.service.ts");






let AddRecipeComponent = class AddRecipeComponent {
    constructor(recipeService) {
        this.recipeService = recipeService;
        this.counter = 1;
        this.counter2 = 0;
        this.measurements = new _Models_Measurements__WEBPACK_IMPORTED_MODULE_1__["Measurements"]().getMeasurements();
        this.recipe = new src_app_Models_Recipe__WEBPACK_IMPORTED_MODULE_3__["Recipe"]();
        this.recipe.ingredients = Array();
        this.recipe.ingredients.push(new src_app_Models_Ingredient__WEBPACK_IMPORTED_MODULE_4__["Ingredient"]());
    }
    ngOnInit() {
        //this is a hack need to find a better way to do this
        this.counterArr = [1];
        this.ingredientArr = [0];
    }
    AddDirectionStep() {
        this.counter++;
        this.counterArr.push(this.counter);
    }
    AddIngredient() {
        this.counter2++;
        this.ingredientArr.push(this.counter2);
        this.recipe.ingredients.push(new src_app_Models_Ingredient__WEBPACK_IMPORTED_MODULE_4__["Ingredient"]());
    }
    onSubmit(event) {
        event.preventDefault();
        this.recipe.ingredients.forEach(x => {
            x.amount += ' ';
            x.amount += x.measurement;
        });
        this.recipeService.AddRecipe(this.recipe);
    }
};
AddRecipeComponent.ctorParameters = () => [
    { type: src_app_services_recipe_service__WEBPACK_IMPORTED_MODULE_5__["RecipeService"] }
];
AddRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add-recipe',
        template: __webpack_require__(/*! raw-loader!./add-recipe.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipe-book/add-recipe/add-recipe.component.html"),
        styles: [__webpack_require__(/*! ./add-recipe.component.css */ "./src/app/recipe-book/add-recipe/add-recipe.component.css")]
    })
], AddRecipeComponent);



/***/ }),

/***/ "./src/app/recipe-book/recipes/recipes.component.css":
/*!***********************************************************!*\
  !*** ./src/app/recipe-book/recipes/recipes.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recipe-container{\r\n    width: 33%;\r\n    margin-right: 5px;\r\n    margin-bottom: 15px;\r\n    display: inline-block;\r\n    max-height: 300px;\r\n    min-height: 300px;\r\n    height: 100%;\r\n    min-width: 200px;\r\n}\r\n#recipe-wrapper{\r\n    padding: 10px 10px;\r\n    height: 100%;\r\n    display: flex;\r\n}\r\n.header-image{\r\n    background-size: cover;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlLWJvb2svcmVjaXBlcy9yZWNpcGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGUtYm9vay9yZWNpcGVzL3JlY2lwZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNpcGUtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG59XHJcbiNyZWNpcGUtd3JhcHBlcntcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let RecipesComponent = class RecipesComponent {
    constructor(recipeService, dialog) {
        this.recipeService = recipeService;
        this.dialog = dialog;
        this.recipes = new Array();
    }
    ngOnInit() {
        let recipeObservable$ = this.recipeService.GetAllRecipes();
        recipeObservable$.subscribe(recipes => {
            recipes.forEach(recipe => {
                this.recipes.push(this.recipeService.mapRecipe(recipe));
            });
        });
    }
    AddRecipe() {
        const dialogRef = this.dialog.open(_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_1__["AddRecipeComponent"], {
            width: '75%',
            height: '75%',
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
};
RecipesComponent.ctorParameters = () => [
    { type: src_app_services_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
RecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-recipes',
        template: __webpack_require__(/*! raw-loader!./recipes.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipe-book/recipes/recipes.component.html"),
        styles: [__webpack_require__(/*! ./recipes.component.css */ "./src/app/recipe-book/recipes/recipes.component.css")]
    })
], RecipesComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let AuthService = class AuthService {
    constructor(afAuth, afs, router) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.user$ = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(user => {
            if (user) {
                return this.afs.doc(`users/${user.uid}`).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
            }
        }));
    }
    googleSignIn() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
            const credential = yield this.afAuth.auth.signInWithPopup(provider);
            return this.updateUserData(credential.user);
        });
    }
    signOut() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.afAuth.auth.signOut();
            return this.router.navigate(['/']);
        });
    }
    updateUserData(user) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };
        return userRef.set(data, { merge: true });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _Models_Recipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/Recipe */ "./src/app/Models/Recipe.ts");
/* harmony import */ var _Models_FireStoreIngredient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/FireStoreIngredient */ "./src/app/Models/FireStoreIngredient.ts");





let RecipeService = class RecipeService {
    constructor(afs) {
        this.afs = afs;
        this.recipeCollection = this.afs.collection('recipes');
        this.recipe$ = this.recipeCollection.valueChanges();
    }
    GetAllRecipes() {
        this.recipeCollection = this.afs.collection('recipes');
        return this.recipeCollection.valueChanges();
    }
    mapRecipe(recipe) {
        let newRecipe = new _Models_Recipe__WEBPACK_IMPORTED_MODULE_3__["Recipe"]();
        newRecipe.name = recipe.Name;
        newRecipe.cookTime = recipe.CookTime;
        newRecipe.directions = recipe.Directions;
        newRecipe.image = recipe.Image;
        newRecipe.ingredients = new Array();
        newRecipe.ingredients = recipe.ingredients;
        return newRecipe;
    }
    fireStoreGetBasedOnDocumentId() {
        let test = this.afs.doc(`recipes/hI7FPCz11wifuWKaDk8l`);
        let test2 = test.valueChanges();
        test2.subscribe(x => {
            console.log('x is: ', x);
        });
    }
    fireStoreGetBasedOnFieldName() {
        let test = this.afs.collection('recipes', ref => ref.where('Name', '==', 'Mac and Cheese'));
        let test2 = test.valueChanges();
        test2.subscribe(x => {
            console.log('this is x: ', x);
        });
    }
    AddRecipe(recipe) {
        let temp = [];
        recipe.ingredients.forEach(x => {
            temp.push(new _Models_FireStoreIngredient__WEBPACK_IMPORTED_MODULE_4__["FireStoreIngredient"](x.name, x.amount));
        });
        const ingredients = temp.map((obj) => { return Object.assign({}, obj); });
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
    }
};
RecipeService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RecipeService);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map