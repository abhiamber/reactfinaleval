// action creators related to cart state;

export function handleAddtoCart(data){
    // console.log(data    )

return { type:"addtocart", payload:data}

}

export function removeData(data){

    return {payload:data}
    
    }

    export function checkout(data){

        return {payload:data}
        
        }