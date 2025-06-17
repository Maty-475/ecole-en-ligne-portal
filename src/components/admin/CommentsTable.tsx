
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { supabase } from "../../lib/supabaseClient";
import { toast } from "sonner";

interface Comment {
  id: number;
  article_id: number;
  author: string;
  content: string;
  created_at: string;
  approved: boolean;
}

const CommentsTable: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [replyContent, setReplyContent] = useState('');
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    try {
      const { data, error } = await supabase
        .from('Comments')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error(error);
      } else {
        setComments(data || []);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const filteredComments = comments.filter(comment =>
    comment.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comment.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleApproved = async (id: number, currentStatus: boolean) => {
    const { error } = await supabase
      .from('Comments')
      .update({ approved: !currentStatus })
      .eq('id', id);

    if (error) {
      toast.error("Erreur lors de la mise à jour");
    } else {
      toast.success("Statut mis à jour");
      loadComments();
    }
  };

  const handleReply = async () => {
    if (!selectedComment || !replyContent.trim()) {
      toast.error("Veuillez saisir une réponse");
      return;
    }

    const { error } = await supabase
      .from('Comments')
      .insert([{
        article_id: selectedComment.article_id,
        author: 'Admin',
        content: `Réponse à ${selectedComment.author}: ${replyContent}`,
        approved: true
      }]);

    if (error) {
      toast.error("Erreur lors de l'envoi de la réponse");
    } else {
      toast.success("Réponse envoyée");
      setReplyContent('');
      setSelectedComment(null);
      loadComments();
    }
  };

  if (loading) {
    return <div className="text-center py-4">Chargement...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Rechercher un commentaire..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
        <div className="text-sm text-gray-600">
          {filteredComments.length} commentaire(s) trouvé(s)
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Auteur</TableHead>
              <TableHead>Contenu</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredComments.map((comment) => (
              <TableRow key={comment.id}>
                <TableCell>{comment.author}</TableCell>
                <TableCell className="max-w-md">
                  <div className="truncate">{comment.content}</div>
                </TableCell>
                <TableCell>
                  {new Date(comment.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded text-sm ${
                    comment.approved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {comment.approved ? 'Approuvé' : 'En attente'}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleApproved(comment.id, comment.approved)}
                    >
                      {comment.approved ? 'Rejeter' : 'Approuver'}
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => setSelectedComment(comment)}
                        >
                          Répondre
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Répondre au commentaire</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-gray-600">Commentaire original :</p>
                            <div className="bg-gray-100 p-3 rounded">{comment.content}</div>
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

      {filteredComments.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Aucun commentaire trouvé
        </div>
      )}
    </div>
  );
};

export default CommentsTable;
