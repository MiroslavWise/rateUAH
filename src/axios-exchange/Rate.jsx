import {useState, useEffect} from 'react';
import axios from 'axios';
import '../components/styleNav.css'
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


//

export default function Rate(){
   //Состояние изменения курса 

    const [value, setValue] = React.useState([]);
    const [euro, setEuro] = React.useState([]);
    const [dollar, setDollar] = React.useState([]);

// Получение данных из банка в реальном времени

    const[rate, setRate] = useState([]);
  

    useEffect(() => {
            const apiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
            axios.get(apiUrl).then((resp) => {
            setRate(resp.data);
        })
     
    }, [])

//Активный курс Доллара и Евро

    let dolRate = rate.filter((item)=>{
        if(item.r030 === 840){
        return item.rate 
        }})[0]?.rate

    let euroRate = rate.filter((item)=>{
        if(item.r030 === 978){
        return item.rate
        }})[0]?.rate

// Взаимодействие с вводимыми данными

    const handleChange = (event) => {
        setValue(event.target.value);
        setDollar(event.target.value/dolRate);
        setEuro(event.target.value/euroRate);
};
    const handleChangeDollar = (event) => {
        setDollar(event.target.value);
        setValue(event.target.value * dolRate);
        setEuro(event.target.value * dolRate / euroRate);
};
    const handleChangeEuro = (event) => {
        setEuro(event.target.value);
        setValue(event.target.value * euroRate);
        setDollar(event.target.value * euroRate / dolRate);
};

// Таблица

            return (
                <>
                <Box
            className='nav'
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <div>
                <TextField
                id="outlined-multiline-flexible"
                label="Гривня"
                multiline
                type='number' 
                color='primary'
                maxRows={1}
                value={value}
                onChange={handleChange}
                />
            </div>
            <div>
                <TextField
                id="filled-multiline-flexible"
                label="Dollar"
                multiline
                maxRows={1}
                value={dollar}
                onChange={handleChangeDollar}
                variant="standard"
                type='number'
                />
            </div>
            <div>
                <TextField
                id="standard-multiline-flexible"
                label="Euro"
                multiline
                type="number"
                maxRows={1}
                value={euro}
                onChange={handleChangeEuro}
                variant="standard"
                />
            </div>
            </Box>
                <br/>
                <table style={{marginTop: '0px'}} >
                <thead >
                            <tr key={1}>
                                <th>Name Rate</th>
                                <th>Rate in UAH</th>
                                <th>Label</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                <tbody>
                            {
                                rate.map((item) =>{
                                if (item.r030 === 840){
                                    return <tr key={item.r030}>
                                        <td>{item.txt}</td>
                                        <td>
                                            {(value/item.rate).toFixed(3)}
                                        </td>
                                        <td>{item.cc}</td>
                                        <td>{item.exchangedate}</td>
                                    </tr>
                                } else if(item.r030 === 978){
                                    return <tr key={item.r030}>
                                        <td>{item.txt}</td>
                                        <td>
                                                {(value/item.rate).toFixed(3)}
                                        </td>
                                        <td>{item.cc}</td>
                                        <td>{item.exchangedate}</td>
                                    </tr>
                                }else {
                                return <tr key={item.r030}>
                                        <td>{item.txt}</td>
                                        <td>
                                                {(value/item.rate).toFixed(3)}
                                        </td>
                                        <td>{item.cc}</td>
                                        <td>{item.exchangedate}</td>
                                    </tr>}
                                }
                                )
                            }
                </tbody>
                </table>
                </>
            )

}
