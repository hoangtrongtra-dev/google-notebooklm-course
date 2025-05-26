"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Award, Download, Share2, ArrowLeft, Calendar, CheckCircle, Edit3, Save, X } from "lucide-react"
import Link from "next/link"

export default function Certificate() {
  const [isEditing, setIsEditing] = useState(false)
  const [studentName, setStudentName] = useState("Your Name")
  const [tempName, setTempName] = useState(studentName)

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const handleSave = () => {
    setStudentName(tempName)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTempName(studentName)
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-green-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Dashboard</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-emerald-300 text-gray-700 hover:bg-emerald-50">
                <Share2 className="w-4 h-4 mr-2" />
                Share Certificate
              </Button>
              <Button className="gradient-modern text-white shadow-modern">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Certificate */}
        <div className="max-w-5xl mx-auto animate-fade-in">
          <Card className="border-emerald-200 shadow-modern-lg bg-white overflow-hidden">
            <CardContent className="p-16">
              {/* Certificate Header */}
              <div className="text-center mb-12">
                <div className="w-20 h-20 gradient-modern rounded-full mx-auto mb-6 flex items-center justify-center shadow-modern">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Certificate of Completion</h1>
                <div className="w-32 h-1 gradient-modern mx-auto rounded-full"></div>
              </div>

              {/* Main Content */}
              <div className="text-center mb-12">
                <p className="text-xl text-gray-600 mb-8">This is to certify that</p>

                {/* Editable Name Section */}
                <div className="mb-8">
                  {isEditing ? (
                    <div className="flex items-center justify-center space-x-4 max-w-md mx-auto">
                      <Input
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                        className="text-center text-4xl font-bold border-2 border-emerald-300 focus:border-emerald-500 py-4"
                        placeholder="Enter your name"
                      />
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          onClick={handleSave}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white"
                        >
                          <Save className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={handleCancel} className="border-gray-300">
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="group relative inline-block">
                      <h2 className="text-4xl font-bold text-gray-800 border-b-3 border-emerald-300 pb-2 px-4">
                        {studentName}
                      </h2>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setIsEditing(true)}
                        className="absolute -right-12 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Edit3 className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>

                <p className="text-xl text-gray-600 mb-6">has successfully completed the</p>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-8">
                  Google NotebookLM Mastery Course
                </h3>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
                  This comprehensive 7-lesson course covered all aspects of Google NotebookLM, from basic interface
                  navigation to advanced research techniques and real-world applications across multiple industries.
                </p>
              </div>

              {/* Course Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-200">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    7
                  </div>
                  <div className="text-gray-600 font-medium">Lessons Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    6.5
                  </div>
                  <div className="text-gray-600 font-medium">Hours of Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-gray-600 font-medium">Course Progress</div>
                </div>
              </div>

              {/* Skills Acquired */}
              <div className="mb-12">
                <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">Skills Acquired</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "NotebookLM Interface Mastery",
                    "Advanced AI Prompting Techniques",
                    "Research Project Management",
                    "Source Organization & Analysis",
                    "Cross-Industry Applications",
                    "Workflow Optimization",
                    "Collaboration & Team Research",
                    "Professional Output Creation",
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificate Footer */}
              <div className="flex justify-between items-end pt-8 border-t-2 border-emerald-200">
                <div className="text-center">
                  <div className="w-40 h-1 bg-emerald-400 mb-3 rounded"></div>
                  <p className="text-gray-600 font-medium">Course Instructor</p>
                  <p className="text-gray-800 font-semibold">NotebookLM Expert</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600 font-medium">Date of Completion</span>
                  </div>
                  <p className="text-gray-800 font-semibold">{currentDate}</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 gradient-modern rounded-full flex items-center justify-center mb-3 shadow-modern">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-xs text-gray-600 font-medium">Official Seal</p>
                </div>
              </div>

              {/* Certificate ID */}
              <div className="text-center mt-8 pt-6 border-t border-emerald-200">
                <p className="text-sm text-gray-500 font-mono">
                  Certificate ID: NLM-{new Date().getFullYear()}-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center mt-12 space-y-6">
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="gradient-modern text-white shadow-modern hover:shadow-modern-lg px-8 py-4">
                <Download className="w-5 h-5 mr-2" />
                Download High-Res PDF
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-300 text-gray-700 hover:bg-emerald-50 px-8 py-4"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share on LinkedIn
              </Button>
            </div>
            <p className="text-gray-600 max-w-md mx-auto">
              Share your achievement with your professional network and showcase your NotebookLM expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
