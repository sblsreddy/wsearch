# Wsearch

ng generate component PageList
ng generate component SearchBar

ng generate service Wikipedia

# --------------------------# --------------------------# --------------------------
# Steps to assemble together
# --------------------------# --------------------------# --------------------------

# Step 1 > To display the components created page-list and search bar, we need to go to app component template and include but how do we figure out what tag to include. Go to the page-list component and see the selector and that is used in tag<app-page-list>, similarly <app-search-bar> tag from search-bar component selector. Include both the tags and make sure it is displays.

# Step 2 > Add an input element in searc-bar template and capture the input using event handler

# Step 3 > Enclose the input element in form and upon form submission call a method by form event

# Step 4 > write the onFormSubmit() in search-bar component to handle the input event

# Step 5 > To avoid default browser handling the form submit event, we need pass event as argument in onFormSubmit(event), so we can handle in the search-bar component.

# Step 6 >
# Step 7 >
# Step 8 >
# Step 9 >
# Step 10 >

# --------------------------# --------------------------# --------------------------
# Steps to assemble together
# --------------------------# --------------------------# --------------------------
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
