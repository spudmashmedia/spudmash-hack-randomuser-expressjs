# Spudmash-hack-randomuser-ExpressJS
Quick Hack Tasks:

Integrate the http://randomuser.me REST service with:

Express
Each tech will consist of:
Service Layer
Automated Test (unit, integration)


## Installation

install node_modules with 
```
npm i
```


## Usage

| npm command | action |
|------|--------------|
| npm run build | webpack build, deployes to /dist folder |
| npm run develop | uses node-dev to launch http://localhost:8080 |
| npm run start | uses pm2 cluster deployment (warning: will utilize ALL cpus on server)  - will launch /dist/api.js|
| npm run monitor | uses pm2 monitor mode - monitors all instances on cluster|
| npm run test | runs all Mocha tests |

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

| Date | Version | Description|
|-------|----------|-------------|
|2017-04-16 | 1.0 | Some hacks

## TODO

create dockerfile

## License

MIT