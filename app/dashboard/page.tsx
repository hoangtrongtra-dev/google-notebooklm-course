import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle,
  Clock,
  BookOpen,
  Award,
  TrendingUp,
  Users,
  Download,
  Play,
  Star,
  Calendar,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const lessons = [
    { id: 1, title: "Introduction to NotebookLM", duration: "45 min", completed: true },
    { id: 2, title: "Interface Overview", duration: "40 min", completed: true },
    { id: 3, title: "Managing Research Materials", duration: "50 min", completed: true },
    { id: 4, title: "Using the AI Assistant", duration: "55 min", completed: true },
    { id: 5, title: "Creating a Research Project", duration: "60 min", completed: true },
    { id: 6, title: "Advanced Tips and Tools", duration: "50 min", completed: true },
    { id: 7, title: "Real-World Use Cases", duration: "45 min", completed: true },
  ]

  const completedLessons = lessons.filter((lesson) => lesson.completed).length
  const progressPercentage = (completedLessons / lessons.length) * 100

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
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/course" className="text-gray-600 hover:text-gray-800 transition-colors font-medium">
                Course
              </Link>
              <Link href="/dashboard" className="text-emerald-600 font-semibold">
                Dashboard
              </Link>
              <Link href="/certificate" className="text-gray-600 hover:text-gray-800 transition-colors font-medium">
                Certificate
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome Back!</h1>
          <p className="text-xl text-gray-600">Track your progress and continue your NotebookLM mastery journey.</p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-emerald-200 shadow-modern bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Course Progress</h3>
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Completed</span>
                  <span className="text-gray-800 font-medium">
                    {completedLessons}/{lessons.length} lessons
                  </span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
                <p className="text-xs text-gray-500">
                  {progressPercentage === 100 ? "Course completed!" : `${Math.round(progressPercentage)}% complete`}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 shadow-modern bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Time Invested</h3>
                <Clock className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-gray-800">5.5 hours</p>
                <p className="text-sm text-gray-600">Total learning time</p>
                <p className="text-xs text-gray-500">Average: 47 min per lesson</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 shadow-modern bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Achievement</h3>
                <Award className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-gray-800">Expert</p>
                <p className="text-sm text-gray-600">NotebookLM Mastery Level</p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Course Completion Certificate */}
        {progressPercentage === 100 && (
          <Card className="border-emerald-200 shadow-modern-lg mb-8 bg-gradient-to-r from-emerald-600 to-green-600">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Award className="w-12 h-12 text-yellow-400" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Congratulations!</h3>
                    <p className="text-emerald-100">You've completed the NotebookLM Mastery course</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <Link href="/certificate">
                    <Button className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-modern">
                      <Award className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
                  </Link>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Lesson Progress */}
        <Card className="border-emerald-200 shadow-modern bg-white mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              <span>Lesson Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg border border-emerald-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full gradient-modern text-white font-bold shadow-modern">
                      {lesson.completed ? <CheckCircle className="w-5 h-5" /> : lesson.id}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{lesson.title}</h4>
                      <p className="text-sm text-gray-600">{lesson.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {lesson.completed ? (
                      <span className="text-emerald-600 text-sm font-medium">Completed</span>
                    ) : (
                      <span className="text-gray-500 text-sm">Not started</span>
                    )}
                    <Link href={`/course/lesson-${lesson.id}`}>
                      <Button
                        variant={lesson.completed ? "outline" : "default"}
                        size="sm"
                        className={
                          lesson.completed
                            ? "border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                            : "gradient-modern text-white shadow-modern"
                        }
                      >
                        {lesson.completed ? "Review" : "Start"}
                        <Play className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-emerald-200 shadow-modern bg-white hover:shadow-modern-lg transition-all cursor-pointer">
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Practice Exercises</h3>
              <p className="text-sm text-gray-600 mb-4">Review and practice key concepts</p>
              <Button variant="outline" size="sm" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                Start Practice
              </Button>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 shadow-modern bg-white hover:shadow-modern-lg transition-all cursor-pointer">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Community</h3>
              <p className="text-sm text-gray-600 mb-4">Connect with other learners</p>
              <Button variant="outline" size="sm" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                Join Discussion
              </Button>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 shadow-modern bg-white hover:shadow-modern-lg transition-all cursor-pointer">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Schedule Review</h3>
              <p className="text-sm text-gray-600 mb-4">Plan your learning schedule</p>
              <Button variant="outline" size="sm" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                Set Reminders
              </Button>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 shadow-modern bg-white hover:shadow-modern-lg transition-all cursor-pointer">
            <CardContent className="p-6 text-center">
              <Download className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Resources</h3>
              <p className="text-sm text-gray-600 mb-4">Download course materials</p>
              <Button variant="outline" size="sm" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                Download All
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="border-emerald-200 shadow-modern bg-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Clock className="w-5 h-5 text-emerald-600" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  action: "Completed Lesson 7: Real-World Use Cases",
                  time: "2 hours ago",
                  icon: CheckCircle,
                  color: "text-emerald-600",
                },
                {
                  action: "Downloaded course certificate",
                  time: "2 hours ago",
                  icon: Download,
                  color: "text-emerald-600",
                },
                {
                  action: "Completed Lesson 6: Advanced Tips and Tools",
                  time: "1 day ago",
                  icon: CheckCircle,
                  color: "text-emerald-600",
                },
                {
                  action: "Started Lesson 6: Advanced Tips and Tools",
                  time: "2 days ago",
                  icon: Play,
                  color: "text-emerald-600",
                },
                {
                  action: "Completed Lesson 5: Creating a Research Project",
                  time: "3 days ago",
                  icon: CheckCircle,
                  color: "text-emerald-600",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200"
                >
                  <activity.icon className={`w-5 h-5 ${activity.color}`} />
                  <div className="flex-1">
                    <p className="text-gray-800 text-sm font-medium">{activity.action}</p>
                    <p className="text-gray-600 text-xs">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
