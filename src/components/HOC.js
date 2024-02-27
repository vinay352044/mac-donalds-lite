import React from "react";
function UpdatedComponent(OriginalComponent){
    function NewComponent(){
        const [count,setCount] = useState(0)
        const handleInc = () => {
            setCount(count+1)
        };
        return <OriginalComponent/>
    }
    return NewComponent;
    
}
export default UpdatedComponent;