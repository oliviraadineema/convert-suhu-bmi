const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express() //deklarasi variabel express
const port = 8080 //deklarasi port

app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, res) => { // endpoint '/'
    res.send("Hello Programers!")
    })

app.get('/convert/celcius/:nilai', (req,res)=>{
    var nilai = req.params.nilai
    var fahrenheit = (nilai*9/5)+32
    var kelvin = (nilai*1)+273.15
    var reamur = nilai *(4/5)
    res.send({
        'Fahrenheit': fahrenheit,
        'Kelvin': kelvin,
        'Reamur': reamur,
    })
    })

app.get('/convert/Fahrenheit/:nilai', (req,res)=>{
    var nilai = req.params.nilai
    var celcius = (nilai-32)*(5/9)
    var kelvin = (nilai-32)*(5/9)+273.15
    var reamur = (nilai-32)*(4/9)
    res.send({
        'Celcius': celcius,
        'Kelvin': kelvin,
        'Reamur': reamur,
    })
})

app.get('/convert/reamur/:nilai', (req,res)=>{
    var nilai = req.params.nilai
    var celcius = nilai * (5/4)
    var kelvin = nilai * (5/4) + 273.15
    var fahrenheit = nilai * (9/4) + 32
    res.send({
        'Celcius': celcius,
        'Kelvin': kelvin,
        'Fahrenheit': fahrenheit,
    })
})

app.get('/convert/kelvin/:nilai', (req,res)=>{
    var nilai = req.params.nilai
    var celcius = nilai - 273.15
    var reamur = (nilai - 273.15) * (4 / 5)
    var fahrenheit = (nilai - 273.15) * (9 / 5) + 32
    res.send({
        'Celcius': celcius,
        'Reamur': reamur,
        'Fahrenheit': fahrenheit,
    })
})


app.post('/biner', (req, res) => {
    var bilangan = req.params.bilangan
    var decimal = parseInt(bilangan, 2)
    var oktal = parseInt(bilangan, 2).toString(8)
    var heksadesimal = parseInt(bilangan, 2).toString(16)

    res.send({
        'biner': bilangan,
        'result': {
            'decimal': decimal,
            'oktal': oktal,
            'heksadesimal': heksadesimal
        }
    })
})

app.post('/decimal', (req, res) => {
    var bilangan = req.params.bilangan
    var biner = parseInt(bilangan, 10).toString(2)
    var oktal = parseInt(bilangan, 10).toString(8)
    var heksadesimal = parseInt(bilangan, 10).toString(16)

    res.send({
        'decimal': bilangan,
        'result': {
            'biner': biner,
            'oktal': oktal,
            'heksadesimal': heksadesimal
        }
    })
})

app.get('/heksadesimal', (req, res) => {
    var bilangan = req.params.bilangan
    var decimal = parseInt(bilangan, 16)
    var biner = parseInt(bilangan, 16).toString(2)
    var oktal = parseInt(bilangan, 16).toString(8)

    res.send({
        'heksadesimal': bilangan,
        'result': {
            'decimal': decimal,
            'biner': biner,
            'oktal': oktal
        }
    })
})

app.get('/oktal', (req, res) => {
    var bilangan = req.params.bilangan
    var decimal = parseInt(bilangan, 8)
    var biner = parseInt(bilangan, 8).toString(2)
    var heksadesimal = parseInt(bilangan, 8).toString(16)

    res.send({
        'oktal': bilangan,
        'result': {
            'decimal': decimal,
            'biner': biner,
            'heksadesimal': heksadesimal
        }
    })
})

app.post('/bmi', (req, res) => {
    tinggi = req.body.tinggi
    berat = req.body.berat

    hasil = berat / (tinggi * tinggi)

    if (result < 18.5){
        var status = "Kekurangan BB"
    } else if ((result > 18.5) && (result <= 25)){
        var status = "BB Normal"
    } else if ((result > 25) && (result <= 30)){
        var status = "Kelebihan BB"
    } else if (result > 30){
        var status = "Obesitas"
    }

    console.log(result)

    res.send({
        'Tinggi': tinggi + 'm',
        'Berat': berat + 'kg',
        'BMI':Math.round(result),
        'Status' : status,
    })
})

app.listen(port, () => {
    console.log(`Server di port ${port}`)
    })
