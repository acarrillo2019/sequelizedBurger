module.exports = function(sequelize, DataTypes) {

  var Customer = sequelize.define("customers", {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1]
      }
    }
  });

  return Customer;
}
