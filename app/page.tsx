import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, BookOpen, Users, Award, Star, CheckCircle, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      {/* Modern Header */}
      <header className="sticky top-0 z-50 glass border-b border-green-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-modern rounded-xl flex items-center justify-center shadow-modern">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">NotebookLM</h1>
                <p className="text-xs text-gray-600">Mastery Course</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/course" className="text-gray-600 hover:text-gray-800 transition-colors font-medium">
                Course
              </Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-800 transition-colors font-medium">
                Dashboard
              </Link>
              <Button size="sm" className="gradient-modern text-white shadow-modern hover:shadow-modern-lg">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-8 border border-emerald-200">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Research Revolution
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Master{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              NotebookLM
            </span>
            <br />
            in 7 Days
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your research workflow with Google's revolutionary AI tool. From complete beginner to power user
            with our comprehensive, hands-on course.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/course">
              <Button
                size="lg"
                className="gradient-modern text-white px-8 py-4 text-lg shadow-modern hover:shadow-modern-lg transition-all"
              >
                Start Learning Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-300 text-gray-700 hover:bg-emerald-50 px-8 py-4 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Preview
            </Button>
          </div>

          {/* Modern Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: "7", label: "Comprehensive Lessons", icon: BookOpen },
              { number: "2,500+", label: "Students Enrolled", icon: Users },
              { number: "4.9★", label: "Average Rating", icon: Star },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 gradient-modern rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-modern">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white/70">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Course?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed by experts, built for learners of all levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Beginner-Friendly",
                description:
                  "Start from zero knowledge and build expertise step-by-step with clear explanations and practical examples.",
                color: "from-emerald-500 to-green-500",
              },
              {
                icon: Users,
                title: "Expert-Led",
                description: "Learn from industry professionals who use NotebookLM daily in their research workflows.",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: Award,
                title: "Certification",
                description: "Earn a professional certificate upon completion to showcase your NotebookLM expertise.",
                color: "from-emerald-600 to-teal-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-emerald-200 shadow-modern hover:shadow-modern-lg transition-all duration-300 group bg-white"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-modern`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Students Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied learners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Research Analyst",
                content:
                  "This course completely transformed how I handle research. NotebookLM is now my go-to tool for every project.",
                avatar: "SC",
              },
              {
                name: "Marcus Rodriguez",
                role: "Graduate Student",
                content: "Clear, practical, and incredibly useful. I went from confused to confident in just a week.",
                avatar: "MR",
              },
              {
                name: "Dr. Emily Watson",
                role: "Academic Researcher",
                content:
                  "The real-world examples made all the difference. I'm now using NotebookLM for all my research workflows.",
                avatar: "EW",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-emerald-200 shadow-modern bg-white">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 gradient-modern rounded-full flex items-center justify-center text-white font-semibold mr-4 shadow-modern">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Master NotebookLM?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their research workflow
          </p>

          <div className="flex items-center justify-center space-x-6 mb-8 text-emerald-100">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Lifetime Access</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>7 Complete Lessons</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Certificate Included</span>
            </div>
          </div>

          <Link href="/course">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-12 py-4 text-xl font-semibold shadow-modern-lg"
            >
              Start Your Journey Today
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-200 bg-white/80 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 gradient-modern rounded-lg flex items-center justify-center shadow-modern">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-800">NotebookLM Mastery</span>
          </div>
          <p className="text-gray-600">&copy; 2024 NotebookLM Mastery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
