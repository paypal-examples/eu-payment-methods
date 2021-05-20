/* eslint-disable consistent-return, new-cap, no-alert, no-console */

var order = {
  purchase_units: [
    {
      amount: {
        currency_code: "EUR",
        value: "49.99",
      },
    },
  ],
  application_context: {
    return_url: `${window.location.origin}/success`,
    cancel_url: `${window.location.origin}/cancel`,
  },
};

/* Paypal */
paypal
  .Marks({
    fundingSource: paypal.FUNDING.PAYPAL,
  })
  .render("#paypal-mark");

paypal
  .Buttons({
    fundingSource: paypal.FUNDING.PAYPAL,
    style: {
      label: "pay",
      color: "silver",
    },
    createOrder(data, actions) {
      return actions.order.create(order);
    },
    onApprove(data, actions) {
      return actions.order.capture().then((details) => {
        alert(`Transaction completed by ${details.payer.name.given_name}!`);
      });
    },
    onCancel(data, actions) {
      console.log("onCancel called");
    },
    onError(err) {
      console.error(err);
    },
  })
  .render("#paypal-btn");

/* iDEAL  */
paypal
  .Marks({
    fundingSource: paypal.FUNDING.IDEAL,
  })
  .render("#ideal-mark");

paypal
  .Fields({
    fundingSource: paypal.FUNDING.IDEAL,
  })
  .render("#ideal-container");

paypal
  .Buttons({
    fundingSource: paypal.FUNDING.IDEAL,
    upgradeLSAT: true,
    style: {
      label: "pay",
    },
    createOrder(data, actions) {
      return actions.order.create(order);
    },
    onApprove(data, actions) {
      fetch(`/capture/${data.orderID}`, {
        method: "post",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          swal(
            "Order Captured!",
            `Id: ${data.id}, ${Object.keys(data.payment_source)[0]}, ${
              data.purchase_units[0].payments.captures[0].amount.currency_code
            } ${data.purchase_units[0].payments.captures[0].amount.value}`,
            "success"
          );
        })
        .catch(console.error);
    },
    onCancel(data, actions) {
      console.log(data);
      swal("Order Canceled", `ID: ${data.orderID}`, "warning");
    },
    onError(err) {
      console.error(err);
    },
  })
  .render("#ideal-btn");

/* sofort */
paypal
  .Marks({
    fundingSource: paypal.FUNDING.SOFORT,
  })
  .render("#sofort-mark");

paypal
  .Fields({
    fundingSource: paypal.FUNDING.SOFORT,
  })
  .render("#sofort-container");

paypal
  .Buttons({
    fundingSource: paypal.FUNDING.SOFORT,
    style: {
      label: "pay",
    },
    createOrder(data, actions) {
      return actions.order.create(order);
    },
    onApprove(data, actions) {
      fetch(`/capture/${data.orderID}`, {
        method: "post",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          swal(
            "Order Captured!",
            `Id: ${data.id}, ${Object.keys(data.payment_source)[0]}, ${
              data.purchase_units[0].payments.captures[0].amount.currency_code
            } ${data.purchase_units[0].payments.captures[0].amount.value}`,
            "success"
          );
        })
        .catch(console.error);
    },
    onCancel(data, actions) {
      console.log(data);
      swal("Order Canceled", `ID: ${data.orderID}`, "warning");
    },
    onError(err) {
      console.error(err);
    },
  })
  .render("#sofort-btn");

/* Giropay */
paypal
  .Marks({
    fundingSource: paypal.FUNDING.GIROPAY,
  })
  .render("#giropay-mark");

paypal
  .Fields({
    fundingSource: paypal.FUNDING.GIROPAY,
    fields: {
      name: {
        value: "",
      },
    },
  })
  .render("#giropay-container");

paypal
  .Buttons({
    fundingSource: paypal.FUNDING.GIROPAY,
    style: {
      label: "pay",
    },
    createOrder(data, actions) {
      return actions.order.create(order);
    },
    onApprove(data, actions) {
      fetch(`/capture/${data.orderID}`, {
        method: "post",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          swal(
            "Order Captured!",
            `Id: ${data.id}, ${Object.keys(data.payment_source)[0]}, ${
              data.purchase_units[0].payments.captures[0].amount.currency_code
            } ${data.purchase_units[0].payments.captures[0].amount.value}`,
            "success"
          );
        })
        .catch(console.error);
    },
    onCancel(data, actions) {
      console.log(data);
      swal("Order Canceled", `ID: ${data.orderID}`, "warning");
    },
    onError(err) {
      console.error(err);
    },
  })
  .render("#giropay-btn");

/* P24 */
paypal
  .Marks({
    fundingSource: paypal.FUNDING.P24,
  })
  .render("#p24-mark");

paypal
  .Fields({
    fundingSource: paypal.FUNDING.P24,
    fields: {
      name: {
        value: "",
      },
    },
  })
  .render("#p24-container");

