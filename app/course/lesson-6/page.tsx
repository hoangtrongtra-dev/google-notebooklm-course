import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  ArrowLeft,
  Target,
  BookOpen,
  Settings,
  Zap,
  Share2,
  Download,
  Search,
  Filter,
  Users,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function Lesson6() {
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
            <div className="text-sm text-gray-500">Lesson 6 of 7</div>
            <div className="text-gray-800 font-semibold">Advanced Tips and Tools</div>
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
                "Master advanced search and filtering techniques",
                "Utilize collaboration features for team research",
                "Integrate NotebookLM with other tools and workflows",
                "Optimize your research workflow for maximum efficiency",
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Advanced Tips and Tools for Power Users</h1>

          <div className="bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Unlocking NotebookLM's Full Potential</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Now that you've mastered the fundamentals, it's time to explore NotebookLM's advanced features and
              power-user techniques. This lesson will transform you from a competent user into a NotebookLM expert,
              capable of handling complex research scenarios and optimizing your workflow for maximum productivity.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Advanced Search and Filtering Techniques</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Beyond basic search functionality, NotebookLM offers sophisticated ways to locate and filter information
            across your research collection. These advanced techniques can dramatically speed up your research process.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Semantic Search Strategies</h3>

          <Card className="bg-blue-50 border-blue-200 mb-6">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Search className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Concept-Based Searching</h3>
                  <p className="text-gray-700 mb-4">
                    NotebookLM understands concepts, not just keywords. This allows for more sophisticated search
                    strategies that find relevant information even when exact terms don't match.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-3 border border-blue-100">
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Conceptual Search:</strong>
                      </p>
                      <p className="text-gray-700 text-sm font-mono">
                        "Find discussions about employee motivation that don't necessarily use the word 'motivation'"
                      </p>
                    </div>
                    <div className="bg-white rounded p-3 border border-blue-100">
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Relationship Queries:</strong>
                      </p>
                      <p className="text-gray-700 text-sm font-mono">
                        "What connections exist between leadership styles and team performance across the sources?"
                      </p>
                    </div>
                    <div className="bg-white rounded p-3 border border-blue-100">
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Contextual Search:</strong>
                      </p>
                      <p className="text-gray-700 text-sm font-mono">
                        "Find mentions of 'innovation' specifically in the context of organizational culture"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Advanced Filtering Techniques</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Filter className="w-5 h-5 text-emerald-600 mr-2" />
                  Temporal Filtering
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Filter information by time periods, publication dates, or chronological relevance.
                </p>
                <div className="bg-gray-50 rounded p-3 text-xs">
                  <p className="text-gray-700 mb-2">
                    <strong>Examples:</strong>
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• "Show only findings from 2022-2024"</li>
                    <li>• "What changed between early and recent studies?"</li>
                    <li>• "Focus on pre-pandemic vs. post-pandemic data"</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Settings className="w-5 h-5 text-emerald-600 mr-2" />
                  Methodological Filtering
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Filter by research methodology, sample size, or study design characteristics.
                </p>
                <div className="bg-gray-50 rounded p-3 text-xs">
                  <p className="text-gray-700 mb-2">
                    <strong>Examples:</strong>
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• "Show only quantitative studies"</li>
                    <li>• "Focus on studies with sample size &gt;1000"</li>
                    <li>• "Include only peer-reviewed research"</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Collaboration Features and Team Research</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            NotebookLM's collaboration features enable teams to work together on research projects, share insights, and
            build collective knowledge. Understanding these features is essential for organizational research
            initiatives.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sharing and Permissions</h3>

          <Card className="bg-purple-50 border-purple-200 mb-6">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                <Share2 className="w-5 h-5 mr-2" />
                Notebook Sharing Options
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-gray-800 font-semibold mb-2">View-Only Access</h5>
                  <p className="text-gray-700 text-sm mb-2">
                    Share research findings with stakeholders who need to review but not edit.
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1 ml-4">
                    <li>• Perfect for presenting findings to executives</li>
                    <li>• Allows reading sources and chat history</li>
                    <li>• Recipients can't modify or add content</li>
                    <li>• Maintains research integrity</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-gray-800 font-semibold mb-2">Collaborative Access</h5>
                  <p className="text-gray-700 text-sm mb-2">
                    Enable team members to contribute sources, ask questions, and build on research together.
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1 ml-4">
                    <li>• Multiple researchers can add sources</li>
                    <li>• Shared conversation history</li>
                    <li>• Collective insight building</li>
                    <li>• Version tracking and attribution</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Team Research Workflows</h3>

          <div className="space-y-6 mb-8">
            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Users className="w-5 h-5 text-emerald-600 mr-2" />
                  Distributed Research Model
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Assign different team members to research specific aspects of a topic, then combine insights.
                </p>
                <div className="bg-gray-50 rounded p-3">
                  <p className="text-gray-700 text-sm">
                    <strong>Example Workflow:</strong>
                  </p>
                  <ol className="text-gray-600 text-xs mt-2 space-y-1">
                    <li>1. Team lead creates main research notebook</li>
                    <li>2. Each member focuses on specific subtopics</li>
                    <li>3. Individual findings are added to shared notebook</li>
                    <li>4. Team collaboratively synthesizes results</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Integration with External Tools</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Maximize NotebookLM's value by integrating it with your existing research and productivity tools. These
            integrations create seamless workflows that enhance your overall research capabilities.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Export and Import Strategies</h3>

          <Card className="bg-orange-50 border-orange-200 mb-6">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-orange-800 mb-3 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Data Export Options
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-gray-800 font-semibold mb-2">Research Outputs</h5>
                  <p className="text-gray-700 text-sm mb-2">
                    Export your research findings in various formats for different use cases.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-white rounded p-3 border border-orange-100">
                      <p className="text-gray-700 text-sm font-semibold">Academic Formats</p>
                      <ul className="text-gray-600 text-xs mt-1 space-y-1">
                        <li>• Formatted citations (APA, MLA, Chicago)</li>
                        <li>• Bibliography exports</li>
                        <li>• Research summaries with references</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded p-3 border border-orange-100">
                      <p className="text-gray-700 text-sm font-semibold">Business Formats</p>
                      <ul className="text-gray-600 text-xs mt-1 space-y-1">
                        <li>• Executive summary documents</li>
                        <li>• Presentation-ready content</li>
                        <li>• Data tables and charts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Workflow Optimization Strategies</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Develop systematic approaches to research that maximize efficiency and ensure consistent, high-quality
            results. These optimization strategies are based on best practices from experienced researchers.
          </p>

          <Card className="bg-emerald-50 border-emerald-200 mb-8">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-emerald-800 mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Power User Techniques
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-gray-800 font-semibold mb-2">Batch Processing</h5>
                  <p className="text-gray-700 text-sm mb-2">
                    Process multiple sources or queries simultaneously for maximum efficiency.
                  </p>
                  <div className="bg-white rounded p-3 border border-emerald-100 text-xs">
                    <p className="text-gray-700 mb-1">
                      <strong>Example:</strong>
                    </p>
                    <p className="text-gray-600">
                      "Analyze all uploaded sources and provide: 1) Main thesis of each, 2) Key methodology used, 3)
                      Primary findings, 4) Limitations noted. Format as a comparison table."
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="text-gray-800 font-semibold mb-2">Progressive Refinement</h5>
                  <p className="text-gray-700 text-sm mb-2">
                    Use iterative questioning to progressively refine and deepen your analysis.
                  </p>
                  <div className="bg-white rounded p-3 border border-emerald-100 text-xs">
                    <p className="text-gray-700 mb-1">
                      <strong>Technique:</strong>
                    </p>
                    <p className="text-gray-600">
                      Start broad → Identify interesting patterns → Drill down on specific aspects → Validate findings →
                      Generate insights
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Exercise 6: Advanced Techniques Mastery</h3>
            <div className="space-y-3 mb-4">
              <p className="text-gray-700">Master advanced NotebookLM techniques with this comprehensive challenge:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Implement a complex search strategy using semantic and temporal filtering</li>
                <li>Set up a collaborative research project with team members</li>
                <li>Create and test a research template for your field</li>
                <li>Conduct a meta-analysis across multiple sources using advanced prompts</li>
                <li>Export findings in multiple formats for different audiences</li>
                <li>Optimize your workflow using batch processing techniques</li>
              </ol>
            </div>
            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <h4 className="text-gray-800 font-semibold mb-2">Expert Challenge:</h4>
              <p className="text-gray-700 text-sm">
                Design a complete research workflow that integrates NotebookLM with at least two external tools.
                Document your process and create a reusable template that others in your organization could follow.
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
                You've mastered advanced NotebookLM techniques and power-user strategies. Key achievements include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Advanced search and filtering techniques for complex queries",
                  "Collaboration features for team-based research projects",
                  "Integration strategies with external tools and workflows",
                  "Workflow optimization and template-based research",
                  "Meta-analysis and systematic review methodologies",
                  "Performance optimization for large-scale research",
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
                <h4 className="text-gray-800 font-semibold mb-3">Quick Quiz: Advanced Techniques</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 1:</strong> What is the advantage of semantic search over keyword search in
                      NotebookLM?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> Semantic search understands concepts and relationships, finding
                        relevant information even when exact keywords don't match, enabling more sophisticated research
                        queries.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 2:</strong> What are the key benefits of using research templates?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> Templates ensure consistency, completeness, and efficiency across
                        research projects while maintaining quality standards and enabling knowledge transfer.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 3:</strong> How can you optimize performance for large research projects?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> Use modular architecture with focused sub-notebooks, remove irrelevant
                        sources, use specific queries, and implement quality control systems.
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
          <Link href="/course/lesson-5">
            <Button variant="outline" className="border-green-300 text-gray-700 hover:bg-green-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous Lesson
            </Button>
          </Link>
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-2">Final Lesson</div>
            <Link href="/course/lesson-7">
              <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
                Real-World Use Cases
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
