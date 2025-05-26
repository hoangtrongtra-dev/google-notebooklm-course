import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Clock, CheckCircle, ArrowRight, Play, Users } from "lucide-react"
import Link from "next/link"

export default function CoursePage() {
  const lessons = [
    {
      id: 1,
      title: "Introduction to NotebookLM",
      description: "What is NotebookLM, key benefits, and how to set up an account",
      duration: "45 min",
      objectives: [
        "Understand what NotebookLM is",
        "Learn key benefits",
        "Set up your account",
        "Navigate basic interface",
      ],
      difficulty: "Beginner",
      color: "from-emerald-500 to-green-500",
    },
    {
      id: 2,
      title: "Interface Overview",
      description: "How to navigate the platform and understand key features",
      duration: "40 min",
      objectives: [
        "Master the main interface",
        "Understand navigation",
        "Learn about key features",
        "Customize your workspace",
      ],
      difficulty: "Beginner",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 3,
      title: "Managing Research Materials",
      description: "How to add, organize, and use sources effectively",
      duration: "50 min",
      objectives: ["Upload various file types", "Organize sources", "Tag and categorize", "Search and filter content"],
      difficulty: "Intermediate",
      color: "from-emerald-600 to-teal-500",
    },
    {
      id: 4,
      title: "Using the AI Assistant",
      description: "How to ask questions and extract insights from your documents",
      duration: "55 min",
      objectives: ["Craft effective prompts", "Extract key insights", "Generate summaries", "Ask follow-up questions"],
      difficulty: "Intermediate",
      color: "from-teal-500 to-emerald-500",
    },
    {
      id: 5,
      title: "Creating a Research Project",
      description: "Guided tutorials to build your first research project",
      duration: "60 min",
      objectives: ["Plan a research project", "Organize materials", "Generate insights", "Create final outputs"],
      difficulty: "Intermediate",
      color: "from-emerald-500 to-green-600",
    },
    {
      id: 6,
      title: "Advanced Tips and Tools",
      description: "Dive into powerful features for more experienced use",
      duration: "50 min",
      objectives: [
        "Advanced search techniques",
        "Collaboration features",
        "Integration options",
        "Workflow optimization",
      ],
      difficulty: "Advanced",
      color: "from-green-600 to-emerald-700",
    },
    {
      id: 7,
      title: "Real-World Use Cases",
      description: "Practical applications in different industries or fields",
      duration: "45 min",
      objectives: ["Academic research", "Business analysis", "Content creation", "Legal research"],
      difficulty: "Advanced",
      color: "from-emerald-700 to-teal-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-green-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-modern rounded-xl flex items-center justify-center shadow-modern">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">NotebookLM</h1>
                <p className="text-xs text-gray-600">Mastery Course</p>
              </div>
            </Link>
            <div className="text-gray-600 font-medium">Course Overview</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Complete NotebookLM Course</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Master Google's AI-powered research tool through 7 comprehensive lessons designed to take you from beginner
            to expert.
          </p>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-emerald-600" />
              <span>6 hours total</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-emerald-600" />
              <span>2,500+ enrolled</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2 text-emerald-600" />
              <span>7 lessons</span>
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid gap-6 max-w-5xl mx-auto">
          {lessons.map((lesson, index) => (
            <Card
              key={lesson.id}
              className="border-emerald-200 shadow-modern hover:shadow-modern-lg transition-all duration-300 group animate-slide-up bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${lesson.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform shadow-modern`}
                    >
                      {lesson.id}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-semibold text-gray-800">{lesson.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            lesson.difficulty === "Beginner"
                              ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                              : lesson.difficulty === "Intermediate"
                                ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
                                : "bg-orange-100 text-orange-700 border border-orange-200"
                          }`}
                        >
                          {lesson.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">{lesson.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">{lesson.duration}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Learning Objectives:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {lesson.objectives.map((objective, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-600">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>Video Content</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4" />
                      <span>Interactive Exercises</span>
                    </div>
                  </div>
                  <Link href={`/course/lesson-${lesson.id}`}>
                    <Button
                      className={`bg-gradient-to-r ${lesson.color} text-white shadow-modern hover:shadow-modern-lg group-hover:translate-x-1 transition-all`}
                    >
                      Start Lesson
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="border-emerald-200 shadow-modern-lg max-w-2xl mx-auto bg-gradient-to-r from-emerald-600 to-green-600">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Begin?</h3>
              <p className="text-emerald-100 mb-8 text-lg">
                Start with Lesson 1 and work your way through the complete curriculum at your own pace.
              </p>
              <Link href="/course/lesson-1">
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold shadow-modern"
                >
                  Begin Lesson 1
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
