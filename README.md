Project Description:

Our project focuses on developing a robust eCommerce web application utilizing a Hybrid Architecture/Multitier approach. This architecture involves separating the frontend and backend functionalities, with each running on distinct servers to enhance performance and scalability.

Tech Stack:

Backend: Node.js with Express.js framework, powered by MongoDB for efficient data storage.
Frontend: Utilizing React with TypeScript for enhanced type safety and development experience.
CSS: Leveraging the power of Sass for efficient styling.
State Management: Employing Redux Toolkit for seamless state management.
Payment Gateway: Integration with Stripe for secure and reliable payment processing.
Table Creation: Implementing React Table for creating tables with sorting and pagination functionalities.
Authentication: Firebase is utilized on the client-side, while MongoDB handles authentication on the backend.
Project Features:

Admin Dashboard:

Central to our project is the Admin Dashboard, offering insights into revenue, user metrics, transactions, and product performance.
Graphical representation of revenue and transactions over time.
Inventory tracking via progress bars and highlighting top transactions.
Gender ratio analysis among users.
Products:

Comprehensive product management, including listing products with essential details such as photo, name, price, and stock.
Functionality for adding new products, updating existing ones, and direct search capability.
Customer Management:

Ability to view and manage customer details, including name, avatar, gender, email, and role, with options for action such as deletion.
Transactions:

Dedicated section for managing transactions, enabling order processing from initiation to delivery status updates.
Charts:

Various graphical representations including bar charts for top products and customers, orders throughout the year, and line charts depicting active users, total products, revenue, and discounts allotted.
Coupon Generation:

Feature to generate and store coupons in the database for user discounts, enhancing customer engagement.
User/Customer Dashboard:

Seamless user experience with product browsing, sorting, and filtering options, along with an intuitive add-to-cart functionality.
Checkout process with customer details submission and integrated payment page.
Order tracking functionality for users, ensuring transparency and convenience.
Additional Functionalities:

Inventory management to prevent orders for out-of-stock products.
Pagination for efficient navigation through product listings.
This project encapsulates a comprehensive eCommerce solution, combining advanced features with a user-friendly interface to deliver a seamless shopping experience for both administrators and customers alike.

We are building ecommerce web application using the Hybrid Architecture / Multitier where Both forntend and backend are running on two different servers.

There are three types of architecture -

1. Monlithic Architecture - The backend and client are on the same server. ex- Next JS Application. One domain.

2. Microservice Architecture - Frontend and backend are running on different server but not only that the backend server is running on multiple different server and if one server goes down then another server is capable of handling the request.

3. Hybrid Architecture / MultiTier - Both forntend and backend are running on two different servers.

Tech Stack -

Backend - Nodejs + Express js + mongodb

Frontend - React + Typescript

CSS - Saas

State management - Redux Toolkit

Payment Gateway - stripe

For creating tables - React table which comes with sorting and pagination.

Authentication - Firebase on client side and mongodb on backend side.

Project Description -

Admin Dashboard -

The main usp of the project is the admin dashboard.

Where we can see the Revenue generated , Users , Transactions , products with last month gain and loss in terms of percentage.

There is also an graph of revenue and transactions between month and rupees.

Number of inventories via progress bar.

Top transactions.

gender ratio in users.

Products -

list of products with photo , name , price , stock and action button.

We can also add new product and update the existing product information.

We can also search for the product directly to view its stats.

Customer -

We can also have the list of customers with the details including name , avtar , gender , email , role , action to delete.

Transactions -

We also have an transaction section where using which we can process the order done by the customer and update it accordingly.
i.e from process to shipping to delivered.

Bar Chart -

We also have the bar charts using which we can see the top products and top customer in specific months.

We also have the bar chart of orders throughout the year.

Pie chart -

order fullfillment ratio.

product category ratio.

Stock Availbility.

Revenue Distribution.

user age group.

Admin and customer.

Line Chart -

1. Active users in months

2. Total products

3. Total revenue

4. Discount alloted

Coupon generation -

we can generate coupon for users and save it to the database so that users can use it to have effective discount.

All the products have the pagination.

Users / Customer Dash board -

list of products with add to cart functionality and where we also sort the products with low to high and high to low also based on the categories and progress bar for pricing.

There is also checkout functionality where user can fill the customer details and after clicking the pay now it comes to payment page.

users can see my orders.

user can only add those products if the stock is present in the inventory and if it is out of stock then user can not place the order.

Starting the project -

Step 1. npm create vite@latest

npm i react-hot-toast react-icons sass firebase react-router-dom react-table

npm i --save-dev @types/react-table

We are using the react-router-dom.

