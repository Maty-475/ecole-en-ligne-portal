
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CommentForm from './CommentForm';
import { supabase } from '@/lib/supabaseClient';

interface Article {
  article_id: number;
  title: string;
  content: string;
  created_at: string;
  comment_count?: number;
  image_url?: string;
}

interface BlogArticleProps {
  article: Article;
  onCommentAdded: () => void;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ article, onCommentAdded }) => {
  const [commentCount, setCommentCount] = useState(0);

  // Charger le nombre de commentaires depuis la base de données
  const loadCommentCount = async () => {
    try {
      const { count, error } = await supabase
        .from('Comments')
        .select('*', { count: 'exact', head: true })
        .eq('id_article', article.article_id);

      if (error) throw error;
      setCommentCount(count || 0);
    } catch (error) {
      console.error('Erreur lors du chargement du nombre de commentaires:', error);
    }
  };

  useEffect(() => {
    loadCommentCount();
  }, [article.article_id]);

  const handleNewComment = () => {
    loadCommentCount(); // Recharger le compteur
    onCommentAdded();
  };

  return (
    <div className="space-y-6">
      {/* Article principal avec image et logo */}
      <Card  key={article.article_id}>
        <CardHeader className="pb-4">
          {/* Image de l'événement */}
          <div className="w-full h-64 mb-4 rounded-lg overflow-hidden">
          <img 
              src={article.image_url || 'https://via.placeholder.com/600x400'} 
              alt="Article" 
              className="w-full h-64 object-cover"
          />

          </div>
          
          {/* Titre avec logo de l'école */}
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
             <img 
                src="/Images/images.jpeg"
                alt="Logo école"
                className="w-12 h-12 object-contain rounded"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                  if (sibling) sibling.style.display = 'flex';
                }}
              />
              <div className="w-12 h-12 bg-blue-500 rounded text-white text-xs font-bold flex items-center justify-center" style={{display: 'none'}}>
                ÉCOLE
              </div>
            </div>
            <div className="flex-1">
              <CardTitle className="text-2xl mb-2">{article.title}</CardTitle>
              <p className="text-gray-600">
                Publié le {new Date(article.created_at).toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-gray-800 whitespace-pre-line leading-relaxed">{article.content}</p>
          </div>
        </CardContent>
      </Card>

      {/* Formulaire de commentaire */}
      <CommentForm 
        articleId={article.article_id} 
        onCommentSubmitted={handleNewComment}
      />

      {/* Affichage du compteur de commentaires seulement */}
      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {commentCount}
            </div>
            <p className="text-gray-600">
              {commentCount === 0 ? 'Aucun avis' : 
               commentCount === 1 ? 'Avis reçu' : 
               'Avis reçus'}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Les avis sont enregistrés dans la base de données
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogArticle;
