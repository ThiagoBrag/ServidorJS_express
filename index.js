const express = require('express')
const app = express()
const port = 3000;

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Meu home")
})

const listPessoas = [
    {id: 1, nome: "Thiago"},
    {id: 2, nome: "Diego"},
    {id: 3, nome: "João"},
];

const listUsers = [
    {id: 1, nome: "thigas"},
    {id: 2, nome: "dieguito"},
    {id: 3, nome: "jon"},
];

app.post("/api/pessoas", (req, res) => {
    const pessoa = req.body;
    pessoa.id = listPessoas.length + 1;
    listPessoas.push(pessoa)
    res.json(pessoa);
})

app.put("/api/pessoas/:id", (req, res) => {
    const id = req.params.id
    const pessoa = req.body
    const index = listPessoas.findIndex(p => p.id == id)
    req.id = id
    listPessoas[index] = pessoa
    res.json(pessoa)
})

app.get("/api/pessoas/:id", (req, res) => {
    const id = req.params.id
    const pessoa = listPessoas.find(p => p.id == id)
    res.json(pessoa)
})

app.delete("/api/pessoas/:id", (req,res) => {
    const id = req.params.id
    const index = listPessoas.findIndex(p => p.id == id)
    listPessoas.splice(index, 1)
    res.json(listPessoas)
})

app.get("/api/pessoas", (req, res) => {
    console.log(req)
    res.json(listPessoas)
})

app.post("/api/users", (req, res) => {
    const user = req.body;
    user.id = listUsers.length + 1;
    listUsers.push(user)
    res.json(user);
})

app.put("/api/users/:id", (req, res) => {
    const id = req.params.id
    const user = req.body
    const index = listUsers.findIndex(p => p.id == id)
    req.id = id
    listUsers[index] = user
    res.json(user)
})

app.get("/api/users/:id", (req, res) => {
    const id = req.params.id
    const user = listUsers.find(p => p.id == id)
    res.json(user)
})

app.delete("/api/users/:id", (req,res) => {
    const id = req.params.id
    const index = listUsers.findIndex(p => p.id == id)
    listUsers.splice(index, 1)
    res.json(listUsers)
})

app.get("/api/users", (req, res) => {
    console.log(req)
    res.json(listUsers)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})