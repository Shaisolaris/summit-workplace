export interface Employee {
  id: number
  name: string
  title: string
  department: 'Engineering' | 'Design' | 'Marketing' | 'Sales' | 'Operations' | 'HR'
  location: string
  email: string
  phone: string
  office: string
  avatar: string
  manager?: {
    name: string
    title: string
    avatar: string
  }
  directReports?: {
    name: string
    avatar: string
  }[]
}

export const employees: Employee[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    title: 'Senior Engineer',
    department: 'Engineering',
    location: 'New York',
    email: 'sarah.mitchell@summit.co',
    phone: '555-0142',
    office: 'Floor 4, Room 412',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    manager: {
      name: 'Rebecca Torres',
      title: 'VP Engineering',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face'
    },
    directReports: [
      { name: 'Alex Kim', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
      { name: 'Jordan Lee', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face' },
      { name: 'Casey Brown', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face' }
    ]
  },
  {
    id: 2,
    name: 'James Chen',
    title: 'Lead Designer',
    department: 'Design',
    location: 'San Francisco',
    email: 'james.chen@summit.co',
    phone: '555-0143',
    office: 'Floor 3, Room 305',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    manager: {
      name: 'Rebecca Torres',
      title: 'VP Engineering',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 3,
    name: 'Priya Patel',
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'London',
    email: 'priya.patel@summit.co',
    phone: '555-0144',
    office: 'Floor 2, Room 210',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face',
    manager: {
      name: 'Michael Scott',
      title: 'CMO',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 4,
    name: 'Marcus Thompson',
    title: 'Sales Director',
    department: 'Sales',
    location: 'Chicago',
    email: 'marcus.thompson@summit.co',
    phone: '555-0145',
    office: 'Floor 5, Room 501',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    manager: {
      name: 'David Wilson',
      title: 'CRO',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
    },
    directReports: [
      { name: 'Nina Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face' },
      { name: 'Tom Baker', avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face' }
    ]
  },
  {
    id: 5,
    name: 'Emily Nakamura',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Tokyo',
    email: 'emily.nakamura@summit.co',
    phone: '555-0146',
    office: 'Floor 4, Room 420',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    manager: {
      name: 'Sarah Mitchell',
      title: 'Senior Engineer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 6,
    name: 'David Okafor',
    title: 'Product Designer',
    department: 'Design',
    location: 'Lagos',
    email: 'david.okafor@summit.co',
    phone: '555-0147',
    office: 'Floor 3, Room 310',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    manager: {
      name: 'James Chen',
      title: 'Lead Designer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 7,
    name: 'Anna Kowalski',
    title: 'Content Lead',
    department: 'Marketing',
    location: 'Berlin',
    email: 'anna.kowalski@summit.co',
    phone: '555-0148',
    office: 'Floor 2, Room 215',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    manager: {
      name: 'Priya Patel',
      title: 'Marketing Manager',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 8,
    name: 'Carlos Rivera',
    title: 'Account Executive',
    department: 'Sales',
    location: 'Miami',
    email: 'carlos.rivera@summit.co',
    phone: '555-0149',
    office: 'Floor 5, Room 510',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
    manager: {
      name: 'Marcus Thompson',
      title: 'Sales Director',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 9,
    name: 'Lisa Chang',
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Seattle',
    email: 'lisa.chang@summit.co',
    phone: '555-0150',
    office: 'Floor 4, Room 415',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    manager: {
      name: 'Sarah Mitchell',
      title: 'Senior Engineer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 10,
    name: 'Omar Hassan',
    title: 'Operations Manager',
    department: 'Operations',
    location: 'Dubai',
    email: 'omar.hassan@summit.co',
    phone: '555-0151',
    office: 'Floor 1, Room 105',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    manager: {
      name: 'Linda Chen',
      title: 'COO',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
    },
    directReports: [
      { name: 'Fatima Al-Rashid', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face' }
    ]
  },
  {
    id: 11,
    name: 'Sophie Martin',
    title: 'HR Business Partner',
    department: 'HR',
    location: 'Paris',
    email: 'sophie.martin@summit.co',
    phone: '555-0152',
    office: 'Floor 1, Room 110',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    manager: {
      name: 'Jennifer Adams',
      title: 'CHRO',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 12,
    name: "Ryan O'Brien",
    title: 'Frontend Engineer',
    department: 'Engineering',
    location: 'Dublin',
    email: 'ryan.obrien@summit.co',
    phone: '555-0153',
    office: 'Floor 4, Room 418',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    manager: {
      name: 'Sarah Mitchell',
      title: 'Senior Engineer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face'
    }
  }
]

export const departmentColors: Record<Employee['department'], string> = {
  Engineering: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300',
  Design: 'bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300',
  Marketing: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300',
  Sales: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300',
  Operations: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
  HR: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300'
}

export const departmentCounts = {
  All: employees.length,
  Engineering: employees.filter(e => e.department === 'Engineering').length,
  Design: employees.filter(e => e.department === 'Design').length,
  Marketing: employees.filter(e => e.department === 'Marketing').length,
  Sales: employees.filter(e => e.department === 'Sales').length,
  Operations: employees.filter(e => e.department === 'Operations').length,
  HR: employees.filter(e => e.department === 'HR').length
}

export const holidays2025 = [
  { date: 'Jan 1', name: "New Year's Day" },
  { date: 'Jan 20', name: 'Martin Luther King Jr. Day' },
  { date: 'Feb 17', name: "Presidents' Day" },
  { date: 'May 26', name: 'Memorial Day' },
  { date: 'Jul 4', name: 'Independence Day' },
  { date: 'Sep 1', name: 'Labor Day' },
  { date: 'Nov 27', name: 'Thanksgiving Day' },
  { date: 'Dec 25', name: 'Christmas Day' }
]
