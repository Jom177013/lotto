import { Discord } from './struct/client.js'
import { Lottery } from './struct/Lotto.js'
import config from './config.js'

const client = new Discord(config);
client.login(config.token);