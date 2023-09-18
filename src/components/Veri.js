import React from 'react'
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';


export const Veri = ({ veriler, setVeriler, kisiler, onVeriSil }) => {
  // const [veriler, setVeriler] = useState([]);
  //  console.log(kisiler);


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'İsim',
      width: 150,
      editable: true,
    },
    {
      field: 'surname',
      headerName: 'Soyisim',
      width: 150,
      editable: true,
    },
    {
      field: 'gender',
      headerName: 'Cinsiyet',

      width: 110,
      editable: true,
    },
    {
      field: 'mail',
      headerName: 'Mail',
      type: 'string',
      width: 200,
      editable: true,
    },
    {
      field: 'date',
      headerName: 'Tarih',
      type: 'string',
      width: 200,
      editable: true,
    },


    {
      field: 'actions',
      headerName: 'Silme',
      width: 120,
      renderCell: (params) => (
        <div>
          <DeleteIcon
            onClick={() => handleDelete(params.row.id)}

          />
        </div>
      ),
    }

  ];

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:44387/api/Kayıt/Kayıt/${id}`);

      onVeriSil(id)
      //  await axios.delete("https://localhost:44387/api/Kayıt/Kayıt"+id);
      console.log("silme başarılı")
    } catch (error) {
      console.error("Hata:", error);

    }
    // const güncelVeriler = veriler.filter((veri) => veri.id !== id);
    // setVeriler(güncelVeriler);
  };




  return (
    <Container >
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={veriler}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}

          pageSizeOptions={[5]}
          // checkboxSelection
          disableRowSelectionOnClick
        />

      </Box>

    </Container>


  );
}


