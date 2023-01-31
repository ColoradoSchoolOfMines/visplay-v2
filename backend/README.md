# Welcome to the Visplay Backend!

## First-time setup
1. Obtain an .env file from the Visplay channel in the ACM Discord, this contains the credentials that this backend server uses to communicate with our database and can't be shared in this public repo. Alternatively, you can also set up your own local database, just make sure that your environment contains MONGO_URL, USERNAME, and PASSWORD variables.
2. Make sure you have NodeJS (14.0+) and NPM installed, you can download both [here](https://nodejs.org/en/download/).
4. Clone this repo, and navigate to the backend folder.
3. Copy the .env file obtained from the Discord into this folder.
4. Open a terminal (or PowerShell) and navigate to this `backend` folder.
4. Run `npm install`
5. Run `npm start`
6. If you don't get any errors, you're all set! Open a browser and navigate to `localhost:8080`

## Common Errors
TODO

Please note that this backend hosts the Visplay API only, you will need to start the config panel or renderer to actually interface with this server. Please see the README in the repo for more info on how Visplay works. 