const router = require("express").Router();

module.exports = db => {
  router.get("/gender_restrictions", (request, response) => {
    db.query(
      `
      SELECT *
      FROM gender_restrictions 
      OFFSET floor(random() * (
        SELECT
        COUNT(*)
        FROM gender_restrictions))
      LIMIT 1;
    `
    ).then(({ rows: users }) => {
      response.json(users);
    });
  });

  return router;
};