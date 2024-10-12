<h2>About</h2>
<p>
    The <strong>Book Recommendation Platform</strong> is a full-stack web application built using the <strong>MERN Stack</strong> (MongoDB, Express, React, Node.js) and <strong>Firebase</strong> for authentication. It allows users to explore and upload book recommendations in an interactive and responsive interface.
</p>

<h3>Features:</h3>
<ul>
    <li><strong>Homepage</strong>: Displays books recommended by the top or earliest contributors.</li>
    <li><strong>Recommendation Page</strong>: Explore all the book recommendations made by other users.</li>
    <li><strong>Recommend a Book</strong>: Upload your own book recommendation after logging in using provided credentials.</li>
    <li><strong>User Authentication</strong>: Firebase handles secure user login and authentication.</li>
</ul>


<h2>How You Can Use This Platform</h2>
<p>
    This platform began as a way for friends to share book recommendations but has expanded to a broader community. It provides a dedicated space for users to share meaningful book suggestions, discover new reads from like-minded individuals, and keep track of books recommended by trusted sources. By centralizing recommendations in one platform, it simplifies the process of finding and suggesting quality books, enhancing the reading experience for a larger audience.
</p>


<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<p>Before you begin, ensure you have the following:</p>
<ul>
    <li>Node.js</li>
    <li>MongoDB</li>
    <li>Firebase account (for setting up authentication)</li>
</ul>

<h3>Installation</h3>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/bilal-sajid/Book-Recommendation-Platform.git</code></pre>
    </li>
    <li>Navigate to the project directory:
        <pre><code>cd Book-Recommendation-Platform</code></pre>
    </li>
    <li>Install dependencies for both the client and server:
        <pre><code>cd mern-client
npm install
cd ../mern-server
npm install</code></pre>
    </li>
    <li>Set up your environment variables:
        <ul>
            <li><strong>MongoDB URI</strong>: Your MongoDB connection string.</li>
            <li><strong>Firebase Credentials</strong>: Set up Firebase and get the required credentials for authentication.</li>
        </ul>
    </li>
</ol>

<h3>Running the Application</h3>
<ol>
    <li>Start the backend (Node.js/Express):
        <pre><code>cd mern-server
npm start</code></pre>
    </li>
    <li>Start the frontend (React):
        <pre><code>cd mern-client
npm run dev</code></pre>
    </li>
</ol>
<p>The application should now be running locally.

<h2>Usage Instructions</h2>

<h3>Exploring Book Recommendations</h3>
<ul>
    <li><strong>Homepage</strong>: View books recommended by top/early contributors.</li>
    <li><strong>Recommendation Page</strong>: Browse all user-recommended books.</li>
</ul>

<h3>Uploading Your Own Recommendation</h3>
<p>To upload a new book recommendation:</p>
<ol>
    <li>Select the <strong>'Recommend a Book'</strong> option.</li>
    <li>Use the login credentials provided in this README (do not use your own credentials).</li>
    <li>After logging in, input the book details and submit.</li>
</ol>

<h3>Login Credentials</h3>
<p>To test the platform, use the following credentials:</p>
<pre><code>Username: book-recommendation@gmail.com
Password: books123</code></pre>

<h2>Project Structure</h2>
<pre><code>book-recommendation-platform/
│
├── mern-client/          # Front-end (React)
│   ├── public/           # Public assets
│   └── src/              # React components
│
├── mern-server/          # Back-end (Node.js, Express)
│   ├── index.js/         # API Calls
│   
│   
└── README.md             # This file</code></pre>

<h2>Technologies Used</h2>
<ul>
    <li><strong>MongoDB</strong>: NoSQL database for storing user data and book recommendations.</li>
    <li><strong>Express.js</strong>: Back-end framework for building RESTful APIs.</li>
    <li><strong>React</strong>: Front-end JavaScript library for creating dynamic user interfaces.</li>
    <li><strong>Node.js</strong>: JavaScript runtime for the server-side application.</li>
    <li><strong>Firebase</strong>: Authentication service for managing user sign-ups, logins, and logouts.</li>
</ul>

<h2>Contributing</h2>
<p>Feel free to open issues or submit pull requests if you’d like to contribute to the project.</p>
