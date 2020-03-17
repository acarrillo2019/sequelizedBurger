// Import MySQL connection.
var connection = require ("./connection.js")

// SQL commands

var orm = {
  all: function(table, cb) {
    var queryString = `SELECT * FROM ${table};`;
    connection.query(queryString, function(err,result){
      if (err) {throw err;}
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    var queryString = `INSERT INTO ${table} `
      + `(${cols.toString()}) VALUES` 
      + `(${printQuestionMarks(vals.length)});`;

      // console.log(`create: ${queryString}`);

    connection.query(queryString, vals, function(err,result){
      if (err) throw err;
      cb(result);
    });
  },
  update: function(table, objColVals, condition, cb) {
    var queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`
    
    // console.log(`update: ${queryString}`)
    
    connection.query(queryString, function(err,result){
      if (err) throw err;
      cb(result);
    });
  },
  delete: function (table, condition, cb) {
    var queryString = `DELETE FROM ${table} WHERE ${condition};`
    connection.query(queryString, function (err, result) {
        if (err) throw err;
        cb(result);
    });
  }
}


function objToSql(obj) {
  // Convert object to SQL query format
	// column1=value, column2=value2,...
	var arr = [];

	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			arr.push(`${key} = ${obj[key]}`);
		}
  }
  // Convert array to string for SQL query
	return arr.toString();
}



function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}


 module.exports = orm;