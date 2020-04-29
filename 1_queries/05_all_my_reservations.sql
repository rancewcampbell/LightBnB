SELECT properties.*, reservations.*, AVG(rating) AS average_rating
FROM reservations
JOIN properties ON reservations.property_id = properties.id
JOIN property_reviews ON property_reviews.property_id = properties.id
WHERE reservations.guest_id = 1
AND start_date > NOW()
GROUP BY properties.id, reservations.id
ORDER BY start_date
LIMIT 10;
