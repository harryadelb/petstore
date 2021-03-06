const express = require("express");
const user = require("../services/user");
const router = new express.Router();


/**
 * Creates list of users with given input array
 */
router.post("/createWithArray", async (req, res, next) => {
  const options = {
    body: req.body["body"],
  };

  try {
    const result = await user.createUsersWithArrayInput(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: "Server Error",
    });
  }
});

/**
 * Creates list of users with given input array
 */
router.post("/createWithList", async (req, res, next) => {
  const options = {
    body: req.body["body"],
  };

  try {
    const result = await user.createUsersWithListInput(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: "Server Error",
    });
  }
});

/**
 * Get user by user name
 */
// router.get("/:username", async (req, res, next) => {
//   const options = {
//     username: req.params["username"],
//   };

//   try {
//     const result = await user.getUserByName(options);
//     res.status(result.status || 200).send(result.data);
//   } catch (err) {
//     next(err);
//   }
// });

/**
 * This can only be done by the logged in user.
 */
router.put("/:username", async (req, res, next) => {
  const options = {
    username: req.params["username"],
    body: req.body["body"],
  };

  try {
    const result = await user.updateUser(options);
    res.status(200).send(result.data);
  } catch (err) {
    next(err);
  }
});

/**
 * This can only be done by the logged in user.
 */
router.delete("/:username", async (req, res, next) => {
  const options = {
    username: req.params["username"],
  };

  try {
    const result = await user.deleteUser(options);
    res.status(200).send(result.data);
  } catch (err) {
    next(err);
  }
});

/**
 * Logs user into the system
 */
router.get("/login", async (req, res, next) => {
  const options = {
    username: req.query["username"],
    password: req.query["password"],
  };

  try {
    const result = await user.loginUser(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

/**
 * Logs out current logged in user session
 */
router.get("/logout", async (req, res, next) => {
  const options = {};

  try {
    const result = await user.logoutUser(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: "Server Error",
    });
  }
});

/**
 * This can only be done by the logged in user.
 */
router.post("/", async (req, res, next) => {
  const options = {
    body: req.body,
  };

  try {
    const result = await user.createUser(options);
    res.status(200).send(result.data);
  } catch ({ status, error }) {
    // console.log("ERROR: ", err)
    return res.status(status).send({
      status,
      error,
    });
  }
});

module.exports = router;
