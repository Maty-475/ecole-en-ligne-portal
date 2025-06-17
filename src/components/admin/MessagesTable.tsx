
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { supabase } from "../../lib/supabaseClient";
import { toast } from "sonner";

interface Message {
  id: number;
  sender_id: string;
  receiver_id: string;
  content: string;
  timestamp: string;
  is_read: boolean;
}

const MessagesTable: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [replyContent, setReplyContent] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('timestamp', { ascending: false });
      
      if (error) {
        toast.error("Erreur lors du chargement des messages");
        console.error(error);
      } else {
        setMessages(data || []);
      }
    } catch (error) {
      toast.error("Erreur lors du chargement des messages");
      console.error(error);
    }
    setLoading(false);
  };

  const filteredMessages = messages.filter(message =>
    message.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.sender_id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReply = async () => {
    if (!selectedMessage || !replyContent.trim()) {
      toast.error("Veuillez saisir une réponse");
      return;
    }

    const { error } = await supabase
      .from('messages')
      .insert([{
        sender_id: 'admin',
        receiver_id: selectedMessage.sender_id,
        content: replyContent,
        timestamp: new Date().toISOString(),
        is_read: false
      }]);

    if (error) {
      toast.error("Erreur lors de l'envoi de la réponse");
    } else {
      toast.success("Réponse envoyée");
      setReplyContent('');
      setSelectedMessage(null);
      loadMessages();
    }
  };

  const markAsRead = async (id: number) => {
    const { error } = await supabase
      .from('messages')
      .update({ is_read: true })
      .eq('id', id);

    if (!error) {
      loadMessages();
    }
  };

  if (loading) {
    return <div className="text-center py-4">Chargement...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Rechercher un message..."
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
              <TableHead>Expéditeur</TableHead>
              <TableHead>Contenu</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMessages.map((message) => (
              <TableRow key={message.id}>
                <TableCell>{message.sender_id}</TableCell>
                <TableCell className="max-w-md">
                  <div className="truncate">{message.content}</div>
                </TableCell>
                <TableCell>
                  {new Date(message.timestamp).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded text-sm ${
                    message.is_read ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {message.is_read ? 'Lu' : 'Non lu'}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {!message.is_read && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => markAsRead(message.id)}
                      >
                        Marquer lu
                      </Button>
                    )}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => setSelectedMessage(message)}
                        >
                          Répondre
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Répondre au message</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-gray-600">Message original :</p>
                            <div className="bg-gray-100 p-3 rounded">{message.content}</div>
                          </div>
                          <div>
                            <Textarea
                              placeholder="Tapez votre réponse..."
                              value={replyContent}
                              onChange={(e) => setReplyContent(e.target.value)}
                              rows={4}
                            />
                          </div>
                          <Button onClick={handleReply} className="w-full">
                            Envoyer la réponse
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredMessages.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Aucun message trouvé
        </div>
      )}
    </div>
  );
};

export default MessagesTable;
