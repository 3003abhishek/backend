exports.isValidCreditCard = (req, res) => {
    try {
      console.log("gandhi");
      console.log(req.body);
      let cardNumber = req.body.cardNo.toString();
      console.log(cardNumber);
  
      
      // cardNumber = cardNumber.replace(/\D/g, '');
  
      const length = cardNumber.length;
      console.log(typeof(cardNumber));
      console.log(length);
      let sum = 0;
      const parity = length % 2;
  
      for (let i = 0; i < length; i++) {
        const digit = parseInt(cardNumber[i], 10);
          console.log(digit);
        if (i % 2 !== parity) {
          sum += digit;
        } else {
          const doubled = digit * 2;
          sum += doubled > 9 ? doubled - 9 : doubled;
        }
      }
       console.log(`sum:${sum}`);
       console.log(`res:${parseInt(cardNumber[length - 1], 10)}`);
      const isValid = parseInt(cardNumber[length - 1], 10) === 10 - (sum % 10);
  
      res.send(isValid);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Server error' });
    }
  };
  