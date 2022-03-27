const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({include: [{model: Product, through: ProductTag}]})
  .then((dbTag) => {res.json(dbTag)})
    .catch((err) => {
      console.log(err);
      res.status(500).json('Data not computed.');
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk({where: {id: req.params.id}, include: [{model: Product, through: ProductTag}]})
  .then((dbTag) => {res.json(dbTag)})
  .catch((err) => {
    console.log(err);
    res.status(500).json('Data not computed.');
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((newDbTag) => {res.json(newDbTag)})
  .catch((err) => {
    console.log(err);
    res.status(500).json('Data not computed.');
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({where: {id: req.params.id}})
  .then((updatedDbTag) => {res.json(updatedDbTag)})
  .catch((err) => {
    console.log(err);
    res.status(500).json('Data not computed.');
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({where: {id: req.params.id}})
  .then((deletedDbTag) => {res.json(deletedDbTag)})
  .catch((err) => {
    console.log(err);
    res.status(500).json('Data not computed.');
  });
});

module.exports = router;
