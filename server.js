// Dependencies
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/eatmeup');

const app = express();
const compiler = webpack(config);

// Express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Webpack
app.use(express.static(__dirname + '/static'));
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

// Routes
app.use('/api', require('./src/server/routes/api'));

// Hot loader
app.use(middleware);
app.use(webpackHotMiddleware(compiler));
app.get('/', function response(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


// Server start
app.listen(3000);
console.log('Listening at http://localhost:3000/');

/*new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});*/
