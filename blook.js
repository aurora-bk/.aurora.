//MADE BY AURORA
const Blooket = require('blooket')
const client = new Blooket();
const a = ''
const name = 'hPJJzhs6AM'

client.joinGame(a , name+'-1', 'Frost Wreath')
client.joinGame(a , name+'-2', 'Tropical Wreath')
client.joinGame(a , name+'-3', 'Spooky Ghost')
client.joinGame(a , name+'-4', 'Seal')
client.joinGame(a , name+'-5', 'Penguin')
client.joinGame(a , name+'-6', 'Baby Penguin')
client.joinGame(a , name+'-7', 'Pig')
client.joinGame(a , name+'-8', 'Horse')
client.joinGame(a , name+'-9', 'Sheep')
client.joinGame(a , name+'-10', 'Dog')
client.joinGame(a , name+'-11', 'Artic Fox')
client.joinGame(a , name+'-12', 'Artic Hare')
client.joinGame(a , name+'-13', 'Polar Bear')
client.joinGame(a , name+'-14', 'Snow Owl')
client.joinGame(a , name+'-15', 'Cow')
client.joinGame(a , name+'-16', 'Goat')
client.joinGame(a , name+'-17', 'Bear')
client.joinGame(a , name+'-18', 'Moose')
client.joinGame(a , name+'-19', 'Owl')
client.joinGame(a , name+'-20', 'Raccoon')


client.on('Joined', data => {
    console.log(`joined as: ${data.name}`)
});
