
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CommentForm from './CommentForm';

interface Article {
  article_id: number;
  title: string;
  content: string;
  created_at: string;
  comment_count?: number;
}

interface Comment {
  id: number;
  author: string;
  content: string;
  created_at: string;
}

interface BlogArticleProps {
  article: Article;
  onCommentAdded: () => void;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ article, onCommentAdded }) => {
  // Commentaires d'exemple pour la démonstration
  const [comments] = useState<Comment[]>([
    {
      id: 1,
      author: "Marie Dupont",
      content: "Excellente école ! J'ai suivi la formation marketing et j'ai trouvé un travail 2 mois après. Les professeurs sont très compétents.",
      created_at: new Date(Date.now() - 86400000).toISOString() // Il y a 1 jour
    },
    {
      id: 2,
      author: "Pierre Martin",
      content: "Campus très moderne et bien équipé. L'accompagnement est vraiment personnalisé comme promis.",
      created_at: new Date(Date.now() - 172800000).toISOString() // Il y a 2 jours
    },
    {
      id: 3,
      author: "Sophie Bernard",
      content: "Les stages en entreprise sont un vrai plus. J'ai pu mettre en pratique directement ce que j'apprenais en cours.",
      created_at: new Date(Date.now() - 259200000).toISOString() // Il y a 3 jours
    }
  ]);

  const handleNewComment = () => {
    onCommentAdded();
  };

  return (
    <div className="space-y-6">
      {/* Article principal */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{article.title}</CardTitle>
          <p className="text-gray-600">
            Publié le {new Date(article.created_at).toLocaleDateString('fr-FR')}
          </p>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-gray-800 whitespace-pre-line">{article.content}</p>
          </div>
        </CardContent>
      </Card>

      {/* Formulaire de commentaire */}
      <CommentForm 
        articleId={article.article_id} 
        onCommentSubmitted={handleNewComment}
      />

      {/* Liste des commentaires */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Commentaires ({comments.length})
        </h3>
        
        <div className="space-y-4">
          {comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-blue-600">{comment.author}</h4>
                  <span className="text-sm text-gray-500">
                    {new Date(comment.created_at).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                <p className="text-gray-800">{comment.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
