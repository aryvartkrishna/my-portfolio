"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, MapPin, ExternalLink, Github, Star, Clock, Tag, Code, Heart, Search, Moon, Sun } from "lucide-react";
import { ParticleBackground } from "@/components/animated/ParticleBackground";
import { Typewriter } from "@/components/animated/Typewriter";
import { AnimatedCard } from "@/components/animated/AnimatedCard";
import { ProgressRing } from "@/components/animated/ProgressRing";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SearchBox } from "@/components/ui/SearchBox";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState("light");

  // Sample data
  const experiences = [
    {
      id: "1",
      title: "Started My Coding Journey",
      description: "First steps into the world of programming",
      content: "I began my journey into coding with Python, learning the basics and falling in love with problem-solving.",
      date: "2020-01-15",
      location: "Home Office",
      category: "Learning",
      tags: ["beginner", "python", "motivation"],
      featured: true,
      progress: 100
    },
    {
      id: "2",
      title: "First Web Development Project",
      description: "Created my first responsive website",
      content: "Built a personal portfolio website using HTML, CSS, and JavaScript. It was challenging but rewarding.",
      date: "2020-06-20",
      location: "Online Course",
      category: "Projects",
      tags: ["webdev", "html", "css", "javascript"],
      featured: false,
      progress: 85
    }
  ];

  const projects = [
    {
      id: "1",
      title: "Task Management App",
      description: "A modern task management application with real-time collaboration",
      content: "Built with React, Node.js, and MongoDB. Features include real-time updates, drag-and-drop functionality, and team collaboration.",
      status: "completed",
      startDate: "2023-01-10",
      endDate: "2023-03-15",
      githubUrl: "https://github.com/example/task-app",
      liveUrl: "https://task-app-demo.com",
      category: "Web Development",
      tags: ["react", "nodejs", "mongodb", "realtime"],
      featured: true,
      progress: 100
    },
    {
      id: "2",
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      content: "A complete e-commerce platform built with Next.js, featuring user authentication, product management, cart functionality, and Stripe payment integration.",
      status: "in-progress",
      startDate: "2023-05-01",
      category: "Web Development",
      tags: ["nextjs", "stripe", "ecommerce", "typescript"],
      featured: false,
      progress: 65
    }
  ];

  const thoughts = [
    {
      id: "1",
      title: "The Future of Web Development",
      excerpt: "Exploring how AI is changing the way we build web applications",
      content: "AI tools are revolutionizing web development. From code generation to automated testing, AI is making development faster and more accessible.",
      readTime: 5,
      createdAt: "2024-01-15",
      category: "Technology",
      tags: ["ai", "webdev", "future", "innovation"],
      featured: true,
      views: 1242,
      likes: 89
    },
    {
      id: "2",
      title: "Learning in Public",
      excerpt: "Why sharing your learning journey benefits everyone",
      content: "When I started sharing my coding journey online, I discovered something amazing: the act of teaching others helps you learn better.",
      readTime: 3,
      createdAt: "2024-01-10",
      category: "Personal Growth",
      tags: ["learning", "sharing", "community", "growth"],
      featured: false,
      views: 856,
      likes: 67
    }
  ];

  const categories = ["All", "Learning", "Projects", "Web Development", "Technology", "Personal Growth"];
  const tags = ["beginner", "python", "webdev", "react", "ai", "learning", "sharing"];

  const filteredItems = (items: any[]) => {
    let filtered = items;
    
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    if (activeTab !== "all") {
      filtered = filtered.filter(item => 
        item.category?.toLowerCase() === activeTab.toLowerCase() ||
        item.tags?.some((tag: string) => tag.toLowerCase().includes(activeTab.toLowerCase()))
      );
    }
    
    return filtered;
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Background */}
      <div className="fixed inset-0 gradient-bg" />
      
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center space-y-8 z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="relative"
          >
            <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-white/20">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
              <AvatarFallback className="text-4xl bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                JD
              </AvatarFallback>
            </Avatar>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="bg-green-500 w-4 h-4 rounded-full" />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Typewriter 
              texts={[
                "Welcome to My Digital Universe",
                "Crafting Experiences Through Code",
                "Where Ideas Come to Life"
              ]}
              className="text-4xl md:text-6xl font-bold text-gradient"
            />
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              Sharing my journey through experiences, projects, and thoughts
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            {[
              { icon: Star, text: "Lifelong Learner", color: "from-yellow-400 to-orange-400" },
              { icon: Code, text: "Developer", color: "from-blue-400 to-purple-400" },
              { icon: Heart, text: "Passionate Creator", color: "from-pink-400 to-red-400" }
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2 + index * 0.2 }}
              >
                <Badge 
                  variant="secondary" 
                  className={`text-sm bg-gradient-to-r ${item.color} text-white border-0 px-4 py-2`}
                >
                  <item.icon className="w-3 h-3 mr-1" />
                  {item.text}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              Explore My Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 border-white/20 hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      <Separator className="my-12 border-white/10" />

      {/* Main Content */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-gradient">
              Explore My Content
            </h2>
            
            {/* Search Box */}
            <div className="max-w-md mx-auto mb-6">
              <SearchBox 
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search experiences, projects, thoughts..."
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant={activeTab === category.toLowerCase() ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab(category.toLowerCase())}
                    className={`capitalize ${
                      activeTab === category.toLowerCase() 
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 border-0" 
                        : "border-white/20 hover:bg-white/10"
                    }`}
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Popular Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {tags.map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="cursor-pointer hover:bg-purple-500/20 transition-all duration-300 border-white/20"
                    onClick={() => setActiveTab(tag.toLowerCase())}
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-black/20 border border-white/10">
              <TabsTrigger value="all" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
                All Content
              </TabsTrigger>
              <TabsTrigger value="experiences" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
                Experiences
              </TabsTrigger>
              <TabsTrigger value="projects" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
                Projects
              </TabsTrigger>
              <TabsTrigger value="thoughts" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
                Thoughts
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...experiences.filter(e => e.featured), ...projects.filter(p => p.featured), ...thoughts.filter(t => t.featured)].map((item, index) => (
                  <AnimatedCard key={item.id} index={index}>
                    <Card className="h-full glass hover:border-purple-500/50 transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg text-white">{item.title}</CardTitle>
                          {item.featured && (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            >
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            </motion.div>
                          )}
                        </div>
                        <CardDescription className="text-white/70">{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-white/60 mb-4 line-clamp-3">
                          {item.content}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {item.tags?.slice(0, 3).map((tag: string) => (
                            <Badge key={tag} variant="outline" className="text-xs border-white/20">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center text-xs text-white/60">
                          {item.date && (
                            <>
                              <CalendarDays className="w-3 h-3 mr-1" />
                              {new Date(item.date).toLocaleDateString()}
                            </>
                          )}
                          {item.category && (
                            <Badge variant="secondary" className="ml-2 text-xs bg-purple-500/20 text-purple-300">
                              {item.category}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="experiences" className="mt-8">
              <div className="grid gap-6">
                {filteredItems(experiences).map((experience, index) => (
                  <AnimatedCard key={experience.id} index={index}>
                    <Card className="glass hover:border-purple-500/50 transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-white">{experience.title}</CardTitle>
                            <CardDescription className="text-white/70">{experience.description}</CardDescription>
                          </div>
                          {experience.featured && (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            >
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            </motion.div>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/80 mb-4">{experience.content}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {experience.tags.map((tag: string) => (
                            <Badge key={tag} variant="outline" className="border-white/20">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                          <div className="flex items-center">
                            <CalendarDays className="w-4 h-4 mr-1" />
                            {new Date(experience.date).toLocaleDateString()}
                          </div>
                          {experience.location && (
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {experience.location}
                            </div>
                          )}
                          {experience.category && (
                            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                              {experience.category}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <ProgressRing progress={experience.progress} size={60} />
                          <div className="text-right">
                            <p className="text-sm text-white/60">Journey Progress</p>
                            <p className="text-lg font-bold text-white">{experience.progress}%</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2">
                {filteredItems(projects).map((project, index) => (
                  <AnimatedCard key={project.id} index={index}>
                    <Card className="glass hover:border-purple-500/50 transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-white">{project.title}</CardTitle>
                            <CardDescription className="text-white/70">{project.description}</CardDescription>
                          </div>
                          {project.featured && (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            >
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            </motion.div>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/80 mb-4 text-sm">{project.content}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag: string) => (
                            <Badge key={tag} variant="outline" className="border-white/20">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                          <Badge variant={project.status === "completed" ? "default" : "secondary"} 
                                 className={project.status === "completed" 
                                   ? "bg-green-500/20 text-green-300 border-green-500/50" 
                                   : "bg-yellow-500/20 text-yellow-300 border-yellow-500/50"}>
                            {project.status}
                          </Badge>
                          {project.category && (
                            <Badge variant="outline" className="border-white/20">
                              {project.category}
                            </Badge>
                          )}
                        </div>
                        <div className="flex gap-2 mb-4">
                          {project.githubUrl && (
                            <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10">
                              <Github className="w-4 h-4 mr-1" />
                              GitHub
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Live Demo
                            </Button>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <ProgressRing progress={project.progress} size={50} />
                          <div className="text-right">
                            <p className="text-xs text-white/60">Project Progress</p>
                            <p className="text-lg font-bold text-white">{project.progress}%</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="thoughts" className="mt-8">
              <div className="grid gap-6">
                {filteredItems(thoughts).map((thought, index) => (
                  <AnimatedCard key={thought.id} index={index}>
                    <Card className="glass hover:border-purple-500/50 transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-white">{thought.title}</CardTitle>
                            <CardDescription className="text-white/70">{thought.excerpt}</CardDescription>
                          </div>
                          {thought.featured && (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            >
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            </motion.div>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/80 mb-4">{thought.content}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {thought.tags.map((tag: string) => (
                            <Badge key={tag} variant="outline" className="border-white/20">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                          <div className="flex items-center">
                            <CalendarDays className="w-4 h-4 mr-1" />
                            {new Date(thought.createdAt).toLocaleDateString()}
                          </div>
                          {thought.readTime && (
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {thought.readTime} min read
                            </div>
                          )}
                          {thought.category && (
                            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                              {thought.category}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex gap-4">
                            <span className="text-white/60">👁 {thought.views} views</span>
                            <span className="text-white/60">❤️ {thought.likes} likes</span>
                          </div>
                          <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10">
                            Read More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              Join My Journey
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Follow along as I share my experiences, projects, and thoughts. Let's learn and grow together!
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              Subscribe to Updates
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}