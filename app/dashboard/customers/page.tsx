import { Metadata } from "next"
import CustomersTable from  "@/app/ui/customers/table";
import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data";

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function page(){
  return <p>customers</p>
 
} 