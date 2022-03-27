const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include: [{model: Product}]})
  .then((DbCata) => {res.json(DbCata)})
  .catch((err) => {
    console.log(err);
    res.status(500).json('Data not computed.');
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({where: {id: req.params.id}}, {include: [{model: Product}]})
  .then((DbCata) => {res.json(DbCata)})
  .catch((err) => {
    console.log(err);
    res.status(500).json('Data not computed.');
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((newDbCata) => {res.json(newDbCata)})
  .catch((err) => {
    console.log(err);
    res.status(500).json('Data not computed.');
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {category_name: req.params.category_name},
    {where: {id: req.params.id}
  })
  .then((updatedDbCata) => {res.json(updatedDbCata)})
  .catch((err) => {
    console.log(err);
    res.status(500).json('Data not computed.');
  });

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({where: {id: req.params.id}})
  .then((deletedDbCata) => {res.json(deletedDbCata)})
  .catch((err) => {
    console.log(err);
    res.status(500).json('Data not computed.');
  });
});

module.exports = router;


// Aaron method for findAll
// Category.findAll({
//   include: [{
//     model: Product,
//   }]
// }).then((cataDB) => res.json(cataDB))
// .catch(err => {
//   console.error(err);
//   res.status(500).json('Does not compute.')
// }) 

// router.put('/:id', (req, res) => {
//   // update a category by its `id` value
//   Category.update(
//     {category_name: req.params.category_name},
//     {where: {id: req.params.id}
//   })
//   .then((updatedDbCata) => {res.json(updatedDbCata)})
//   .catch((err) => {
//     console.log(err);
//     res.status(500).json('Data not computed.');
//   });

// });