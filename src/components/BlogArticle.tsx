
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
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
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments();
  }, [article.article_id]);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('Comments')
        .select('*')
        .eq('id_article', article.article_id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error('Erreur lors du chargement des commentaires:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewComment = () => {
    fetchComments();
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
        
        {loading ? (
          <p className="text-gray-600">Chargement des commentaires...</p>
        ) : comments.length === 0 ? (
          <p className="text-gray-600">Aucun commentaire pour le moment. Soyez le premier à donner votre avis !</p>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default BlogArticle;
