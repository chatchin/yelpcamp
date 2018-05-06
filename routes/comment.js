var express     = require("express"),
    router      = express.Router({mergeParams: true}),
    Comment     = require("../models/comment"),
    middleware  = require("../middleware"),
    Campground  = require("../models/campground");

//====================================
//comment routes
//new comment form rotue
router.get("/new",middleware.isLoggedIn, function(req,res){
    Campground.findById(req.params.id, function(err,campground){
        if(err){
            
            console.log(err);
        }else{
            res.render("comments/new",{campground: campground});
        }
    });
    
});
//new comment handler
router.post("/",middleware.isLoggedIn, function(req,res){
    Campground.findById(req.params.id, function(err,campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        }else{
            Comment.create(req.body.comment, function(err,comment){
                if(err){
                    console.log(err);
                    res.redirect("/campgrounds");
                }else{
                    //add a usernmae and id to comments
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username ;
                    comment.save();
                    //save comment
                    campground.comments.push(comment);
                    campground.save();
                    req.flash("success","Added comment");
                    res.redirect("/campgrounds/"+campground._id);
                }
            });
        }
    } );
});
//edit comment route
router.get("/:comment_id/edit", middleware.checkCampgroundOwnership,function(req,res){
    Comment.findById(req.params.comment_id, function(err, foundComment){
        if(err){
            res.redirect("back");
        }else{        
            
            res.render("comments/edit", {campground_id: req.params.id, comment : foundComment}); 
        }
    });
});
// update handler
router.put("/:comment_id", middleware.checkCampgroundOwnership,function(req,res){

    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment ,function (err,updatedComment){
        if(err){
            res.redirect("back");
        }else{
            req.flash("warning","Your comment is edited!");
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

//delete route 
router.delete ("/:comment_id" ,middleware.checkCampgroundOwnership, function(req,res){
   Comment.findByIdAndRemove(req.params.comment_id, function(err){
       if(err){
           console.log(err);
           res.redirect("back");
       }else{
           req.flash("success","Your comment is deleted!");
           res.redirect("/campgrounds/"+req.params.id);
       }
   });
});
//checking comment ownership function
//checking post ownership function

module.exports = router ; 
