Currently Deployed:
https://foodmine-odbd.onrender.com/

Please note that the MongoDB Cluster might go down after prolonged inactivity. Since I don’t monitor it regularly, I appreciate your understanding if this happens.

You may use the following login credentials for testing below:
- **Email:** test@gmail.com  
- **Password:** test123

This was fixed on this commit, still trying to understand why this works as all files are somewhat identical:
https://github.com/Vinchiii18/foodmine/commit/c2eadd3bdd77a06a0994a92028277476365634b2?diff=split&w=1#diff-23d96888636f4d0c2b14f5f5144fc1d54703d6fb846c3c4a04328f123b1e3a70

## Lessons
1. Introduction to the course
2. Install development tools
3. Create Angular App
    1. Create project's folder
    2. Install @angular/cli
    3. Create App as frontend
4. Add Header
    1. Generate Component
    2. Add HTML
    3. Add CSS
5. List Foods
    1. Create Food model
    2. Create data.ts
        1. Add sample foods
    3. ADd images to assets
    4. Create Food service
    5. Create Home component
        1. Add ts
        2. Add HTML
        3. add CSS
6. Search
    1. Add method to Food service
    2. Add search route
    3. Show result in Home component
    4. Generate search component
        1. Add to home component
        2. Add ts
        3. add HTML
        4. Add CSS
7. Tags Bar
    1. Create Tag model
    2. Add sample tags to data.ts
    3. Food service
        1. Add get all tags method
        2. Add get all foods by tag method
    4. Add tags route
    5. Show tag result in Home component
    6. Generate Tags component
        1. Add to home component
        2. Add ts
        3. Add HTML
        4. Add CSS
8. Food Page
    1. Add method to food service
    2. Generate Good Page component
        1. Add Route
        2. Add ts
        3. Add HTML
        4. Add CSS
9.1 Cart Page
    1. Create CartItem Model
    2. Create Cart Model
    3. Generate Cart service
    4. Add to Cart Button in Food Page
    5. Generate Cart page component
        1. Add Route
        2. Add ts
        3. Add HTML
        4. Add CSS

10. Not Found
    1. Generate Component
        1. Add ts
        2. Add HTML
        3. Add CSS
    2. Add To Pages
        1. Home Page
        2. Food Page
        3. Cart Page

11. Connect To Backend
    1. Create backend folder
    2. npm init
    3. npm install typescript
    4. Create tsconfig.json
    5. Create .gitignore
    6. Copy data.ts to backend/src
    7. npm install express cors
    8. Create server.ts
        1. Install @types
        2. Add APIs
    9. npm install nodemon ts-node --save-dev
    10. Add urls.ts to frontend
    11. Add HttpClient module
    12. Update food service

12. Login Page
    1. Generate Component
        1. Add to routes
        2. Add ts
        3. Add HTML
            1. Import Reactive Forms Module
        4. Add CSS
    2. Add Login API
        1. Use JSON
        2. Add JSONWebToken
        3. Test Using Postman
    3. Generate User Service
        1. Generate User Model
        2. Add User Subject
        3. Add Login Method
            1. Add User URLs
            2. Generate IUserLogin interface
            3. Add ngx-toastr
                1. Import Module
                2. Import BrowerAnimationsModule
                3. Add styles in Angular.json
            4. Add to Header
        4. Add Local Storage methods
        5. Add Logout Method
            1. Add to Header

13. Make Components For Login Page
    1. Input Container
    2. Input Validation
    3. Text Input
    4. Default Button

14. Connect Login API To MongoDB Atlas
    1. Moving APIs into routers
    2. Create MongoDB Atlas
    3. Create .env file
    4. Install
        1. mongoose
        2. dotenv
        3. bcryptjs
        4. express-async-handler
    5. Connect to MongoDB Atlas
    6. Use MongoDB instead of data.ts in APIs

15. Register User
    1. Add Register API
    2. Add Register service method
    3. Add Register link
    4. Add Register Component

16. Loading!
    1. Add Image
    2. Add Service
    3. Add Component
    4. Add Interceptor

17. Checout Page
    1. Create Order Model
    2. Create Checkout Model
        1. Add To Router
    3. Add User to User Service
    4. Add Cart to Cart Service
    5. Create Order Items List Component
    6. Adding Map To The Checkout Page
        1. Add Leaflet npm package
            1. Add @types/leaflet
            2. Add css to angular.json
        2. Add AddressLatLng to Order Model
        3. Create Map component
            1. Add to checkout page
            2. Add TS
                1. Change app-map selector to map
            3. Add HTML
            4. Add CSS
        4. Add Auth Guard
    7. Save Order
        1. Add Order Model
        2. Add Order Status Enum
        3. Add Auth Middleware
        4. Add Order Router
            1. Add create API
        5. Add Order URLs to urls.ts
        6. Add Order Service
            1. Add create Method
        8. Add Auth Interceptor

18. Payment Page
    1. Generate Component
    2. Add 'getOrderForCurrentUser' API
    3. Add Order Service method
    4. Connect Component To Service
    5. Make the Map Component readonly

19. Adding Paypal
    1. Generate Component
        1. Add to payment page
    2. Get Paypal client Id
    3. Add Paypal JS to index.html
    4. Set up Paypal button
    5. Add Pay API to order router
    6. Get Paypal sandbox account

20. Order Track Page
    1. Generate Component
        1. Add to routes
    2. Add API
        1. Add to URLs.ts
    3. Add method to order.service
    4. Add HTML
    5. Add CSS
