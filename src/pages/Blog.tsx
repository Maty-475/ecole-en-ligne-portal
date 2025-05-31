
import React, { useState } from 'react';
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
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Article d'exemple pour la démonstration
  const sampleArticle: Article = {
    article_id: 1,
    title: "École Supérieure de Commerce et Management - Nouvelle Formation en Marketing Digital",
    content: "Découvrez notre nouvelle formation en Marketing Digital ! Formation certifiante de 2 ans avec stages en entreprise. Nos étudiants bénéficient d'un accompagnement personnalisé et d'un réseau professionnel solide. Taux d'insertion professionnelle : 95%. Candidatures ouvertes jusqu'au 30 juin. Venez nous rencontrer lors de nos journées portes ouvertes tous les samedis de 9h à 17h.",
    created_at: new Date().toISOString(),
    comment_count: 3
  };

  const articles = [sampleArticle];

  const handleCommentAdded = () => {
    // Cette fonction sera implémentée plus tard avec Supabase
    console.log('Commentaire ajouté');
  };

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
