var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/categories');
var adminRouter = require('./routes/admin');
var productRouter=require('./routes/product');
var subcategoryRouter=require('./routes/subcategory');
var accessoriesRouter=require('./routes/accessories');
var userdetailsRouter=require('./routes/userdetails');
var ordersRouter =require('./routes/orders');
var mobilepictureRouter=require('./routes/mobilepicture');
var userregistrationRouter=require('./routes/userregistration');
var contactusRouter=require('./routes/contactus');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categories', categoryRouter);
app.use('/admin',adminRouter);
app.use('/product',productRouter);
app.use('/subcategory',subcategoryRouter);
app.use('/accessories',accessoriesRouter);
app.use('/userdetails',userdetailsRouter);
app.use('/orders',ordersRouter);
app.use('/mobilepicture',mobilepictureRouter);
app.use('/userregistration',userregistrationRouter);
app.use('/contactus',contactusRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
