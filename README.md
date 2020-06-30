# GithubSurfingApp

This is the repository for Angular Coding Challenge.

## Project Structure


The project structure is as follows(implements lazy loading).

```
--> src                                 // Main angular application
-------> core                           // Contains services ad interfaces
-------> detail-page                    // Detail page Module
-------> home                           // home page module( currently it is blanks, added them just for future enhancement )
-------> search-result                  // module that handles searching and filtering
-------> shared                         // contains common components

```

## Requirements

Node 12
NPM 6
Angular 9 `npm install -g @angular/cli`


## Used Packages
bulma               //  css framework
font-awesome        // icons
js-base64           //decode readme content which is base64 encoded
ngx-pagination      // pagination in search/filter 
remarkable          //render markdown

## Getting started

```
git clone https://github.com/Sushilkarki77/githubSurfingApp
cd githubSurfingApp
npm install
ng serve
```

## Demo
https://sushilkarki77.github.io/