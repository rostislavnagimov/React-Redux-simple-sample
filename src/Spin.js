import Loader from "react-loader-spinner";
import { useSelector } from 'react-redux';

const Spin = (props) => {
    const spinner = useSelector(state => state.appReducer.loading);
    console.log('spinner >>', spinner)
    return(
        <div className='loader-styles'>
            <Loader 
            type="TailSpin"
            color="#00BFFF"
            heigth={100}
            width={100}
            visible={spinner}
            
            
            />



        </div>
    )
}

export default Spin;