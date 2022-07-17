const router = require('express').Router();
const sequelize = require('sequelize');
const {Category, Product} = require('../../models');
//Api Categories
router.get('/', (req, res) => {
    Category.findALL({
        attributes: ["id", "category_name"],
        include: [
            {
                model: Product,
                attributes: ["product_name", "price", "stock"]
            }
        ]
    })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/:id', (req, res) => {
    //find one catergory by the 'id'
    Category.findone({
        where: {
            id: req.params.id
        },
        attributes: ["id", "category_name"],
        include: [
            {
                model: Product,
                attributes:["product_name", "price", "stock"]
            }
        ]
    })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.post('/', (req, res) => {
    //create new category
    Category.create({
        category_name: req.body.category_name,
    })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.put("/:id", (req, res) => {
    //update category by 'id'
    Category.update(
        {
            category_name: req.body.category_name,
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then((dbCategoryData) => {
            if (!dbCategoryData) {
              res.status(404).json({ message: "No category found with this id" });
              return;
            }
            res.json(dbCategoryData);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      });
      router.delete('/:id', (req, res) => {
        //delete category by 'id'
        Category.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbCategoryData => {
            if (!dbCategoryData) {
              res.status(404).json({ message: 'No category found with this id' });
              return;
            }
            res.json(dbCategoryData);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
        });
        module.exports = router;        