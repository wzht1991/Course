function Fromaresponse(res,playload,code=200){
    const response={code};
    // 少于400 就是能找到东西了
    if(code<400){
    // playload.data就是系统返回来的信息 
      if(playload.data){
          response.data=playload.data;
      }else{
          response.data=playload;
      }
      
    } else{
        response.error=playload;
    }
    return res.status(code).send(response);
}
module.exports={Fromaresponse};