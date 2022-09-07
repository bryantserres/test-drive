import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input } from '@mui/material';

interface Props {
  addCustomerRequest: AddCustomerRequest;
}

const AddCustomerRequestForm: React.FC<Props> = ({ addCustomerRequest }) => {
  const [requestDescription, setRequestDescription] = useState('');

  return (
    <FormControl>
      <FormLabel>New Customer Request</FormLabel>
      <Input type="text" value={requestDescription} onChange={(e) => setRequestDescription(e.target.value)} />
      <Button color="primary" onClick={(e) => { e.preventDefault(); addCustomerRequest(requestDescription); setRequestDescription('') }}>Add Request</Button>
    </FormControl>
  );
};

export default AddCustomerRequestForm;
