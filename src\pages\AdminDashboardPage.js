import React from 'react';
import axios from 'axios';
import AdminDashboard from '../components/AdminDashboard';

const AdminDashboardPage = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    axios.get('/api/admin/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AdminDashboard products={products} orders={orders} />
    </div>
  );
};

export default AdminDashboardPage;