We are importing {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

Where every thing will be wrapped inside the <Router> component and then inside the To those pages we are defining the routes will come under the <Routes> component. However we will define the route or path to the specific component using the <Route path="/" element={<Home />}> component.

Everything will be inside the the <Router> component but if it is outside the <Routes> component then it will be available to all the application component. i.e it will render to all the paths such as navigation.

Inside the src folder we are having the two folders components which include the component which will gets re-use again and agian whenever needed and pages folder which will include the separate routes components. This is how we will structure our application.

So now we have defined the routing and path and corresponding element but the thing is when we are on our home page or any other page still rest of the pages are getting loaded and that is an overhead which reduces performance and thus we will use the lazyLoading concept i.e importing the {lazy} from 'react'.

Where instead of importing the page components from pages folder directly we will be importing it using the lazy() function which takes the function as an parameter and it returns the import("path=of-the-component") so that the component from the pages folder will get imported only if the url is hit or when needed.

const Home = lazy(() => import("./pages/Home") );

Additionally all the component defined using the <Route> component inside the <Routes> component untill they are being fetched or loaded we can also add an fallback component using the <Suspense> component imported from the "react" which have the fallback attribute which takes the component as an value you want to render when the routes or path are being fetched.

We have to wrap the entire <Routes> component inside the <Suspense fallback={<FallbackCompoennt/>}> component.

There is an <Link to="" /> tag imported from 'react-router-dom' which have the to attribute using which we can navigate through different url.

Backend -

1. npm init -> to generate the package.json file.

2. npm i -g typescript -> to install typescript

3. tsc --init -> to generate the tsconfig.json file for configuring the typescript.

Inside the tsconfig.json file set the following properties -

1. target:"ES2020"

2. outDir:"dist"

3. rootDir:"src"

4. module:"NodeNext"

5. moduleResolution : "NodeNext"

Inside the package.json file we can add the following property.

"type" : "module"

Because of this instead of importing from the library this way.

const fs = require('fs');

We can do the following -

import fs from 'fs';

These are the following dependencies we must install -

npm i express dotenv mongoose

But the above dependencies are of javascript and thus we must include all the typescript libraries for development process so we also have to use the following command -

npm install --save-dev @types/express @types/node nodemon typescript

We must these following properties inside the package.json file inside the "scripts" property.

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node dist/app.js",
"build": "tsc",
"watch": "tsc -w",
"dev":"nodemon dist/app.js"
}

We will be creating following folders inside the src folder.

1. controllers - This contains all the function which we are defining to handle the request and response having separate folders userController.ts and productController.ts which will export all these functions and these functions are imported inside the routes folder.

const productController = (err,req,res,next) => {};

2. utils - All the utility classes , functions which acts as an helper function.

3. middlewares - All those function which we want to use as middlewares we will keep those functions inside the middlewares folder.

const middlewareFunction = ( req , res ) => {

};

app.get('/get',middlewareFunction,(req,res) => {

});

4.  routes - Using the separation of concern we will have different files example we will have userRoute.ts which will contain all the routes request handling code regarding the users and we will have productRoutes.ts which will contain all the routes handling code related to the product. Routes will contain the controller handling an particular route request.

        app.get('/products',productController);

5.  types - All the types we are defining will be inside this folder.

6.  models - All the database manipulation happening inside the controllers function there the database schema we are using will be defined inside the models folder. userSchema.ts , productSchema.ts etc

routes + controllers + middlewares are linked to each other.

Inside the model folder we will create the first user.ts file where we will define the schema -

Inisitally we will import mongoose from mongoose.

-> import mongoose from 'monggose';

Then we will define schema using the mongoose.Schema() method.

-> const schema = new mongoose.Schema({
\_id:{
type : String,
required:[true ,"Please enter the id"]
},
name:{
type : String,
unique : [true , "Email already exists"],
required:[true ,"Please enter Name"]
},
email:{
type : String,
required:[true ,"Please enter Name"],
validate:validator.default.isEmail
},
photo : {
type : String,
required:[true ,"Please enter photo"]
},
role : {
type : String,
enum:['admin',"user"],
default : 'user'
},
gender : {
type : String,
enum:['male',"female"],
required : [true , "Please enter your Gender"]
},
dob : {
type : Date,
required : [true , "Please enter your Date of Birth"]
}
},{
timestamps:true
});

We can also create or generate the virtiual property for the mongoose schema which is derived by our code.

schema.virtual("age").get(function () {
const today = new Date();
const dob = this.dob; // this refers to the current user

        let age = today.getFullYear() - dob.getFullYear();

        if(today.getMonth() < dob.getMonth() || today.getMonth() === dob.getMonth() && today.getDate() === dob.getDate())
        {
                age--;
        }

        return age;

})

Before exporting the User we must specify its type which include all the defined attribute in the schema and virtual attribute as well.

interface IUser extends Document {
\_id: string;
name: string;
photo: string;
email: string;
role: 'admin' | 'user';
gender: 'male' | 'female';
dob: Date;
createdAt: Date;
updatedAt: Date;
//Virtual attribute
age: number;
}

Now we will pass this interface as the type to the mongoose.model<IUser>() method.

At last we will export the mongoose model by specifying the name of the model and the schema it have.

export const User = mongoose.model<IUser>("User",schema);

Additionally we can use the validator package which we can install and use to validate the values.

-> npm install validator @types/validator

next() function is used for calling the next middleware function specified in the path.

Whenever we are using the app.use() method it means we are adding the middleware.

We can also do chaining of several controller functions if there is only one single route and there multiple http methods for that single route then instead of defining separately we can use the express.Router().route("path").get(getController).delete(deleteController) method.

We will be making usre that only the admin is allowed to delete , create , update the user and thus to add the restriction we will be adding the auth middleware .

route - api/v1/:id -> request.params.id

route - api/v1?id=24 -> request.query.id

We will use the multer package library which is used for storing the images. We will create an upload folder

-> npm install multer @types/multer

We will create an uploads folder where all the images will be stored inside it.

So what we are doing for uploading the image we will be creating the static folder uploads and inside it we will be uploading the image using the multer then we can be able to access the image using the static path.

We will be installing the random id generator which will be used for assigning the id to the image.

-> npm install uuid

-> npm install --save-dev @types/uuid

We are installing one more dev dependencies for faking json data -

-> npm install --save-dev @faker-js/faker

Optimizing code by using the caching functionality using the node-cache or redis -

-> npm i node-cache

We are also installing morgan package. It tells about what request we is happening in the console -

-> npm install morgan

-> npm install --save-dev @types/morgan
