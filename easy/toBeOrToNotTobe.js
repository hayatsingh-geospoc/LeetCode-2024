var expect = function(val) {
    const obj = {
        toBe: (data)=> {
          try{  
            if(data === val) {
                return true     
            }
            else {
                    throw new Error('Not Equal');
                }
            }
           catch(error) {
              return error.message
           }
        },

        notToBe: (data)=> {
        try { 
            if(data !== val) {
                return true      
            }
            else {
                throw new Error('Equl')
             }
            }
            catch(error) {
                return error.message;
            }
          },   
        }
        return obj;
    };


    console.log(expect(5).toBe(6))