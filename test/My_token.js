const Mytoken =artifacts.require("Mytoken");

contract("Mytoken",function(){
    const _name="My Token";
    const _symbol="MTN";
    const _decimal=18;

    it("should assert True",async function(){
        await Mytoken.deployed();
        return assert.isTrue(true);
    });
    it("deicmal should be 18",async function(){
        const instance =await Mytoken.deployed();
        const decimal =await instance.decimals();
        assert.equal(decimal,_decimal);
    });
    it("it has correct symbol", async function(){
        const instance =await Mytoken.deployed();
        const symbol =await instance.symbol();
        assert.equal(symbol,_symbol);
    });
    it("it has correct name", async function(){
        const instance =await Mytoken.deployed();
        const name =await instance.name();
        assert.equal(_name,name);
    });
    it("balance of", async function(){
        const instance =await Mytoken.balanceOf();
        const name =await instance.name();
        assert.equal(_name,name);
    });
});