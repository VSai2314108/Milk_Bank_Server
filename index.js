const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json())

app.listen(3000, () => console.log('Server running at port 3000'));

//demo home page, ensures we have access to the server
app.get('/', function (req, res) {
  res.send('Hello World')
})

// Route to get all Deposits
app.get('/api/get', cors(), (req,res)=>{
db.query("SELECT * FROM MilkData", (err,result)=>{
    if(err) {
    console.log(err)
    }
    res.send(result)
});

});

// Route to get one Deposit
app.get('/api/getFromId/:id', cors(), (req,res)=>{

const id = req.params.DepositID;
 db.query("SELECT * FROM MilkData WHERE DepositID = ?", id,
 (err,result)=>{
    if(err) {
    console.log(err)
    }
    else {
      res.send(result)
    }
    });   });

// Route for creating the Deposit
app.post('/api/create', (req,res)=> {
const depositID = req.body.depositID;
const fatPercent = req.body.fatPercent;
const proteinPercent = req.body.proteinPercent;
const lactosePercent = req.body.lactosePercent;
const volume = req.body.volume;
const kCal = req.body.kCal;
console.log('prequery')
db.query('INSERT INTO MilkData (DepositID, fat, protein, lactose, volume, kcal) VALUES (?,?,?,?,?,?)',[depositID,fatPercent,proteinPercent,lactosePercent,volume,kCal], (err,result)=>{
  console.log('query')
   if(err) {
   console.log(err)
   }
   else {
    res.send(result)
   }
   console.log("worked")
});
})
