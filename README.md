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
pm2 deploy dev setup
pm2 deploy dev
pm2 deploy dev revert 1
pm2 deploy dev exec "pm2 restart all"
pm2 deploy production
```

### install

* [Centos install mongo](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-centos-7)

### troubleshoptt

**Question**

```
fatal: no upstream configured for branch 'master'
```

**fix**

```
git branch --set-upstream-to=origin/master master
```
