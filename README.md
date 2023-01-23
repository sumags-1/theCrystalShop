### PROJECT 4

### NEW BEGINNINGS
<b>Your one stop Crystal Shop</b>
<br>

<b>Link to Github repo:</b>
https://github.com/sumags-1/theCrystalShop

<b>Link to Live site deployed on Heroku:</b>
https://new-beginnings-app.herokuapp.com/

<br>
<b>What does the site do ?</b>
<ul>
<li>Online shop for all things crystals </li>
<li>Items are divided by category - jewelery, raw crystals, polished stones, etc</li>
<li>There are three personas who can access the site :
	<ul>
	<li>authorized admins (shop owner and managers) who can add, edit and delete inventory, </li>
	<li>authenticated customers (who can eventually search for items and add items to wishlist) AND </li>
	<li>visitors who can browse the site and leave reviews for items.</li>
	</ul>
</ul>

<br>
<b>Models</b>
<ol>
<li>User - username, password, admin (yes/no)</li>
<li>Reviews - title, description, rating, reviewer, sub-document of Crystal</li>
<li>Crystal - name, image, origin, size, shape, surface (polished, raw), category(jewelry, raw, polished), intentions, chakra, zodiac, element, reviews (linked to review model)</li>
</ol>
<br>

<b>MVP: Achieved !</b>
<ul>
<li>MERN stack - the online shop will be built using React with Express, Node and MongoDB as the database</li>
<li>All crystals in all categories will show up </li>
<li>Authenticated Admin has full CRUD control on inventory</li>
<li>Non-admin users can sign up and login but do not have CRUD on inventory</li>
<li>Three models - Crystal, Reviews, User with Review being a related to Crystal</li>
<li>Usage of CSS framework - TailwindCSS (new tech)</li>
<li>Visitors can leave reviews on items</li>
</ul>

<br>
<b>Stretch: Unable to achieve within the timeline</b>
<ul>
<li>Visitors can save items to wishlist</li>
<li>Visitors can Search for crystals by category or name</li>
</ul>
<br>

### User Stories

<i>Three personas: Admin, Logged in User and Visitor</i>

<br>
<b>Login for Admin (MVP)</b>
<ul>
<li>As an admin I would like to login to the Crystal Shop website and be able to view, add, edit and remove inventory so that I can manage the online store - done</li>
</ul>

<br>
<b>CRUD operations - Admin (MVP)</b>
<ul>
<li>As an admin, once I am logged in, I should be able to Add a new crystal item to the inventory and access it later with the Show Crystal option - done</li>
<li>As an admin, once I am logged in, I should be able to Edit an item and access the changed information with the Show Crystal option. - done</li>
<li>As an admin, once I am logged in, I should be able to Remove an item from inventory - done</li>
</ul>
<br>

<b>Logged in user</b>
<ul>
<li>As a user of the website, I should be able to sign up and then login using my username and password - done</li>
<li>As a logged in user, I should be able to browse for items, and add reviews to items - done</li>
<li>As a logged in user I should be able to save items to wishlist for future purchases (Stretch goal - not achieved this iteration)</li>
</ul>
<br>

<b>Visitor to Crystal shop</b> 
<ul>
<li>As a visitor to the online store, I should be able to browse around and add reviews to any item on the site - done</li>
<li>As a visitor to the online store, I should be able to search for crystals by name or category (Stretch goal - not achieved this iteration)</li>
</ul>
<br>


Wireframes: 
Visitor view:
