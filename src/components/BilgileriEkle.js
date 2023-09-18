import React, { useState, useEffect } from 'react';
import { Grid, Box, TextField, MenuItem, Button, ButtonGroup, Container, FormControlLabel, Radio, RadioGroup, FormLabel } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import axios, { Axios } from 'axios';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const BilgileriEkle = ({ onVeriEkle, veriler }) => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState('');
  const [mail, setMail] = useState('');
  const [date, setDate] = useState('');
  



  const handleOnSaveClick = () => {
    if (name === "" || surname === "" || gender === "" || mail === "" || date === "") {
      alert("Lütfen istenilen bütün bilgileri giriniz.");
    } else {
      const yeniVeri = { id: veriler.length + 1, name, surname, gender, mail, date };
      // onVeriEkle(yeniVeri);
      setName('');
      setSurname('');
      setGender('');
      setMail('');
      setDate('');
      onSubmit(yeniVeri);
    }
  };

  const onSubmit = async (yeniVeri) => {
    try {
      await axios.post("https://localhost:44387/api/Kayıt/Kayıt", yeniVeri);
      //  await axios.get("https://localhost:44387/api/Kayıt/Kayıt");
      onVeriEkle(yeniVeri);
    } catch (error) {
      console.error("Hata:", error);

    }
  };













    return (
      <Container >
        <Box sx={{ width: '100%' }} >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={6} marginTop={10}>
              <TextField

                label="İsim "
                id="standard-basic" variant="standard" fullWidth
                type='text'
                onChange={e => setName(e.target.value)}
                InputProps={{

                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountCircleIcon />
                    </InputAdornment>
                  )
                }}
                value={name}
              />
            </Grid>
            <Grid item xs={6} marginTop={10}>
              <TextField
                label="Soyisim"
                id="standard-basic" variant="standard" fullWidth

                onChange={e => setSurname(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountCircleIcon />
                    </InputAdornment>
                  )
                }}
                value={surname}
              />
            </Grid>
            <Grid item xs={6} marginTop={10}>

              <FormLabel id="demo-row-radio-buttons-group-label">Cinsiyet</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={e => setGender(e.target.value)}
              >
                <FormControlLabel value="kadın" control={<Radio />} label="Kadın" />
                <FormControlLabel value="erkek" control={<Radio />} label="Erkek" />


              </RadioGroup>


              {/* <TextField label="Cinsiyet " select 
              value={gender}
              id="standard-basic" variant="standard" fullWidth
              onChange={e => setGender(e.target.value)}
            >
              <MenuItem value='secim'>Seçiniz</MenuItem>
              <MenuItem value='kadın'>Kadın</MenuItem>
              <MenuItem value='erkek'>Erkek</MenuItem>

            </TextField>

            <FormHelperText>Cinsiyet Seçiniz</FormHelperText> */}
            </Grid>
            <Grid item xs={6} marginTop={10}>
              <TextField
                label="mail "
                id="standard-basic" variant="standard"
                fullWidth
                type='email'
                value={mail}
                placeholder="aaaa@gmail.com"
                onChange={(e) => setMail(e.target.value)}

                helperText={mail ? '' : 'Belirtilen şekilde mail adresini girmeniz gereklidir.'}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AlternateEmailIcon />
                    </InputAdornment>
                  )
                }}
              />

            </Grid>
            <Grid item xs={6} marginTop={10}>

              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker
                  label="Date"
                  value={date}
                  onChange={(newDate) => {
                    console.log(newDate)
                    setDate(newDate);
                  }}
                  renderInput={(params) => <TextField{...params} />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={6} marginTop={10}>
              <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
                fullWidth size='large'>
                <Button onClick={handleOnSaveClick}>Ekle</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Box>
      </Container>
    )
  }

export default BilgileriEkle

