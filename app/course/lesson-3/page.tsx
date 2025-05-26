import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Target,
  AlertCircle,
  BookOpen,
  Upload,
  FolderOpen,
  Tag,
} from "lucide-react"
import Link from "next/link"

export default function Lesson3() {
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
            <div className="text-sm text-gray-500">Lesson 3 of 7</div>
            <div className="text-gray-800 font-semibold">Managing Research Materials</div>
          </div>
          <div className="text-gray-500">50 min</div>
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
                "Upload and manage various file types effectively",
                "Organize sources using tags and categories",
                "Master search and filtering techniques",
                "Implement best practices for source organization",
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Managing Research Materials in NotebookLM</h1>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Building Your Research Foundation</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Effective source management is the cornerstone of successful research with NotebookLM. In this lesson,
              you'll learn how to upload, organize, and efficiently work with various types of research materials to
              create a powerful knowledge base for your AI assistant.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding Source Types</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            NotebookLM supports a wide variety of source materials, each with its own strengths and use cases.
            Understanding which source type to use for different situations will help you build more effective research
            collections.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <Upload className="w-5 h-5 text-emerald-600 mr-2" />
                  Document Files
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  Upload PDFs, Word documents, and text files directly to your notebook.
                </p>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li>• PDF files (research papers, reports)</li>
                  <li>• Word documents (.docx, .doc)</li>
                  <li>• Plain text files (.txt)</li>
                  <li>• Google Docs (via export)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <FolderOpen className="w-5 h-5 text-emerald-600 mr-2" />
                  Web Sources
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  Add web pages and online articles by URL for real-time content analysis.
                </p>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li>• News articles and blog posts</li>
                  <li>• Academic papers online</li>
                  <li>• Company websites and reports</li>
                  <li>• Wikipedia articles</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-blue-50 border-blue-200 mb-8">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">File Size and Format Limitations</h3>
                  <p className="text-gray-700 mb-3">
                    NotebookLM has specific limitations for uploaded sources to ensure optimal performance:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Maximum file size: 200MB per document</li>
                    <li>• PDF files should be text-based (not scanned images)</li>
                    <li>• Up to 50 sources per notebook</li>
                    <li>• Web pages must be publicly accessible</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Uploading Sources: Step-by-Step Guide</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Let's walk through the process of adding different types of sources to your notebook. Each method has its
            own workflow and best practices.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Method 1: Uploading Document Files</h3>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Access the Sources Panel</h4>
                <p className="text-gray-700">
                  In your notebook, locate the Sources panel on the left side of the interface. Click the "+" button or
                  "Add Source" to begin.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Choose Upload Method</h4>
                <p className="text-gray-700">
                  Select "Upload file" from the options. You can either click to browse your files or drag and drop
                  documents directly onto the upload area.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Wait for Processing</h4>
                <p className="text-gray-700">
                  NotebookLM will process your document, extracting text and creating a summary. This usually takes
                  30-60 seconds depending on file size.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                4
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Review and Organize</h4>
                <p className="text-gray-700">
                  Once processed, review the auto-generated summary and add tags or notes to help organize your source.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Method 2: Adding Web Sources</h3>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Select Web Source Option</h4>
                <p className="text-gray-700">
                  In the Sources panel, click "Add Source" and select "Website" or "URL" from the available options.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Enter the URL</h4>
                <p className="text-gray-700">
                  Paste the complete URL of the webpage you want to add. Ensure the page is publicly accessible and
                  doesn't require login credentials.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Verify Content Extraction</h4>
                <p className="text-gray-700">
                  NotebookLM will fetch and process the webpage content. Review the extracted text to ensure it captured
                  the relevant information.
                </p>
              </div>
            </div>
          </div>

          <Card className="bg-yellow-50 border-yellow-200 mb-8">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Web Source Best Practices</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Test URLs in a private browser window to ensure public accessibility</li>
                    <li>• Avoid pages with heavy JavaScript or dynamic content that may not extract properly</li>
                    <li>• Consider saving important web content as PDFs for more reliable access</li>
                    <li>• Be aware that web content may change over time, affecting your research</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Organizing Your Sources</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            As your research collection grows, organization becomes crucial for efficiency. NotebookLM provides several
            tools to help you categorize, tag, and structure your sources for easy retrieval and analysis.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Naming Conventions</h3>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Establishing consistent naming conventions for your sources will save you significant time when searching
            and referencing materials later in your research process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Effective Naming Examples</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-white rounded p-2 font-mono text-gray-700">"Smith_2024_AI_Ethics_Review.pdf"</div>
                  <div className="bg-white rounded p-2 font-mono text-gray-700">
                    "Market_Research_Q4_2024_Tech_Trends"
                  </div>
                  <div className="bg-white rounded p-2 font-mono text-gray-700">
                    "Interview_Transcript_CEO_TechCorp"
                  </div>
                </div>
                <p className="text-gray-700 text-xs mt-3">
                  Include author, date, topic, and document type for easy identification.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-red-800 mb-3">Avoid These Naming Patterns</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-white rounded p-2 font-mono text-gray-700">"Document1.pdf"</div>
                  <div className="bg-white rounded p-2 font-mono text-gray-700">"Untitled"</div>
                  <div className="bg-white rounded p-2 font-mono text-gray-700">"Research stuff"</div>
                </div>
                <p className="text-gray-700 text-xs mt-3">
                  Vague names make it difficult to identify content and purpose later.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Using Tags and Categories</h3>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            While NotebookLM doesn't have a formal tagging system, you can create your own organizational structure
            using consistent naming patterns and source descriptions.
          </p>

          <Card className="bg-purple-50 border-purple-200 mb-6">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                <Tag className="w-5 h-5 mr-2" />
                Tagging Strategies
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-gray-800 font-semibold mb-2">Topic-Based Tags</h5>
                  <p className="text-gray-700 text-sm mb-2">Use consistent prefixes to group related sources:</p>
                  <div className="bg-white rounded p-3 text-sm">
                    <div className="text-gray-700 space-y-1">
                      <div>• [THEORY] - Theoretical frameworks and concepts</div>
                      <div>• [EMPIRICAL] - Research studies and data</div>
                      <div>• [CASE] - Case studies and examples</div>
                      <div>• [REVIEW] - Literature reviews and meta-analyses</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-gray-800 font-semibold mb-2">Priority-Based Tags</h5>
                  <p className="text-gray-700 text-sm mb-2">Indicate importance or urgency:</p>
                  <div className="bg-white rounded p-3 text-sm">
                    <div className="text-gray-700 space-y-1">
                      <div>• [HIGH] - Critical sources for your research</div>
                      <div>• [MED] - Supporting or supplementary sources</div>
                      <div>• [LOW] - Background or reference materials</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Exercise 3: Source Management Mastery</h3>
            <div className="space-y-3 mb-4">
              <p className="text-gray-700">Complete this comprehensive source management exercise:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Upload 3 different types of sources (PDF, web page, text document)</li>
                <li>Rename each source using a consistent naming convention</li>
                <li>Create a simple organizational system with prefixes or categories</li>
                <li>Practice searching for sources by title and content</li>
                <li>Add context notes to each source explaining its relevance</li>
                <li>Test the AI's ability to find information across your sources</li>
              </ol>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="text-gray-800 font-semibold mb-2">Challenge Task:</h4>
              <p className="text-gray-700 text-sm">
                Create a "research portfolio" with at least 5 sources on a topic of your choice. Organize them using the
                best practices learned in this lesson, then ask the AI to provide a comprehensive overview of your topic
                based on all sources.
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
                You've mastered the essential skills for managing research materials in NotebookLM. Key achievements
                include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Understanding different source types and their uses",
                  "Mastering upload processes for documents and web sources",
                  "Implementing effective naming and organization systems",
                  "Using search and filtering techniques efficiently",
                  "Applying quality control measures for source selection",
                  "Managing large source collections systematically",
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
                <h4 className="text-gray-800 font-semibold mb-3">Quick Quiz: Source Management</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 1:</strong> What is the maximum file size for uploading documents to NotebookLM?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> 200MB per document, with up to 50 sources per notebook.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 2:</strong> Name three elements that should be included in an effective source
                      naming convention.
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> Author/source, date, topic/subject, and document type for easy
                        identification and organization.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 3:</strong> What should you do before uploading any source to your notebook?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> Evaluate the source for credibility, relevance, currency, unique value,
                        and proper formatting for AI analysis.
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
          <Link href="/course/lesson-2">
            <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous Lesson
            </Button>
          </Link>
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-2">Next Lesson</div>
            <Link href="/course/lesson-4">
              <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
                Using the AI Assistant
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
