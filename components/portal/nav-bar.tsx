'use client'

import { Bell, Search, Moon, Sun, ChevronDown, Command } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface NavBarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const navTabs = ['Home', 'People', 'Organization', 'Leave', 'Reports']

export function NavBar({ activeTab, onTabChange }: NavBarProps) {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main nav bar */}
      <div className="h-16 bg-card/80 glass border-b border-border">
        <div className="flex items-center justify-between h-full px-4 lg:px-6 max-w-[1600px] mx-auto">
          {/* Left section - Logo and Nav */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center shadow-lg glow-primary">
                  <span className="text-primary-foreground font-bold text-lg">S</span>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-primary/70 rounded-lg blur opacity-30 -z-10" />
              </div>
              <div className="hidden sm:block">
                <span className="font-semibold text-foreground text-lg tracking-tight font-serif">
                  Summit
                </span>
                <span className="text-muted-foreground text-lg tracking-tight ml-1">
                  Workplace
                </span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-center bg-muted/50 rounded-lg p-1">
                {navTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                      activeTab === tab
                        ? 'bg-card text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </nav>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button className="hidden lg:flex items-center gap-3 px-3 h-9 bg-muted/50 hover:bg-muted rounded-lg border border-border/50 text-muted-foreground text-sm transition-colors w-64">
              <Search className="h-4 w-4" />
              <span>Search...</span>
              <kbd className="ml-auto flex items-center gap-0.5 rounded border border-border bg-card px-1.5 py-0.5 text-[10px] text-muted-foreground">
                <Command className="h-3 w-3" />K
              </kbd>
            </button>

            {/* Dark mode toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="h-9 w-9 rounded-lg"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="h-9 w-9 relative rounded-lg">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="sr-only">Notifications</span>
            </Button>

            {/* Divider */}
            <div className="hidden sm:block h-6 w-px bg-border mx-1" />

            {/* User Avatar Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-9 px-2 gap-2 rounded-lg">
                  <Avatar className="h-7 w-7 ring-2 ring-primary/20">
                    <AvatarImage 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                      alt="User avatar"
                    />
                    <AvatarFallback className="text-xs">JD</AvatarFallback>
                  </Avatar>
                  <div className="hidden lg:block text-left">
                    <p className="text-sm font-medium text-foreground leading-none">John Doe</p>
                    <p className="text-xs text-muted-foreground">Admin</p>
                  </div>
                  <ChevronDown className="h-3 w-3 text-muted-foreground hidden lg:block" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-1.5 mb-1">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">john.doe@summit.co</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>My Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge variant="secondary" className="mr-2 text-[10px]">New</Badge>
                  What&apos;s New
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-b border-border bg-card/80 glass overflow-x-auto">
        <nav className="flex items-center gap-1 px-4 py-2">
          {navTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-3 py-1.5 text-sm font-medium transition-all duration-200 whitespace-nowrap rounded-md ${
                activeTab === tab
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
