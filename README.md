<img src="./.github/Proffy.png" width="60%" />

# 👨‍🏫 Proffy

Project developed during the Next Level Week #2, offered by Rocketseat.

## ℹ About

The project was built to connect teachers to students that are intestered on their services. 

## 🛠 Technologies Used

- TypeScript
- Node.js
- ReactJS
- React Native

## 🎯 Features

- API RestFUL
    - Database built using SQLite
    - Routes to create, filter and etc.
- Web version
    - Register a new teacher
    - Search teachers using filters (Subject, week day and time)
- Mobile version
    - Search teachers using filters (Subject, week day and time)
    - Favorite teachers to keep them save in your device

## 🌐 Web

![Gif showing the Web version](./.github/Web.gif)

## 📱 Mobile interface

<img src="./.github/Mobile - Landing.png" width="30%" />
<img src="./.github/Mobile - Proffys.png" width="30%" />

## How to use
You need to have installed in your machine:
- Nodejs and a package manager (npm | yarn) to interpret the code and install dependencies.
- Expo, to run the mobile version

```bash
# Accessing the server folder
$ cd server
# Installing dependencies
$ yarn install
# To create the database
$ yarn knex:migrate
# To run the server
$ yarn start

# Accessing the web folder
$ cd web
# Installing dependencies
$ yarn install
# To run the web page
$ yarn start

# Accessing the mobile folder
$ cd mobile
# Installing dependencies
$ yarn install
# Running the app
$ yarn start

```

## 📄 License

This project is being hosted under the MIT License.
