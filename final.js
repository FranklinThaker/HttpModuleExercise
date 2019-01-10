    let http = require('http');
    let url = require('url');

    let handleRequest = (req, response) => {       
      
        if(req.method == 'GET' && req.url == '/'){
            response.write("<form name='index' method='post' action='/sign'><input type='submit' value='welcome'/></form>")
        }

        if(req.method == 'POST' && req.url == '/sign'){
            response.write(`<form method='GET' action='/next'>
                            Name: <input type='text' name='fname' />
                            Mobile: <input type='text' name='fmobile' />                        
                            <input type='submit'/></form>
                                    
            `);
        }

        if(req.method == 'GET' && req.url.indexOf('next') > -1 ){
            let q = url.parse(req.url, true).query; 
            response.write("<h1>Name: " + q.fname);
            response.write("Mobile: "+ q.fmobile + "</h1>");
              
        }
        response.end();
    };
    
    http.createServer(handleRequest).listen(4053);
