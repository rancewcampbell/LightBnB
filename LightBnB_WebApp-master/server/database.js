const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

const properties = require('./json/properties.json');
const users = require('./json/users.json');

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 * 
 * 
 * return pool.query(`
  SELECT *
  FROM properties
  LIMIT $1
  `, [limit])
  .then(res => res.rows);
 * 
 */
const getUserWithEmail = function(email) {
  const text = 'SELECT * FROM users WHERE email = $1';
  const values = [email];
  return pool.query(text, values)
  .then(res => res.rows[0])
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  const text = 'SELECT * FROM users WHERE id = $1';
  const values = [id];
  return pool.query(text, values)
  .then(res => res.rows[0])
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  // const userId = Object.keys(users).length + 1;
  // user.id = userId;
  // users[userId] = user;
  // return Promise.resolve(user);
  const text = `INSERT INTO users (name, email, password) 
  VALUES ($1, $2, $3) 
  RETURNING *`;
  const values = [user.name, user.email, user.password]
  return pool.query(text, values)
  .then(res => res.rows[0]);
}
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  const text = `SELECT properties.*, reservations.*, AVG(rating) AS average_rating 
  FROM reservations 
  JOIN properties ON reservations.property_id = properties.id 
  JOIN property_reviews ON property_reviews.property_id = properties.id 
  WHERE reservations.guest_id = $1 AND start_date > NOW() 
  GROUP BY properties.id, reservations.id 
  ORDER BY start_date 
  LIMIT 10`;
  const values = [guest_id];
  return pool.query(text, values)
  .then(res => res.rows);

}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {
  const text = 'SELECT * FROM properties LIMIT $1';
  const values = [limit];
  return pool.query(text, values)
  .then(res => res.rows);
}
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
}
exports.addProperty = addProperty;
