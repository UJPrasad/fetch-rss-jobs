# fetch-rss-jobs
A Node based app to fetch rss feed and store then in DB and get updates when data is changed

 [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity) [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)


# prerequisites
```
Nodejs
NPM
Postgres
```
# installation and run
* Make neccessary changes in .env file
* run `npm i` 
* run `./dev/init.sh`
* run `./dev/refresh.sh`
* run command `node index.js [minutes] "[rss-feed-link]"`
