const express =require('express')
const app =express()
const category =require('./data/Course.json')
const cors =require('cors')
const courses =require('./data/details.json')
const blog =require('./data/blogs.json')

const port =process.env.PORT || 5000

app.use(cors())
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/course/:id',(req,res)=>{
    const id =req.params.id
    if(id==='05'){
        res.send(courses)
    }
    else{
        
        const categoryCoursee =courses.filter(n=>n.itemID === id)
        res.send(categoryCoursee)
    }
})

app.get('/buycourse/:id',(req,res)=>{
    const id =req.params.id
    const selectedNews = courses.find(n=>n.id === id)
    res.send(selectedNews)
})

app.get('/blog/:id',(req,res)=>{

    const id =req.params.id
    const selectedBlog = blog.find(n=>n.id === id)
    res.send(selectedBlog)

})

app.get('/course',(req,res)=>{
    res.send(category)
})
app.get('/blog',(req,res)=>{
    res.send(blog)
})
app.listen(port,()=>{
    console.log('New server Running on',port);
})