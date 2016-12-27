var redis = require('redis')
var client = redis.createClient({
  host: 'redis',
  port: 6379
})

client.keys('network.users.*', redis.print)
