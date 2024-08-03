# Angular Application Flow
----------------------------

1. Angular needs to know which one is the start up file , which is main.ts
2. In main.ts we need to say which one is startup module, which is defined in platformBrowserDynamic().bootstrapModule(AppModule)
3. Some one has to go and invoke main.ts, i.e done by index.html


4. Using the bootstrap in AppModule loads the AppComponent - this line does in AppModule does it bootstrap: [AppComponent]

5. index.html -> main.ts -> Appmodule -> AppComponent -> appComponent.html loads with this line in AppComponent templateUrl: './app.component.html'

6. index.html -> main.ts -> Appmodule -> AppComponent -> appComponent.html -> all the bindings work from there on

7. directive tip 
 () send data from ui to object
 [] receives data from ui to object

 if we use both then it is 2 -way binding from ui to object and vice versa

8. customizing the app name and few other things but we need to update in multiple places

9. add button and click event 

10. Display in grid












# CustomerApplication
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
