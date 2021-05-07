const router = require("express").Router();
const _ = require("lodash");

const data = {
  products: [
    {
      id: '1',
      title: "FAAC 402 CBC Standard Basic Kit",
      price: 1800,
      pic:"/pictures/402.jpg",
      desc: `This is the FAAC 402 CBC Standard Basic Kit, 
      which includes 2 FAAC 422 CBAC Swing Gate Opener,
       1 455D Control Panel, 2 Batteries, 2 XT4 Remotes, 2 FAAC Photocells,
        1 receiver 433 RC Plug In. Choose between 115V and 230V. 
      The FAAC 402 CBC Standard is for swing gates up to 10 feet and 900 lbs. 
      30 cycles per hour.`,
      comments: [
        {author: 'Peter', text: 'It was a powerful automatic gate opener.'},
        {author: 'Leonardo', text: 'Absolutely amazing gate opener!'}
      ]
    },
    {
      id: '2',
      title: "FAAC S418 Solar Swing Gate Opener Kit",
      price: 1650,
      pic:"/pictures/418.jpg",
      desc: `
      Built-in mechanical stops as standard
Multi-position brackets for non-weld installation
Long stroke of 350mm as standard (or 390mm without stops) making it more adaptable to various pillar dimensions
      `
    },
    {
      id: '3',
      title: "FAAC 412 230V Swing Gate Operator",
      price: 1150,
      pic: "/pictures/412.jpg",
      desc: `
      This is the FAAC 412 Kit for Bi-Parting (Dual) Gates. 
      The FAAC 412 swing gate operator is for light residential single family use.
       Operates 18 cycles per hour. For gates up to 500 lbs and 14 feet. 
       Choose between a 10" x 12" enclosure and a 14" x 16" enclosure.
      `
    },
    {
      id: '4',
      title: "FAAC 415 Basic Kit 115VAC",
      price: 1300,
      pic:"/pictures/415.jpg",
      desc: `
      This is the 115VAC (not low voltage) FAAC 415 Basic Single Kit. 
      The FAAC 415 swing gate operator performs 25 cycles per hour, 
      and is for gates up to 700 lbs per leaf and 15 feet per leaf.
      `
    },
    {
      id: '5',
      title: "FAAC 400 CBACR Rapid Basic Kit",
      price: 2100,
      pic:"/pictures/400.jpg",
      desc: `
      This is the FAAC 400 CBACR Rapid Basic Single Kit. 
      Choose between 115V and 230V. 
      The FAAC 400 CBACR is for gates up to 12 feet in length and 900 lbs. 80 Cycles per hour.
      `
    },
    {
      id: '6',
      title: "FAAC 413 230V Swing Gate Operator",
      price: 1400,
      pic:"/pictures/413.jpg",
      desc: `
      Electro-mechanical operator for residental swing-leaf gates 
      with single-leaf max length of 1.8 m (2.5 m with electric lock)
      `
    }
  ],
};
router.get("/", (req, res) => {
  if(req.query.q){
    const result = _.filter(data.products, item =>
      item.title.toLocaleLowerCase().includes(req.query.q.toLocaleLowerCase()) 
      || 
      item.desc.toLocaleLowerCase().includes(req.query.q.toLocaleLowerCase()));
      
      res.json(result);
  }
  res.json(data.products);
});

router.get("/:id", (req, res) => {
  res.json(_.find(data.products, {id: req.params.id}));
});

router.get("/:id/comments", (req, res) => {
  res.json(_.get(_.find(data.products, {id: req.params.id}), 'comments'));
});


router.post("/:id/comments", (req, res) => {
 const product = _.find(data.products, {id: req.params.id});
 if(product) {
   product.comments = product.comments || [];
   product.comments.push(req.body);
   res.end();
 } else {
   res.status(404).json(new Error('Product not found'));
 }
});

module.exports = router;
