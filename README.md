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