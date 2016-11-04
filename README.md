# api-server

**set up bobel**

```
npm i -D babel-core babel-polyfill babel-preset-es2015 babel-preset-stage-0 babel-loader
```

[bobel await ](http://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined-with-async-await)

**set up remote server**

```
/sbin/iptables -I INPUT -p tcp --dport 1337 -j ACCEPT
systemctl restart network
```
