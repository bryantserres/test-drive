import React, { useState } from 'react';
import AddCustomerRequestForm from './components/AddCustomerRequestForm';
import CustomerRequestList from './components/CustomerRequestList';
import { assignTeamMember } from './services/utils';

const initialCustomerRequests: CustomerRequest[] = [
  {
    assignee: assignTeamMember(),
    assignedDate: new Date(),
    complete: true,
    customerRequestDescription: 'Increase Bobs\'s Trucking Credit Limit to $50,000',
  },
  {
    assignee: assignTeamMember(),
    assignedDate: new Date(),
    complete: false,
    customerRequestDescription: 'Change email address for primary contact on Gina\'s Carrier Service',
  },
];

const App: React.FC = () => {
  const [customerRequests, setCustomerRequests] = useState(initialCustomerRequests);

  const toggleCustomerRequest = (selectedCustomerRequest: CustomerRequest) => {
    const newCustomerRequests = customerRequests.map((customerRequest) => {
      if (customerRequest === selectedCustomerRequest) {
        return {
          ...customerRequest,
          complete: !customerRequest.complete
        };
      }
      return customerRequest;
    });
    setCustomerRequests(newCustomerRequests);
  };

  const addCustomerRequest: AddCustomerRequest = (customerRequestDescription: string) => {
    const newCustomerRequest = { customerRequestDescription, complete: false, assignee: assignTeamMember(), assignedDate: new Date() };
    setCustomerRequests([...customerRequests, newCustomerRequest]);
  };

  return (
    <>
      <CustomerRequestList customerRequests={customerRequests} toggleCustomerRequest={toggleCustomerRequest} />
      <AddCustomerRequestForm addCustomerRequest={addCustomerRequest} />
    </>
  );
};

export default App;
