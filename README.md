PROJECT 4

NEW BEGINNINGS
Your one stop Crystal Shop 


What does the site do ?
Online shop for all things crystals 
Items are divided by category - jewelery, raw crystals, polished stones, etc
2 personas - authenticated admins (shop owner and managers) who can add, edit and delete inventory AND visitors who can browse the site, search for items and add items to their wishlist

Models
User - username, password, admin (yes/no)
Reviews - title, description, rating, foreign key to item
Crystal - name, image, origin, size, shape, surface (polished, raw), category(jewelry, raw, polished), intentions, chakra, zodiac, element, review_id (linked from reviews)

MVP:
PERN stack - the online shop will be built using React with Express, Node and Postgresql as the database; changed to MERN stack on 1/11 at 12/30pm
All crystals in all categories will show up 
Authenticated Admin has full CRUD control (all authenticated users for MVP will be admins)
Three models - Crystal, Reviews, User with Review being a related to Crystal
Usage of CSS framework - Bootstrap; changed to TailwindCSS on 1/11 at 12.30pm
Visitors can leave reviews on items

Stretch:
Visitors can login and save items to wishlist
Visitors can Search for crystals by category or name
Expanded menu and more knowledge articles
Any third party API integration (no idea on this yet, have to research what exists for crystals!)

User Stories
Two personas: Admin and Visitor

Login for Admin (MVP)
As an admin I would like to login to the Crystal Shop website and be able to view, add, edit and remove inventory so that I can manage the online store

CRUD operations - Admin (MVP)
As an admin, once I am logged in, I should be able to Add a new crystal item to the inventory and access it later with the Show Crystal option
As an admin, once I am logged in, I should be able to Edit an item and access the changed information with the Show Crystal option. 
As an admin, once I am logged in, I should be able to Remove an item from inventory 

Visitor to Crystal shop 
As a visitor to the online store, I should be able to add reviews to any item on the site (MVP)
	As a visitor to the online store, I should be able to search for crystals by name or category (Stretch)
	As a visitor to the online store, I should be able to sign up, login and be able to save items to my wishlist for future purchases (Stretch)


Link to Github repo:
https://github.com/sumags-1/theCrystalShop

Wireframes: 
Visitor view:
