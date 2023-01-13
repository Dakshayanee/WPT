const express=require('express')

const router=express.Router()
const db=require('../db')

router.get('/product',(req,resp)=>{
    const statement='select id,title,description,price from product'
    db.execute(statement,(err,data)=>{
          if(err){
            console.log(err);
            resp.send(err)
          }
          console.log(data);
          resp.send(data)
    })
})

router.post('/product',(req,resp)=>{
    const{title,description,price}=req.body
    const statement=`insert into product(title,description,price)values('${title}','${description}','${price}')`
    db.execute(statement,(err,data)=>{
        if(err){
            resp.send(err)
        }
        resp.send(data)
    })
})
router.put('/product/:id',(req,resp)=>{
    const{id}=req.params
    const{title,description,price}=req.body
    const statement=`update product set title='${title}',description='${description}',price='${price}'where id=${id}`
    db.execute(statement,(err,data)=>{
        if(err){
            resp.send(err)
        }
        resp.send(data)
    })
})
 router.delete('/product/:id',(req,resp)=>{
      const{id}=req.params
      const statement=`delete from product where id=${id}`;
      console.log(statement)
      db.execute(statement,(err,data)=>{
        if(err){
            resp.send(err)

        }
        resp.send(data)

      })
 })

module.exports=router
