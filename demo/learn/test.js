const iconv = require('iconv-lite');
// iconv.decode(buffer,charset);
let resultUtf = iconv.encode('aa顶顶顶','UTF-8');
let resultGbk = iconv.encode('aa顶顶顶','gbk');
console.log(resultUtf,resultGbk);
// console.log(iconv.decode(result,'gbk'));


const buf1 = Buffer.from('aa顶顶顶');
console.log(buf1);
console.log(buf1.toString());
// prints: this is a tést
console.log(buf1.toString('ascii'));
// prints: this is a tC)st

const buf2 = Buffer.from('7468697320697320612074c3a97374', 'hex');
console.log(buf2.toString());