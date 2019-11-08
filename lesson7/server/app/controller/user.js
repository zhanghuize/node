const {query} = require('../config')

module.exports.registry = async etx=>{
    const {username,password} = ctx.request.body;
    const $sql = `insert into user (username,password) values (?,?)`;
    const $params = [username,password]
    const results = await query($sql,$params);
    ctx.body={
        code:1,
        msg:'注册成功！'
    }
};

module.exports.login =  async etx=>{
    const {username,password} = ctx.request.body;
    const $sql = `selecy * from user where username=? and password=?`;
    const $params = [username,password]
    const results = await query($sql,$params);
    if(results.length){
        ctx.body={
            code:1
        }
    }else{
        ctx.body={
            code:0
        }
    }
};