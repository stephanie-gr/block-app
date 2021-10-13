INSERT INTO users (name, email, username, password)
VALUES 
  ('Oakley B.', 'dougdouggoose@gmail.com', 'ms.bear', 'thecutest'),
  ('Olive Short', 'o.short@gmail.com', 'olive', 'iheartfood'),
  ('Tala G.', 'talathepwd@hotmail.com', 'tala', 'ihatedash');

INSERT INTO genre_restrictions (text)
VALUES 
  ('Write a sci-fi story.'),
  ('Write a fantasy story.'),
  ('Write a romance.'),
  ('This story should be historical fiction.'),
  ('Write an action-adventure story.'),
  ('Try to write this one as a suspence/thriller.'),
  ('This story should be dystopian'),
  ('This story should be utopian');

INSERT INTO age_restrictions (text)
VALUES 
  ('Your main character must be over the age of 50'),
  ('Your main character must not be near your own age');

INSERT INTO gender_restrictions (text)
VALUES 
  ('Your main character must be a man'),
  ('Your main character must be a woman'),
  ('Your main character must be non-binary'),
  ('There cannot be any female characters');

INSERT INTO voice_restrictions (text)
VALUES 
  ('The story has to be written in third person'),
  ('The story has to be written in first person');

INSERT INTO misc_restrictions (text)
VALUES 
  ('You must have exactly two characters who never directly interact.'),
  ('Your two main characters cannot have a romantic relationship.'),
  ('You must have one character whose name is never revealed.'),
  ('You should have 10 characters who are all stuck in one location for an hour.'),
  ('Your characters should be in a setting unfamiliar to you.'),
  ('Your story should have a relationship that is breaking down.'),
  ('Your main character should have a pet.'),
  ('Your story should take place at a wedding.');

INSERT INTO length_restrictions (text)
VALUES 
  ('Your story should not be over 3 pages long'),
  ('Your story should be 10 pages long'),
  ('Your story should be exactly one page long');
  
