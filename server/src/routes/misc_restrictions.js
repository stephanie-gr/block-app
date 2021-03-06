const router = require("express").Router();

module.exports = db => {
  router.get("/misc_restrictions", (request, response) => {
    db.query(
      `
      SELECT *
      FROM misc_restrictions 
      OFFSET floor(random() * (
        SELECT
        COUNT(*)
        FROM misc_restrictions))
      LIMIT 1;
    `
    ).then(({ rows: users }) => {
      response.json(users);
    });
  });

  return router;
};