import React from 'react';
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  styled,
  LinearProgress,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableContainer = styled(TableContainer)`
  margin-top: 20px;
`;

const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: #f5f5f5;
  }
`;

const StyledTableCell = styled(TableCell)`
  padding: 8px; /* Optional: Add padding for better appearance */
`;

const StyledStatusCell = styled(StyledTableCell)`
  font-weight: bold;
  color: ${(props) => props.color || 'inherit'};
`;

const getStatus = (progress) => {
  if (progress < 50) {
    return { text: 'At Risk', color: 'red' };
  } else if (progress >= 50 && progress < 75) {
    return { text: 'On Track', color: 'orange' };
  } else {
    return { text: 'Ahead', color: 'green' };
  }
};

const capitalizeFirstLetter = (str) => {
  if (!str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Custdetail = ({ customers, onDeleteCustomer }) => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Customer List
        </Typography>

        <StyledTableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Phone Number</StyledTableCell>
                <StyledTableCell>Company</StyledTableCell>
                <StyledTableCell>Priority</StyledTableCell>
                <StyledTableCell>Quotation Amount</StyledTableCell>
                <StyledTableCell>Progress</StyledTableCell>
                <StyledStatusCell>Status</StyledStatusCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((customer, index) => (
                <StyledTableRow key={index + 1}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell>{customer.name}</StyledTableCell>
                  <StyledTableCell>{customer.email}</StyledTableCell>
                  <StyledTableCell>{customer.phoneNumber}</StyledTableCell>
                  <StyledTableCell>{customer.companyName}</StyledTableCell>
                  <StyledTableCell>{capitalizeFirstLetter(customer.priority)}</StyledTableCell>
                  <StyledTableCell>{customer.quotationAmount}</StyledTableCell>
                  <StyledTableCell>
                    <Box display="flex" alignItems="center">
                      <LinearProgress
                        variant="determinate"
                        value={customer.progress}
                        sx={{ minWidth: '100px', marginRight: '8px' }}
                      />
                      <Typography variant="body2">{`${customer.progress}%`}</Typography>
                    </Box>
                  </StyledTableCell>
                  <StyledStatusCell color={getStatus(customer.progress).color}>
                    {getStatus(customer.progress).text}
                  </StyledStatusCell>
                  <StyledTableCell>
                    <IconButton color="secondary" onClick={() => onDeleteCustomer(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </Box>
    </Container>
  );
};

export default Custdetail;
