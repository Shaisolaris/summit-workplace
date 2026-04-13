'use client'

import { Mail, Phone, Building, Calendar, MessageSquare, X, MapPin, Briefcase } from 'lucide-react'
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Employee, departmentColors } from '@/lib/employees'
import { toast } from 'sonner'

interface EmployeeModalProps {
  employee: Employee | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EmployeeModal({ employee, open, onOpenChange }: EmployeeModalProps) {
  if (!employee) return null

  const initials = employee.name.split(' ').map(n => n[0]).join('')

  const handleSaveProfile = () => {
    toast.success('Profile updated successfully', {
      description: 'Changes have been saved to the employee record.',
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[640px] p-0 overflow-hidden bg-card border-border" showCloseButton={false}>
        {/* Header with gradient and pattern */}
        <div className="relative h-[140px] bg-gradient-to-br from-primary via-primary/80 to-primary/60 overflow-hidden">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Close button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          
          {/* Avatar overlapping */}
          <div className="absolute -bottom-12 left-6">
            <div className="relative">
              <Avatar className="h-24 w-24 border-4 border-card shadow-xl">
                <AvatarImage src={employee.avatar} alt={employee.name} />
                <AvatarFallback className="text-2xl font-semibold">{initials}</AvatarFallback>
              </Avatar>
              <span className="absolute bottom-1 right-1 h-5 w-5 rounded-full bg-emerald-500 ring-3 ring-card" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-16 pb-6 px-6">
          {/* Name and title */}
          <div className="mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground font-serif">{employee.name}</h2>
                <p className="text-muted-foreground mt-0.5 flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  {employee.title}
                </p>
              </div>
              <Badge className={`${departmentColors[employee.department]} border-0 font-medium`}>
                {employee.department}
              </Badge>
            </div>
          </div>

          {/* Contact info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground truncate">{employee.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium text-foreground">{employee.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Office</p>
                <p className="text-sm font-medium text-foreground">{employee.office}</p>
              </div>
            </div>
          </div>

          {/* Manager section */}
          {employee.manager && (
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-muted-foreground mb-3 flex items-center gap-2 uppercase tracking-[0.1em]">
                <Building className="h-4 w-4" />
                Reports to
              </h3>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border border-border/50">
                <Avatar className="h-11 w-11 ring-2 ring-border">
                  <AvatarImage src={employee.manager.avatar} alt={employee.manager.name} />
                  <AvatarFallback>{employee.manager.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground font-serif">{employee.manager.name}</p>
                  <p className="text-sm text-muted-foreground">{employee.manager.title}</p>
                </div>
              </div>
            </div>
          )}

          {/* Direct reports */}
          {employee.directReports && employee.directReports.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-[0.1em]">
                Direct Reports ({employee.directReports.length})
              </h3>
              <div className="flex items-center gap-2 flex-wrap">
                {employee.directReports.map((report, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-lg border border-border/50"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={report.avatar} alt={report.name} />
                      <AvatarFallback className="text-xs">{report.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-foreground">{report.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick actions */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            <Button variant="outline" size="sm" className="h-10">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </Button>
            <Button variant="outline" size="sm" className="h-10">
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Button>
            <Button variant="outline" size="sm" className="h-10">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule
            </Button>
          </div>

          {/* Save button */}
          <Button 
            className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            onClick={handleSaveProfile}
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
