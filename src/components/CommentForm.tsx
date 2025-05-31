
import React, { useState } from 'react';
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

    // Simulation d'envoi (pour la démonstration)
    setTimeout(() => {
      setAuthor('');
      setContent('');
      setIsSubmitting(false);
      onCommentSubmitted();
      alert('Votre commentaire a été ajouté avec succès ! (Mode démonstration)');
    }, 1000);
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
