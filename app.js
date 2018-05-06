var express             = require ("express"),// import modules express
    bodyParser          = require("body-parser"),// import modules body parser
    mongoose            = require("mongoose"),// import modules mongoose
    app                 = express(),// exec express 
    passport            = require("passport"),// import modules passport
    LocalStrategy       = require("passport-local"),// import modules passport local
    User                = require("./models/user"),// import modules passport local mongoose
    flash               = require("connect-flash"),// import modules flash
    methodOverride      = require("method-override"),// import modules method Override
    campgroundRoutes    = require("./routes/campgrounds"),//adding routes
    commentRoutes       = require("./routes/comments"),
    indexRoutes         = require("./routes/index");
//Configuration
app.set("view engine","ejs");//setting view engine with ejs
app.use(bodyParser.urlencoded({extended: true}));//be able to post a nested object 
mongoose.connect("mongodb://localhost/yelp_camp_7");//connecting mongoose
app.use(express.static(__dirname+"/public"));//public directory setting
app.use(methodOverride("_method"));//using method Override
app.use(require("express-session")({ //configuring passport
    secret:"Henry is a JS ninja",
    resave: false,
    saveUninitialized : false
}));
app.use(passport.initialize());//initializing passport
app.use(passport.session()); //adding session
passport.use(new LocalStrategy(User.authenticate()));// user auth
passport.serializeUser(User.serializeUser());//user info encrypt
passport.deserializeUser(User.deserializeUser());//user info decrypt
app.use(flash());//exec flash
////middleware for currentUser and flash operations
app.use(function(req,res,next){
    res.locals.currentUser  = req.user;
    res.locals.error        =req.flash("error");
    res.locals.success      =req.flash("success");
    res.locals.warning      =req.flash("warning");
    next(); 
});
//Routes setting 
app.use("/",indexRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
app.use("/campgrounds",campgroundRoutes);
//setting port and IP for host
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is running");
});