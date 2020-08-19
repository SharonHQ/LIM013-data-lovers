//import {  dateAscNum,dateDescNum,dateNamAsc,dateNamDesc  } from './dataTest.js';
import { order1_n, ordern_1, orderA_Z, orderZ_A } from '../src/data.js';
import {input1_n, output1_n, imputN_1, outputNum_1,imputA_Z, ouputA_Z, imputZ_A, outputZ_A } from './dataTest.js';


// describe order ascendente por numero.
describe("orderldajsflk", () => {
  it("is a function", () => {
    expect(typeof order1_n).toBe("function");
  });
  it("show ascending  numerical order'num'", () => {
    expect(order1_n(input1_n)).toEqual(output1_n);
  });


  // describe order descendente por numero.
  it("ordern_1", () => {
    expect(typeof ordern_1).toBe("function");
  });

  it("show descending  numerical order'num'", () => {
    expect(ordern_1(imputN_1)).toEqual(outputNum_1);
  });
});




// order alfabeticamente
describe("order", () => {
  it("is a function", () => {
    expect(typeof orderA_Z).toBe("function");
  });
  it("show ascending  name order 'a-z' ", () => {
    expect(orderA_Z(imputA_Z)).toEqual(ouputA_Z);
  });

  it("is a function order name descendiente", () => {
    expect(typeof orderZ_A).toBe("function");
  });
  it("show ascending  name order 'a-z' ", () => {
    expect(orderZ_A(imputZ_A)).toEqual(outputZ_A);
  });
});








