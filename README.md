![](https://img.shields.io/badge/Microverse-blueviolet)

# Hello Rails React 

> this is a project to practice how to use react with rails in one app.


## Built With

- Ruby on Rails
- HTML
- React js


## Getting Started

To get this program running on your computer,

1. Install **Ruby**
2. Install **postgres** database engine
2. Clone the project repository ([link](../../))

### To setup your environment frameworks, run
  ```
    $ bundle install
    
    $ npm install
  ```

### To setup both testing and development databases
  Create a _**`.env`**_ file in the root directory of the app, and then add this
  ```
    DB_USERNAME = <USERNAME_THAT_WORKS_WITH_SETUP_POSTGRES_DATABASE>
    DB_PASSWORD = <PASSWORD_ASSOCIATED_WITH_THE_POSTGRES_USERNAME>
  ```

  I've come across weird scenarios where certain routines would result in errors on Windows platform when 
  they work fine on other platforms. So, I've chosen those that are more likely to succeed.
  ```
    > rake db:create
    > rake db:migrate
  ```

  For Linux and macOS platforms
  ```
    $ rake db:prepare
  ```

### To run local server
  ```
    $ rails s
  ```


## Authors

👤 **Mohammed Raad**

- GitHub: [@MoRaad97](https://github.com/MoRaad97)
- Twitter: [@MohammedRaadz](https://twitter.com/MohammedRaadz)
- LinkedIn: [Mohammed Raad](linkedin.com/in/mohammed-raad-600176210)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!


## 📝 License

This project is [MIT](./LICENSE) licensed.

_NOTE: we recommend using the [MIT license](https://choosealicense.com/licenses/mit/) - you can set it up quickly by [using templates available on GitHub](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository). You can also use [any other license](https://choosealicense.com/licenses/) if you wish._
