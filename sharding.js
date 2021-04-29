// sharding.js
const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./server.js');

Manager.spawn(3);
Manager.on('launch', shard => console.log(`- Spawned shard ${shard.id} -`)); // Optional
