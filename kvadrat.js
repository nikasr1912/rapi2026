//napravimo rutu GET /kvadrat/:n koja vraća kvadrat broja n
//ako n nije broj; vratimo status 400

const express=require("express");
const app=express();
const PORT= 3000;

app.get('/kvadrat/:n', (req,res)=>
{
    const broj=Number(req.params.n); //kada nema upitnika nego je u urlu samo broj onda imamo params
    if(!Number.isInteger(broj))
    {
        res.status(400).json({error:"Podatak koji ste poslali nije broj"});
    } 
    else
    {
        res.json({rezultat: broj*broj});
    }
});

app.listen(PORT, ()=>
{
    console.log(`Server radi na portu ${PORT}`);
});