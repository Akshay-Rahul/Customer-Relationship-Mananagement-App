import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './component/Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <div>
      <Title>Recent Orders</Title>
      <Table size="small" >
        <TableHead>
          <TableRow >
            <TableCell style={{fontSize: '20px',padding:'20px'}}>Date</TableCell>
            <TableCell style={{fontSize: '20px',padding:'20px'}}>Name</TableCell>
            <TableCell style={{fontSize: '20px',padding:'20px'}}>Ship To</TableCell>
            <TableCell style={{fontSize: '20px',padding:'20px'}}>Payment Method</TableCell>
            <TableCell style={{fontSize: '20px',padding:'20px'}} align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell style={{fontSize: '16px',padding:'18px'}}>{row.date}</TableCell>
              <TableCell style={{fontSize: '16px',padding:'18px'}}>{row.name}</TableCell>
              <TableCell style={{fontSize: '16px',padding:'18px'}}>{row.shipTo}</TableCell>
              <TableCell style={{fontSize: '16px',padding:'18px'}}>{row.paymentMethod}</TableCell>
              <TableCell style={{fontSize: '16px',padding:'18px'}} align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </div>
  );
}