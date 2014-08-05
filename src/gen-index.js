var fs = require('fs');
var path = require('path');

var kDir = path.join(__dirname, '..');

function main() {
    var dirs = fs.readdirSync(kDir);
    dirs = dirs.filter(function(item){
        if (item === 'src' || item === '.git') {
            return false;
        }

        return fs.lstatSync(path.join(kDir, item)).isDirectory();
    });

    var data = {};
    dirs.forEach(function(dir){
        data[dir] = fs.readdirSync(path.join(kDir, dir));
    });

    var body = '';
    for (var key in data) {
        body += '<ul>';
        data[key].forEach(function(x){
            body += '<li><a href="' + key + '/' + x + '/index.html">' + key + '/' + x + '</a></li>';
        });
        body += '</ul>';
    }

    var html = [
        '<!doctype html>',
        '<html>',
            '<head>',
                '<meta charset="utf-8" />',
                '<title>ECOMFE API Documents</title>',
            '</head>',
            '<body>',
                body,
                '<p>', new Date(), '</p>',
            '</body>',
        '</html>'
    ];
    fs.writeFileSync(path.join(kDir, 'index.html'), html.join(''));
}

if (require.main === module) {
    main();
}
