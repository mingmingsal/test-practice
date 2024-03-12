const code = require('./code.js')

it('hcekc', () =>{
    expect(1).toBe(1);
})
it('basic Capitalize', () =>{
    expect(code.capitalize("word")).toBe("Word");
})
it('empty Capitalize', () =>{
    expect(code.capitalize("")).toBe("");
})
it('number Capitalize', () =>{
    expect(code.capitalize("1ord")).toBe("1ord");
})

//Reverse
it('basic Reverse', () =>{
    expect(code.reverseString("word")).toBe("drow");
})

it('number Reverse', () =>{
    expect(code.reverseString("12345")).toBe("54321");
})
//Calc
it('calc  Add', () =>{
    expect(code.calculator("add",54,46)).toBe(100);
})
it('calc  error', () =>{
    expect(code.calculator("sda",54,46)).toBe("invalid operation");
})
it('calc  multiply', () =>{
    expect(code.calculator("multiply",-9,10)).toBe(-90);
})
it('calc  divide', () =>{
    expect(code.calculator("divide",100,-2)).toBe(-50);
})
//Caesar
it ('caesar all lower case', () =>{
    expect(code.caesarCypher("a",0)).toBe("a");
})
it ('caesar with number', () =>{
    expect(code.caesarCypher("ds123asd",3)).toBe("gv123dvg");
})
it ('caesar with punc', () =>{
    expect(code.caesarCypher("asd87%^#DS",3)).toBe("dvg87%^#GV");
})
//array
it ('array', () =>{
    expect(code.analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        length: 6,
        
        min: 1,
        max: 8
      });
})
it ('array prop', () =>{
    expect(code.analyzeArray([1,8,3,4,2,6])).toHaveProperty(
        "average",4
    );
})