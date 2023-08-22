## Overview

Schnout is a fictional website where people can view, create, and comment on articles. User’s can either signup or login allowing them to have access to see the articles. A User can comment on an article which they can edit or delete later. A user can also create an article. Articles cannot be deleted or edited once posted. The Sidebar allows users to filter the article content by category and they also use the search bar to filter by title. A user can also view their profile where they can see all their comments and affiliated articles. Once the user is done using the web application they can log off. If they choose not to log off they will remain logged in.

## Setup 
In the terminal type the following commands:
- `pipenv install && pipenv shell`
- `npm install –prefix client`
- `cd server`
- `flask db upgrade`
- `python seed.py`
- `python app.py`
Then open a separate terminal and enter:
- `npm start –prefix client`

## Technical

### Back End

**app.py**
This is where the backend resides. It has multiple functions which serve many purposes.

>**CheckSession**
This class will check for session cookies allowing users to skip logging in if they had so previously.

>**Login**
This class takes what the user types in the login form and checks with the database to ensure the credential’s match. If so the user will be logged in, if not a 401 response error will return.

>**Signup**
This class takes what the user types in the signup form and creates a new database entry. Once the user signs up they will be logged in automatically and can begin using the web application. 

>**Logout**
This class deletes the user from session cookies and returns the user back to the login page.

>**Users**
This class returns the users from the database. Returns 401 if the user is not logged in.

>**Articles**
This class returns the articles from the database. It also allows users to add articles to the database. Returns 401 if the user is not logged in.

>**Comments**
This class has full CRUD(Create Read Update Delete) for the comments in the database. Returns 401 if the user is not logged in for all operations.

**config.py**
This is used so both models.py and app.py can have access to the imports in the file to keep code DRY.

**models.py**
This is the schema for database entries. There are 3 models being User, Article, and Comment. Comment has a one to many relationship with User and Article. User and Article have a reciprocal many-to-many relationship. For Users the password column uses bcrypt to hash the password and encrypt it. 

**seed.py**
This file simply seeds the data using faker.

###Front End

**components**

> **App.js**
This component holds the bulk of the application. A useEffect is used to check for cookies, if so the user is automatically logged in. If not, the user is directed to the Login component. Using React Router we have 5 routes: 
- At “/articles/:id” the ArticleDetail component will be loaded where users can view one specific article.
- At “/new_article” the NewArticle component will be loaded where users can create new articles.
- At “/profile” the Profile component will be loaded where users can see the comments
they’ve made and the articles they were on. 
- At “/” the Home component will be loaded where users can see articles. 
- At “*” if the user is logged in and goes to a url not specified a 404 error will display.

>**Articles.js**
This component is in charge of rendering the article “card” which is mapped in the Home Component. Each card also has a button to read more which routes the user to “/articles/:id”.

>**IndivArticle.js**
This component is in charge of rendering an individual article. This is also where a user can make comments on the article.

>**LoginForm.js**
This component is in charge of handling user logging in the web application. The form will take the username input and password input and check them with the backend to make sure that they match.

>**NavBar.js**
This component is where the home link is located, the search bar, the profile link, and logout link are all located. The Navbar is present in all pages.

>**ProfileComments.js**
This component handles the comments in the profile page. It allows users to edit or delete their comments as well as see the article where the comment was made.

>**Sidebar.js**
This component is where the filter by category button is. There is also a button to create a new article and scroll to the top of the page. The Sidebar is present in all pages.

>**SignUpForm.js**
This component is in charge of handling the sign up form where users can signup for the web application. The data is then sent to backend where the new user is added to ther data base and they are then logged in.

**pages**

>**ArticleDetail.js**
This component is the page that renders an individual article and its comments.

>**Home.js**
This component is the page that renders the user's home page. This where articles are rendered and the search feature and filter by category filter are applied.

>**Login.js**
This component is the page that renders the login page where users can either select login or signup. If login is selected the LoginForm component is rendered and vice versa with signup.

>**NewArticle.js**
This component is the page in charge of rendering the new article form and also sends the information to the backend to update the database with the new article.

>**Profile.js**
This component is that page in charge of rendering the users comments on their profile page. 

**schemas**

>**Index.js**
This file’s purpose is to define validations schemas for formik using yup.




