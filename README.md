# Xpeerience

Final group project for the [School of Code bootcamp](https://www.schoolofcode.co.uk/). Xpeerience is an app that allows users to meet and get together with like-minded people by finding events to attend. 

![demo](./demo.gif)


## Description

This project spanned over four weeks and was created by a team of 6 bootcampers. The team worked according to the Agile methodology: after a first planning week where we agreed on an app idea, ways of working and technologies to use, we outlined all tasks on a Trello board and started picking some to work on, adjusting as we went along. Our days were marked by morning standups, afternoon retrospectives and more meetings in between whenever needed.
Our last week was mostly spent giving some finishing touches to the project, putting together and rehearsing the presentation in view of the final demo day.

The app welcomes the user to a landing page displaying a hero section and a slider with a selection of events stored in our MongoDB database. The user will need to register and login to access the rest of the website, we decided to restrict access in order to protect users' privacy. Once users register and authenticate themselves, which is accomplished using JSON Web Token, they are redirected to our main page.  

Our main page gives access to all the events available, allows users to create events of their own and also gives them access to the website chat. In addition to that, users can view their own personal dashboard.

![demo2](demo2.gif)
## Technologies, Libraries, Tools

- React
- CSS modules
- React Bootstrap
- Socket.IO
- NodeJS
- ExpressJS
- Mongoose
- Json Web Token
- BcryptJS
- dotenv
- React Router

## Installation

- Clone repository to your local client
- `cd` into your new folder
- open your dedicated editor/IDE
- run `npm i` to install all required dependencies
- run `npm start` to spin up the app

## License

[MIT](https://spdx.org/licenses/MIT.html)
