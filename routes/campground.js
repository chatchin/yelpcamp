var express     = require ("express"),
    router      = express.Router(),
    middleware  = require("../middleware"),
    Campground  = require("../models/campground");
router.get("/", function(req,res){
    Campground.find({},function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
        }
    });
});
//campground new route 
router.get("/new", middleware.isLoggedIn,function(req,res){
    res.render("campgrounds/new");
});
// adding new route handler
router.post("/", middleware.isLoggedIn,function(req,res){
    var name = req.body.name ;
    var price = req.body.price ; 
    var image= req.body.image ;
    var desc = req.body.description;
    var author = {
        id : req.user._id,
        username: req.user.username
    };
    var newCampground={
        name: name,
        image:image,
        price: price,
        description: desc,
        author : author
    };
    Campground.create(newCampground, function(err,newlyCreated){
        if(err){
            console.log(err);
        }else{
            req.flash("Success","Your campground is added!");
            res.redirect("/campgrounds" );
        }
    });

});
//Show more info 
router.get("/:id", function(req,res){
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/show",{campground: foundCampground}); 
        }
    });
    
});

//edit campground route
router.get("/:id/edit",middleware.checkCampgroundOwnership, function(req,res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            res.redirect("/campgrounds");
        }else{                    
            res.render("campgrounds/edit", {campground : foundCampground}); 
        }
    });
});
// update handler
router.put("/:id",middleware.checkCampgroundOwnership, function(req,res){

    Campground.findByIdAndUpdate(req.params.id, req.body.campground ,function (err,updatedCampfround){
        if(err){
            res.redirect("campgrounds");
        }else{
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

//delete route 
router.delete ("/:id" , middleware.checkCampgroundOwnership, function(req,res){
   Campground.findByIdAndRemove(req.params.id, function(err){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       }else{
           res.redirect("/campgrounds");
       }
   });
});

module.exports = router ;
