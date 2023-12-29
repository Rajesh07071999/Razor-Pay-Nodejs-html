const express = require("express");
const Razorpay = require("razorpay");
const app = express();
Port = 2000;
app.use(express.urlencoded({ extended: false }));

var instance = new Razorpay({
  key_id: "rzp_***********",
  key_secret: "CT************",
});

app.get("/", function (req, res) {
  res.sendFile('/home/hlink/Desktop/Razor-Pay-Integration/api/index.html');
});

app.post("/create/orderId", function (req, res) {
  var options = {
    amount: req.body.amount,
    currency: "INR",
    receipt: "My first payment in razopay",
  };
  instance.orders.create(options, function (err, order) {
    if (order) {
      res.send({
        orderId: order.id,
      });
    } else {
      res.send(err);
    }
  });
});

app.post('/api/payment/verify',function(req,res){
    
})

try {
  app.listen(Port, (err) => {
    if (!err) {
      console.log("Your APP server is running on Port no : " + Port + " ");
    } else {
      console.log(
        "Hey something went wrong to connect with your server please restart the server and try after some moment"
      );
    }
  });
} catch (error) {
  console.log(
    "Hey something went wrong to connect with your server please restart the server and try after some moment"
  );
}
