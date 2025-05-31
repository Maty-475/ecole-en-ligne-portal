
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogArticle from '../components/BlogArticle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/lib/supabaseClient';

interface Article {
  article_id: number;
  title: string;
  content: string;
  created_at: string;
  comment_count?: number;
}

const Blog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  // Charger les articles depuis Supabase
  const loadArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('Articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Pour chaque article, récupérer le nombre de commentaires
      const articlesWithCount = await Promise.all(
        (data || []).map(async (article) => {
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

      setArticles(articlesWithCount);
    } catch (error) {
      console.error('Erreur lors du chargement des articles:', error);
      // Fallback avec un article d'exemple
      setArticles([{
        article_id: 1,
        title: "École Supérieure de Commerce et Management - Nouvelle Formation en Marketing Digital",
        content: "Découvrez notre nouvelle formation en Marketing Digital ! Formation certifiante de 2 ans avec stages en entreprise. Nos étudiants bénéficient d'un accompagnement personnalisé et d'un réseau professionnel solide. Taux d'insertion professionnelle : 95%. Candidatures ouvertes jusqu'au 30 juin. Venez nous rencontrer lors de nos journées portes ouvertes tous les samedis de 9h à 17h.",
        created_at: new Date().toISOString(),
        comment_count: 0
      }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const handleCommentAdded = () => {
    loadArticles(); // Recharger les articles pour mettre à jour les compteurs
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p>Chargement des articles...</p>
            </div>
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
                {articles.map((article) => (
                  <Card key={article.article_id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=100&q=80"
                            alt="École"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl">{article.title}</CardTitle>
                          <CardDescription>
                            Publié le {new Date(article.created_at).toLocaleDateString('fr-FR')}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4 line-clamp-3">
                        {article.content.substring(0, 200)}...
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 flex items-center gap-2">
                          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-semibold">
                            {article.comment_count || 0} avis
                          </span>
                        </span>
                        <button
                          onClick={() => setSelectedArticle(article)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                        >
                          Lire et laisser un avis
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
