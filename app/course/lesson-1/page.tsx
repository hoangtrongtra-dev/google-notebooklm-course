import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, ArrowRight, Target, AlertCircle, BookOpen, Users } from "lucide-react"
import Link from "next/link"

export default function Lesson1() {
  const objectives = [
    "Understand what Google NotebookLM is and its core purpose",
    "Learn the key benefits and use cases for NotebookLM",
    "Successfully create and set up your NotebookLM account",
    "Navigate the basic interface and understand main components",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="border-b border-green-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/course"
            className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Course</span>
          </Link>
          <div className="text-center">
            <div className="text-sm text-gray-500">Lesson 1 of 7</div>
            <div className="text-gray-800 font-semibold">Introduction to NotebookLM</div>
          </div>
          <div className="text-gray-500">45 min</div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Learning Objectives */}
        <Card className="bg-white border-green-200 shadow-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Target className="w-5 h-5 text-emerald-600" />
              <span>Learning Objectives</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{objective}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Introduction to Google NotebookLM</h1>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is Google NotebookLM?</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Google NotebookLM is a revolutionary AI-powered research and writing assistant that transforms how you
              interact with your documents and sources. Think of it as your personal research assistant that can read,
              understand, and help you analyze any collection of documents, PDFs, websites, or notes you provide.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding the Core Concept</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Unlike traditional AI chatbots that rely on general knowledge, NotebookLM creates a personalized AI
            assistant based specifically on your uploaded sources. This means every response, summary, and insight is
            grounded in your actual documents rather than generic information from the internet.
          </p>

          <Card className="bg-blue-50 border-blue-200 mb-8">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Key Insight</h3>
                  <p className="text-gray-700">
                    NotebookLM doesn't just store your documents—it understands them. It can identify themes, extract
                    key points, find connections between different sources, and answer complex questions about your
                    research materials.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Benefits of NotebookLM</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Source-Grounded Responses</h3>
                <p className="text-gray-700">
                  Every answer includes citations and references to your specific documents, ensuring accuracy and
                  traceability.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Intelligent Summarization</h3>
                <p className="text-gray-700">
                  Automatically generate summaries, key points, and insights from lengthy documents or multiple sources.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Cross-Document Analysis</h3>
                <p className="text-gray-700">
                  Find connections, contradictions, and patterns across multiple documents in your research collection.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Privacy-Focused</h3>
                <p className="text-gray-700">
                  Your documents remain private and are not used to train Google's general AI models.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Who Should Use NotebookLM?</h2>

          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Researchers & Academics</h3>
                <p className="text-gray-700">
                  Analyze research papers, extract key findings, and identify gaps in literature reviews. Perfect for
                  thesis writing, grant proposals, and academic research projects.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Students</h3>
                <p className="text-gray-700">
                  Study more effectively by asking questions about textbooks, lecture notes, and research materials.
                  Generate study guides and summaries automatically.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Professionals</h3>
                <p className="text-gray-700">
                  Analyze market research, competitor analysis, financial reports, and strategic documents. Make
                  data-driven decisions faster.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Content Creators & Writers</h3>
                <p className="text-gray-700">
                  Research topics thoroughly, fact-check information, and generate content ideas based on your source
                  materials.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Setting Up Your NotebookLM Account</h2>

          <Card className="bg-yellow-50 border-yellow-200 mb-6">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Prerequisites</h3>
                  <p className="text-gray-700">
                    You'll need a Google account to access NotebookLM. The service is currently available in select
                    regions and may require joining a waitlist.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step-by-Step Account Setup</h3>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Visit NotebookLM</h4>
                <p className="text-gray-700">Navigate to notebooklm.google.com in your web browser.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Sign In with Google</h4>
                <p className="text-gray-700">
                  Click "Try NotebookLM" and sign in with your Google account credentials.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Accept Terms</h4>
                <p className="text-gray-700">Review and accept the terms of service and privacy policy.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                4
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Create Your First Notebook</h4>
                <p className="text-gray-700">Click "New Notebook" to create your first research project.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding the Basic Interface</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Once you're logged in, you'll see the main NotebookLM interface. Let's break down the key components you'll
            be working with throughout this course:
          </p>

          <div className="space-y-6 mb-8">
            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Notebook Dashboard</h3>
                <p className="text-gray-700">
                  Your main workspace where you can see all your notebooks, create new ones, and access recent projects.
                  Think of this as your research library.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Sources Panel</h3>
                <p className="text-gray-700">
                  Located on the left side, this is where you'll upload and manage all your research materials—PDFs,
                  documents, websites, and notes.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Chat Interface</h3>
                <p className="text-gray-700">
                  The main area where you'll interact with your AI assistant, ask questions, and receive insights based
                  on your uploaded sources.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Notes Section</h3>
                <p className="text-gray-700">
                  A dedicated space for taking and organizing your own notes, which can also be used as sources for AI
                  analysis.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Makes NotebookLM Different?</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            While there are many AI tools available, NotebookLM stands out for several key reasons that make it
            particularly powerful for research and analysis:
          </p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Source Attribution</h3>
            <p className="text-gray-700 mb-4">
              Unlike general AI chatbots, every response from NotebookLM includes specific citations and quotes from
              your uploaded documents. This means you can verify information and use it confidently in academic or
              professional work.
            </p>
            <p className="text-gray-700">
              When NotebookLM answers a question, it will show you exactly which document and which section the
              information came from, making it invaluable for research integrity.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Common Use Cases and Applications</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            To help you understand the practical applications of NotebookLM, let's explore some real-world scenarios
            where this tool excels:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Literature Reviews</h3>
                <p className="text-gray-700 text-sm">
                  Upload multiple research papers and ask NotebookLM to identify common themes, contradictions, and
                  research gaps across your sources.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Meeting Analysis</h3>
                <p className="text-gray-700 text-sm">
                  Upload meeting transcripts and generate action items, key decisions, and follow-up tasks
                  automatically.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Legal Research</h3>
                <p className="text-gray-700 text-sm">
                  Analyze case law, contracts, and legal documents to find relevant precedents and extract key legal
                  principles.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Content Creation</h3>
                <p className="text-gray-700 text-sm">
                  Research topics thoroughly by uploading relevant sources and generating fact-based content with proper
                  citations.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Getting Started: Your First Steps</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Now that you understand what NotebookLM is and its capabilities, let's prepare you for hands-on learning. In
            the next lesson, we'll dive deep into the interface, but here's what you should do right now:
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Action Items for This Lesson</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-700">Create your NotebookLM account if you haven't already</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-700">
                  Explore the main dashboard and familiarize yourself with the layout
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-700">Create your first notebook (we'll use it in the next lesson)</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-700">
                  Think about a research project you'd like to work on throughout this course
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercise */}
        <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <BookOpen className="w-5 h-5 text-orange-600" />
              <span>Practice Exercise</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Exercise 1: Account Setup and First Notebook</h3>
            <div className="space-y-3 mb-4">
              <p className="text-gray-700">Complete the following tasks to practice what you've learned:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Successfully create and access your NotebookLM account</li>
                <li>Create a new notebook with a descriptive name</li>
                <li>Explore each section of the interface (sources, chat, notes)</li>
                <li>Write down three potential use cases for NotebookLM in your work or studies</li>
              </ol>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="text-gray-800 font-semibold mb-2">Reflection Questions:</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• What type of research or analysis do you do most often?</li>
                <li>• How could NotebookLM improve your current workflow?</li>
                <li>• What documents or sources would you like to analyze first?</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Lesson Summary */}
        <Card className="bg-white border-green-200 shadow-sm mb-8">
          <CardHeader>
            <CardTitle className="text-gray-800">Lesson Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">
                In this lesson, you've learned the fundamentals of Google NotebookLM and how it differs from other AI
                tools. You now understand:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "What NotebookLM is and its core purpose",
                  "Key benefits including source-grounded responses",
                  "Who can benefit from using this tool",
                  "How to set up your account and create notebooks",
                  "Basic interface components and their functions",
                  "Real-world applications across different fields",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Knowledge Check */}
        <Card className="bg-blue-50 border-blue-200 mb-8">
          <CardHeader>
            <CardTitle className="text-gray-800">Knowledge Check</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="text-gray-800 font-semibold mb-3">Quick Quiz: Test Your Understanding</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 1:</strong> What makes NotebookLM different from general AI chatbots?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> NotebookLM creates responses based specifically on your uploaded
                        documents rather than general internet knowledge, and provides citations for every response.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 2:</strong> Name three types of professionals who would benefit from NotebookLM.
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> Researchers/academics, students, business professionals, content
                        creators, legal professionals, or anyone who works with documents and needs to extract insights.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 3:</strong> What are the four main components of the NotebookLM interface?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> Notebook Dashboard, Sources Panel, Chat Interface, and Notes Section.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/course">
            <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Course
            </Button>
          </Link>
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-2">Next Lesson</div>
            <Link href="/course/lesson-2">
              <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
                Interface Overview
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
