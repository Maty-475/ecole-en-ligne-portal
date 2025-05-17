import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { schools, categories } from '../data/schools';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [autoplay, setAutoplay] = useState(true);
  
  const images = [
    { url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7', alt: 'Étudiante travaillant sur un ordinateur portable' },
    { url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b', alt: 'Ordinateur portable' },
    { url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6', alt: 'Code informatique sur écran' },
    { url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c', alt: 'Groupe d\'étudiants travaillant ensemble' },
    { url: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81', alt: 'Salle de classe numérique' }
  ];
  
  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/index', { state: { searchQuery } });
    }
  };

  useEffect(() => {
    // Set up autoplay for the carousel
    const interval = setInterval(() => {
      if (autoplay) {
        // The carousel component from shadcn has its own autoplay capability
        // This is handled in the Carousel component options
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-primary to-primary/80 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Trouvez votre formation idéale
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 mb-8">
              Explorez notre sélection d'établissements d'excellence et trouvez la formation qui vous correspond.
            </p>
            
            {/* Global search bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-6">
              <div className="relative flex">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Rechercher une école, formation, catégorie ou domaine..."
                    className="pl-10 py-6 pr-24 text-lg rounded-l-lg rounded-r-none shadow-md"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit" className="bg-secondary hover:bg-secondary/90 text-white text-lg py-6 px-6 rounded-r-lg rounded-l-none">
                  Rechercher
                </Button>
              </div>
            </form>
          </div>
        </section>
        
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-12 text-primary">
              Trouvez une Formation dans l'un des Etablissements réconnus et agréés par l'Etat
              <p className="text-ms text-center mb-4 text-primary">Les formations sont choisies sur mesure et ce, à des prix abordable</p>
            </h1>            
            <div className="max-w-4xl mx-auto mb-16">
              <Carousel className="relative" opts={{ loop: true, align: "start" }} autoplay={{ delay: 5000 }}>
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-2">
                        <div className="overflow-hidden rounded-xl shadow-lg aspect-video">
                          <img 
                            src={image.url} 
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            
            <div className="text-center">
              <Link to="/index">
                <Button className="text-xl py-6 px-8 rounded-lg bg-secondary hover:bg-secondary/90 text-white transition-transform hover:scale-105">
                 <strong><em> Acceder à toutes les formations et Etablissements</em></strong>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">
             Tous ce qui a savoir sur les Démarches administratives pour voyager en toute sérénité.
            </h2>
            
            <Tabs defaultValue="visa" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="visa">Pays avec visa ou AEVM</TabsTrigger>
                <TabsTrigger value="logement">Trouver un Logement</TabsTrigger>
                <TabsTrigger value="sejour">Faire sa Carte de séjour</TabsTrigger>
              </TabsList>
              
              <TabsContent value="visa" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Les pays dont le visa est obligatoire :</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Voici la liste des pays qui ont besoin d'un visa pour voyager au Maroc :</p>
                    <p className="mt-4 text-gray-700">
                      <a href="/documents/visa/pays-avec-visa.txt" download="pays-avec-visa.txt">
                     <strong> 📄 Télécharger la liste des pays nécessitant un visa</strong>
                    </a>
                    </p>
                    <p>Voici la liste des pays qui ont besoin d'un AEVM pour voyager au Maroc :</p>
                      <p className="mt-4 text-gray-700">
                      <a href="/documents/visa/aevm.txt" download="aevm.txt">
                     <strong> 📄 Télécharger la liste des pays nécessitant un AEVM (Autorisation Electroonique de Voyage au Maroc)</strong>
                    </a>
                    </p>
                    <p>Pour plus d'information contactez nos services pour un accompagnement gratuit au : <em><strong>+212 617-725867</strong></em> ou par mail : <em><strong>divinmister@hotmail.com</strong></em></p>
                    <p></p>
                    <p className="mt-4 text-gray-600">
                     <strong> Assurez-vous de déposer votre demande de visa au moins 3 mois avant le début prévu de vos études.</strong>
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="logement" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Trouver un logement</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p><strong><em>Une fois prêt à voyager nous vous aidons à trouver un logement.</em></strong></p>
                    <p>Différentes options de logement s'offrent à vous en tant qu'étudiant :</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Résider chez un parent</li>
                      <li>Résidences étudiantes privées</li>
                      <li>Colocation</li>
                      <li>Location individuelle</li>
                      <li>Logement chez l'habitant</li>
                    </ul>
                    <p className="mt-4 text-gray-600">
                      N'oubliez pas de constituer votre dossier de location (garant, attestation de bourse, etc.)
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg mt-4">
                      <p className="font-medium">Documents généralement requis :</p>
                      <ul className="list-disc list-inside mt-2">
                        <li>Pièce d'identité</li>
                        <li>Justificatif de ressources</li>
                        <li>Attestation de garant</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="sejour" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Procédure de la Carte de séjour</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p> Une fois arrivé au Maroc, vous avez 3 mois pour réunir tous les documents nécessaires à la demande de votre titre de séjour.</p>
                      <p className="mt-4 text-gray-600">
                       <a href="https://www.divin-service-ei.tech/services#h.9woz7s1sgci" target="_blank" rel="noopener noreferrer">
                        <strong>🌐 Accéder à la liste complète des documents</strong>
                      </a>
                    </p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Passeport en cours de validité (avec copies des pages d'identité et de visa ou du cachet d'entrée)</li>
                      <li>8 Photos d'identité récentes (aux normes )</li>
                      <li>Justificatif de résidence (contrat de location ou attestation d'hébergement,  facture de paiement d'eau et électricité.)</li>
                     
                    </ol>
                    <p className="mt-4 text-gray-600">
                     <strong> Pour le renouvellement de votre titre de séjour, la demande doit être effectuée 15 jours avant la date d'expiration.</strong>
                    </p>
                    <div className="bg-amber-50 p-4 rounded-lg mt-4">
                      <p className="font-medium">Documents nécessaires :</p>
                      <ul className="list-disc list-inside mt-2">
                        <li>Passeport Valide</li>
                        <li>Justificatif de domicile</li>
                        <li>Photos d'identité</li>
                        <li>Certificat d'inscription dans un établissement d'enseignement</li>
                        <li>Même documents que la première fois</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Domaines de formation
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-3">Informatique</h3>
                <p className="text-gray-600 mb-4">Développement, IA, cybersécurité et réseaux</p>
                <Link to="/index" className="text-secondary hover:underline">Découvrir toutes les formations</Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-semibold mb-3">Commerce</h3>
                <p className="text-gray-600 mb-4">Management, marketing, finance et vente</p>
                <Link to="/index" className="text-secondary hover:underline">Découvrir toutes les formations</Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-3">Arts</h3>
                <p className="text-gray-600 mb-4">Design, animation, photographie et création</p>
                <Link to="/index" className="text-secondary hover:underline">Découvrir toutes les formations</Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold mb-3">Sciences</h3>
                <p className="text-gray-600 mb-4">Biologie, environnement, physique et recherche</p>
                <Link to="/index" className="text-secondary hover:underline">Découvrir toutes les formations</Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold mb-3">Ingénierie</h3>
                <p className="text-gray-600 mb-4">Systèmes embarqués, électronique et mécanique</p>
                <Link to="/index" className="text-secondary hover:underline">Découvrir toutes les formations</Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-3">Santé</h3>
                <p className="text-gray-600 mb-4">Médecine, paramédical et recherche médicale</p>
                <Link to="/index" className="text-secondary hover:underline">Découvrir toutes les formations</Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🗣️</div>
                <h3 className="text-xl font-semibold mb-3">Langues</h3>
                <p className="text-gray-600 mb-4">Traduction, interprétation et communication</p>
                <Link to="/index" className="text-secondary hover:underline">Découvrir toutes les formations</Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-semibold mb-3">Droit</h3>
                <p className="text-gray-600 mb-4">Juridique, notariat et administration</p>
                <Link to="/index" className="text-secondary hover:underline">Découvrir toutes les formations</Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-primary">
              Pourquoi nous choisir ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-4xl mb-4 text-secondary">🔍</div>
                <h3 className="text-xl font-semibold mb-3">Information complète</h3>
                <p className="text-gray-600">
                  Toutes les informations nécessaires pour faire un choix éclairé.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-4xl mb-4 text-secondary">🎓</div>
                <h3 className="text-xl font-semibold mb-3">Programmes variés</h3>
                <p className="text-gray-600">
                  Des formations dans tous les domaines pour tous les profils.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-4xl mb-4 text-secondary">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Accompagnement</h3>
                <p className="text-gray-600">
                  Un suivi personnalisé pour vous guider dans vos choix.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Landing;
