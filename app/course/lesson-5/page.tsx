import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Target,
  AlertCircle,
  BookOpen,
  FolderOpen,
  FileText,
  Users,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function Lesson5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="border-b border-green-200 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/course"
            className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Course</span>
          </Link>
          <div className="text-center">
            <div className="text-sm text-gray-500">Lesson 5 of 7</div>
            <div className="text-gray-800 font-semibold">Creating a Research Project</div>
          </div>
          <div className="text-gray-500">60 min</div>
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
                "Plan and structure a comprehensive research project",
                "Organize materials and sources for maximum efficiency",
                "Generate insights and synthesize findings across sources",
                "Create professional outputs and deliverables",
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Creating Your First Complete Research Project</h1>

          <div className="bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">From Sources to Insights: A Complete Workflow</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              In this hands-on lesson, you'll build your first complete research project using NotebookLM. We'll walk
              through every step from initial planning to final deliverables, giving you a proven framework you can use
              for any research topic. By the end, you'll have a comprehensive project that demonstrates all the skills
              you've learned.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Planning and Setup</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Successful research projects begin with careful planning. Before uploading a single source, you need a clear
            understanding of your research goals, scope, and intended outcomes. This planning phase will guide all your
            subsequent decisions.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Research Project Framework</h3>

          <Card className="bg-blue-50 border-blue-200 mb-6">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Essential Planning Questions</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-gray-800 font-semibold mb-2">1. Research Purpose</h5>
                  <ul className="text-gray-700 text-sm space-y-1 ml-4">
                    <li>• What specific question are you trying to answer?</li>
                    <li>• What problem are you trying to solve?</li>
                    <li>• Who will use your research findings?</li>
                    <li>• What decisions will your research inform?</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-gray-800 font-semibold mb-2">2. Scope and Boundaries</h5>
                  <ul className="text-gray-700 text-sm space-y-1 ml-4">
                    <li>• What time period will you focus on?</li>
                    <li>• What geographic or demographic scope?</li>
                    <li>• What aspects will you include/exclude?</li>
                    <li>• How deep will your analysis go?</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-gray-800 font-semibold mb-2">3. Success Criteria</h5>
                  <ul className="text-gray-700 text-sm space-y-1 ml-4">
                    <li>• What would a successful outcome look like?</li>
                    <li>• What specific insights do you need?</li>
                    <li>• What format should your final output take?</li>
                    <li>• How will you measure research quality?</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sample Project: "Remote Work Impact Analysis"</h3>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            To demonstrate the complete workflow, we'll build a sample research project analyzing the impact of remote
            work on employee productivity and satisfaction. This example will show you how to apply each step of the
            process to your own research topics.
          </p>

          <Card className="bg-emerald-50 border-emerald-200 mb-8">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-emerald-800 mb-3">Sample Project Definition</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="text-gray-800 font-semibold">Research Question:</h5>
                  <p className="text-gray-700 text-sm">
                    "How has the shift to remote work affected employee productivity and job satisfaction across
                    different industries, and what factors contribute to successful remote work implementations?"
                  </p>
                </div>
                <div>
                  <h5 className="text-gray-800 font-semibold">Scope:</h5>
                  <p className="text-gray-700 text-sm">
                    Focus on studies from 2020-2024, covering multiple industries, with emphasis on quantitative
                    productivity measures and qualitative satisfaction indicators.
                  </p>
                </div>
                <div>
                  <h5 className="text-gray-800 font-semibold">Intended Outcome:</h5>
                  <p className="text-gray-700 text-sm">
                    A comprehensive report with actionable recommendations for organizations implementing or optimizing
                    remote work policies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Source Collection Strategy</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            With your project framework defined, you need a systematic approach to collecting and organizing sources.
            This isn't just about finding any relevant information—it's about building a comprehensive, balanced
            collection that supports rigorous analysis.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">The 4-Layer Source Strategy</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <FolderOpen className="w-5 h-5 text-emerald-600 mr-2" />
                  Layer 1: Foundation Sources
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Core academic papers, authoritative reports, and seminal works that establish the theoretical
                  foundation.
                </p>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li>• 3-5 key academic studies</li>
                  <li>• Government or industry reports</li>
                  <li>• Established theoretical frameworks</li>
                  <li>• Meta-analyses or literature reviews</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <FileText className="w-5 h-5 text-emerald-600 mr-2" />
                  Layer 2: Current Evidence
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Recent studies, surveys, and data that provide current insights and trends.
                </p>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li>• Recent empirical studies</li>
                  <li>• Current survey data</li>
                  <li>• Industry trend reports</li>
                  <li>• Statistical analyses</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Users className="w-5 h-5 text-emerald-600 mr-2" />
                  Layer 3: Practical Perspectives
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Case studies, practitioner insights, and real-world implementation examples.
                </p>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li>• Company case studies</li>
                  <li>• Implementation guides</li>
                  <li>• Best practice examples</li>
                  <li>• Practitioner interviews</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 text-emerald-600 mr-2" />
                  Layer 4: Diverse Viewpoints
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Alternative perspectives, critiques, and contrarian views that provide balance.
                </p>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li>• Critical analyses</li>
                  <li>• Alternative methodologies</li>
                  <li>• Contrarian viewpoints</li>
                  <li>• Cross-cultural perspectives</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-yellow-50 border-yellow-200 mb-8">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Source Quality Checklist</h3>
                  <p className="text-gray-700 mb-3">
                    Before adding any source to your project, evaluate it against these criteria:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <h4 className="text-gray-800 font-semibold text-sm mb-1">Credibility</h4>
                      <ul className="text-gray-700 text-xs space-y-1">
                        <li>• Reputable author/organization</li>
                        <li>• Peer-reviewed or verified</li>
                        <li>• Clear methodology</li>
                        <li>• Transparent limitations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-semibold text-sm mb-1">Relevance</h4>
                      <ul className="text-gray-700 text-xs space-y-1">
                        <li>• Directly addresses research question</li>
                        <li>• Appropriate scope and scale</li>
                        <li>• Current and timely</li>
                        <li>• Adds unique value</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Continue with remaining content sections... */}
        </div>

        {/* Practice Exercise */}
        <Card className="bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <BookOpen className="w-5 h-5 text-orange-600" />
              <span>Practice Exercise</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Exercise 5: Complete Research Project</h3>
            <div className="space-y-3 mb-4">
              <p className="text-gray-700">Build your own complete research project following the framework:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Define a research question and scope for a topic of your choice</li>
                <li>Collect 8-10 sources using the 4-layer strategy</li>
                <li>Organize sources with consistent naming and categorization</li>
                <li>Work through all 4 research phases systematically</li>
                <li>Generate at least 2 different output formats (e.g., summary + detailed analysis)</li>
                <li>Conduct quality assurance using the validation prompts</li>
                <li>Document your methodology and create a source bibliography</li>
              </ol>
            </div>
            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <h4 className="text-gray-800 font-semibold mb-2">Suggested Topics:</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Impact of AI on education</li>
                <li>• Sustainable business practices</li>
                <li>• Mental health in the workplace</li>
                <li>• Future of urban transportation</li>
                <li>• Digital privacy and security trends</li>
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
                You've learned to create complete research projects using NotebookLM. Key achievements include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Planning and structuring comprehensive research projects",
                  "Implementing the 4-layer source collection strategy",
                  "Organizing projects with systematic naming and phases",
                  "Conducting thorough analysis through structured phases",
                  "Creating professional outputs for different audiences",
                  "Implementing quality assurance and validation processes",
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
                <h4 className="text-gray-800 font-semibold mb-3">Quick Quiz: Research Project Mastery</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 1:</strong> What are the four layers of the source collection strategy?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> Foundation Sources (core academic papers), Current Evidence (recent
                        studies), Practical Perspectives (case studies), and Diverse Viewpoints (alternative
                        perspectives).
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 2:</strong> What are the four phases of the research process?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> Discovery (understand landscape), Analysis (deep dive into specifics),
                        Synthesis (combine findings), and Documentation (create deliverables).
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 3:</strong> Why is quality assurance important in research projects?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> To identify potential biases, validate findings, ensure logical
                        conclusions, and maintain research integrity and credibility.
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
          <Link href="/course/lesson-4">
            <Button variant="outline" className="border-green-300 text-gray-700 hover:bg-green-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous Lesson
            </Button>
          </Link>
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-2">Next Lesson</div>
            <Link href="/course/lesson-6">
              <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
                Advanced Tips and Tools
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
