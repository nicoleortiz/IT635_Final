# IT635_Final
Assignment: Three collections with schema validation as a js file

Create Collection: db.createCollection()
  Pros: nice and organized, easy to layout
  Cons: I don't even know how many times I missed a comma or quotation mark and had to go back
  
Validator:
  I kind of ended up with one on all three of my collections. All of them do contain 'CRN' as a property (so that's the same across the board), but it has a min and max threshold. My 'resources' collection has only specific strings allowed for its 'Type'.
  
 Testing:
  I think I had the most trouble with testing this, honestly. I wanted to make sure that the validation was working properly so I made two documents for each collection to play with. Fun fact: db.class.insert will get you absolutely nowhere but confusion land. Its actually db.class.insertOne. Another fun fact: you can't just throw numbers around, you need to specify its a number. NumberInt(123) fixes this problem.
  
 Misc Commands:
  _mongo final.js
  db.classes.find()
  db.assignments.find()
  db.resources.find()_
