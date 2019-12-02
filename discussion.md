# Design Limitations

Although the specifications stated that only the API component needed to be built, I wanted to challenge myself to build a full stack
application. This was my first attempt at such an endeavour.

## API
This was my second major project using the Node.js framework and Express middeleware. There was a great deal of learning involved.
Some design limitations of my implementation include:

- The welcome message returned by POST /api/v1/users/login route is somewhat redundant.
- Could remove the get GET /api/v1/users/me route entirely and instead return user details in the aforementioned login route.
- My attempt to meet the requirement of having the application timeout after inactivity was achieved by having short expiry times on the JSON Web Tokens (JWTs) - this proved to be very frustrating during manual testing.
- Error messages - I have coded helpful error messages for some unhappy paths relating to employeeID and cardId not being unique
during user creation, but other errors, such as mobileNumber validation would not render in the same way. This could be solved by ensuring all error messages have the same object design and then a single render function could be used on the front-end.

## Front-end
Given the time constraints and my relative inexperience with React and Redux the front-end client was
not as well developed as I would have liked and as such has several limitations:

- No testing.
- Obvious lack of styling - I chose to forgo design and stlying in favour of focusing on functionality.
- Within the [Purchase](https://github.com/Max-Stevenson/synoptic-project/blob/master/client/src/components/Purcahse.js) component there is no option for removing items added to the cart and subsequent page visits within the same session show previous cart total.
- Within the [Login](https://github.com/Max-Stevenson/synoptic-project/blob/master/client/src/components/Login.js) component I have used action dispatches in axios callbacks - this is bad practice and the remedy is instead to use redux thunk.
- Using sessionStorage for JWTs - potential security implications.

## Future Improvements
I intend on continuing with the project after it is submitted and have already thought of several improvements and developments I would like to implement:

- Optimisation for touchscreen devices. The scenario detailed the kiosk terminals being touchscreen and so I would like to optimise for this configuration.
- Styling - integration with bootstrap to give a better and more aesthetically pleasing user experience.
- Comprehensive tests. Integration testing of the front and back-end. End to end tests simulating complete user experience.
- Integration with hardware. I have an arduino with a Radio Frequency Identification (RFID) reader, I have experimented with using Socket.io to send scanned card data to node applications. I would like to develop the front-end client to listen for such card scan events and pull card data directly from the hardware, rather than the user having to manually enter it.

## Functional Requirements

## Non-functional Requirements
- Usability: Development and execution has occurred entirely in a chrome browser with no testing in other browsers such as firefox or safari. Before going live important to consider what browsers are in place for hypothetical scenario.
- scalability: Currently database is MongoDB Atlas - a cloud based storage solution. Has not been tested under load with multiple users concurrently.