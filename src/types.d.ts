interface CustomerRequest {
  assignee: string;
  assignedDate: Date;
  complete: boolean;
  customerRequestDescription: string;
}

type ToggleCustomerRequest = (selectedRequest: CustomerRequest) => void;
type AddCustomerRequest = (text: string) => void;
