db.createCollection("classes", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: [ "CRN", "Department", "CourseNum", "Professor" ],
			properties: {
				CRN: {
					bsonType: "int",
					minimum: 0,
					maximum: 99999,
					description: "CRN must be between 00000 and 99999"
				},
				Department: {
					bsonType: "string",
					description: "Ex. IT, CS, PHYS, MATH"
				},
				CourseNum: {
					bsonType: "int",
					description: "Course Number (Ex. IT635 is 635)
				},
				Professor: {
					bsonType: "string",
					description: "Prof name"
				}
			}
		}
	}
});

db.classes.insert( { CRN: 13460, Department: "IT", CourseNum: 635, Professor: "Tolboom" } );
db.classes.insert( { CRN: 13461, Department: "IT", CourseNum: 640, Professor: "Senesy" } );

db.createCollection("assignments", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: [ "CRN", "Title", "DueDate" ],
			properties: {
				CRN: {
					bsonType: "integer",
					minimum: 0,
					maximum: 99999,
					description: "CRN must be between 00000 and 99999"
				},
				Title: {
					bsonType: "string",
					description: "Give this assignment a title"
				},
				DueDate: {
					bsonType: "date",
					description: "When the assignment is Due"
				}
			}
		}
	}
});

db.assignments.insert( { CRN: 13460, Title: "Exercise 1", DueDate: "2021-05-04" } );
db.assignments.insert( { CRN: 13461, Title: "Install Server", DueDate: "2021-02-05" } );

db.createCollection("resources", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: [ "CRN", "Type", "FilePath" ],
			properties: {
				CRN: {
					bsonType: "integer",
					minimum: 0,
					maximum: 99999,
					description: "CRN must be between 00000 and 99999"
				},
				Type: {
					bsonType: "string",
					enum: [ "presentation", "website", "notes" ],
					description: "Can only be presentation, website, or notes"
				},
				FilePath: {
					bsonType: "string",
					description: "Where is this file located"
				}
			}
		}
	}
});

db.resources.insert( { CRN: 13460, Type: "website", FilePath: "njit.instructure.com" } );
db.resources.insert( { CRN: 13461, Type: "notes", FilePath: "Google Drive/IT640/lecture1" } );
