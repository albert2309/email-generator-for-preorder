var posterPrice = 130;  
var dueDate = "31 Jan 2016";
 function processIt(event){
  
  var name = event.values[1];
  var email = event.values[2];
  var amount = event.values[3];
  var address = event.values[4].replace(/$\b/gm,'<br>');;
  var methodOfPayment = event.values[5];
  var postChoice = event.values[6].split(','); 
    
  Logger.log(event.values[6]);
  Logger.getLog();
  Logger.log(postChoice);
  Logger.getLog();
  var paymentStatement = '';
  var itemMessage = '<p>' + amount +  'x Memories 單曲大碟一套 = ' + amount * posterPrice + ' HKD</p>';
   var subTotal = amount * posterPrice;
   if(methodOfPayment === '澳門中國銀行 12-01-10-165992 Cheang H** I***')
   { 
     paymentStatement +='<p>澳門中國銀行</p>' +
       '<p> Cheang H** I***: 12-01-10-165992</p><br>';
   }
    else if(methodOfPayment === '香港中國銀行 / Bank of China ： 012-561-1-011895-4 Ho C*** Y***')
   { 
     paymentStatement +='<p>香港中國銀行</p>' +
       '<p>Ho C*** Y***: 012-561-1-011895-4</p><br>';
   }
     else if(methodOfPayment === '香港匯豐銀行 / HSBC ：828-387068-833 Ho C*** Y***')
   { 
     paymentStatement +='<p>香港匯豐銀行</p>' +
       '<p>Ho C*** Y***: 828-387068-833</p><br>';
   }  
   else if(methodOfPayment === '支付寶 / Alipay ： jj_jeris@hotmail.com')
   { 
     paymentStatement +='<p>支付寶 / Alipay </p>' +
       '<p>jj_jeris@hotmail.com</p><br>';
   }
   else if(methodOfPayment === '台灣郵局帳號 ：0021088 0751992 梁詩敏 ( 接受有摺/無摺存款 )')
   { 
     paymentStatement +='<p>台灣郵局帳號 </p>' +
       '<p>梁詩敏 0021088 0751992</p><br>';
   }
    else
    {
      paymentStatement += '<p>Paypal: yinghai45luv@gmail.com (Additional 10 HKD for the service charge)</p><br>';
      subTotal+= 10;
    }
   
    var shippingPrice = 0;
   for(var x = 0; x < postChoice.length;x++){
     if(postChoice[x] === "澳門 Macau HKD20" || postChoice[x] === "香港 Hong Kong HKD20")
       shippingPrice += 20;
     else if(postChoice[x] === "亞洲地區 Asia HKD40")
       shippingPrice += 40;
      else if(postChoice[x] === "其他 Other Countries HKD50")
       shippingPrice += 50;
      if(postChoice[x] === "加HKD15.5 可用掛號 Add HKD15.5 for registered mail")
       shippingPrice += 15.5;
   }
   var total = subTotal + shippingPrice;
    //replace new line on the address with html format
    MailApp.sendEmail({
       to: email,
       subject: 'YinG X JJeris Love Laika "Memories" Pre-Order Confirmation',
       htmlBody: '<div style="font-family:Calibri font-size:14px margin-left:44px"> <h1>Ying Jeanne d’ Arc Photobook Confirmation</h1>' + 
       '<font size="4"><p>I am Ying! Thank you for your support!</p></font>' + 
       '<h3> Please confirm the below information for the purchase order:</h3>' + 
       itemMessage + 
       '<p>Subtotal/小計 = ' + subTotal + ' HKD</p><br>' +
       '<p>Shipping cost/郵費 = ' + shippingPrice + ' HKD</p>' +
       '<font size="4" color="#ff1654"><p>總數 = ' + total + 'HKD</p></font>' +
       '<br><p>Please transfer payment to the following accounts:</p>' +
       paymentStatement + 
       '<p>Cut-Off: <font color="#ff1654"><u>' + dueDate + '</u></font></p><br>' +
       '<p>Please verify your address:</p><br>'  + address + '<br>' + 
       '<p>Please email the payment confirmation to me and I will confirm you order soon! </p>' +
       '<p>If payment is not due on or before 31 Jan 2016, order will be cancelled automatically!</p>' +
       '<p>Thank you for your love and support again! Should you have any questions, please feel free to contact me by inbox.</p><br>' + 
       '<p><strong>瑩Ying x JJeris</strong></p> </div>'
   });
  
}
