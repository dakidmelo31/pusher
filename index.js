const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()

const {MongoClient, ServerApiVersion} = require("mongodb")


const Uri = 'mongodb://localhost:27017/project?directConnection=true';



function rotate(matrix, direction) {
  
    if(matrix.length <= 1){
      return matrix;
    }
    
    var result = [];

    const rowCount = matrix.length, colCount = matrix[0].length;

    console.log("Row:", rowCount)
    console.log("Col:", colCount)
    // console.log("Array:", matrix)
    switch(direction){
        
        case "clockwise":

        var insider = [];
        for(let j = 0; j < colCount; j++){
            insider[j] = [];
            insider[j].length = rowCount 
        }
        console.log("Insider", insider)

        for(let i = 0; i < colCount; i++){
            for(let j = 0; j < rowCount; j++){
                console.log("i: " + i + ",  j:" + j)

                insider[j][i] = matrix[j][i]
            }
    
        }



        console.log("Insider", insider)

        
            
        break;
  
        
        break;
        
        default:
        break;
    }
    
    return result;
  }

  console.log("Result:", rotate([[3,6,9,12],[2,5,8,11],[1,4,7,10]], 'clockwise'))





// mongoose.connect(Uri)

app.use(bodyParser.json())

app.get("/", (req, res, next)=>{
    res.send({message: "Hello Mom"})


})

app.use((req, res)=>{
    res.setHeader("Content-Type", "text/json")
})

app.listen(3000, () =>{
    console.log("now running")
})