paypal
  .Buttons({
    fundingSource: paypal.FUNDING.P24,
    style: {
      label: "pay",
    },
    createOrder(data, actions) {
      return actions.order.create(order);
    },
    onApprove(data, actions) {
      fetch(`/capture/${data.orderID}`, {
        method: "post",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          swal(
            "Order Captured!",
            `Id: ${data.id}, ${Object.keys(data.payment_source)[0]}, ${
              data.purchase_units[0].payments.captures[0].amount.currency_code
            } ${data.purchase_units[0].payments.captures[0].amount.value}`,
            "success"
          );
        })
        .catch(console.error);
    },
    onCancel(data, actions) {
      console.log(data);
      swal("Order Canceled", `ID: ${data.orderID}`, "warning");
    },
    onError(err) {
      console.error(err);
    },
  })
  .render("#p24-btn");

/* Trustly */
paypal
  .Marks({
    fundingSource: paypal.FUNDING.TRUSTLY,
  })
  .render("#trustly-mark");

paypal
  .Fields({
    fundingSource: paypal.FUNDING.TRUSTLY,
    fields: {
      name: {
        value: "John Smith",
        hidden: false,
      },
    },
  })
  .render("#trustly-container");

paypal
  .Buttons({
    fundingSource: paypal.FUNDING.TRUSTLY,
    style: {
      label: "pay",
    },
    createOrder(data, actions) {
      return actions.order.create(order);
    },
    onApprove(data, actions) {
      fetch(`/capture/${data.orderID}`, {
        method: "post",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          swal(
            "Order Captured!",
            `Id: ${data.id}, ${Object.keys(data.payment_source)[0]}, ${
              data.purchase_units[0].payments.captures[0].amount.currency_code
            } ${data.purchase_units[0].payments.captures[0].amount.value}`,
            "success"
          );
        })
        .catch(console.error);
    },
    onCancel(data, actions) {
      console.log(data);
      swal("Order Canceled", `ID: ${data.orderID}`, "warning");
    },
    onError(err) {
      console.error(err);
    },
  })
  .render("#trustly-btn");

/* bancontact */
paypal
  .Marks({
    fundingSource: paypal.FUNDING.BANCONTACT,
  })
  .render("#bancontact-mark");

paypal
  .Fields({
    fundingSource: paypal.FUNDING.BANCONTACT,
    fields: {
      name: {
        value: "",
      },
    },
  })
  .render("#bancontact-container");

paypal
  .Buttons({
    fundingSource: paypal.FUNDING.BANCONTACT,
    style: {
      label: "pay",
    },
    createOrder(data, actions) {
      return actions.order.create(order);
    },
    onApprove(data, actions) {
      fetch(`/capture/${data.orderID}`, {
        method: "post",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          swal(
            "Order Captured!",
            `Id: ${data.id}, ${Object.keys(data.payment_source)[0]}, ${
              data.purchase_units[0].payments.captures[0].amount.currency_code
            } ${data.purchase_units[0].payments.captures[0].amount.value}`,
            "success"
          );
        })
        .catch(console.error);
    },
    onCancel(data, actions) {
      console.log(data);
      swal("Order Canceled", `ID: ${data.orderID}`, "warning");
    },
    onError(err) {
      console.error(err);
    },
  })
  .render("#bancontact-btn");

/* Mybank */
paypal
  .Marks({
    fundingSource: paypal.FUNDING.MYBANK,
  })
  .render("#mybank-mark");

paypal
  .Fields({
    fundingSource: paypal.FUNDING.MYBANK,
    fields: {
      name: {
        value: "",
      },
    },
  })
  .render("#mybank-container");

paypal
  .Buttons({
    fundingSource: paypal.FUNDING.MYBANK,
    style: {
      label: "pay",
    },
    createOrder(data, actions) {
      return actions.order.create(order);
    },
    onApprove(data, actions) {
      fetch(`/capture/${data.orderID}`, {
        method: "post",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          swal(
            "Order Captured!",
            `Id: ${data.id}, ${Object.keys(data.payment_source)[0]}, ${
              data.purchase_units[0].payments.captures[0].amount.currency_code
            } ${data.purchase_units[0].payments.captures[0].amount.value}`,
            "success"
          );
        })
        .catch(console.error);
    },
    onCancel(data, actions) {
      console.log(data);
      swal("Order Canceled", `ID: ${data.orderID}`, "warning");
    },
    onError(err) {
      console.error(err);
    },
  })
  .render("#mybank-btn");


/* EPS */
paypal
  .Marks({
    fundingSource: paypal.FUNDING.EPS,
  })
  .render('#eps-mark')

paypal
  .Fields({
    fundingSource: paypal.FUNDING.EPS,
    fields: {
      name: {
        value: ''
      },
    },
  })
  .render('#eps-container')

paypal
  .Buttons({
    fundingSource: paypal.FUNDING.EPS,
    style: {
      label: 'pay',
    },
    createOrder(data, actions) {
      return actions.order.create(order)
    },
    onApprove(data, actions) {
      fetch(`/capture/${data.orderID}`, {
        method: "post",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          swal("Order Captured!", `Id: ${data.id}, ${Object.keys(data.payment_source)[0]}, ${data.purchase_units[0].payments.captures[0].amount.currency_code} ${data.purchase_units[0].payments.captures[0].amount.value}`, "success");
        })
        .catch(console.error);
    },
    onCancel(data, actions) {
      console.log(data)
      swal("Order Canceled", `ID: ${data.orderID}`, "warning");
    },
    onError(err) {
      console.error(err);
    },
  })
  .render('#eps-btn')