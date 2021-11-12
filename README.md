# Multiple European Payment Methods on the web

See a [hosted version](https://paypal-eu-payment-methods.herokuapp.com/) of the example

Example integration combining multiple european based payment methods

<p>
<img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width="90px" alt="Paypal Logo">
<img src="https://www.paypalobjects.com/images/checkout/latinum/Altpay_logo_iDEAL.svg" alt="iDEAL Logo">
<img src="https://www.paypalobjects.com/images/checkout/latinum/Altpay_logo_sofort.svg" alt="Sofort Logo">
<img src="https://www.paypalobjects.com/images/checkout/latinum/Altpay_logo_giropay.svg" alt="Giropay Logo">
<img src="https://www.paypalobjects.com/images/checkout/latinum/Altpay_logo_p24.svg" alt="P24 Logo">
<img src="https://www.paypalobjects.com/images/checkout/latinum/Altpay_logo_bancontact.svg" alt="Bancontact Logo">
<img src="https://www.paypalobjects.com/images/checkout/latinum/Altpay_logo_mybank.svg" alt="MyBank Logo">
<img src="https://www.paypalobjects.com/images/checkout/latinum/Altpay_logo_eps.svg" alt="EPS Logo">
</p>

PayPal, iDEAL, Sofort, Giropay, P24, Bancontact, Mybank, Eps

### How to run locally

Copy the .env.example file into a file named .env

```
cp .env.example .env
```

and configuring your .env config file with your Paypal clientId and clientSecret

1. Clone the repo  `git clone git@github.com:paypal-examples/eu-payment-methods.git`
2. Run `npm install`
3. Run `npm start`
4. Navigate to `http://localhost:8080/`