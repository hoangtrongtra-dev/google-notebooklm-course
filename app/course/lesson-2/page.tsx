import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, ArrowRight, Target, BookOpen, Settings, Search, FileText } from "lucide-react"
import Link from "next/link"

export default function Lesson2() {
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
            <div className="text-sm text-gray-500">Lesson 2 of 7</div>
            <div className="text-gray-800 font-semibold">Interface Overview</div>
          </div>
          <div className="text-gray-500">40 min</div>
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
              {[
                "Master navigation of the NotebookLM main interface",
                "Understand the function of each interface component",
                "Learn to customize your workspace for optimal productivity",
                "Navigate between notebooks and manage multiple projects",
              ].map((objective, index) => (
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8">NotebookLM Interface Overview</h1>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mastering Your Digital Research Workspace</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Understanding the NotebookLM interface is crucial for efficient research and analysis. In this lesson,
              we'll explore every component of the platform, learn navigation shortcuts, and discover how to customize
              your workspace for maximum productivity.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">The Main Dashboard</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            When you first log into NotebookLM, you'll land on the main dashboard—your command center for all research
            activities. This is where you'll manage multiple projects, access recent work, and create new notebooks.
          </p>

          <Card className="bg-white border-green-200 shadow-sm mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Dashboard Components</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Recent Notebooks</h4>
                    <p className="text-gray-700">Quick access to your most recently accessed research projects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Create New Notebook</h4>
                    <p className="text-gray-700">Large, prominent button to start new research projects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">All Notebooks</h4>
                    <p className="text-gray-700">Complete list of all your notebooks with search and filter options</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Inside a Notebook: The Core Interface</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Once you open a notebook, you'll see the main working interface. This is where you'll spend most of your
            time, so understanding each component is essential for efficient workflow.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Left Sidebar: Sources Panel</h3>

          <Card className="bg-blue-50 border-blue-200 mb-6">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <FileText className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Sources: Your Research Foundation</h4>
                  <p className="text-gray-700 mb-4">
                    The Sources panel is where all your research materials live. This includes uploaded PDFs, documents,
                    web pages, and notes that form the knowledge base for your AI assistant.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-gray-700 text-sm">Upload multiple file types (PDF, DOCX, TXT)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-gray-700 text-sm">Add web pages by URL</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-gray-700 text-sm">Create and edit notes directly</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-gray-700 text-sm">View source summaries and metadata</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-8">
            <h4 className="text-xl font-semibold text-gray-800">Key Features of the Sources Panel:</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white border-green-200 shadow-sm">
                <CardContent className="p-4">
                  <h5 className="text-lg font-semibold text-gray-800 mb-2">Source Management</h5>
                  <p className="text-gray-700 text-sm">
                    Each source appears as a card showing title, type, upload date, and a brief summary. You can rename,
                    delete, or view detailed information about each source.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-green-200 shadow-sm">
                <CardContent className="p-4">
                  <h5 className="text-lg font-semibold text-gray-800 mb-2">Quick Actions</h5>
                  <p className="text-gray-700 text-sm">
                    Right-click any source for options like "Summarize," "Find key quotes," or "Compare with other
                    sources." These shortcuts save significant time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Center Area: Chat Interface</h3>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The chat interface is your primary interaction point with the AI assistant. This is where you'll ask
            questions, request analyses, and receive insights based on your uploaded sources.
          </p>

          <Card className="bg-green-50 border-green-200 mb-6">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-3">Chat Interface Features</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h5 className="text-gray-800 font-semibold">Message Input</h5>
                    <p className="text-gray-700 text-sm">
                      Large text area for typing questions and requests. Supports multi-line input for complex queries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h5 className="text-gray-800 font-semibold">Conversation History</h5>
                    <p className="text-gray-700 text-sm">
                      All your questions and AI responses are saved and searchable within each notebook.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    3
                  </div>
                  <div>
                    <h5 className="text-gray-800 font-semibold">Source Citations</h5>
                    <p className="text-gray-700 text-sm">
                      Every AI response includes clickable citations that link directly to relevant sections in your
                      sources.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    4
                  </div>
                  <div>
                    <h5 className="text-gray-800 font-semibold">Suggested Questions</h5>
                    <p className="text-gray-700 text-sm">
                      AI-generated follow-up questions appear after responses to help guide your research.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Right Sidebar: Notes and Tools</h3>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The right sidebar contains your personal notes and additional tools for organizing and analyzing your
            research. This area is customizable and can be collapsed when not needed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <FileText className="w-5 h-5 text-emerald-600 mr-2" />
                  Notes Section
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Create, edit, and organize your personal notes. These notes can also be used as sources for AI
                  analysis.
                </p>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li>• Rich text formatting</li>
                  <li>• Auto-save functionality</li>
                  <li>• Integration with AI responses</li>
                  <li>• Export capabilities</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Settings className="w-5 h-5 text-emerald-600 mr-2" />
                  Notebook Settings
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Access notebook-specific settings, sharing options, and export features.
                </p>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li>• Rename notebook</li>
                  <li>• Sharing permissions</li>
                  <li>• Export options</li>
                  <li>• Delete notebook</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Navigation and Shortcuts</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Efficient navigation is key to productive research. NotebookLM includes several navigation features and
            keyboard shortcuts that will speed up your workflow significantly.
          </p>

          <Card className="bg-yellow-50 border-yellow-200 mb-6">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-yellow-800 mb-3">Essential Keyboard Shortcuts</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Ctrl/Cmd + N</span>
                    <span className="text-gray-600 text-sm">New Notebook</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Ctrl/Cmd + /</span>
                    <span className="text-gray-600 text-sm">Focus Chat Input</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Ctrl/Cmd + K</span>
                    <span className="text-gray-600 text-sm">Search Sources</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Ctrl/Cmd + Enter</span>
                    <span className="text-gray-600 text-sm">Send Message</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Esc</span>
                    <span className="text-gray-600 text-sm">Close Panels</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Ctrl/Cmd + B</span>
                    <span className="text-gray-600 text-sm">Toggle Sidebar</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Advanced Navigation Features</h3>

          <div className="space-y-6 mb-8">
            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Search className="w-5 h-5 text-emerald-600 mr-2" />
                  Global Search
                </h4>
                <p className="text-gray-700 mb-3">
                  Use the search bar at the top of the interface to find content across all your notebooks, sources, and
                  conversations.
                </p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-gray-600 text-sm">
                    <strong>Pro Tip:</strong> Use search operators like "source:filename" or "date:2024" to narrow your
                    results.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Breadcrumb Navigation</h4>
                <p className="text-gray-700 mb-3">
                  The breadcrumb trail at the top shows your current location and allows quick navigation back to
                  previous levels.
                </p>
                <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm text-gray-600">
                  Home &gt; Research Project &gt; Literature Review &gt; Current Notebook
                </div>
              </CardContent>
            </Card>
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
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Exercise 2: Interface Mastery Challenge</h3>
            <div className="space-y-3 mb-4">
              <p className="text-gray-700">Complete these tasks to master the NotebookLM interface:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Create a new notebook and explore each panel (sources, chat, notes)</li>
                <li>Practice using at least 3 keyboard shortcuts from the list above</li>
                <li>Customize your workspace by resizing panels to your preference</li>
                <li>Upload a sample document and observe how it appears in the sources panel</li>
                <li>Navigate back to the dashboard and practice switching between notebooks</li>
                <li>Use the search function to find content across your notebooks</li>
              </ol>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="text-gray-800 font-semibold mb-2">Time Challenge:</h4>
              <p className="text-gray-700 text-sm">
                Try to complete all navigation tasks within 10 minutes. This will help you develop muscle memory for
                efficient interface use.
              </p>
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
                You've now mastered the NotebookLM interface and learned how to navigate efficiently. Key takeaways
                include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Understanding the main dashboard and notebook interface",
                  "Mastering the sources panel for document management",
                  "Efficiently using the chat interface for AI interactions",
                  "Customizing your workspace for optimal productivity",
                  "Essential keyboard shortcuts for faster navigation",
                  "Strategies for managing multiple research projects",
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
                <h4 className="text-gray-800 font-semibold mb-3">Quick Quiz: Interface Mastery</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 1:</strong> What are the three main panels in a NotebookLM notebook interface?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> Sources panel (left), Chat interface (center), and Notes/Tools panel
                        (right).
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 2:</strong> What keyboard shortcut opens the quick switcher for navigating
                      between notebooks?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> Ctrl/Cmd + P opens the quick switcher for instant notebook access.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 3:</strong> How can you customize your workspace layout in NotebookLM?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> You can resize panels by dragging borders, collapse panels by clicking
                        headers, and use the view menu for preset layouts.
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
          <Link href="/course/lesson-1">
            <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous Lesson
            </Button>
          </Link>
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-2">Next Lesson</div>
            <Link href="/course/lesson-3">
              <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
                Managing Research Materials
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
