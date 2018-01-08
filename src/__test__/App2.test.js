import _ from 'underscore'


it('test under score', () => {
   console.log("123")
    
    console.log(_);
   
   _.each([1,2,3],function (item) {
       console.log(item)
   })

    var sels = _.select([1,2,3,4],function (item) {
        return item % 2 == 0
    })
    console.log(sels)


    var amp = _.map([1,2],function (i) {
        return i * 2;
    })
    console.log(amp)


    
});