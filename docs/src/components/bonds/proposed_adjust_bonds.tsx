
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import axios from 'axios';

export default function BasicTable() {
  
  const [rows, setRows] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/proposed_adjust_bonds');
      const res = response.data.data
      setRows(res);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">转债名称</TableCell>
            <TableCell align="center">代码</TableCell>
            <TableCell align="center">价格</TableCell>
            <TableCell align="center">溢价率</TableCell>
            <TableCell align="center">股东大会日期</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.bond_nm}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.bond_nm}
              </TableCell>
              <TableCell align="center">{row.bond_id}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.premium_rt}</TableCell>
              <TableCell align="center">{row.adjust_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
