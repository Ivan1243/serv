const express = require('express')
const app = express()
const port = 3000
let count = 5;
process.env.PWD = process.cwd()
    
app.use(express.static(process.env.PWD + '/img'));

app.get("/", (request, response) => {
    response.send('Hello from Express!')
})

app.get("/abc", (request, response) => {
    if (count > 0) {
            count--;
        }
    response.send('<button onclick="window.location.reload();">Товара осталось</button> <br> ' + '<input type="text" name="product"> ' + ' <script>document.getElementByName("product").value="test"</script> ' )
});
                


app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

