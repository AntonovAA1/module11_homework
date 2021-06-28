const countDown = require('./index.js');

describe('count',()=>{
    it('count down numbers', ()=> {
        let result = countDown(3)
        expect(result).toBe(3,2,1)
    });
    it('count down numbers', () => {
        let result = countDown(5)
        expect(result).toBe(5,4,3,2,1)
    });
    it('count down numbers', () => {
        let result = countDown(7)
        expect(result).toBe(6,5,4,3) //неверное выполнение функции
    });
    it('count down numbers', () => {
        let result = countDown(2)
        expect(result).toBe(1,2) //неверное выполнение функции
    })
})