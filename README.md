[//]: #@corifeus-header


[![Build Status](https://travis-ci.org/patrikx3/angular-compile-html.svg?branch=master)](https://travis-ci.org/patrikx3/angular-compile-html)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/patrikx3/angular-compile-html/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/angular-compile-html/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/patrikx3/angular-compile-html/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/angular-compile-html/?branch=master)  [![Trello](https://img.shields.io/badge/Trello-p3x-026aa7.svg)](https://trello.com/b/gqKHzZGy/p3x)

[![NPM](https://nodei.co/npm/p3x-angular-compile-html.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/p3x-angular-compile-html/)


[//]: #@corifeus-header:end

# Name change
```bash
p3x-ng2-compile-html => p3x-angular-compile-html
```


## Compile an HTML Angular 2/4/x Service/Attribute to into a component/HTML

It is only using ```TypeScript``` right now. It can be built though.

## Install
  
```bash
npm install p3x-angular-compile-html
```

## Dev environment end test
   
```bash
npm install -g yarn
git clone https://github.com/patrikx3/angular-compile-html.git
cd angular-compile-html
yarn install
node node_modules/protractor/bin/webdriver-manager update
grunt default|run
```

[http://localhost:8080](http://localhost:8080)

## Usage

### HTML
  
```html
 <div #container></div>
 <div [p3x-compile-html]="data2" [p3x-compile-html-ref]="ref" [p3x-compile-html-imports]="importsLikeMaterialEtc"></div>
```

### TypeScript
Check out the example, here [test/angular-webpack/angular/page.ts](https://github.com/patrikx3/angular-compile-html/blob/master/test/angular-webpack/angular/page.ts).

### Example 2
Corifeus Web Pages: [Typescript with imports](https://github.com/patrikx3/corifeus-app-web-pages/blob/master/src/angular/modules/cory-page.ts)

### Info
Angular 2/4/x tries to camelCase all attributes, for me it is still HTML, so my selectors always ```kebab-case```.



[//]: #@corifeus-footer


---
[**P3X-ANGULAR-COMPILE-HTML**](https://patrikx3.github.com/angular-compile-html) Build v1.1.157-254 on 3/28/2017, 11:06:55 AM

[Corifeus](http://github.com/patrikx3/corifeus) by [Patrik Laszlo](http://patrikx3.tk)
 


[//]: #@corifeus-footer:end
