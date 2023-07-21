# react-basics-learnings

------------------------------------------------------

create application with command 'npx create-react-app'.
Note: app will be created with functional component.
-Renders app component from index.js file.
-created dashboard componet and user component(js files).

App Component
-Added routes

Login Component
-added for context hook understanding
-username and role will be updated in reducer state and shared through context to Header component.
 SignUp page-
 -it added to explore form validation using libraries.
 -Added yup library for the basic for valodation


Header component
-added logout and page navigation and will display the user name and role of the loggedin user.

Home component
a.creating state variable.
b. onclick button function.
c.added child component-dashboard in app comp. passed app data to child(dashboard) using props.
d. added callback function to show the data coming from child(dashoard).

Dashboard component
a.whenever dependant changed useEffect will gets called.
b. passed name from dashboard to parent(app) when button is clicked 5 times.
c.useRef is used to get the value of input(this hook is used to refer the element value);

 User componnent.
   a.array iteration and displaying data on table.
   b. api call using axois.
   
