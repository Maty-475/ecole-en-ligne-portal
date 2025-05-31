
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/hooks/use-toast';

interface CommentFormProps {
  articleId: number;
  onCommentSubmitted: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ articleId, onCommentSubmitted }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!author.trim() || !content.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Insérer le commentaire dans la base de données
      const { error } = await supabase
        .from('Comments')
        .insert([
          {
            id_article: articleId,
            author: author.trim(),
            content: content.trim(),
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      // Réinitialiser le formulaire
      setAuthor('');
      setContent('');
      
      toast({
        title: "Succès",
        description: "Votre commentaire a été ajouté avec succès !",
      });

      // Notifier le parent que le commentaire a été ajouté
      onCommentSubmitted();

    } catch (error) {
      console.error('Erreur lors de l\'ajout du commentaire:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'ajout de votre commentaire.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Laisser un avis</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="author" className="block text-sm font-medium mb-2">
              Votre nom
            </label>
            <Input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Entrez votre nom"
              required
            />
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-2">
              Votre avis
            </label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Partagez votre expérience avec cet établissement..."
              rows={4}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Publier l\'avis'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CommentForm;
