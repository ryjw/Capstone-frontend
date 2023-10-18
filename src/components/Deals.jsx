import "../assets/deals.css";

export default function Deals() {
  return (
    <div class="exclusive-deals-container">
      <h2 id="exclusive-deals-title">Exclusive Deals</h2>
      {/* <p>
        Indulge in the culinary creations of the Krusty Krab. Our exclusive
        deals offer a tantalizing taste of Bikini Bottom.
      </p> */}
      <div class="exclusive-deal-content-container">
        <h3 class="deal-title">
          <span className="deal-titles">Krabby Patty Royale - </span>
          <span className="deal-price">$12.99</span>
        </h3>
        <p class="deal-description">
          Experience the ultimate Krabby Patty, fit for royalty. Made with the
          finest ingredients from the deep sea. Our chefs expertly grill the
          patty, layer it with secret sauce, and sandwich it between toasted
          seaweed buns for a taste that's fit for a king.
        </p>
        <p class="deal-origin">
          Ingredients sourced from: Coral Farms, Jellyfish Fields
        </p>
      </div>
      <div class="exclusive-deal-content-container">
        <h3 class="deal-title">
          <span className="deal-titles">Seaside Sensation Platter - </span>
          <span className="deal-price">$19.99</span>
        </h3>
        <p class="deal-description">
          Savor the flavors of the sea with our Seaside Sensation Platter. A
          bounty of seafood delights. Our culinary experts prepare a medley of
          shrimp, clams, and fish, served with a side of tangy seaweed salad and
          homemade tartar sauce.
        </p>
        <p class="deal-origin">
          Ingredients sourced from: Goo Lagoon, Rock Bottom
        </p>
      </div>
      <div class="exclusive-deal-content-container">
        <h3 class="deal-title">
          <span className="deal-titles">Barnacle Bash Combo - </span>
          <span className="deal-price">$15.99</span>
        </h3>
        <p class="deal-description">
          Join the Barnacle Bash with our combo. A taste explosion of barnacles
          and spicy Krabby Patties. Our chefs take freshly harvested barnacles,
          toss them in a zesty marinade, and pair them with a fiery Krabby Patty
          that's sure to delight your taste buds.
        </p>
        <p class="deal-origin">
          Ingredients sourced from: Barg'N-Mart, Goo Lagoon
        </p>
      </div>
    </div>
  );
}
