'use client'

import { Building, ChevronRight, Users } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { employees, departmentColors, Employee } from '@/lib/employees'

type Department = Employee['department']

const departments: Department[] = ['Engineering', 'Design', 'Marketing', 'Sales', 'Operations', 'HR']

const departmentHeads: Record<Department, { name: string; title: string; avatar: string }> = {
  Engineering: {
    name: 'Rebecca Torres',
    title: 'VP Engineering',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face'
  },
  Design: {
    name: 'James Chen',
    title: 'Lead Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  Marketing: {
    name: 'Michael Scott',
    title: 'CMO',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  Sales: {
    name: 'David Wilson',
    title: 'CRO',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
  },
  Operations: {
    name: 'Linda Chen',
    title: 'COO',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
  },
  HR: {
    name: 'Jennifer Adams',
    title: 'CHRO',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face'
  }
}

export function OrganizationPage() {
  return (
    <div className="p-6 lg:p-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Building className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight font-serif">Organization</h1>
          <p className="text-muted-foreground text-sm mt-1">View your company structure by department</p>
        </div>
      </div>

      {/* Department grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept, deptIndex) => {
          const deptEmployees = employees.filter(e => e.department === dept)
          const head = departmentHeads[dept]

          return (
            <Card 
              key={dept} 
              className="overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${deptIndex * 100}ms` }}
            >
              {/* Department header */}
              <div className="p-5 border-b border-border/50 bg-muted/30">
                <div className="flex items-center justify-between mb-4">
                  <Badge className={`${departmentColors[dept]} border-0 font-medium`}>
                    {dept}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="h-3.5 w-3.5" />
                    {deptEmployees.length} members
                  </div>
                </div>

                {/* Department head */}
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                      <AvatarImage src={head.avatar} alt={head.name} />
                      <AvatarFallback>{head.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-card" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground font-serif text-lg">{head.name}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-[0.1em]">{head.title}</p>
                  </div>
                </div>
              </div>

              {/* Team members */}
              <div className="p-3 space-y-1 max-h-[280px] overflow-y-auto">
                {deptEmployees.map((employee, index) => (
                  <div 
                    key={employee.id} 
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                    style={{ animationDelay: `${(deptIndex * 100) + (index * 50)}ms` }}
                  >
                    <Avatar className="h-9 w-9 ring-2 ring-border group-hover:ring-primary/30 transition-all">
                      <AvatarImage src={employee.avatar} alt={employee.name} />
                      <AvatarFallback className="text-xs">{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-foreground truncate group-hover:text-primary transition-colors">
                        {employee.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">{employee.title}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
