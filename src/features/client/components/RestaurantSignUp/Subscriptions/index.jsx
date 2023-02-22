import "./index.scss";

function Subscriptions() {
  const benefits = [
    {
      descr: "Extra orders through https://bfd.lt/",
      withUs: true,
      withoutUs: false,
    },
    { descr: "Dedicated, customized webshop", withUs: false, withoutUs: true },
    { descr: "Quick & easy setup", withUs: true, withoutUs: true },
    { descr: "Access to own dashboard", withUs: true, withoutUs: true },
    { descr: "Upload and edit menus online", withUs: true, withoutUs: true },
    { descr: "Online payments", withUs: true, withoutUs: true },
    { descr: "bfd.lt delivery service", withUs: false, withoutUs: true },
    { descr: "Delivery with own couriers", withUs: false, withoutUs: true },
    { descr: "Offer customer pick-up", withUs: false, withoutUs: true },
  ];

  const pricing = [
    { descr: "-bfd.lt delivery", withUs: "30%", withoutUs: "20%" },
    { descr: "-Own delivery", withUs: "14%", withoutUs: "0%" },
    { descr: "-Customer pick-up", withUs: "14%", withoutUs: "0%" },
  ];

  return (
    <div className="restaurant-signup__container">
      <h2>Choose the best option for you:</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th className="table__header">
              <img
                src="https://www.lekste.lt/dist/img/static/marketing/restaurant-icon-big.png?1645630781731v1"
                alt="restauranticon"
              />
              <br />
              Get your restaurant on https://lekste.lt/ <br />{" "}
              <span>Join our team and sell through https://lekste.lt/</span>
            </th>
            <th className="table__header">
              <img
                src="https://www.lekste.lt/dist/img/static/marketing/webapp-icon-big.png?1645630781731v1"
                alt="appicon"
              />
              <br />
              <div>
                Get your own online webshop and ordering system
                <br />
                <span>Get help and get started with your own webshop</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {benefits.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.descr}</td>
                <td>{item.withUs ? "+" : "-"}</td>
                <td>{item.withoutUs ? "+" : "-"}</td>
              </tr>
            );
          })}
          <tr>
            <td>
              <span>Pricing</span>
            </td>
            <td></td>
            <td></td>
          </tr>
          {pricing.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.descr}</td>
                <td>{item.withUs}</td>
                <td>{item.withoutUs}</td>
              </tr>
            );
          })}
          <tr>
            <td>
              <span>Sign up</span>
            </td>
            <td>149 Eur</td>
            <td>199 Eur</td>
          </tr>
          <tr>
            <td>
              <span>Subscription</span>
            </td>
            <td>0 Eur/month</td>
            <td>49 Eur/month</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Subscriptions;
