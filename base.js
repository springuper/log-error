var M = {
    toQueryString: function(o) {
        var res = [], p, encode = encodeURIComponent;
        for (p in o) {
            if (o.hasOwnProperty(p)) res.push(encode(p) + '=' + encode(o[p]));
        }
        return res.join('&');
    },
    beacon: function(msg) {
        var img = new Image();
        img.src = 'http://xxx.com/_.gif?' + msg;
        M.printError(msg);
    },
    printError: function(msg) {
        var el = document.createElement('p');
        el.innerHTML = msg;
        document.getElementById('error-log').appendChild(el);
    },
    log: function(info) {
        M.beacon(M.toQueryString(info));
    },
    runMethod: function(method) {
        try {
            method();
        } catch(ex) {
            M.log({ msg: ex.message, type:'try-catch' });
        }
    }
};

window.onerror = function(msg, url, line) {
    M.log({ msg: msg, url: url, line: line, type: 'window.onerror' });
    return true;
};
