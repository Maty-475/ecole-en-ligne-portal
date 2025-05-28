
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Merci pour votre message! Nous vous contacterons bientôt.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-primary p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Contactez-nous</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Adresse</h3>
                    <p>444 Boulevard Grande Ceinture</p>
                    <p>20350 Casablanca, Morocco</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p>contact@rezocampus.fr</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
                    <p>+212 617-725867 </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Whatsapp</h3>
                    <p>
                      <img src="Images/code.jpg" alt="Lien WhatsApp"/>
                    </p>

                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Envoyez-nous un message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="block mb-1">Nom</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="block mb-1">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="block mb-1">Sujet</Label>
                    <Input 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="block mb-1">Message</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
