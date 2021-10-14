const httpFuction= require('./index');
const context= require('../testing/Context');

test('Http trigger example' , async()=> {
    const request = {
        query: {name: 'Enrique'}
    };
 var interations = 1000000;
 console.time('FUNCTION #1');
 for(var i = 0; i<interations; i++){

    httpFuction(context, request);
 }
    console.timeEnd('FUNCTION #1')
    expect(context.res.body).toEqual('Welcome, Enrique');
    expect(context.log.mock.calls.length).toBe(1000000);
});