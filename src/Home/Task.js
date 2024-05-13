import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import './Task.css';

const list = [
    {
        id: 1,
        name: 'foo',
        city: 'dallas',
        category: 'one',
        type: 'A',
        active: 'False'
    },

    {
        id: 2,
        name: 'bar',
        city: 'dallas',
        category: 'one',
        type: 'B',
        active: 'False'
    },
    {
        id: 3,
        name: 'jim',
        city: 'san francisco',
        category: 'one',
        type: 'B',
        active: 'True'
    },
    {
        id: 4,
        name: 'jane',
        city: 'danver ',
        category: 'two',
        type: 'C',
        active: 'False'
    }, {
        id: 5,
        name: 'loes',
        city: 'danver ',
        category: 'two',
        type: 'C',
        active: 'False'
    }
]


function Task() {
    const [data, setdata] = useState([]);
    const [searchData, setsearchData] = useState('');

    const searchhandler = (e) => {

        if (e.target.value === '') {
            setsearchData(searchData)
        } else {
            const filterResult = list.filter(item => item.city.toLowerCase().includes(e.target.value.toLowerCase()))
            setdata(filterResult)
        }
        setsearchData(e.target.value)

    }

    useEffect(() => {
        setdata([...list])
    }, [])

    function checkboxONE(e) {
        if (e.target.checked === true) {
            setdata(list.filter(item => item.category === 'one'))

        }

        else {
            setdata(list)
        }
    }

    function checkboxTWO(e) {
        if (e.target.checked === true) {
            const filterResult = data.filter(item => item.category === 'two')
            setdata(filterResult)
        }
        else {
            setdata(list)
        }
    }

    function checkboxDALLAS(e) {
        if (e.target.checked === true) {
            const filterResult = data.filter(item => item.city === 'dallas')
            setdata(filterResult)
        }
        else {
            setdata(list)
        }
    }

    function checkboxDANVER(e) {
        if (e.target.checked === true) {
            const filterResult = data.filter(item => item.city === 'danver')
            setdata(filterResult)
        }
        else {
            setdata(list)
        }
    }

    function checkboxSAN(e) {
        if (e.target.checked === true) {
            const filterResult = data.filter(item => item.city === 'san francisco')
            setdata(filterResult)
        }
        else {
            setdata(list)
        }
    }

    function typeshandlerA(e) {
        if (e.target.checked === true) {
            const filterResult = data.filter(item => item.type === 'A')
            setdata(filterResult)
        } else {
            setdata(list)
        }
    }

    function typeshandlerB(e) {
        if (e.target.checked === true) {
            const filterResult = data.filter(item => item.type === 'B')
            setdata(filterResult)
        } else {
            setdata(list)
        }
    }

    function typeshandlerC(e) {
        if (e.target.checked === true) {
            const filterResult = data.filter(item => item.type === 'C')
            setdata(filterResult)
        } else {
            setdata(list)
        }
    }

    function ActivesTRUE(e) {
        if (e.target.checked === true) {
            const filterResult = data.filter(item => item.active === 'True')
            setdata(filterResult)
        } else {
            setdata(list)
        }
    }

    function ActivesFALSE(e) {
        if (e.target.checked === true) {
            const filterResult = data.filter(item => item.active === 'False')
            setdata(filterResult)
        } else {
            setdata(list)
        }
    }

    return (
        <>
            <div className="switch_container" >
                <Form>
                    <h4>City :</h4>
                    <div className="switches">
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="dallas"
                            onChange={checkboxDALLAS}
                        />

                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="danver"
                            onChange={checkboxDANVER}
                        />

                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="San francisco"
                            onChange={checkboxSAN}
                        />

                    </div>

                </Form>

                <Form>
                    <h4>Category:</h4>
                    <div className="switches">
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="One"
                            onChange={checkboxONE}
                        />

                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Two"
                            onChange={checkboxTWO}
                        />



                    </div>

                </Form>



                <Form>
                    <h4>Type:</h4>
                    <div className="switches">
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="A"
                            onChange={typeshandlerA}
                        />

                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="B"
                            onChange={typeshandlerB}
                        />

                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="C"
                            onChange={typeshandlerC}
                        />

                    </div>

                </Form>

                <Form>
                    <h4>Active :</h4>
                    <div className="switches">
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="TRUE"
                            onChange={ActivesTRUE}
                        />

                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="FALSE"
                            onChange={ActivesFALSE}
                        />



                    </div>

                </Form>

                <input
                    type="text"
                    style={{ color: "black" }}
                    className="searchname"
                    value={searchData}
                    onChange={searchhandler} />


                <div className="data" >
                    <table style={{ border: "1px solid white" }}>
                        <tr style={{ border: "1px solid white" }}>
                            <th style={{ border: "1px solid white" }}>ID</th>
                            <th style={{ border: "1px solid white" }}>NAME</th>
                            <th style={{ border: "1px solid white" }}>City</th>
                            <th style={{ border: "1px solid white" }}>category</th>
                            <th style={{ border: "1px solid white" }}>Type</th>
                            <th style={{ border: "1px solid white" }}>Active</th>
                        </tr>
                        {
                            data.map((item, i) => {

                                return <tr style={{ border: "1px solid white" }}>

                                    <td style={{ border: "1px solid white" }} key={i}>{i + 1}</td>
                                    <td style={{ border: "1px solid white" }}>{item.name}</td>
                                    <td style={{ border: "1px solid white" }}>{item.city}</td>
                                    <td style={{ border: "1px solid white" }}>{item.category}</td>
                                    <td style={{ border: "1px solid white" }}>{item.type}</td>
                                    <td style={{ border: "1px solid white" }}>{item.active}</td>
                                </tr>

                            })
                        }

                    </table>
                </div>
            </div>
        </>

    );
}

export default Task;