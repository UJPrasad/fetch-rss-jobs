const schedule = require('node-schedule');
const Parser = require('rss-parser');
const defaultLink = '';
const parser = new Parser(); 
const pgp = require('pg-promise')();
const db = pgp('postgres://jp:jp@localhost:5432/fetch_jobs');

const args = process.argv.slice(2);
const minutes = args && !isNaN(parseInt(args[0])) && args[0] || 5;
const link = args && args[1] || defaultLink;
const scheduleEvery = `*/${minutes} * * * *`;

let oldCount = 0;

schedule.scheduleJob(scheduleEvery, function(){
    (async () => { 
        let feed = await parser.parseURL(link);
        feed.items.forEach(item => {
            db.oneOrNone(`insert into all_jobs(link, heading) values($1, $2) on conflict do nothing`, [item.link, item.title]);
        });
    })();
});

schedule.scheduleJob(`*/${parseInt(minutes) + 1} * * * *`, async () => {
    const { count } = await db.oneOrNone('select count(*) as count from all_jobs');
    if (count > oldCount) {
        oldCount += parseInt(count);
        console.log('Will Push notifications')
    }
});