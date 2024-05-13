import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import './Task.css';

const list = [
    {
        id: 1,
        mall: 'V R mall',
        address: 'Surat',
        rating: 'A'

    },

    {
        id: 2,
        mall: 'Rahul Raj Mall',
        address: 'dallas',
        rating: 'B'
    },
    {
        id: 3,
        mall: 'Raj Imperial',
        address: 'San Francisco',
        category: "one",
        rating: 'B'
    },
    {

        id: 4,
        mall: 'Jane',
        address: 'danver',
        category: "two",
        rating: 'C'
    }
]


function Task2() {
    const [data, setdata] = useState([]);
    const [searchData, setsearchData] = useState('');

    const searchhandler = (e) => {

        if (e.target.value === '') {
            setsearchData(searchData)
        } else {
            const filterResult = list.filter(item => item.address.toLowerCase().includes(e.target.value.toLowerCase()))
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
            const filterResult = data.filter(item => item.address === 'dallas')
            setdata(filterResult)
        }
        else {
            setdata(list)
        }
    }

    function checkboxDANVER(e) {
        if (e.target.checked === true) {
            const filterResult = data.filter(item => item.address === 'danver')
            setdata(filterResult)
        }
        else {
            setdata(list)
        }
    }
    function checkboxSURAT(e) {
        if (e.target.checked === true) {
            const filterResult = data.filter(item => item.address === 'Surat')
            setdata(filterResult)
        }
        else {
            setdata(list)
        }
    }

    function checkboxSAN(e) {
        if (e.target.checked === true) {
            const filterResult = data.filter(item => item.address === 'San Francisco')
            setdata(filterResult)
        }
        else {
            setdata(list)
        }
    }

    function typeshandlerA(e) {
        if (e.target.checked === true) {
            const filterResult = data.filter(item => item.rating === 'A')
            setdata(filterResult)
        } else {
            setdata(list)
        }
    }

    function typeshandlerB(e) {
        if (e.target.checked === true) {
            const filterResult = data.filter(item => item.rating === 'B')
            setdata(filterResult)
        } else {
            setdata(list)
        }
    }

    function typeshandlerC(e) {
        if (e.target.checked === true) {
            const filterResult = data.filter(item => item.rating === 'C')
            setdata(filterResult)
        } else {
            setdata(list)
        }
    }



    return (
        <>
            <div className="switch_container" >
                <Form>
                    <h4>Adderss :</h4>
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
                            label="Surat"
                            onChange={checkboxSURAT}
                        />

                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="San Francisco"
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
                    <h4>Rating:</h4>
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



                <input
                    placeholder="search by address"
                    type="text"
                    style={{ color: "black" }}
                    className="searchname"
                    value={searchData}
                    onChange={searchhandler} />


                <div className="data" >
                    <table style={{ border: "1px solid white" }}>
                        <tr style={{ border: "1px solid white" }}>
                            <th style={{ border: "1px solid white" }}>ID</th>
                            <th style={{ border: "1px solid white" }}>MAll</th>
                            <th style={{ border: "1px solid white" }}>address</th>
                            <th style={{ border: "1px solid white" }}>category</th>
                            <th style={{ border: "1px solid white" }}>Rating</th>

                        </tr>
                        {
                            data.map((item, i) => {

                                return <tr style={{ border: "1px solid white" }}>

                                    <td style={{ border: "1px solid white" }} key={i}>{i + 1}</td>
                                    <td style={{ border: "1px solid white" }}>{item.mall}</td>
                                    <td style={{ border: "1px solid white" }}>{item.address}</td>
                                    <td style={{ border: "1px solid white" }}>{item.category}</td>
                                    <td style={{ border: "1px solid white" }}>{item.rating}</td>

                                </tr>

                            })
                        }

                    </table>
                </div>
            </div>
        </>

    );
}

export default Task2;