//imports 

const express=require('express')

//configs
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//logic
app.get('/', (req,res) =>{
    res.send("Hello word!");
});

let users =[];
app.get('/echo/:msg', (req,res) =>{
    res.send(req.params.msg);
});
app.post('/users',(req,res) => {
    let user={}
    user.name=req.body.name;
    user.age =req.body.age;
    users.push(user);
    res.send("user has been added ")
});
app.get('/users',(req,res) => {
    res.send(users);
    // console.log(users[0]);
});

app.post('/echo',(req,res) => {
    res.send(req.body);
});

// app.put or app.patch  to update the user data
// app.delete to delete the user data

app.put('/users',(req,res) => {
    let user={}
    user.name="abhi";
    user.age=26;
    users.push(user)
    res.send("users updated ");
});
// app.delete('/users',(req,res) =>{
//     let result = users.pop();
//     res.send(result);
// });

app.delete('/users',(req,res) => {
    let user ={}
    user.name=req.body.name;
    console.log(users[users.length-1].name);
    // if (user[name]){
    //     result = users.pop(user);
    //     res.send(result);
    // }
})








//listen

app.listen(port, () =>{
    console.log(`app is listening:${port}`);
});