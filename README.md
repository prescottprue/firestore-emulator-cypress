# Firestore Emulator Cypress

This project how the browser opened by Cypress cannot connect to the Firestore emulator.

## Running

1. Start the emulators: `yarn emulators`
1. In a new terminal window, seed the emulated datbases with data: `scripts/seeddb.js`
1. Start the app by running: `yarn start`
1. Visit `localhost:3000` in your browser - notice that data loads from both emulated databases
1. In another terminal window, open the test runner by running: `yarn test`
1. Run the projects tests by clicking on "Projects.spec.js"

**NOTE** When running in normal browser Projects appear for both databases, but when running in Cypress, only Real Time Database emulator works (not Firestore):

![image](https://user-images.githubusercontent.com/2992224/73964898-5d10c900-48d0-11ea-915b-cc42b2fcba3c.png)

Error Closeup:
![image](https://user-images.githubusercontent.com/2992224/73963581-d1963880-48cd-11ea-9ed6-bf4009284659.png)