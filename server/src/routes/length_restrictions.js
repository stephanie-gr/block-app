const router = require("express").Router();

module.exports = db => {
  router.get("/length_restrictions", (request, response) => {
    db.query(
      `
      SELECT *
      FROM length_restrictions 
      OFFSET floor(random() * (
        SELECT
        COUNT(*)
        FROM length_restrictions))
      LIMIT 1;
    `
    ).then(({ rows: users }) => {
      response.json(users);
    });
  });

  return router;
};