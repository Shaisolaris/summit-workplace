'use client'

import { useState, useEffect } from 'react'
import { CalendarDays, Clock, Plane, Heart, User, Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { holidays2025 } from '@/lib/employees'
import { toast } from 'sonner'

interface LeaveBalance {
  type: string
  used: number
  total: number
  icon: React.ElementType
  color: string
  bgColor: string
}

const leaveBalances: LeaveBalance[] = [
  { type: 'Vacation', used: 8, total: 20, icon: Plane, color: 'text-primary', bgColor: 'bg-primary' },
  { type: 'Sick Leave', used: 7, total: 10, icon: Heart, color: 'text-rose-500', bgColor: 'bg-rose-500' },
  { type: 'Personal', used: 3, total: 5, icon: User, color: 'text-blue-500', bgColor: 'bg-blue-500' }
]

const pendingRequests = [
  { type: 'Vacation', dates: 'Dec 23 - Dec 27, 2025', days: 5, status: 'pending' },
  { type: 'Personal', dates: 'Jan 15, 2026', days: 1, status: 'approved' }
]

export function LeavePage() {
  const [leaveType, setLeaveType] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [reason, setReason] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Leave request submitted', {
      description: 'Your request has been sent for approval.',
    })
    setLeaveType('')
    setStartDate('')
    setEndDate('')
    setReason('')
  }

  return (
    <div className="p-6 lg:p-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <CalendarDays className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight font-serif">Leave Management</h1>
          <p className="text-muted-foreground text-sm mt-1">Request time off and track your balances</p>
        </div>
      </div>

      {/* Leave Balances - Horizontal Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {leaveBalances.map((balance, index) => {
          const Icon = balance.icon
          const remaining = balance.total - balance.used
          const percentage = (remaining / balance.total) * 100
          
          return (
            <Card 
              key={balance.type} 
              className="relative overflow-hidden border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className={`h-10 w-10 rounded-xl ${balance.bgColor}/10 flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 ${balance.color}`} />
                  </div>
                  <span className="text-2xl font-bold text-foreground font-serif">
                    {remaining}
                    <span className="text-sm font-normal text-muted-foreground font-sans">/{balance.total}</span>
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground mb-3">{balance.type}</p>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${balance.bgColor} transition-all duration-1000 ease-out rounded-full`}
                    style={{ 
                      width: mounted ? `${percentage}%` : '0%' 
                    }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">{balance.used} days used this year</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Request Leave Form */}
        <Card className="lg:col-span-2 border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-serif font-semibold flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <CalendarDays className="h-4 w-4 text-primary" />
              </div>
              Request Time Off
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="leave-type" className="text-sm font-medium">Leave Type</Label>
                  <Select value={leaveType} onValueChange={setLeaveType}>
                    <SelectTrigger id="leave-type" className="h-11">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vacation">Vacation</SelectItem>
                      <SelectItem value="sick">Sick Leave</SelectItem>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="bereavement">Bereavement</SelectItem>
                      <SelectItem value="jury-duty">Jury Duty</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="start-date" className="text-sm font-medium">Start Date</Label>
                  <Input
                    id="start-date"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date" className="text-sm font-medium">End Date</Label>
                  <Input
                    id="end-date"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason" className="text-sm font-medium">Notes (Optional)</Label>
                <Textarea
                  id="reason"
                  placeholder="Add any additional details about your request..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={3}
                  className="resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-primary/20"
              >
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* Pending Requests */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-serif font-semibold flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-amber-500" />
                </div>
                Your Requests
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingRequests.map((request, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl">
                  <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                    request.status === 'approved' ? 'bg-emerald-500/10' : 'bg-amber-500/10'
                  }`}>
                    {request.status === 'approved' ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Clock className="h-4 w-4 text-amber-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{request.type}</p>
                    <p className="text-xs text-muted-foreground">{request.dates}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    request.status === 'approved' 
                      ? 'bg-emerald-500/10 text-emerald-500' 
                      : 'bg-amber-500/10 text-amber-500'
                  }`}>
                    {request.status === 'approved' ? 'Approved' : 'Pending'}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Company Holidays */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-serif font-semibold flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CalendarDays className="h-4 w-4 text-primary" />
                </div>
                Holidays 2025
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {holidays2025.slice(0, 6).map((holiday, index) => (
                  <li 
                    key={index} 
                    className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                  >
                    <span className="text-sm text-foreground">{holiday.name}</span>
                    <span className="text-xs text-muted-foreground font-mono">{holiday.date}</span>
                  </li>
                ))}
              </ul>
              <Button variant="ghost" size="sm" className="w-full mt-3 text-muted-foreground">
                View all holidays
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
