import { React, useState} from 'react';
import Timer from './Timer';
import Break from './Break'

function Home() {
    const [isStudy, setisStudy] = useState(true);
    const handleClick = () => {
        setisStudy(true);

    }
    const handleClickF = () => {
        setisStudy(false);

    }


    return (
        <>
            <div class="content">
                    <div class="btn-group" role="group" aria-label="Basic example">
                    <button onClick={handleClick} type="button" class="btn btn-outline-success" data-toggle="button" aria-pressed="true">Study</button>
                    <button onClick={handleClickF} type="button" class="btn btn-outline-success" data-toggle="button">Break</button>
                    </div>
                    {isStudy ? <Timer/> : <Break/>}
            </div>
        </>
    )
}

export default Home;