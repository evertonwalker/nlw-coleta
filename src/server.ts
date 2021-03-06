import express from 'express'
import path from 'path';
//é necessário colocar ./ quando é um arquivo, caso seja um modulo não.
import routes from './routes';

const app = express();

//Indicando para o express que a aplicação utilizará de Json para receber dados no body
app.use(express.json());

//Utilizado para retornar as fotos do aplicativo
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

//Usando as rotas criadas no outro arquivo.
app.use(routes);

app.listen(3333);