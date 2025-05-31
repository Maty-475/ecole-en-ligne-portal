
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogArticle from '../components/BlogArticle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Article {
  article_id: number;
  title: string;
  content: string;
  created_at: string;
  comment_count?: number;
}

const Blog: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      // Récupérer les articles avec le nombre de commentaires
      const { data: articlesData, error: articlesError } = await supabase
        .from('Articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (articlesError) throw articlesError;

      // Pour chaque article, compter les commentaires
      const articlesWithComments = await Promise.all(
        (articlesData || []).map(async (article) => {
          const { count } = await supabase
            .from('Comments')
            .select('*', { count: 'exact', head: true })
            .eq('id_article', article.article_id);

          return {
            ...article,
            comment_count: count || 0
          };
        })
      );

      setArticles(articlesWithComments);
    } catch (error) {
      console.error('Erreur lors du chargement des articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCommentAdded = () => {
    // Recharger les articles pour mettre à jour le compteur
    fetchArticles();
    if (selectedArticle) {
      // Mettre à jour l'article sélectionné
      const updatedArticle = articles.find(a => a.article_id === selectedArticle.article_id);
      if (updatedArticle) {
        setSelectedArticle({
          ...updatedArticle,
          comment_count: (updatedArticle.comment_count || 0) + 1
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Chargement...</h2>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">
              Blog - Avis sur nos établissements
            </h1>
            
            {selectedArticle ? (
              <div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="mb-6 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
                >
                  ← Retour aux articles
                </button>
                <BlogArticle 
                  article={selectedArticle} 
                  onCommentAdded={handleCommentAdded}
                />
              </div>
            ) : (
              <div className="grid gap-6">
                {articles.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-600">Aucun article disponible pour le moment.</p>
                  </div>
                ) : (
                  articles.map((article) => (
                    <Card key={article.article_id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl">{article.title}</CardTitle>
                        <CardDescription>
                          Publié le {new Date(article.created_at).toLocaleDateString('fr-FR')}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4 line-clamp-3">
                          {article.content.substring(0, 200)}...
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {article.comment_count || 0} commentaire(s)
                          </span>
                          <button
                            onClick={() => setSelectedArticle(article)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                          >
                            Lire et commenter
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
