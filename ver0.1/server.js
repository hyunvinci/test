var express = require('express');
    var path = require('path');
    var app = express();
  
    app.use(express.static(path.join(__dirname, 'gallery')));
  
    app.listen(52274, function(){
            console.log('Server running at http:// 127.0.0.1:52274')
    });
