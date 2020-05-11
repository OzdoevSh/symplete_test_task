# symplete_test_task

To develop the test task were selected next tools: Express as a framework for writing the test part, MySQL Workbench as a database.

To start the program locally you need to install all the necessary modules by entering in backend_test_task and frontend_test_task folders terminal


```sh
$ npm install
```

After the installation is complete, go to symplete_test_task\back_end\index.js on line 11 to configure connection to your database

```sh
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "testdb",
  password: "qwerty3129"
});
```
To start the server in back_end folder terminal enter the following command
```sh
$ npm start
```

To start the server in front_end folder terminal enter the following command
```sh
$ npm start
```
Then window will be automatically opened in the browser, but if it won't you can run the project on 3000 port.



