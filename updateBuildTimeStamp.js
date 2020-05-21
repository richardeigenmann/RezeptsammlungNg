var replace = require('replace-in-file');
const moment = require('moment-timezone');
var timeStamp = moment(new Date()).tz('Europe/Zurich').format("dddd, DD MMMM YYYY HH:mm:ss z");
const options = {
    files: [
        'src/environments/environment.ts',
        'src/environments/environment.prod.ts',
    ],
    from: /buildTimeStamp: '(.*)'/g,
    to: "buildTimeStamp: '" + timeStamp + "'",
    allowEmptyPaths: false,
};
try {
    let changedFiles = replace.sync(options);
    if (changedFiles == 0) {
        throw "Please make sure that the file '" + options.files + "' has \"buildTimeStamp: ''\"";
    }
    console.log('Build timestamp is set to: ' + timeStamp + " in files " + JSON.stringify(options.files));
} catch (error) {
    console.error('Error occurred:', error);
    throw error
}