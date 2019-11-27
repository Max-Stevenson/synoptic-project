# Design of Membership System

## API Design
Essential routes required to meet basic specifications:
- register new user
> If the card is not registered on the system, the owner will be rquired to provide basic employee information.
- login
> When a card is presented to the system and the service finds that the card is already registered,
the system will show a welcome message wit hthe user's name associated with the card.
- logout
> It is envisaged that when the user taps their card a second time the system informs the user and says "Goodbye".
- top up
> ... will allow Bows Formula One employees to use their existing data cards in the kiosks to register and top up with money.
- pay
> ... shall be able to use their existing employee cards to top up and purchase food at their existing kiosk terminals.

## API Sequence diagrams

![](screenshots/register.png)

![](screenshots/login.png)

![](screenshots/logout.png)

![](screenshots/editAccount.png)