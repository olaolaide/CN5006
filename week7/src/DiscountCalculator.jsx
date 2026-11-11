const DiscountCalculator = ({ productName, price }) => {
  const calculateDiscount = () => {
    const discountRate = document.getElementById("discountRate").value;
    const priceWithDiscount =
      Number(price) - (Number(price) * Number(discountRate)) / 100;
    document.getElementById("discountMessage").innerHTML =
      `<b style="color:green">Price including Discount: £${priceWithDiscount}</b>`;
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <h2>{productName}</h2>
      <p>Price: £{price}</p>
      <label>Enter Discount Percentage (%): </label>
      <input type="number" id="discountRate" />
      <br />
      <br />
      <button onClick={calculateDiscount}>Calculate Discount</button>
      <p id="discountMessage"></p>
    </div>
  );
};
export default DiscountCalculator;
