const router = require("express").Router();

module.exports = db => {
  router.get("/age_restrictions", (request, response) => {
    db.query(
      `
      SELECT *
      FROM age_restrictions 
      OFFSET floor(random() * (
        SELECT
        COUNT(*)
        FROM age_restrictions))
      LIMIT 1;
    `
    ).then(({ rows: users }) => {
      response.json(users);
    });
  });

  return router;
};