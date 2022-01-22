const Blooket = require('blooket')
const client = new Blooket();
const pin = ''
const name = ''

client.joinGame(pin , name+'-1', 'Frost Wreath')
client.joinGame(pin , name+'-2', 'Tropical Wreath')
client.joinGame(pin , name+'-3', 'Spooky Ghost')
client.joinGame(pin , name+'-4', 'Seal')
client.joinGame(pin , name+'-5', 'Penguin')
client.joinGame(pin , name+'-6', 'Baby Penguin')
client.joinGame(pin , name+'-7', 'Pig')
client.joinGame(pin , name+'-8', 'Horse')
client.joinGame(pin , name+'-9', 'Sheep')
client.joinGame(pin , name+'-10', 'Dog')
client.joinGame(pin , name+'-11', 'Artic Fox')
client.joinGame(pin , name+'-12', 'Artic Hare')
client.joinGame(pin , name+'-13', 'Polar Bear')
client.joinGame(pin , name+'-14', 'Snow Owl')
client.joinGame(pin , name+'-15', 'Cow')
client.joinGame(pin , name+'-16', 'Goat')
client.joinGame(pin , name+'-17', 'Bear')
client.joinGame(pin , name+'-18', 'Moose')
client.joinGame(pin , name+'-19', 'Owl')
client.joinGame(pin , name+'-20', 'Raccoon')


client.on('Joined', data => {
    console.log(`joined as: ${data.name}`)
});
