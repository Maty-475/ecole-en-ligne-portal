
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthGuard from '../components/AuthGuard';
import AdminDashboard from '../components/admin/AdminDashboard';

const Admin: React.FC = () => {
  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <AdminDashboard />
        </main>
        
        <Footer />
      </div>
    </AuthGuard>
  );
};

export default Admin;
