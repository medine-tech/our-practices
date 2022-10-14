describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
    expect(false).to.equal(false);
    cy.visit("https://master.pensanomica.com/clientes/flexio/login");
    cy.request('POST', 'https://master.pensanomica.com/clientes/flexio/API_Flexio/login_master', { username: 'aaa' }).then(
      (response) => {
        // response.body is automatically serialized into JSON
        console.log(response.body)
        expect(response.body).to.have.property('success') // true
      }
    )
  });
});
