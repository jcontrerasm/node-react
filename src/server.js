import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './../webpack.config';

// Initialzing packages
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

// Routes
app.get('/', (req, res) => {
  res.send('hello wordl');
});

app.get('/api', (req, res) => {
  res.json({ api: 'works'});
});

app.listen(app.get('port'), () => {
  console.log("Servidor iniciado...");
});
