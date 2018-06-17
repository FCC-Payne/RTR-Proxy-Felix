const express = require ('express');
const app = express();


/*Carousel*/
app.get('/:id/carousel/bundle', (req, res) => {
  res.redirect(`http://rtr-carousel.us-west-1.elasticbeanstalk.com/${req.params.id}/bundle.js`)
});
     
/*Review*/
app.get('/:id/reviews/bundle', (req, res) => {
  res.redirect(`http://rtrreviews-env.5i33pp4m8w.us-west-1.elasticbeanstalk.com/${req.params.id}/bundle.js`)
})

app.get('/:id/reviews/stylesheet', (req, res) => {
  res.redirect(`http://rtrreviews-env.5i33pp4m8w.us-west-1.elasticbeanstalk.com/${req.params.id}/stylesheet.css`)
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
  res.redirect(`http://form-input-fec.us-west-1.elasticbeanstalk.com/33/${req.params.id}/bundle.js`)
})

app.use('/:id', express.static('public'));

app.listen(8081, () => console.log('Proxy server listening on port 8081!'));
module.exports.app = app;
