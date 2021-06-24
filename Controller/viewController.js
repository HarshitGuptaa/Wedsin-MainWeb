function getHomePage(req,res){
    res.render("index.html");
}

function getLoginPage(req,res){
    console.log("on login page");
    res.render("login.html");
    console.log("logged in")
}

module.exports.getHomePage = getHomePage;
module.exports.getLoginPage = getLoginPage;


