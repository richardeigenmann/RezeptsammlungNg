import {replaceInFileSync} from 'replace-in-file'
import moment from 'moment-timezone';

const timeStamp = moment(new Date()).tz('Europe/Zurich').format("dddd, DD MMMM YYYY HH:mm:ss z");
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
    const results = replaceInFileSync(options);
    console.log('Replacement results: ', results);
} catch (error) {
    console.error('Error occurred:', error);
    throw error
}