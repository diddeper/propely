# Propely case

Dockerized Node.js app that proxies data from https://api.nilu.no/ and persisting it using MongoDB.

## How to:

1. Run docker container:

```
docker compose up
```

2. In your preferred browser:
```
http://localhost:8080/<endpoint>
```
Available endpoints: aqis, areas, components, meantypes, stations, timeseries
