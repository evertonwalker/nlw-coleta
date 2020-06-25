import express from 'express'

const app = express();


app.get('/users', (req, res) => {
    return res.json(['Everton', 'Walker']);

});

app.post('/users', (req, res) => {
    
    const user = {
        name: 'Everton',
        email: 'everton.walker@hotmail.com'
    }
    
    
    return res.json(user);
});

app.listen(3333);