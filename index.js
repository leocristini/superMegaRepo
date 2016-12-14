var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use('/', function(request, response) 
{
    var text = 'Hello world';
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(text);
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});