const express = require('express'); 
const path = require('path');

const app = express()
app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/templates/main.html'));
});

app.get('/advAI-ml', (req, res) => {
    res.sendFile(path.join(__dirname, '/templates/advAI-ml.html'));
});

app.get('/advAI-adv_attack', (req, res) => {
    res.sendFile(path.join(__dirname, '/templates/advAI-adv_attack.html'));
});

app.get('/advAI-adv_ex', (req, res) => {
    res.sendFile(path.join(__dirname, '/templates/advAI-adv_ex.html'));
});

app.get('/advAI-ml', (req, res) => {
    res.sendFile(path.join(__dirname, '/templates/advAI-ml.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/templates/about.html'));
});

app.use(express.static(path.join(__dirname, '/static/')));

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});