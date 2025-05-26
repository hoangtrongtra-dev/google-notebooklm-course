import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Target,
  BookOpen,
  MessageSquare,
  Brain,
  Lightbulb,
  Search,
} from "lucide-react"
import Link from "next/link"

export default function Lesson4() {
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
            <div className="text-sm text-gray-500">Lesson 4 of 7</div>
            <div className="text-gray-800 font-semibold">Using the AI Assistant</div>
          </div>
          <div className="text-gray-500">55 min</div>
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
                "Craft effective prompts for maximum AI response quality",
                "Extract key insights and summaries from your documents",
                "Generate comprehensive analyses across multiple sources",
                "Master advanced questioning techniques for deep research",
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Using the AI Assistant Effectively</h1>

          <div className="bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Unlocking the Power of AI-Driven Research</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The AI assistant in NotebookLM is your most powerful research tool. Unlike general AI chatbots, it's
              specifically trained on your uploaded sources, providing accurate, cited responses. In this lesson, you'll
              master the art of asking the right questions to extract maximum value from your research materials.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding How the AI Assistant Works</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Before diving into advanced techniques, it's crucial to understand how NotebookLM's AI assistant processes
            your questions and generates responses. This knowledge will help you craft better prompts and interpret
            results more effectively.
          </p>

          <Card className="bg-blue-50 border-blue-200 mb-8">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Brain className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">How AI Processing Works</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-gray-800 font-semibold">1. Query Analysis</h4>
                      <p className="text-gray-700 text-sm">
                        The AI analyzes your question to understand intent, key concepts, and the type of response
                        needed.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-semibold">2. Source Scanning</h4>
                      <p className="text-gray-700 text-sm">
                        It searches through all your uploaded sources to find relevant information related to your
                        query.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-semibold">3. Information Synthesis</h4>
                      <p className="text-gray-700 text-sm">
                        The AI combines information from multiple sources to create a comprehensive, coherent response.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-semibold">4. Citation Generation</h4>
                      <p className="text-gray-700 text-sm">
                        Every claim is backed with specific citations showing exactly where the information came from.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">The Art of Effective Prompting</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Crafting effective prompts is both an art and a science. The quality of your questions directly impacts the
            usefulness of the AI's responses. Let's explore proven techniques for getting the best results.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Basic Prompt Structure</h3>

          <Card className="bg-emerald-50 border-emerald-200 mb-6">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-emerald-800 mb-3">The CLEAR Framework</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    C
                  </div>
                  <div>
                    <h5 className="text-gray-800 font-semibold">Context</h5>
                    <p className="text-gray-700 text-sm">Provide background or specify the scope of your question</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    L
                  </div>
                  <div>
                    <h5 className="text-gray-800 font-semibold">Length</h5>
                    <p className="text-gray-700 text-sm">Specify how detailed you want the response to be</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    E
                  </div>
                  <div>
                    <h5 className="text-gray-800 font-semibold">Examples</h5>
                    <p className="text-gray-700 text-sm">Ask for specific examples or case studies when relevant</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    A
                  </div>
                  <div>
                    <h5 className="text-gray-800 font-semibold">Audience</h5>
                    <p className="text-gray-700 text-sm">Indicate the intended audience or level of complexity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    R
                  </div>
                  <div>
                    <h5 className="text-gray-800 font-semibold">Result</h5>
                    <p className="text-gray-700 text-sm">Specify the format or type of output you want</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Prompt Examples: From Basic to Advanced</h3>

          <div className="space-y-6 mb-8">
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-red-700 mb-3">❌ Ineffective Prompts</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3 border border-red-100">
                    <p className="text-gray-700 text-sm font-mono">"What does this say?"</p>
                    <p className="text-gray-500 text-xs mt-2">
                      Too vague - doesn't specify what information you're seeking
                    </p>
                  </div>
                  <div className="bg-white rounded p-3 border border-red-100">
                    <p className="text-gray-700 text-sm font-mono">"Summarize everything"</p>
                    <p className="text-gray-500 text-xs mt-2">
                      Too broad - may result in overwhelming or unfocused response
                    </p>
                  </div>
                  <div className="bg-white rounded p-3 border border-red-100">
                    <p className="text-gray-700 text-sm font-mono">"Is this good?"</p>
                    <p className="text-gray-500 text-xs mt-2">
                      Subjective without criteria - AI needs specific evaluation parameters
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-emerald-700 mb-3">✅ Effective Prompts</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3 border border-emerald-100">
                    <p className="text-gray-700 text-sm font-mono">
                      "What are the main arguments for renewable energy adoption mentioned in the policy documents?
                      Please provide 3-5 key points with specific citations."
                    </p>
                    <p className="text-gray-500 text-xs mt-2">Specific topic, clear format, requests citations</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-emerald-100">
                    <p className="text-gray-700 text-sm font-mono">
                      "Compare the methodologies used in the three research studies. Focus on sample sizes, data
                      collection methods, and statistical approaches. Present as a comparison table."
                    </p>
                    <p className="text-gray-500 text-xs mt-2">Specific comparison criteria, clear output format</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-emerald-100">
                    <p className="text-gray-700 text-sm font-mono">
                      "Identify any contradictions or disagreements between the sources regarding climate change impacts
                      on agriculture. Explain each perspective with supporting evidence."
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                      Analytical task, requests evidence, acknowledges multiple perspectives
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Types of Questions and Their Applications</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Different types of questions serve different research purposes. Understanding when to use each type will
            help you extract the most relevant information for your specific needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Search className="w-5 h-5 text-emerald-600 mr-2" />
                  Factual Questions
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Use these to extract specific information, data points, or direct quotes from your sources.
                </p>
                <div className="bg-gray-50 rounded p-3 text-xs">
                  <p className="text-gray-700 mb-2">
                    <strong>Examples:</strong>
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• "What was the sample size in the Johnson study?"</li>
                    <li>• "Which companies were mentioned as market leaders?"</li>
                    <li>• "What are the key statistics on user engagement?"</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Brain className="w-5 h-5 text-emerald-600 mr-2" />
                  Analytical Questions
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Use these to understand relationships, patterns, and deeper meanings within your research.
                </p>
                <div className="bg-gray-50 rounded p-3 text-xs">
                  <p className="text-gray-700 mb-2">
                    <strong>Examples:</strong>
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• "How do these theories relate to each other?"</li>
                    <li>• "What patterns emerge across the case studies?"</li>
                    <li>• "What are the underlying assumptions in this argument?"</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Lightbulb className="w-5 h-5 text-emerald-600 mr-2" />
                  Synthesis Questions
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Use these to combine information from multiple sources into new insights or comprehensive overviews.
                </p>
                <div className="bg-gray-50 rounded p-3 text-xs">
                  <p className="text-gray-700 mb-2">
                    <strong>Examples:</strong>
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• "What consensus emerges from all the studies?"</li>
                    <li>• "How do these findings support or challenge the hypothesis?"</li>
                    <li>• "What would be a comprehensive framework based on these sources?"</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <MessageSquare className="w-5 h-5 text-emerald-600 mr-2" />
                  Comparative Questions
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Use these to identify similarities, differences, and contrasts between sources or concepts.
                </p>
                <div className="bg-gray-50 rounded p-3 text-xs">
                  <p className="text-gray-700 mb-2">
                    <strong>Examples:</strong>
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• "How do these two approaches differ?"</li>
                    <li>• "Which study had the most robust methodology?"</li>
                    <li>• "What are the pros and cons of each strategy?"</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

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
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Exercise 4: AI Assistant Mastery Challenge</h3>
            <div className="space-y-3 mb-4">
              <p className="text-gray-700">Complete this comprehensive AI interaction exercise:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Upload 3-5 sources on a topic of your choice</li>
                <li>Start with a broad overview question using the CLEAR framework</li>
                <li>Ask 3 different types of questions (factual, analytical, comparative)</li>
                <li>Practice chain-of-thought prompting for a complex analysis</li>
                <li>Build a 5-question research conversation following the flow model</li>
                <li>Request specific citation formats for academic or professional use</li>
              </ol>
            </div>
            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <h4 className="text-gray-800 font-semibold mb-2">Advanced Challenge:</h4>
              <p className="text-gray-700 text-sm">
                Identify a contradiction or gap in your sources, then use role-based prompting to analyze it from two
                different professional perspectives. Compare the insights you gain from each approach.
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
                You've mastered the art of working with NotebookLM's AI assistant. Key skills developed include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Understanding how AI processing works with your sources",
                  "Crafting effective prompts using the CLEAR framework",
                  "Using different question types for specific research goals",
                  "Applying advanced prompting techniques for complex analysis",
                  "Working effectively with citations and source attribution",
                  "Building productive research conversations with the AI",
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
                <h4 className="text-gray-800 font-semibold mb-3">Quick Quiz: AI Assistant Mastery</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 1:</strong> What does the CLEAR framework stand for in prompt crafting?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> Context, Length, Examples, Audience, and Result - the five elements
                        that make prompts more effective.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 2:</strong> What's the difference between factual and analytical questions?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> Factual questions extract specific information or data points, while
                        analytical questions explore relationships, patterns, and deeper meanings within the research.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Question 3:</strong> What should you do if the AI provides vague or incomplete responses?
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Answer:</strong> Be more specific in questions, request examples or evidence, ask
                        follow-up questions, and specify the level of detail needed.
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
          <Link href="/course/lesson-3">
            <Button variant="outline" className="border-green-300 text-gray-700 hover:bg-green-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous Lesson
            </Button>
          </Link>
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-2">Next Lesson</div>
            <Link href="/course/lesson-5">
              <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
                Creating a Research Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
