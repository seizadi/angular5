# angular5
Test Application with Angular5

## Development
Create a new application
```bash
$ ng new <app-name>
$ cd <app-name>
```
### Add/Remove/Update Packages
We use npm for package manager. So we use it to add packages to our
application, like bootstrap. Angular-CLI uses Webpack to manage our 
asset pipeline, bundling JS and CSS files from the packages.
```bash
$ npm install --save <package>
```
#### Setup BootStrap package
See help for this in [Angular CLI BootStrap Guide](https://github.com/angular/angular-cli/wiki/stories-include-bootstrap)
```bash
$ npm install --save bootstrap
```
You can see in package.json the entry for bootstrap added as a dependency:
```bash
    "bootstrap": "^3.3.7",
```
Next you update .angular-cli.json file in the project to add bootstrap:
```bash
      "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css"
      ],
```
I updated to Alpha BootStrap it is in the last Alpha version and version 4.0
will be released soon, wanted to be familiar with it, it is built around [SaSS](http://sass-lang.com/).
[Help with SaSS setup](https://github.com/angular/angular-cli/wiki/stories-include-bootstrap#using-sass)
which requires a new Angular CLI application:
```bash
ng new project-app --style=scss
cd project-app
npm install --save bootstrap@4.0.0-alpha.6
touch src/_variables.scss
```
In styles.scss add the following:
```bash
@import 'variables';
@import '../node_modules/bootstrap/scss/bootstrap';
```
Now that we integrated Bootstrap styling, we need to figure out how to handle the JS part
of Bootstrap. We don't want to integrate Bootstrap JS and its associated JQuery JS, we don't
want to DOM to be manipulated by both Angular and JQuery, so we are going to use the
[ng-bootstrap project](https://github.com/ng-bootstrap/ng-bootstrap). You can follow the
[ng-bootstrap installation here](https://github.com/ng-bootstrap/ng-bootstrap#installation).
```bash
npm install --save @ng-bootstrap/ng-bootstrap
```
In the app/app.module.ts now we add the imports:
```bash
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Now to use the Boostrap 4 controls you need to view the 
[documentation for ng-bootstrap directives](https://ng-bootstrap.github.io/#/home)
for help in using them, mainly by using their 
[examples](https://ng-bootstrap.github.io/#/components/accordion/examples).
So for example we have a Bootstrap 4 compoenent here:
```html
        <a href="#" class="btn btn-secondary-outline btn-sm" role="button">&darr;</a>
```
To use ng-boot we will transform it to:
```html
        <a href="#" class="btn btn-secondary-outline btn-sm" role="button">&darr;</a>
```
Rather than use ngBootStrap, there is an implementation of a Dropdown Directive to
show how to handle the control, eventually should implement a Dropdown Compoenet also
that will load the Dropdown and handle the control. 
See app/src/common/dropdown.directive.ts
### Run Application
```bash
$ ng server
```
When you run 'ng server' it looks for changes in project and
automatically rebuilds asset bundles and reruns the server. It also
dynamically builds the index.html with the JS and CSS bundles injected.

The Angular application is bootstraped from main.ts which is the first JS code
that is run and this code:
```js
platformBrowserDynamic().bootstrapModule(AppModule)
```
It loads 'AppModule' which should bootstap the additional Modules used 
by the application, as you see below the basic application built by Angular CLI
has just one bootstrap Component 'AppComponent':
```js
  bootstrap: [AppComponent]
```
The AppComponent resolves the app-root 
```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  })
```
selector in index.html:
```HTML
 <app-root></app-root>
```
The HTML partial app.component.html is inserted. 

## Angular CLI short-cut commands
To create a new component:
```bash
$ ng generate component <name> # ng g c short form
```
To create a new directive:
```bash
$ ng generate directive <name> # ng g d short form
```
## References
   * [TypeScript documentation](http://www.typescriptlang.org/Handbook)
   * [Bootstrap4 ]
   * [Angular ngBootstrap Tutorial](https://www.youtube.com/watch?v=5gT0-9vifuc)

## Setup
### Updating NodeJS:

[Go to nodejs.org and download the latest version](https://nodejs.org/en/download/) - uninstall (all) installed versions on your machine first.

### Updating npm:
```bash
   sudo npm install -g npm
```

### Updating the CLI

```bash
  sudo npm uninstall -g angular-cli @angular/cli 

  npm cache clean 

  sudo npm install -g @angular/cli
```

### Troubles
#### Couldn't install angular CLI :(
```bash
$ sudo npm install -g @angular/cli
/usr/local/bin/ng -> /usr/local/lib/node_modules/@angular/cli/bin/ng

> fsevents@1.1.3 install /usr/local/lib/node_modules/@angular/cli/node_modules/fsevents
> node install

sh: node: command not found

> node-sass@4.7.2 install /usr/local/lib/node_modules/@angular/cli/node_modules/node-sass
> node scripts/install.js

sh: node: command not found

> uglifyjs-webpack-plugin@0.4.6 postinstall /usr/local/lib/node_modules/@angular/cli/node_modules/webpack/node_modules/uglifyjs-webpack-plugin
> node lib/post_install.js

```
To fix this I forced install:
```bash
sc-l-seizadi:~ seizadi$ sudo npm install -g @angular/cli --force
npm WARN using --force I sure hope you know what you are doing.
...
+ @angular/cli@1.6.3
added 996 packages in 18.517s
```
Then I installed the packages that did not install properly manually:
```bash
  %  cd /usr/local/lib/node_modules/@angular/cli/node_modules/fsevents/
  %  sudo node install
  %  cd /usr/local/lib/node_modules/@angular/cli/node_modules/node-sass/
  %  sudo node scripts/install.js
  %  cd /usr/local/lib/node_modules/@angular/cli/node_modules/webpack/node_modules/uglifyjs-webpack-plugin
  %  sudo node lib/post_install.js
  %  cd /usr/local/lib/node_modules/@angular/cli/node_modules/node-sass
  %  sudo node scripts/build.js
```
I reran the install to make sure it was happy:
```bash
sc-l-seizadi:~ seizadi$ sudo npm install -g @angular/cli
Password:
/usr/local/bin/ng -> /usr/local/lib/node_modules/@angular/cli/bin/ng
+ @angular/cli@1.6.3
updated 1 package in 42.811s
```

