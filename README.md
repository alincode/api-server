# api-server

**set up bobel**

```
npm i -D babel-core babel-polyfill babel-preset-es2015 babel-preset-stage-0 babel-loader
```

[bobel await ](http://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined-with-async-await)


## test

[api server status](http://114.35.96.3/api/v2/scraper)


### deploy

```
Basic Examples:

    First initialize remote production host:
    $ pm2 deploy ecosystem.json production setup

    Then deploy new code:
    $ pm2 deploy ecosystem.json production

    If I want to revert to the previous commit:
    $ pm2 deploy ecosystem.json production revert 1

    Execute a command on remote server:
    $ pm2 deploy ecosystem.json production exec "pm2 restart all"

    PM2 will look by default to the ecosystem.json file so you dont need to give the file name:
    $ pm2 deploy production
    Else you have to tell PM2 the name of your ecosystem file
```

### troubleshoptt

**Question**

```
fatal: no upstream configured for branch 'master'
```

**fix**

```
git branch --set-upstream-to=origin/master master
```
