# cs465-fullstack
CS-465 Full Stack Development with MEAN

Architecture
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA). Why did the backend use a NoSQL MongoDB database?
- Express was utilized with JavaScript to allow requests to reach the browser through routes and controllers. Wither Express would retrieve the HTML or create a page with the given handlebars from the data. At the start of the project, MVC (Model, View, and Controller) built the structure and modularized the code. Once the Angular project was set in place, all components were varied with the required development of CSS, HTML, or JavaScript to send the entire SPA to the client. For the data to be retrieved from the database, all that was needed was a call from the backend to help render the page, which takes longer on the initial load. However, with Express, the web page would need to be refreshed multiple times with the calls to the server.
- The MongoDB database was used due to its fast query and scalability. It also works well with JSON formatting and unstructured data. 

Functionality
How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces? Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
- JSON and JavaScript are different from each other since one is a format for data while the other is a programming language that processes that data. JavsaScript uses JSON to define objects and tie them together through the usage of APIs to receive requests and send the response in return. JSON was used in the development process to input data into the database, then modified as Angular code to parse responses from HTTP requests and convert them to JavaScript for our application. The content within the static JSON files was also moved into MongoDB to allow automatic changes to the data without deploying it onto the website regularly. 

Testing
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full-stack application.
- The HTTP requests can be used by the client to interact with the server, such as GET, PUT, and POST. These methods are used to communicate with the API endpoints and make the changes necessary. The full stack application used security by authenticating the user as an admin through POST and GET methods and giving a valid JWT for the user to access the endpoints. 

Reflection
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
- I did not have much previous experience with a full-stack application before. I believe my JavaScript, HTML, and Angular skills have improved a lot throughout this course. I was also able to experience how frameworks work in real time and practice backend coding with Node.js and Express. In my current role as a Software Developer, these skills will prove resourceful when knowing either backend or frontend coding with different programming languages (JavaScript) and applications (Visual Studio Code).
