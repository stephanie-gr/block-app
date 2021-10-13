const router = require("express").Router();

module.exports = db => {
  router.get("/misc_restrictions", (request, response) => {
    db.query(
      `
      SELECT random() FROM misc_restrictions;
    `
    ).then(({ rows: users }) => {
      response.json(users);
    });
  });

  return router;
};