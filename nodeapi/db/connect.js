
// 数据库的连接文件
// 连接数据库 27017 默认端口号
let dburl = 'mongodb+srv://lisang:lhw092539@car-5ruyy.mongodb.net/test?retryWrites=true&w=majority'
const mongoose = require('mongoose');
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection //数据库的连接对象
db.on('error', () => { console.log('数据库连接失败') });
db.once('open', function () {
    console.log('数据库第一次连接成功')
});