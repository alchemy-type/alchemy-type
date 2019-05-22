const test = QUnit.test;

QUnit.module('html equal');

test('normalizes whitespace', assert => {
    //Arrange
    const html = /*html*/`
          <div>Hello</div>
      `;

    const expected = /*html*/`
    <div>Hello</div>
  `;
    //Act 
    // const normalizedHTML = normalize(html);
    // const normalizedExpected = normalize(expected);
    //Assert
    assert.htmlEqual(html, expected);
}); 