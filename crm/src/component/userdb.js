// customerService.js
const CUSTOMERS_KEY = 'customers';

export const getCustomers = () => {
  try {
    const storedCustomers = JSON.parse(localStorage.getItem(CUSTOMERS_KEY) || '[]');
    return storedCustomers;
  } catch (error) {
    console.error('Error while retrieving customers from local storage:', error);
    return [];
  }
};

export const addCustomer = (customerData) => {
  try {
    const customers = getCustomers();
    const updatedCustomers = [...customers, customerData];
    localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(updatedCustomers));
    return updatedCustomers;
  } catch (error) {
    console.error('Error while adding customer to local storage:', error);
    return getCustomers();
  }
};

export const deleteCustomer = (index) => {
  try {
    const customers = getCustomers();
    customers.splice(index, 1);
    localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(customers));
    return customers;
  } catch (error) {
    console.error('Error while deleting customer from local storage:', error);
    return getCustomers();
  }
};