# portfolio
Portfolio site at www.jamestarling.co.uk

Simple single page application. The project data is imported from Google Sheets with [Tabletop](https://github.com/jsoma/tabletop), preprocessed with [Lovefield](https://github.com/google/lovefield) and shown with [AngularJS](https://github.com/angular/angular.js).

To set up the project dependencies, with npm, gulp and bower already installed:
```
npm install
bower install
```

To run the gulp tasks you will need to add an `ftp.json` file to the project directory in the following format
```
{
    "user": "user",
    "password": "password",
    "homeDir": "/your_path"
}
```

To build:
```
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
