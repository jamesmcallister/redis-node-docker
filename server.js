var redis = require('redis')
var client = redis.createClient({
  host: 'redis',
  port: 6379
})

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on('error', function (err) {
  console.log('Error ' + err)
})

client.set('string key', 'string val', redis.print)
client.hset('hash key', 'hashtest 1', 'some value', redis.print)
client.hset(['hash key', 'hashtest 2', 'some other value'], redis.print)
client.hkeys('hash key', function (err, replies) {
  console.log(replies.length + ' replies:')
  replies.forEach(function (reply, i) {
    console.log('    ' + i + ': ' + reply)
  })

  client.quit()
})

console.log(client.keys('*'))
