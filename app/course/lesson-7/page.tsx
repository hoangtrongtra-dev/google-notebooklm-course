import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Target,
  BookOpen,
  Briefcase,
  GraduationCap,
  Scale,
  Stethoscope,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function Lesson7() {
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
            <div className="text-sm text-gray-500">Lesson 7 of 7</div>
            <div className="text-gray-800 font-semibold">Real-World Use Cases</div>
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
              {[
                "Apply NotebookLM across different industries and use cases",
                "Understand sector-specific research methodologies",
                "Implement best practices for professional contexts",
                "Develop expertise in your field using NotebookLM",
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Real-World Applications Across Industries</h1>

          <div className="bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">From Theory to Practice</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              In this final lesson, we'll explore how NotebookLM transforms research and analysis across different
              industries and professional contexts. You'll see real-world applications, learn industry-specific best
              practices, and discover how to adapt your NotebookLM skills to your particular field or interests.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Academic Research and Education</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Academic researchers and educators are among the most active NotebookLM users, leveraging its capabilities
            for literature reviews, thesis research, curriculum development, and student support.
          </p>

          <Card className="bg-blue-50 border-blue-200 mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2" />
                Academic Use Cases
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Literature Review and Meta-Analysis</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Dr. Sarah Chen, a psychology researcher, uses NotebookLM to conduct systematic literature reviews
                    for her studies on workplace stress.
                  </p>
                  <div className="bg-white rounded p-4 border border-blue-100">
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Workflow:</strong>
                    </p>
                    <ol className="text-gray-600 text-xs space-y-1">
                      <li>1. Upload 50+ research papers from PubMed and PsycINFO</li>
                      <li>2. Use semantic search to identify common themes and methodologies</li>
                      <li>3. Generate comparison tables of study characteristics</li>
                      <li>4. Identify research gaps and contradictory findings</li>
                      <li>5. Create comprehensive literature review with proper citations</li>
                    </ol>
                  </div>
                  <div className="bg-emerald-50 border-emerald-200 rounded p-3 mt-3">
                    <p className="text-emerald-800 text-sm">
                      <strong>Result:</strong> Reduced literature review time from 3 months to 3 weeks while improving
                      comprehensiveness and accuracy.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Thesis and Dissertation Research</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Graduate student Marcus Rodriguez used NotebookLM throughout his PhD research on renewable energy
                    policy.
                  </p>
                  <div className="bg-white rounded p-4 border border-blue-100">
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Application:</strong>
                    </p>
                    <ul className="text-gray-600 text-xs space-y-1">
                      <li>• Analyzed 200+ policy documents from 15 countries</li>
                      <li>• Tracked policy evolution over 20-year period</li>
                      <li>• Identified successful implementation patterns</li>
                      <li>• Generated framework for policy effectiveness</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Business and Corporate Research</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Business professionals use NotebookLM for market research, competitive analysis, strategic planning, and
            decision support across various corporate functions.
          </p>

          <Card className="bg-emerald-50 border-emerald-200 mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4 flex items-center">
                <Briefcase className="w-6 h-6 mr-2" />
                Business Applications
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Market Research and Analysis</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    TechCorp's market research team uses NotebookLM to analyze emerging technology trends and
                    competitive landscapes.
                  </p>
                  <div className="bg-white rounded p-4 border border-emerald-100">
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Case Study: AI Market Analysis</strong>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-700 text-xs mb-1">
                          <strong>Sources Used:</strong>
                        </p>
                        <ul className="text-gray-600 text-xs space-y-1">
                          <li>• Industry reports (Gartner, McKinsey)</li>
                          <li>• Competitor financial statements</li>
                          <li>• Patent filings and research papers</li>
                          <li>• Customer survey data</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-gray-700 text-xs mb-1">
                          <strong>Key Insights Generated:</strong>
                        </p>
                        <ul className="text-gray-600 text-xs space-y-1">
                          <li>• Market size projections</li>
                          <li>• Competitive positioning analysis</li>
                          <li>• Technology adoption patterns</li>
                          <li>• Investment opportunities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Legal and Compliance Research</h2>

          <Card className="bg-purple-50 border-purple-200 mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                <Scale className="w-6 h-6 mr-2" />
                Legal Applications
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Case Law Research and Analysis</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Corporate law firm uses NotebookLM to analyze precedent cases and develop legal arguments.
                  </p>
                  <div className="bg-white rounded p-4 border border-purple-100">
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Example: Intellectual Property Case</strong>
                    </p>
                    <ul className="text-gray-600 text-xs space-y-1">
                      <li>• Analyzed 100+ relevant court decisions</li>
                      <li>• Identified patterns in judicial reasoning</li>
                      <li>• Found supporting precedents for client's position</li>
                      <li>• Generated comprehensive legal brief with citations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Healthcare and Medical Research</h2>

          <Card className="bg-red-50 border-red-200 mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                <Stethoscope className="w-6 h-6 mr-2" />
                Healthcare Applications
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Clinical Research and Evidence Synthesis</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Medical research team conducts systematic reviews for treatment effectiveness studies.
                  </p>
                  <div className="bg-white rounded p-4 border border-red-100">
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Research Protocol:</strong>
                    </p>
                    <ol className="text-gray-600 text-xs space-y-1">
                      <li>1. Systematic literature search across medical databases</li>
                      <li>2. Quality assessment of clinical trials</li>
                      <li>3. Data extraction and meta-analysis preparation</li>
                      <li>4. Evidence grading and recommendation development</li>
                      <li>5. Clinical guideline creation</li>
                    </ol>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Building Your Professional Expertise</h2>

          <Card className="bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 mb-8">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Professional Development Framework</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h5 className="text-gray-800 font-semibold">Identify Your Niche</h5>
                    <p className="text-gray-700 text-sm">
                      Focus on specific research areas where you can develop deep expertise and create unique value.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h5 className="text-gray-800 font-semibold">Develop Standard Workflows</h5>
                    <p className="text-gray-700 text-sm">
                      Create repeatable processes that ensure consistency and quality across all your research projects.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h5 className="text-gray-800 font-semibold">Build Quality Networks</h5>
                    <p className="text-gray-700 text-sm">
                      Establish relationships with reliable sources, expert reviewers, and collaborative partners.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h5 className="text-gray-800 font-semibold">Continuous Learning</h5>
                    <p className="text-gray-700 text-sm">
                      Stay updated with industry developments, new research methods, and evolving best practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    5
                  </div>
                  <div>
                    <h5 className="text-gray-800 font-semibold">Share and Teach</h5>
                    <p className="text-gray-700 text-sm">
                      Document your expertise and share knowledge with colleagues to build your professional reputation.
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
              <span>Final Practice Exercise</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Exercise 7: Industry Application Mastery</h3>
            <div className="space-y-3 mb-4">
              <p className="text-gray-700">Apply NotebookLM to a real-world scenario in your field:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Choose a current challenge or opportunity in your industry</li>
                <li>Design a comprehensive research strategy using industry best practices</li>
                <li>Collect and analyze relevant sources using advanced techniques</li>
                <li>Generate actionable insights and recommendations</li>
                <li>Create professional deliverables for your target audience</li>
                <li>Document your methodology for future replication</li>
              </ol>
            </div>
            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <h4 className="text-gray-800 font-semibold mb-2">Capstone Challenge:</h4>
              <p className="text-gray-700 text-sm">
                Create a complete case study demonstrating how NotebookLM transformed your research process. Include
                before/after comparisons, time savings, quality improvements, and lessons learned. This will serve as
                your portfolio piece and reference for future projects.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Course Completion */}
        <Card className="bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Award className="w-5 h-5 text-emerald-600" />
              <span>Congratulations!</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">You've Completed the NotebookLM Mastery Course</h3>
            <p className="text-gray-700 mb-4">
              You've successfully mastered Google NotebookLM and are now equipped with the skills to transform your
              research workflow. You understand the platform's capabilities, can apply advanced techniques, and know how
              to adapt these skills to your specific professional context.
            </p>
            <div className="bg-white rounded-lg p-4 border border-emerald-200">
              <h4 className="text-gray-800 font-semibold mb-2">What You've Achieved:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Complete understanding of NotebookLM fundamentals",
                  "Advanced AI interaction and prompting skills",
                  "Professional research project management",
                  "Industry-specific application expertise",
                  "Workflow optimization and efficiency techniques",
                  "Real-world problem-solving capabilities",
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
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
                In this final lesson, you've explored real-world applications across multiple industries. Key learnings
                include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Academic research and literature review applications",
                  "Business intelligence and market research use cases",
                  "Legal research and compliance monitoring",
                  "Healthcare and medical research applications",
                  "Government policy analysis and development",
                  "Content creation and investigative journalism",
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
            <CardTitle className="text-gray-800">Final Knowledge Check</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="text-gray-800 font-semibold mb-3">Course Mastery Assessment</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 1:</strong> What are the key differences between academic and business research
                      approaches in NotebookLM?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> Academic research emphasizes rigorous methodology, peer review, and
                        comprehensive literature coverage, while business research focuses on actionable insights,
                        competitive intelligence, and executive-friendly deliverables.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 2:</strong> How should legal professionals adapt their NotebookLM usage for
                      compliance and accuracy?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> Legal professionals should verify all citations independently, consider
                        jurisdictional differences, maintain client confidentiality, and cross-reference multiple
                        authoritative legal databases.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 3:</strong> What are the emerging opportunities for AI-powered research tools?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> Key opportunities include AI-human collaboration, real-time research
                        with live data feeds, cross-domain integration, and automated quality assurance with bias
                        detection.
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
          <Link href="/course/lesson-6">
            <Button variant="outline" className="border-green-300 text-gray-700 hover:bg-green-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous Lesson
            </Button>
          </Link>
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-2">Course Complete!</div>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
                Go to Dashboard
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
