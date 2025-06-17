
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "../../lib/supabaseClient";
import { toast } from "sonner";

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
  published: boolean;
}

const ArticlesTable: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('Articles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error(error);
      } else {
        setArticles(data || []);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const togglePublished = async (id: number, currentStatus: boolean) => {
    const { error } = await supabase
      .from('Articles')
      .update({ published: !currentStatus })
      .eq('id', id);

    if (error) {
      toast.error("Erreur lors de la mise à jour");
    } else {
      toast.success("Statut mis à jour");
      loadArticles();
    }
  };

  if (loading) {
    return <div className="text-center py-4">Chargement...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Rechercher un article..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
        <div className="text-sm text-gray-600">
          {filteredArticles.length} article(s) trouvé(s)
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Titre</TableHead>
              <TableHead>Auteur</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredArticles.map((article) => (
              <TableRow key={article.id}>
                <TableCell className="max-w-md">
                  <div className="truncate">{article.title}</div>
                </TableCell>
                <TableCell>{article.author}</TableCell>
                <TableCell>
                  {new Date(article.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded text-sm ${
                    article.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {article.published ? 'Publié' : 'Brouillon'}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => togglePublished(article.id, article.published)}
                  >
                    {article.published ? 'Dépublier' : 'Publier'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Aucun article trouvé
        </div>
      )}
    </div>
  );
};

export default ArticlesTable;
