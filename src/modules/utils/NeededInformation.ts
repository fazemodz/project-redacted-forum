var APIURL = import.meta.env.VITE_API_URL;
var Username =localStorage.getItem('username')
var Email    = localStorage.getItem('email')
var Token   = localStorage.getItem('token')
var Userid = localStorage.getItem('userid')
var isuserLoggedin = localStorage.getItem('isuserloggedin')
export {
    APIURL, Username, Email, Token, Userid, isuserLoggedin
}