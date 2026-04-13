'use client'

import { MapPin, Mail, ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Employee, departmentColors } from '@/lib/employees'

interface EmployeeCardProps {
  employee: Employee
  onViewProfile: (employee: Employee) => void
}

export function EmployeeCard({ employee, onViewProfile }: EmployeeCardProps) {
  const initials = employee.name.split(' ').map(n => n[0]).join('')

  return (
    <Card 
      className="group relative overflow-hidden bg-card hover:bg-accent/50 border-border/50 transition-all duration-300 cursor-pointer"
      onClick={() => onViewProfile(employee)}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-5">
        <div className="flex items-start gap-4">
          {/* Avatar with ring */}
          <div className="relative">
            <Avatar className="h-14 w-14 ring-2 ring-border group-hover:ring-primary/30 transition-all duration-300">
              <AvatarImage src={employee.avatar} alt={employee.name} />
              <AvatarFallback className="text-lg font-medium">{initials}</AvatarFallback>
            </Avatar>
            {/* Online indicator */}
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-card" />
          </div>
          
          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors truncate font-serif">
                  {employee.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5 truncate">{employee.title}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0" />
            </div>

            <Badge className={`${departmentColors[employee.department]} border-0 font-medium mt-2 text-xs`}>
              {employee.department}
            </Badge>
          </div>
        </div>

        {/* Bottom info */}
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span>{employee.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground truncate">
            <Mail className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="truncate">{employee.email}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
