const router = require("express").Router();

module.exports = db => {
  router.get("/genre_restrictions", (request, response) => {
    db.query(
      `
      SELECT *
      FROM genre_restrictions 
      OFFSET floor(random() * (
        SELECT
        COUNT(*)
        FROM genre_restrictions))
      LIMIT 1;
    `
    ).then(({ rows: users }) => {
      response.json(users);
    });
  });

  return router;
};