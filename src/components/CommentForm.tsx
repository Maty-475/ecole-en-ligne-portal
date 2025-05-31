
import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface CommentFormProps {
  articleId: number;
  onCommentSubmitted: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ articleId, onCommentSubmitted }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!author.trim() || !content.trim()) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('Comments')
        .insert([
          {
            id_article: articleId,
            author: author.trim(),
            content: content.trim()
          }
        ]);

      if (error) throw error;

      // Réinitialiser le formulaire
      setAuthor('');
      setContent('');
      
      // Notifier le parent que le commentaire a été ajouté
      onCommentSubmitted();
      
      alert('Votre commentaire a été ajouté avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du commentaire:', error);
      alert('Erreur lors de l\'ajout du commentaire. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Laisser un commentaire</CardTitle>
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
            {isSubmitting ? 'Envoi en cours...' : 'Publier le commentaire'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CommentForm;
