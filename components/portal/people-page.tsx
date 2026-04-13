'use client'

import { useState } from 'react'
import { LayoutGrid, List, Plus, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { employees, departmentCounts, Employee } from '@/lib/employees'
import { EmployeeCard } from './employee-card'
import { EmployeeModal } from './employee-modal'

type Department = 'All' | 'Engineering' | 'Design' | 'Marketing' | 'Sales' | 'Operations' | 'HR'

const departments: Department[] = ['All', 'Engineering', 'Design', 'Marketing', 'Sales', 'Operations', 'HR']

export function PeoplePage() {
  const [selectedDepartment, setSelectedDepartment] = useState<Department>('All')
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid')
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const filteredEmployees = selectedDepartment === 'All' 
    ? employees 
    : employees.filter(e => e.department === selectedDepartment)

  const handleViewProfile = (employee: Employee) => {
    setSelectedEmployee(employee)
    setModalOpen(true)
  }

  return (
    <div className="p-6 lg:p-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight font-serif">People Directory</h1>
            <p className="text-muted-foreground text-sm mt-1">{employees.length} team members across {departments.length - 1} departments</p>
          </div>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          Add Employee
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 p-4 bg-card rounded-xl border border-border/50">
        {/* Department tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedDepartment === dept
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {dept}
              <Badge 
                variant="secondary" 
                className={`text-xs px-1.5 py-0 h-5 transition-colors ${
                  selectedDepartment === dept 
                    ? 'bg-primary-foreground/20 text-primary-foreground' 
                    : 'bg-muted'
                }`}
              >
                {departmentCounts[dept]}
              </Badge>
            </button>
          ))}
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-1 bg-muted rounded-lg p-1 self-start">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            className={`h-8 w-8 p-0 ${viewMode === 'grid' ? 'shadow-sm' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <LayoutGrid className="h-4 w-4" />
            <span className="sr-only">Grid view</span>
          </Button>
          <Button
            variant={viewMode === 'table' ? 'default' : 'ghost'}
            size="sm"
            className={`h-8 w-8 p-0 ${viewMode === 'table' ? 'shadow-sm' : ''}`}
            onClick={() => setViewMode('table')}
          >
            <List className="h-4 w-4" />
            <span className="sr-only">Table view</span>
          </Button>
        </div>
      </div>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredEmployees.map((employee, index) => (
          <div
            key={employee.id}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'backwards' }}
          >
            <EmployeeCard 
              employee={employee}
              onViewProfile={handleViewProfile}
            />
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredEmployees.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-1 font-serif">No employees found</h3>
          <p className="text-muted-foreground text-sm">Try selecting a different department filter</p>
        </div>
      )}

      {/* Employee Modal */}
      <EmployeeModal 
        employee={selectedEmployee}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  )
}
