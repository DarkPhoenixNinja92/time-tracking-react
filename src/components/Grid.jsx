import GridItm from "./GridItm"
import data from '../../data.json';

const Grid = () => {
    return (
        <div className="grid">
            {data.map((data) => {
                return (
                    <div className='col' key={data.id}>
                        <GridItm data={data}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Grid;