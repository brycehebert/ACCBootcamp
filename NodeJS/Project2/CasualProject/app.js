const casual = require("casual");

//just a long message that will have certain parts randomly filled by casual
let message = `Hello there ${casual.name}! 
How was your trip to ${casual.country}? 
Did you get to visit ${casual.city}? 
I sure do hope you had a wonderful time. 
Is your phone number still ${casual.phone}?
I will try to give you a call sometime. By the way, I want to send you a fresh loaf of bread at your address of:

${casual.address}.
        
Well, I will see you soon. I will be visiting sometime before ${casual.month_name}. 
Until then, farewell!`;

//show the message
console.log(message);
