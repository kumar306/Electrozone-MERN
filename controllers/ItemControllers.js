const Item=require("./../models/items");

module.exports.get_mobiles = (req,res) => {
    Item.find({category:'Mobile'}).sort({date_added:-1})
    .then(items => {
        res.json(items);
    })
}

module.exports.get_laptops = (req,res) => {
    Item.find({category:'Laptop'}).sort({date_added:-1})
    .then(items => {
        res.json(items);
    })
}

module.exports.get_cameras = (req,res) => {
    Item.find({category:'Camera'}).sort({date_added:-1})
    .then(items => {
        res.json(items);
    })
}

module.exports.get_audio = (req,res) => {
    Item.find({category:'Audio'}).sort({date_added:-1})
    .then(items => {
        res.json(items);
    })
}

module.exports.view_item = (req,res) => {
    Item.findById({_id:req.params.id})
    .then(item => {
        res.json(item);
    })
}

module.exports.post_item = (req,res) => {

    const new_item=new Item(req.body);
    new_item.save()
    .then(item=>{
        res.json(item);
    })
    .catch(err => console.log(err));
}

module.exports.put_item = (req,res) => {
    Item.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(item => {
        Item.findOne({_id:req.params.id})
        .then(item => {
            res.json(item);
        })
    })
}

module.exports.delete_item = (req,res) => {
    Item.findByIdAndRemove({_id:req.params.id})
    .then(item => res.json({success:true}))
}