const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

imagemin(['./vat-lat3195-f/*.jpg'], './thumb-vat-lat3195-f', {
    plugins: [
        imageminMozjpeg({quality: '10'})
    ]
}).then(files => {
    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});