# portfolio
Portfolio site at www.jamestarling.co.uk

Simple single page application. The project data is imported from Google Sheets with [Tabletop](https://github.com/jsoma/tabletop), preprocessed with [Lovefield](https://github.com/google/lovefield) and shown with [AngularJS](https://github.com/angular/angular.js).

To build, with npm, gulp and bower already installed:
```
npm install
bower install
gulp
```

To build a minified version and update the site via FTP:
```
gulp dist
```

To update the project data from the Google spreadsheet
```
gulp update-data
```