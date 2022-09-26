

// reducer related to cart state;


function Cartreducer(state,action){
// console.log(action.payload)

switch (action.type){
    case "addtocart":
        return state;

        case "removtocart":
            return state.data.filter(item=> item.id!==action.payload.id)

            case "checkout":
                return []

        default: return state;
}


}
export default Cartreducer
