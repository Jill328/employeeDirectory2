import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import employeesRouter from './routes/employees.js';
import { notFound, errorHandler } from './middleware/error.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//check server is running
app.get('/', (req, res) => {
  res.json({ ok: true, service: 'employee-directory-v2'});
});

//Employees router
app.use('/employees', employeesRouter);

//404 + catch-all error handler
app.use(notFound);
app.use(errorHandler);

export default app;








//import employees from "#db/employees";

//app.route("/").get((req, res) => {
  //res.send("Hello employees!");
//});

//app.route("/employees").get((req, res) => {
  ///res.send(employees);
//});

// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.
//app.route("/employees/random").get((req, res) => {
  //const randomIndex = Math.floor(Math.random() * employees.length);
  //res.send(employees[randomIndex]);
//});

//app.route("/employees/:id").get((req, res) => {
  //const { id } = req.params;

  // req.params are always strings, so we need to convert `id` into a number
  // before we can use it to find the employee
 // const employee = employees.find((e) => e.id === +id);

 // if (!employee) {
   // return res.status(404).send("Employee not found");
 // }

  //res.send(employee);
//});
//export default app;
