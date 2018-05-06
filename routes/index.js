var express     = require("express"),
    router      = express.Router(),
    User        = require("../models/user"),
    passport    = require("passport");
//====================================
//landing page route
router.get("/", function(req,res){
    res.render("landing"); 
});
//====================================
//auth route
//register route
router.get("/register", function(req,res){
    req.flash("success","Please Sign Up!");
    res.render("register");
});
//register handler   
router.post("/register", function(req,res){
   var newUser = new User ({username:req.body.username});
   User.register(newUser, req.body.password, function(err, user){
       if(err){
           console.log(err);
           req.flash("error","Username with "+req.body.username+" is already existed!");
           return res.render("register");
       }else{
           passport.authenticate("local")(req,res,function(){
               req.flash("success","Welcome from Yelpcamp "+req.body.username);
               res.redirect ("/campgrounds");
           });
       }
   });
});

//login route
router.get("/login",function(req,res){
    res.render("login");
});
//login handler
router.post("/login",  passport.authenticate("local",
//auth method middleware
{successRedirect:"/campgrounds",
    failureRedirect:"/login"
}),function(req,res){});

//logout route
router.get("/logout", function(req,res){
   req.logout();
   req.flash("success","Successfully Logged out");
   res.redirect("/campgrounds");
});

module.exports = router ; 
