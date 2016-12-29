# Redis PUB/SUB & Socket.io with node
This is a POC to see how redis pub/sub works and how to connect the data obtained by subscribing to redis with the browser in real time.
The sender is just a loop that publishes buffered objects in a redis channel called `my-first-channel`
The receiver is subscribed to `my-first-channel` and unbuffer those objects to send via socket.io

## Init
```
make start
```

## Logs
```
make logs
```

## Connect with app
```
make app/ssh
```

## See results in a browser
To see some results in a browser open the index.html after starting the project
