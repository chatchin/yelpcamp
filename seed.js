var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");
    // data        =[{
    //     name: "Sunny Camp",
    //     image:"http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at sapien tincidunt enim porttitor imperdiet a non metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vitae lorem diam. Pellentesque aliquam augue magna, vel sodales mauris venenatis in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin ac lectus nisi. Aliquam vestibulum lectus id convallis efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae"
    // },
    // {
    //     name: "Forest Camp",
    //     image:"https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at sapien tincidunt enim porttitor imperdiet a non metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vitae lorem diam. Pellentesque aliquam augue magna, vel sodales mauris venenatis in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin ac lectus nisi. Aliquam vestibulum lectus id convallis efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae"
    // },
    // {
        
    //     name: "South Canyon Camp",
    //     image:"https://www.nps.gov/zion/planyourvisit/images/South_CG_r_1.jpg?maxwidth=650&autorotate=false",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at sapien tincidunt enim porttitor imperdiet a non metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vitae lorem diam. Pellentesque aliquam augue magna, vel sodales mauris venenatis in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin ac lectus nisi. Aliquam vestibulum lectus id convallis efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae"
    // },
    // {
        
    //     name: "Lakeview Camp",
    //     image:"http://www.kokatosicampground.com/images/beach.jpg",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at sapien tincidunt enim porttitor imperdiet a non metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vitae lorem diam. Pellentesque aliquam augue magna, vel sodales mauris venenatis in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin ac lectus nisi. Aliquam vestibulum lectus id convallis efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae"
    // }];
function seedDB(){
//     //remove campgrounds
   Campground.remove({}, function(){
   });
    
}
//     //     console.log("Successfully removed!");
    
//     // });
//     // //add campgrounds
//     // data.forEach(function(seed){
//     //     Campground.create(seed,function(err,campground){
//     //         if(err){
//     //             console.log(err);
//     //         }else{
//     //             console.log("Campground created!");
//     //             //create a comment
//     //             Comment.create(
//     //                 {
//     //                   text:"Lorem Ipsum",
//     //                   author: "Lorem"
//     //                 }, function(err,comment){
//     //                     if(err){
//     //                         console.log(err);
//     //                     }else{
//     //                         campground.comments.push(comment);
//     //                         campground.save();
//     //                         console.log("Comment created!");
//     //                     }
//     //                 });
//     //         }
//     //     });


module.exports = seedDB ;
