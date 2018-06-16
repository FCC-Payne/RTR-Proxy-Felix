const express = require ('express');
const app = express();


/*Carousel*/
app.get('/:id/carousel/bundle', (req, res) => {
  res.redirect(`http://localhost:3004/${req.params.id}/bundle.js`)
});
     
/*Review*/
app.get('/:id/reviews/bundle', (req, res) => {
  res.redirect(`http://localhost:3002/${req.params.id}/bundle.js`)
})

app.get('/:id/reviews/stylesheet', (req, res) => {
  res.redirect(`http://localhost:3002/${req.params.id}/stylesheet.css`)
})

/*Viewer*/
app.get('/:id/photos/bundle', (req, res) => {
  res.redirect(`http://localhost:3001/${req.params.id}/bundle.js`)
})
app.get('/:id/photos/stylesheet', (req, res) => {
  res.redirect(`http://localhost:3001/${req.params.id}/styles.css`)
})

/*Form*/
app.get('/:id/forms/bundle', (req, res) => {
  res.redirect(`http://localhost:3003/${req.params.id}/bundle.js`)
})

app.use('/:id', express.static('public'));

app.listen(3000, () => console.log('Proxy server listening on port 3000!'));
module.exports.app = app;
