const router = require("express").Router();

module.exports = db => {
  router.get("/users", (request, response) => {
    db.query(
      `
        SELECT *
        FROM users 
        OFFSET floor(random() * (
		      SELECT
			    COUNT(*)
			    FROM users))
        LIMIT 1;
      `
    ).then(({ rows: users }) => {
      response.json(users);
    });
  });

  return router;
};