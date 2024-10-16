<h1>Peddy - Pet Adoption Platform<</h1>

<h2>Description:</h2>
<p>Peddy is an intuitive and visually engaging web platform designed to connect potential pet adopters with animals in need of a loving home. The site allows users to browse a variety of pets available for adoption, filter by categories, and learn about the joys of giving animals a forever home. Featuring a mobile-responsive layout, Peddy makes it easy for users to explore adoption options, learn more about each pet, and engage with the adoption process anytime, anywhere.</p>

<h2>Features:</h2>
<h3>Category and Pet Data Fetching: </h3> 
<p>The code utilizes async/await to fetch categories and pet data from a remote API (https://openapi.programming-hero.com/api/peddy). It dynamically loads and displays categories and pets based on the API response. It supports loading pets by category, as well as showing all pets by default.</p>

<h3>Dynamic Sorting by Price: </h3> 
<p>The project has the functionality to sort pets by their price in descending order. It updates the display dynamically by calling a sorting function and re-rendering the pet cards with sorted data when the user clicks the "Sort by Price" button.</p>

<h3>Interactive Modals for Pet Details: </h3> 
<p>This project displays detailed information about each pet in a modal, including breed, birth date, gender, price, and vaccination status. Users can close the modal by clicking outside it or pressing a cancel button, creating a smooth user experience.</p>

<h3>Like (Favorite) and Adopt Functionality: </h3> 
<p>Users can "like" a pet, which displays a thumbnail of the pet's image in a separate section. The "Adopt" button starts a countdown and shows a confirmation modal to indicate the adoption process has begun.</p>

<h3>Loading Spinner and Error Handling: </h3> 
<p>The code provides visual feedback using a spinner when data is being fetched. It also includes basic error handling to log issues when the fetch request fails, ensuring users are not left waiting indefinitely if something goes wrong.</p>

<h4>The provided code makes use of several ES6 (ECMAScript 2015) features. Here are the key ones:</h4>


<h2>ES6 (ECMAScript 2015) Features:</h2>
<h3>Arrow Functions:</h3>
<p>The code utilizes arrow functions for cleaner and more concise function definitions.</p>

<h3>Template Literals:</h3>
<p>Template literals (`) are used extensively to insert variables directly into strings, making string concatenation simpler and more readable.</p>

<h3><code>const</code> and <code>let</code> :</h3>
<p>Block-scoped variable declarations with <code>const</code> and <code>let</code> are used throughout the code instead of var to define variables with appropriate scoping.</p>

<h3><code>async/await</code> for Asynchronous Code:</h3>
<p>The code uses <code>async/await</code> for handling asynchronous operations, making it easier to work with promises in a more readable and synchronous-like manner.</p>

<h3>Object Destructuring:</h3>
<p>Destructuring is used to extract properties from objects cleanly and concisely.</p>








