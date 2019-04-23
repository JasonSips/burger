// import the MySQL connection object
var connection = require('./connection.js');
// helper function for MySQL 
function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}
// helper function for generating my SQL
function objToSql(ob) {
	var arr = [];
	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}
	return arr.toString();
}
// create the ORM object to perform SQL queries
var orm = {
	// function that returns all table entries
	selectAll: function (tableInput, cb) {
		// construct the query string that returns all rows from the target table
		var queryString = "SELECT * FROM " + tableInput + ";";
		// perform the database query
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			// return results in callback
			cb(result);
		});
	},
	// function that insert a single table entry
	insertOne: function (table, cols, vals, cb) {
		// construct the query string into the table
		var queryString = "INSERT INTO " + table;
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";
		// console.log(queryString);
		// perform the database query
		connection.query(queryString, vals, function (err, result) {
			if (err) {
				throw err;
			}
			// return results in a callback
			cb(result);
		});
	},
	// function that updates the table entry
	updateOne: function (table, objColVals, condition, cb) {
		// construct the query string that updates a single entry in the target table
		var queryString = "UPDATE " + table;
		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;
		// console.log(queryString);
		// perform the database query
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			// return results in a callback
			cb(result);
		});
	}
};
// export the orm object for use in other modules
module.exports = orm;