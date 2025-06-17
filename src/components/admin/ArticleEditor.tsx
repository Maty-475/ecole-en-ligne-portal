
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "../../lib/supabaseClient";
import { toast } from "sonner";

const ArticleEditor: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast.error("Le titre et le contenu sont obligatoires");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('Articles')
        .insert([{
          title: title.trim(),
          content: content.trim(),
          image_url: imageUrl.trim() || null,
          logo_url: logoUrl.trim() || null,
          created_ad: new Date().toISOString()
        }]);

      if (error) {
        toast.error("Erreur lors de la création de l'article");
        console.error(error);
      } else {
        toast.success("Article créé avec succès");
        // Réinitialiser le formulaire
        setTitle('');
        setContent('');
        setImageUrl('');
        setLogoUrl('');
      }
    } catch (error) {
      toast.error("Erreur lors de la création de l'article");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Créer un nouvel article</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Titre *</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titre de l'article"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">URL de l'image</label>
            <Input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://exemple.com/image.jpg"
              type="url"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">URL du logo</label>
            <Input
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
              placeholder="https://exemple.com/logo.jpg"
              type="url"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Contenu *</label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Contenu de l'article..."
              rows={6}
              required
            />
          </div>
          
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Création en cours...' : 'Créer l\'article'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ArticleEditor;
