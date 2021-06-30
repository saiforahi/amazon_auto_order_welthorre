const schedule = require('./plateform/amazon');
//const schedule = require('./orderSchedule')
//const test = require('./test');
const scrapper = async () => {
    schedule();
}
module.exports = scrapper;