const router = require("express").Router();

module.exports = db => {
  router.get("/voice_restrictions", (request, response) => {
    db.query(
      `
        SELECT *
        FROM voice_restrictions 
        OFFSET floor(random() * (
		      SELECT
			    COUNT(*)
			    FROM voice_restrictions))
        LIMIT 1;
      `
    ).then(({ rows: users }) => {
      response.json(users);
    });
  });

  return router;
};