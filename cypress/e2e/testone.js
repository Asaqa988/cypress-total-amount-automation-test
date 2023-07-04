///<reference types= "cypress" />

describe("test the total amount", () => {
  it("mens-tops-hodies and Sweatshirts", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html"
    );

    cy.get(":nth-child(5) > .field > .control > #limiter").select("24");

    cy.get(".price-box .price-final_price").as("priceoftheHodies");

    cy.get("@priceoftheHodies").find(".price").invoke("text").as("itemPrice");

    cy.get("@itemPrice").then((pricetext) => {
      let myPriceList = pricetext.split("$");

      let total = 0;
      for (let i = 0; i < myPriceList.length; i++) {
        total += Number(myPriceList[i]);
      }

      cy.log(total);
    });
  });
});
