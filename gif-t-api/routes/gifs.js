const router = require("express").Router();
let Gif = require("../models/gif.model");

router.route("/").get((req, res) => {
  Gif.find()
    .then((gif) => res.json(gif))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const url = req.body.url;

  const newGif = new Gif({ url });

  newGif
    .save()
    .then(() => res.json("Gif added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route('/:id').get((req,res) => {
  Gif.findById(req.params.id)
  .then(gif => res.json(gif))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
  Gif.findByIdAndDelete(req.params.id)
  .then(gif => res.json('Gif deleted'))
  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;