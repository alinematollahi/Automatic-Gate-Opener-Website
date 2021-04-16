const router = require("express").Router();
const _ = require("lodash");

const data = {
  products: [
    {
      id: '1',
      title: "",
      price: "",
      pic:"",
      desc: ""
    },
    {
      id: '2',
      title: "",
      price: "",
      pic:"",
      desc: ""
    },
    {
      id: '3',
      title: "",
      price: "",
      pic: "",
      desc: ""
    },
    {
      id: '4',
      title: "",
      price: "",
      pic:"",
      desc: ""
    },
    {
      id: '5',
      title: "",
      price: "",
      pic:"",
      desc: ""
    }
  ],
};
router.get("/", (req, res) => {
  res.json(data.products);
});

router.get("/:id", (req, res) => {
  res.json(_.find(data.products, {id: req.params.id}));
});

module.exports = router;
