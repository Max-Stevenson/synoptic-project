# Design Limitations

Although the specifications stated that only the API component needed to be built, I wanted to challenge myself to build a full stack
application. This was my first attempt at such an endeavour.

## API
This was my second major project using the Node.js framework and Express middeleware. There was a great deal of learning involved.
Some design limitations of my implementation include:

- The welcome message returned by the login route is somewhat redundant.
- My attempt to meet the requirement of having the application timeout after inactivity was achieved by having short expiry times on the JSON Web Tokens (JWTs) - this proved to be very frustrating during manual testing.

## Front-end
Given the time constraints and my relative inexperience with React and Redux the front-end client was
not as well developed as I would have liked and as such has several limitations:

- No testing.
- Obvious lack of styling - I chose to forgo design and stlying in favour of focusing on functionality.
- Within the [Purchase](https://github.com/Max-Stevenson/synoptic-project/blob/master/client/src/components/Purcahse.js) component there is no option for removing items added to the cart and subsequent page visits within the same session show previous cart total.
- Within the [Login](https://github.com/Max-Stevenson/synoptic-project/blob/master/client/src/components/Login.js) component I have used action dispatches in axios callbacks - this is bad practice and the remedy is instead to use redux thunk.
