# symplete_test_task
The following tools were selected for the development of the test task: Express as a framework for writing the test part, MySQL Workbench as a database.
To start the program locally you need to install all the necessary modules by entering the backend_test_task and frontend_test_task folders in the terminal.
npm install
After the installation go to symplete_test_task\backend_test_task\index.js , line 5 to configure connection to your database
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "testdb",
  password: "qwerty3129"
});

To start the server in the backend_test_task folder terminal enter the following command
npm start
To start the user part in the frontend_test_task folder terminal also enter the command
npm start
If you do not automatically open a window in the browser, you need to go to the 3000 port