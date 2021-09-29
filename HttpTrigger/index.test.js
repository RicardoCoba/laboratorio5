const httpFuction= require('./index');
const context= require('../testing/Context');

test('Http trigger example' , async()=> {
    const request = {
        query: {name: 'Enrique'}
    };

    await httpFuction(context, request);
    expect(context.res.body).toEqual('Welcome, Enrique');
    expect(context.log.mock.calls.length).toBe(1);
});