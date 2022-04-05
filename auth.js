'use strict';

// jwt is json web token
const jwt = require('jsonwebtoken');

// jwks is the json web key set
const jwksClient = require('jwks-rsa');

// the jwks uri is in Auth0 account page -> Advanced Settings -> Endpoints -> 0Auth -> JSON Web Key Set 
const client = jwksClient({
  jwksUri: process.env.JWKS_URI
});

//I need a getKey function from the Json web token to make things work

function getKey(header, callback){
  client.getSigningKey(header.kid, function(err, jey){
    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

// we are writing this function to verify the user on our route 
//this is how we do it
function verifyUser (req, errorFirstOrUserCallbackFunction){
  try{
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    jwt.verify(token, getKey, {}, errorFirstOrUserCallbackFunction);
  } catch (error){
    errorFirstOrUserCallbackFunction('not authorized');
  }
}

module.exports = verifyUser;

