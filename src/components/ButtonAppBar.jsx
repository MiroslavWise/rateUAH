
// import './styleNav.css'
// import React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
 


// export default function ButtonAppBar() {
//   const [value, setValue] = React.useState(1);
//   const [dollar, setDollar] = React.useState(1/27);
//   const [euro, setEuro] = React.useState(1/31);
 
//   const handleChange = (event) => {
//     setValue(event.target.value);
//     setDollar(event.target.value/27);
//     setEuro(event.target.value/31);
//   };
//   const handleChangeDollar = (event) => {
//     setDollar(event.target.value);
//     setValue(event.target.value * 27);
//     setEuro(event.target.value * 27 / 31);
//   };
//   const handleChangeEuro = (event) => {
//     setEuro(event.target.value);
//     setValue(event.target.value * 31);
//     setDollar(event.target.value * 31 / 27);
//   };
 
//   return (
//     <Box
//     className='nav'
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           id="outlined-multiline-flexible"
//           label="Гривня"
//           multiline
//           type='number' 
//           color='primary'
//           maxRows={1}
//           value={value}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <TextField
//           id="filled-multiline-flexible"
//           label="Dollar"
//           multiline
//           maxRows={1}
//           value={dollar}
//           onChange={handleChangeDollar}
//           variant="standard"
//           type='number'
//         />
//       </div>
//       <div>
//         <TextField
//           id="standard-multiline-flexible"
//           label="Euro"
//           multiline
//           type="number"
//           maxRows={1}
//           value={euro}
//           onChange={handleChangeEuro}
//           variant="standard"
//         />
//       </div>
//     </Box>
//   );
// }