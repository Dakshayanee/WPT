const express=require('express')

const router=express.Router()
const db=require('../db')

router.get('/Student',(req,resp)=>{
      const statement='select rollno,Name,Course,Phoneno,Marks from student '
      db.execute(statement,(err,data)=>{
        if(err){
            resp.send(err)
        }
        resp.send(data)
      }) 
})
router.post('/Student',(req,resp)=>{
    const{rollno,name,course,phoneno}=req.body
    const statement=`insert into student(rollno,name,course,phoneno)values('${rollno}','${Name}','${course}','${phoneno}','${Marks}') `
    db.execute(statement,(err,data)=>{
           if(err){
            resp.send(err)
           }
           resp.send(data)
    })
})

  router.put('/Student/:id',(req,resp)=>{
       const{id}=req.params
       const{rollno,name,course,phoneno}=req.body
       const statement=`update  Student set rollno='${roll},'name='${name}','course='${course}','phoneno='${phoneno}'`
       db.execute(statement,(err,data)=>{
        if(err){
            resp.send(err)
        }
        resp.send(data)
       })
  })

  router.delete('/Student/:id',(req,resp)=>{
          const{id}=req.params
          const statement=`delete student where id='${id}'`
          db.execute(statement,(err,data)=>{
            if(err){
                resp.send(err)
            }
            resp.send(data)
          })

  })



module.exports=router