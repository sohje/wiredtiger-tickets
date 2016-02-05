# wiredtiger-tickets
Get the number of read/write tickets available to the WiredTiger storage engine.

Read/Write tickets represent the number of concurrent read/write operations allowed into the storage engine.  
When this value reaches zero new read/write requests may queue until a read/write ticket becomes available.  
Read more on [MongoDB](https://docs.mongodb.org/manual/)

## Install

```
$ npm install --save wiredtiger-tickets
```


## Usage

```js
var wrTickets = require('wiredtiger-tickets');
wrTickets('mongodb://localhost:27017/', (err, data) => {
    console.log(data)
    //=> { read: 128, write: 128 }
})
```

## API

### wiredtiger-tickets(url)

##### url(required)

Type: `string`  
Default: `null`

Give it a mongodb URI

## License

MIT © [Nikolay Spiridonov](https://github.com/sohje)