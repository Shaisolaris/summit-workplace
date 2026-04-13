'use client'

import { FileText, Download, Eye, Calendar, Plus, TrendingUp, BarChart3, PieChart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const reports = [
  { 
    title: 'Q1 2025 Headcount Report', 
    type: 'Quarterly', 
    date: 'Mar 31, 2025', 
    status: 'Ready',
    downloads: 145,
    icon: BarChart3
  },
  { 
    title: 'Annual Performance Summary', 
    type: 'Annual', 
    date: 'Jan 15, 2025', 
    status: 'Ready',
    downloads: 234,
    icon: TrendingUp
  },
  { 
    title: 'Department Budget Analysis', 
    type: 'Monthly', 
    date: 'Apr 1, 2025', 
    status: 'Processing',
    downloads: 0,
    icon: PieChart
  },
  { 
    title: 'Employee Satisfaction Survey', 
    type: 'Quarterly', 
    date: 'Mar 15, 2025', 
    status: 'Ready',
    downloads: 89,
    icon: BarChart3
  },
  { 
    title: 'Leave Utilization Report', 
    type: 'Monthly', 
    date: 'Apr 5, 2025', 
    status: 'Ready',
    downloads: 56,
    icon: PieChart
  },
  { 
    title: 'Training Completion Metrics', 
    type: 'Quarterly', 
    date: 'Mar 20, 2025', 
    status: 'Ready',
    downloads: 78,
    icon: TrendingUp
  }
]

const stats = [
  { label: 'Total Reports', value: '48', change: '+5 this month' },
  { label: 'Downloads', value: '1.2K', change: '+12% vs last month' },
  { label: 'Pending', value: '3', change: 'Due this week' }
]

export function ReportsPage() {
  return (
    <div className="p-6 lg:p-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight font-serif">Reports</h1>
            <p className="text-muted-foreground text-sm mt-1">Access and download organizational reports</p>
          </div>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="border-border/50">
            <CardContent className="p-5">
              <p className="text-xs text-muted-foreground uppercase tracking-[0.1em]">{stat.label}</p>
              <p className="text-2xl font-bold text-foreground mt-1 font-serif">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((report, index) => {
          const Icon = report.icon
          return (
            <Card 
              key={index} 
              className="group border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative pb-3">
                <div className="flex items-start justify-between">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge 
                    className={`border-0 ${
                      report.status === 'Ready' 
                        ? 'bg-emerald-500/10 text-emerald-500' 
                        : 'bg-amber-500/10 text-amber-500'
                    }`}
                  >
                    {report.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg mt-4 group-hover:text-primary transition-colors font-serif font-semibold">
                  {report.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {report.date}
                  </span>
                  <Badge variant="secondary" className="text-xs bg-muted">
                    {report.type}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex-1 h-9">
                    <Eye className="h-4 w-4 mr-1.5" />
                    Preview
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 h-9 bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={report.status !== 'Ready'}
                  >
                    <Download className="h-4 w-4 mr-1.5" />
                    Download
                  </Button>
                </div>
                {report.downloads > 0 && (
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    {report.downloads} downloads
                  </p>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
