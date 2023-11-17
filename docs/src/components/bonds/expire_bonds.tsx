
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

export default function ExpireBonds() {
  
  const [rows1, setRows1] = useState([]);
  const [rows2, setRows2] = useState([]);
  const [rows3, setRows3] = useState([]);
  const [rows4, setRows4] = useState([]);

  const fetchData = async (url, setRows) => {
    try {
      const response = await axios.get(url);
      const res = response.data.data
      setRows(res);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData('http://127.0.0.1:8000/api/upcoming_mandatory_redeem_bonds', setRows1);
    fetchData('http://127.0.0.1:8000/api/mandatory_redeem_condition_bonds', setRows2);
    fetchData('http://127.0.0.1:8000/api/redeem_announced_bonds', setRows3);
    fetchData('http://127.0.0.1:8000/api/upcoming_natural_expire_bonds', setRows4);
  }, []);

  return (
    <Container>
    {/* 表格1 */}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">名称</TableCell>
            <TableCell align="center">代码</TableCell>
            <TableCell align="center">价格</TableCell>
            <TableCell align="center">溢价率</TableCell>
            <TableCell align="center">剩余规模</TableCell>
            <TableCell align="center">达标天数</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows1.map((row) => (
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
              <TableCell align="center">{row.curr_iss_amt}</TableCell>
              <TableCell align="center">{row.redeem_status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* 表格2 */}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">名称</TableCell>
            <TableCell align="center">代码</TableCell>
            <TableCell align="center">价格</TableCell>
            <TableCell align="center">溢价率</TableCell>
            <TableCell align="center">剩余规模</TableCell>
            <TableCell align="center">达标天数</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows2.map((row) => (
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
              <TableCell align="center">{row.curr_iss_amt}</TableCell>
              <TableCell align="center">{row.redeem_status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* 表格3 */}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">名称</TableCell>
            <TableCell align="center">代码</TableCell>
            <TableCell align="center">价格</TableCell>
            <TableCell align="center">溢价率</TableCell>
            <TableCell align="center">最后交易日</TableCell>
            <TableCell align="center">最后转股日</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows3.map((row) => (
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
              <TableCell align="center">{row.delist_dt}</TableCell>
              <TableCell align="center">{row.last_convert_dt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

     {/* 表格4 */}
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">名称</TableCell>
            <TableCell align="center">代码</TableCell>
            <TableCell align="center">价格</TableCell>
            <TableCell align="center">溢价率</TableCell>
            <TableCell align="center">最后交易日</TableCell>
            <TableCell align="center">最后转股日</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows4.map((row) => (
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
              <TableCell align="center">{row.delist_dt}</TableCell>
              <TableCell align="center">{row.last_convert_dt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Container>
  );
}
