INSERT INTO users (name, email, password) VALUES 
('Bruce Wayne', 'batman44@wayneindustries.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Tony Stark', 'ironman99@starkindustries.net', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Oswald Chesterfield Cobblepot', 'penguin13@villainous.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Peter Quill', 'star_lord@guardians.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code) VALUES 
(1, 'Wayne Manor', 'My big crib', 'https://unsplash.com/photos/_hw4aUQ81ic', 'https://unsplash.com/photos/7VPFyhB_j8Y', 10000, 30, 10, 15, 'USA', '500 AVE N', 'Gotham', 'NY', '33425'),
(1, 'Wayne Penthouse', 'My tower penthouse', 'https://unsplash.com/photos/H0vuplqoX0c', 'https://unsplash.com/photos/cHjAxnJk_wQ', 3000, 1, 5, 8, 'USA', 'Main Street', 'Gotham', 'NY', '25416'),
(2, 'Stark Beach House', 'Super intelligent beachouse', 'https://unsplash.com/photos/0zy0QwHwZy8', 'https://unsplash.com/photos/FZXhH0ktRvE', 5000, 4, 7, 7, 'Bahamas', 'Beach Street', 'Stark Island', 'NP', '23523'),
(1, 'Budget Rental', 'Small rental property for a family on a budget', 'https://unsplash.com/photos/1ddol8rgUH8', 'https://unsplash.com/photos/jn7uVeCdf6U', 500, 2, 3, 5, 'Canada', 'Gotham Cres.', 'Toronto', 'ON', 'T0K 0K0');

INSERT INTO reservations (start_date, end_date, property_id, guest_id) VALUES 
('2020-08-18', '2020-08-25', 4, 4),
('2020-04-27', '2020-05-3', 1, 3),
('2021-02-13', '2021-02-22', 3, 1),
('2020-06-01', '2020-06-04', 2, 4);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message) VALUES 
(4, 4, 1, 2, 'Was not up to regular standards'),
(3, 1, 2, 4, 'Great setup'),
(1, 3, 3, 5, 'Amazing property!'),
(4, 2, 4, 3, 'It was okay');