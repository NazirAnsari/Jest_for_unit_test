const {promisesTest} = require('../promises')

test('test promises',async()=>{
    try{
        const data = await promisesTest(2,1);
        expect(data).toBe('+ve')
    }
    catch(error){
        expect(error).toBe('-ve')
    }
})

test('using promises then catch',()=>{
    promisesTest(2,2).then((data)=>{
        expect(data).toBe('+ve')
    }).catch(e=>{
        expect(e).toBe('-ve')
    })
})