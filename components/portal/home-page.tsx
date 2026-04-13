'use client'

import { Users, Building, CalendarDays, FileText, TrendingUp, Clock, ArrowUpRight, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { employees } from '@/lib/employees'

const stats = [
  { label: 'Total Employees', value: '156', icon: Users, change: '+12', trend: 'up', color: 'from-blue-500 to-cyan-500' },
  { label: 'Departments', value: '6', icon: Building, change: 'Active', trend: 'neutral', color: 'from-primary to-primary/70' },
  { label: 'Pending Requests', value: '8', icon: CalendarDays, change: '3 urgent', trend: 'warning', color: 'from-amber-500 to-orange-500' },
  { label: 'Open Reports', value: '24', icon: FileText, change: 'Due soon', trend: 'neutral', color: 'from-emerald-500 to-teal-500' }
]

const recentActivity = [
  { action: 'New employee joined', name: 'Alex Johnson', time: '2h ago', type: 'join', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
  { action: 'Leave approved', name: 'Sarah Mitchell', time: '4h ago', type: 'leave', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
  { action: 'Report submitted', name: 'James Chen', time: '6h ago', type: 'report', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
  { action: 'Department transfer', name: 'Emily Nakamura', time: '1d ago', type: 'transfer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
]

const quickActions = [
  { label: 'Add Employee', icon: Users },
  { label: 'Request Leave', icon: CalendarDays },
  { label: 'Submit Report', icon: FileText },
  { label: 'View Org Chart', icon: Building }
]

export function HomePage() {
  return (
    <div className="p-6 lg:p-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
      {/* Welcome header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/70 p-6 lg:p-8 mb-8">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="welcome-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#welcome-grid)" />
          </svg>
        </div>
        
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-primary-foreground/80" />
              <span className="text-primary-foreground/80 text-xs font-semibold uppercase tracking-[0.15em]">Good morning</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-2 font-serif">
              Welcome back, John
            </h1>
            <p className="text-primary-foreground/80 max-w-xl">
              Here&apos;s what&apos;s happening in your organization today. You have 3 pending approvals and 2 meetings scheduled.
            </p>
          </div>
          <div className="flex gap-2">
            {quickActions.slice(0, 2).map((action) => {
              const Icon = action.icon
              return (
                <Button 
                  key={action.label}
                  variant="secondary" 
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-0"
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {action.label}
                </Button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card 
              key={stat.label} 
              className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <CardContent className="relative p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                    stat.trend === 'up' ? 'bg-emerald-500/10 text-emerald-500' : 
                    stat.trend === 'warning' ? 'bg-amber-500/10 text-amber-500' : 
                    'bg-muted text-muted-foreground'
                  }`}>
                    {stat.trend === 'up' && <TrendingUp className="h-3 w-3" />}
                    {stat.change}
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground font-serif">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-[0.1em]">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-serif font-semibold flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              Recent Activity
            </CardTitle>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              View all
              <ArrowUpRight className="h-3 w-3 ml-1" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-3 bg-muted/30 hover:bg-muted/50 rounded-xl transition-colors cursor-pointer group"
              >
                <Avatar className="h-10 w-10 ring-2 ring-border group-hover:ring-primary/30 transition-all">
                  <AvatarImage src={activity.avatar} alt={activity.name} />
                  <AvatarFallback>{activity.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.name}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                  <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Team Spotlight */}
        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-serif font-semibold flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-4 w-4 text-primary" />
              </div>
              Team Spotlight
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {employees.slice(0, 5).map((employee, index) => (
              <div 
                key={employee.id} 
                className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded-lg transition-colors cursor-pointer group"
              >
                <div className="relative">
                  <Avatar className="h-9 w-9 ring-2 ring-border group-hover:ring-primary/30 transition-all">
                    <AvatarImage src={employee.avatar} alt={employee.name} />
                    <AvatarFallback className="text-xs">{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {index < 2 && <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-card" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{employee.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{employee.title}</p>
                </div>
                <Badge variant="secondary" className="text-[10px] px-1.5 bg-primary/10 text-primary border-0 flex-shrink-0">
                  {employee.department}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
