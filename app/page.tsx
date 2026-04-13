'use client'

import { useState } from 'react'
import { NavBar } from '@/components/portal/nav-bar'
import { HomePage } from '@/components/portal/home-page'
import { PeoplePage } from '@/components/portal/people-page'
import { OrganizationPage } from '@/components/portal/organization-page'
import { LeavePage } from '@/components/portal/leave-page'
import { ReportsPage } from '@/components/portal/reports-page'

export default function Portal() {
  const [activeTab, setActiveTab] = useState('People')

  const renderPage = () => {
    switch (activeTab) {
      case 'Home':
        return <HomePage />
      case 'People':
        return <PeoplePage />
      case 'Organization':
        return <OrganizationPage />
      case 'Leave':
        return <LeavePage />
      case 'Reports':
        return <ReportsPage />
      default:
        return <PeoplePage />
    }
  }

  return (
    <div className="min-h-screen bg-background grid-pattern">
      <NavBar activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        {renderPage()}
      </main>
    </div>
  )
}
