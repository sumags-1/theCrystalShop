### PROJECT 4

### NEW BEGINNINGS
<b>Your one stop Crystal Shop</b>
<br><br>

<b>Link to Github repo:</b>
https://github.com/sumags-1/theCrystalShop
<br>

<b>Link to Live site deployed on Heroku:</b>
https://new-beginnings-app.herokuapp.com/
<br><br>

<b>Technologies used:</b><br>
<ul>
	<li>The app was built using the MERN stack - MongoDB/Mongoose, Express, React and Node</li>
	<li>The CSS framework used was Tailwind CSS </li>
</ul>

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

<b>Installation instructions</b>:
<ul>
	<li>The app can be accessed from the live site link given above. </li>
	<li>To run locally, clone the main branch, setup env file to point to mongodb, run npm i at the root level to install all dependencies and finally run npm start to start the application on localhost</li>
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
<b>Stretch: Unable to achieve in this iteration</b>
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


### Wireframes: 
**Visitor view:**<br>
<img width="629" alt="Screen Shot 2023-01-10 at 12 37 13 PM" src="https://user-images.githubusercontent.com/115961145/213979258-f78fd617-fa71-4c52-9151-bb205747321a.png">

**Admin view:**<br>
<img width="611" alt="Screen Shot 2023-01-10 at 12 37 37 PM" src="https://user-images.githubusercontent.com/115961145/213979271-4a625894-f845-4814-b645-ff9209930a4f.png">

<img width="619" alt="Screen Shot 2023-01-10 at 12 37 52 PM" src="https://user-images.githubusercontent.com/115961145/213979296-850d1773-2954-48cf-8270-c6b2daf4f3c8.png">
<br><br>

### Screenshots of app:
**Home Page:**<br>
<img width="918" alt="Screen Shot 2023-01-22 at 10 41 05 PM" src="https://user-images.githubusercontent.com/115961145/213979573-2c9194aa-3655-4fca-8299-7e27392b040a.png">


**Visitor view (not logged in, browsing as guest):**<br>
<img width="937" alt="Screen Shot 2023-01-22 at 10 42 09 PM" src="https://user-images.githubusercontent.com/115961145/213979695-2c6f0e64-6665-47c8-b4e6-d8439c8a2cc3.png">


**Login page:**<br>
<img width="927" alt="Screen Shot 2023-01-22 at 10 43 05 PM" src="https://user-images.githubusercontent.com/115961145/213979822-9e089c05-9b15-42be-8df0-a98d314dcf27.png">


**Logged in user (customer with no access to change inventory):**<br>
<img width="934" alt="Screen Shot 2023-01-22 at 10 44 01 PM" src="https://user-images.githubusercontent.com/115961145/213979956-e3d98750-c34d-45fb-b10b-f27317088790.png">


**Logged in Admin user with access to Add, Edit and Delete inventory:**<br>
<img width="930" alt="Screen Shot 2023-01-22 at 10 45 15 PM" src="https://user-images.githubusercontent.com/115961145/213980108-7e0496db-d49b-4be7-ab93-eeb4f336ec9d.png">
<br>
<img width="927" alt="Screen Shot 2023-01-22 at 10 46 17 PM" src="https://user-images.githubusercontent.com/115961145/213980242-718464ce-b5c6-48f7-aca9-1555ada6999f.png">
<br>
<img width="860" alt="Screen Shot 2023-01-22 at 10 46 45 PM" src="https://user-images.githubusercontent.com/115961145/213980304-c1072f55-b508-4f8c-8fc3-b37909670645.png">
<br>
<img width="920" alt="Screen Shot 2023-01-22 at 10 47 26 PM" src="https://user-images.githubusercontent.com/115961145/213980392-c4b02771-3e4a-4cf3-a087-1dd8cebeefed.png">
<br>

<img width="923" alt="Screen Shot 2023-01-22 at 10 47 56 PM" src="https://user-images.githubusercontent.com/115961145/213980464-ce33ce44-4f26-46fe-b0ab-401413d222c6.png">


