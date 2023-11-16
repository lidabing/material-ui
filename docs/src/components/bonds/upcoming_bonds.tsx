
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

export default function UpcomingBonds() {
  
  const [rows, setRows] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/upcoming_bonds');
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
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">待发转债</TableCell>
            <TableCell align="center">代码</TableCell>
            <TableCell align="center">正股</TableCell>
            <TableCell align="center">正股代码</TableCell>
            <TableCell align="center">申购日期</TableCell>
            <TableCell align="center">股权登记日</TableCell>
            <TableCell align="center">百元股含权</TableCell>
            <TableCell align="center">配10张/股数</TableCell>
            <TableCell align="center">发行规模</TableCell>
            <TableCell align="center">百元股含权</TableCell>
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
              <TableCell align="center">{row.stock_nm}</TableCell>
              <TableCell align="center">{row.stock_id}</TableCell>
              <TableCell align="center">{row.apply_date}</TableCell>
              <TableCell align="center">{row.record_dt}</TableCell>
              <TableCell align="center">{row.cb_amount}</TableCell>
              <TableCell align="center">{row.apply10}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
