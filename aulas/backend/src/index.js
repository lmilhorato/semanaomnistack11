/**
 * MÉTODOS HTTP
 * GET: Buscar/Listar informação no back-end
 * POST: Criar informação no back-end
 * PUT: Alterar informação no back-end
 * DELETE: Deleta informação no back-end
 */
/**
 * Tipos de Parâmetros
 * Query Params:Parâmetros nomeados enviados na rota após "?" (Filtros,paginação)
 * Route Params:Parâmetros utilizados para identificar recursos
 * Requeste body:   Corpo da requisição, utilizado para criar ou alterar recursos
 */

const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);


app.listen(3333);