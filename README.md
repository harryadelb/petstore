# Swagger Petstore

This is a sample server Petstore server generated by [swagger-node-codegen](https://www.npmjs.com/package/swagger-node-codegen) where [simple-schema](https://github.com/aldeed/simple-schema-js) and [lowdb](https://github.com/typicode/lowdb) are used for validation and data persistance respectively.

### Start the Project
```
npm install 
npm run start
```


### Run tests
```
npm install 
npm run test
```

You'd find three additional endpoints implemented `v2/pet/upsertBid`, `v2/pet/:petId/bids` and `v2/pet/:petId/getBidsResult`  

The first one where you can upsert a bid, second one for listing bids as the pet owner and the final one for getting the bids result.

It should be noted that those routes are properly secured so you'd have to create a user before attempting to perform any of these requests. Also, It's important to note that only the pet owner can view bids and evaluate them so make sure you're performing the request as the owner and not just some random user.

Finally, I've went ahead and included the Postman collection used for development and testing so you can perform these requests easily.
