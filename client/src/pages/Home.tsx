import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Star, Film, Award } from "lucide-react";
import { useState } from "react";

/**
 * Modern Cinematic Elegance Design Philosophy
 * - Dark background with crimson red and gold accents
 * - Bold typography with Playfair Display for headings
 * - Smooth animations and hover effects
 * - Premium, sophisticated aesthetic reflecting Reynolds' brand
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState<"filmography" | "business">("filmography");

  const filmography = [
    {
      title: "Deadpool & Wolverine",
      year: 2024,
      role: "Deadpool/Wade Wilson",
      description: "The highest-grossing film of Reynolds' career, bringing together two iconic characters.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663735779967/Gc8YDXYJyJ24ZtxpAZSHvE/ryan-hero-1-gVuKTGLz4jtu8PZLPfexJa.webp",
    },
    {
      title: "Free Guy",
      year: 2021,
      role: "Guy",
      description: "An action-comedy about a bank teller who discovers he's an NPC in a video game.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663735779967/Gc8YDXYJyJ24ZtxpAZSHvE/ryan-business-jv4tUcHFVc5qv9dbVEeHAp.webp",
    },
    {
      title: "Deadpool 2",
      year: 2018,
      role: "Deadpool/Wade Wilson",
      description: "The sequel that cemented Deadpool as a cultural phenomenon, grossing nearly $800 million.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663735779967/Gc8YDXYJyJ24ZtxpAZSHvE/ryan-hero-1-gVuKTGLz4jtu8PZLPfexJa.webp",
    },
    {
      title: "Deadpool",
      year: 2016,
      role: "Deadpool/Wade Wilson",
      description: "The breakthrough role that became the highest-grossing R-rated film of all time at release.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663735779967/Gc8YDXYJyJ24ZtxpAZSHvE/ryan-business-jv4tUcHFVc5qv9dbVEeHAp.webp",
    },
    {
      title: "The Proposal",
      year: 2009,
      role: "Andrew Paxton",
      description: "A romantic comedy with Sandra Bullock that showcased Reynolds' comedic talents.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663735779967/Gc8YDXYJyJ24ZtxpAZSHvE/ryan-hero-1-gVuKTGLz4jtu8PZLPfexJa.webp",
    },
    {
      title: "X-Men Origins: Wolverine",
      year: 2009,
      role: "Wade Wilson/Deadpool",
      description: "Reynolds' first appearance as the Merc with a Mouth, launching his journey to stardom.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663735779967/Gc8YDXYJyJ24ZtxpAZSHvE/ryan-business-jv4tUcHFVc5qv9dbVEeHAp.webp",
    },
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Time 100",
      description: "Named one of the 100 most influential people in the world by Time Magazine in 2017.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Hollywood Walk of Fame",
      description: "Received his star on the Hollywood Walk of Fame in 2017, cementing his legacy.",
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "$6.6 Billion",
      description: "His films as a leading actor have grossed over $6.6 billion worldwide.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Emmy Awards",
      description: "Won two Primetime Emmy Awards for his work in television and entertainment.",
    },
  ];

  const businessVentures = [
    {
      title: "Aviation Gin",
      description: "Co-owner of the premium gin brand, sold to Diageo for up to $610 million in 2020.",
      year: "2017-2020",
    },
    {
      title: "Mint Mobile",
      description: "Holds an ownership stake in the wireless carrier, known for his humorous marketing campaigns.",
      year: "2018-Present",
    },
    {
      title: "Wrexham AFC",
      description: "Co-owner of the Welsh soccer club, documented in the Emmy-winning series 'Welcome to Wrexham.'",
      year: "2020-Present",
    },
    {
      title: "Maximum Effort",
      description: "His production and marketing company behind numerous film and entertainment projects.",
      year: "2015-Present",
    },
  ];

  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero Section */}
      <section className="cinematic-hero relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663735779967/Gc8YDXYJyJ24ZtxpAZSHvE/ryan-hero-1-gVuKTGLz4jtu8PZLPfexJa.webp"
            alt="Ryan Reynolds"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 container max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-amber-400 text-lg font-semibold tracking-widest uppercase">Welcome</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-black leading-tight">
                Ryan<br />
                <span className="text-red-600">Reynolds</span>
              </h1>
            </div>
            <p className="text-lg text-gray-300 max-w-md leading-relaxed">
              Canadian actor, entrepreneur, and creative visionary. From Deadpool to business empire, discover the man behind the wit.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
                Explore Filmography
              </Button>
              <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="relative z-20 rounded-lg overflow-hidden glow-effect">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663735779967/Gc8YDXYJyJ24ZtxpAZSHvE/ryan-business-jv4tUcHFVc5qv9dbVEeHAp.webp"
                alt="Ryan Reynolds Professional"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-amber-400" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold">
                The Man Behind<br />
                <span className="text-amber-400">The Mask</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Born October 23, 1976, in Vancouver, Canada, Ryan Rodney Reynolds is a Canadian-American actor, entrepreneur, and film producer. Known for his comedic performances and superhero roles, Reynolds has become one of the most influential entertainers of our time.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                His breakthrough came with the Deadpool franchise, which transformed his career and made him a household name. Beyond acting, Reynolds has built a business empire spanning entertainment, spirits, and sports, all while maintaining his signature wit and charm.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-400">$6.6B</p>
                  <p className="text-sm text-gray-400">Box Office Gross</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-400">49</p>
                  <p className="text-sm text-gray-400">Age</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-400">4</p>
                  <p className="text-sm text-gray-400">Children</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative rounded-lg overflow-hidden glow-effect">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663735779967/Gc8YDXYJyJ24ZtxpAZSHvE/ryan-hero-1-gVuKTGLz4jtu8PZLPfexJa.webp"
                  alt="Ryan Reynolds"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              <span className="text-amber-400">Achievements</span> & Recognition
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A testament to his influence and impact on entertainment and business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-card border-gray-800 p-6 hover:border-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20"
              >
                <div className="text-amber-400 mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filmography Section */}
      <section className="py-20 bg-card">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Notable <span className="text-red-600">Filmography</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A selection of Ryan Reynolds' most acclaimed and beloved films
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filmography.map((film, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 glow-effect">
                  <img
                    src={film.image}
                    alt={film.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">{film.role}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">
                  {film.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{film.year}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{film.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Ventures Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Business <span className="text-amber-400">Empire</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Beyond acting, Reynolds has built a diverse portfolio of successful ventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessVentures.map((venture, index) => (
              <Card
                key={index}
                className="bg-card border-gray-800 p-8 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20"
              >
                <p className="text-amber-400 text-sm font-semibold mb-2">{venture.year}</p>
                <h3 className="text-2xl font-bold mb-3">{venture.title}</h3>
                <p className="text-gray-300 leading-relaxed">{venture.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-16 bg-card border-t border-gray-800">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4 text-amber-400">About</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                An unofficial fan page celebrating Ryan Reynolds' career, achievements, and impact on entertainment.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-amber-400">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Filmography</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Business</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Awards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-amber-400">Connect</h4>
              <p className="text-gray-400 text-sm">
                Follow Ryan Reynolds on social media for the latest updates and entertainment.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 Ryan Reynolds Fan Page. This is an unofficial fan site.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
