const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    // find all tags
    const tagsData = await Tag.findAll({
        // be sure to include its associated Product data
      include: [{model: Tag, as: 'products'}]
    });

    if (!tagsData) {
      res.status(404).json({message: "tags not found"});
      return;
    }

    res.status(200).json(tagsData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find a single tag by its `id`
    const tagsData = await Tag.findByPk(req.params.id, {
    // be sure to include its associated Product data
    include: [{model: Tag, as: 'products'}]
    });

    if (!tagsData) {
      res.status(404).json({message: "Tags not found with this id"});
      return;
    }

    res.status(200).json(tagsData);
  }
  catch (err) {
    res.status(500).json(err);
  };
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagsData = await Tag.create(req.body);
    res.status(200).json(tagsData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagsData = await Tag.update(
      {tag_name: req.body.tag_name},
      {returning: true, where: {id: req.params.id}}
    )
    res.status(200).json(tagsData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagsData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!tagsData) {
      res.status(404).json({message: "No tags found with this id"});
      return;
    }
    res.status(200).json(tagsData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
