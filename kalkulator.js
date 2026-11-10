const express=require("express");
const { error } = require("node:console");
const app=express();
const PORT=3000;

function provjeri(req){
    const broj1=Number(req.query.a);
    const broj2=Number(req.query.b);

    if (Number.isNaN(broj1) || Number.isNaN(broj2))
    {
        return {error:"Parametri nisu brojevi"}
    }
    else
    {
        return {broj1, broj2};
    }
}

app.get('/zbroj', (req,res)=>
{
    const validacija=provjeri(req);
    if(validacija.error)
    {
        res.json({greska:"Dogodila se greška"}); //ovo možemo testirati a error
    } 
    else
    {
        let rezultat= validacija.broj1+validacija.broj2;
        res.json({zbroj:rezultat});
    }
});


app.get('/razlika', (req,res)=>
{
    const validacija=provjeri(req);
    if(validacija.error)
    {
        res.json({greska:"Dogodila se greška"}); //ovo možemo testirati a error
    } 
    else
    {
        let rezultat= validacija.broj1-validacija.broj2;
        res.json({zbroj:rezultat});
    }
});


app.get('/mnozi', (req,res)=>
{
    const validacija=provjeri(req);
    if(validacija.error)
    {
        res.json({greska:"Dogodila se greška"}); //ovo možemo testirati a error
    } 
    else
    {
        let rezultat= validacija.broj1*validacija.broj2;
        res.json({zbroj:rezultat});
    }
});


app.get('/dijeli', (req,res)=>
{
    const validacija=provjeri(req);
    if(validacija.error)
    {
        res.json({greska:"Dogodila se greška"}); //ovo možemo testirati a error
    } 
    else
    {
        let rezultat= validacija.broj1/validacija.broj2;
        res.json({zbroj:rezultat});
    }
});

app.listen(PORT, ()=>
{
    console.log(`Server radi na portu ${PORT}`);
}
)
