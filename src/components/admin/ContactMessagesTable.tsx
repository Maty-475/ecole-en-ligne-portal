
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "../../lib/supabaseClient";
import { toast } from "sonner";

interface ContactMessage {
  id: number;
  nom: string;
  email: string;
  message: string;
  created_at: string;
}

const ContactMessagesTable: React.FC = () => {
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContactMessages();
  }, []);

  const loadContactMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('ContactMessages')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        toast.error("Erreur lors du chargement des messages de contact");
        console.error(error);
      } else {
        setContactMessages(data || []);
      }
    } catch (error) {
      toast.error("Erreur lors du chargement des messages de contact");
      console.error(error);
    }
    setLoading(false);
  };

  const filteredMessages = contactMessages.filter(message =>
    message.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id: number) => {
    const { error } = await supabase
      .from('ContactMessages')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error("Erreur lors de la suppression");
    } else {
      toast.success("Message supprimé");
      loadContactMessages();
    }
  };

  if (loading) {
    return <div className="text-center py-4">Chargement...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Rechercher un message de contact..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
        <div className="text-sm text-gray-600">
          {filteredMessages.length} message(s) trouvé(s)
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMessages.map((message) => (
              <TableRow key={message.id}>
                <TableCell>{message.nom}</TableCell>
                <TableCell>{message.email}</TableCell>
                <TableCell className="max-w-md">
                  <div className="truncate">{message.message}</div>
                </TableCell>
                <TableCell>
                  {new Date(message.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(`mailto:${message.email}`, '_blank')}
                    >
                      Répondre
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(message.id)}
                    >
                      Supprimer
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredMessages.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Aucun message de contact trouvé
        </div>
      )}
    </div>
  );
};

export default ContactMessagesTable;
