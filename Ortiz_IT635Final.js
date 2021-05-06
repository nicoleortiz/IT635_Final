var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/courses";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	
	db.createCollection("classes", {
		validator: {
			$jsonSchema: {
				bsonType: "object",
				required: ["CRN", "Department", "CourseNum", "Professor"],
				properties: {
					CRN: {
						bsonType: "int"
					}
					Department: {
						bsonType: "string"
					},
					CourseNum: {
						bsonType: "int",
					},
					Professor: {
						bsonType: "string",
					}
				}
			}
		}
	});
	
	db.classes.insert({ CRN: 13460, Department: "IT", CourseNum: 635, Professor: "Tolboom" });
	db.classes.insert({ CRN: 13461, Department: "IT", CourseNum: 640, Professor: "Senesy" });
	
	db.close();
};
