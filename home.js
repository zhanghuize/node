const { query } = require("../config");

module.exports.carouselList = async ctx => {
  $sql = `select * from banner`;
  const results = await query($sql);
  if (results.length) {
    ctx.body = {
      code: 1,
      msg: "查询成功!",
      result: results
    };
  } else {
    ctx.body = {
      code: 0,
      msg: "暂无数据!",
      result: []
    };
  }
};

module.exports.navigatorList = async ctx => {
  $sql = `select * from navigator`;
  const results = await query($sql);
  if (results.length) {
    ctx.body = {
      code: 1,
      msg: "查询成功!",
      result: results
    };
  } else {
    ctx.body = {
      code: 0,
      msg: "暂无数据!",
      result: []
    };
  }
};

module.exports.productList = async ctx => {
  // const {type} = ctx.request.query;
  // const $sql = `select * from product,type where type=typeid and tye=${type}`;
  // const results = await query($sql);
  // if(results.length){
  //     ctx.body={
  //         code:1,
  //         msg: '查询成功!',
  //         result: results
  //     };
  // }else{
  //     ctx.body = {
  //         code: 0,
  //         msg: '暂无数据!',
  //         result: []
  //     }  ;
  // }
  console.log(ctx.request.query.type);
  const type = ctx.request.query.type;
  const $sql =
    type == undefined
      ? `select * from product`
      : "select pname,`describe`,price,pimage,typename from product,type where type=typeid and type=?";
  const results = await query($sql, [type]);
  ctx.body = {
    code: 1,
    msg: "查询成功！",
    result: results
  };
};
