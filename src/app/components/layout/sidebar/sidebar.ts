import { Component, OnInit, computed, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Search } from '../../../core/services/search';


import { Auth,UserRole } from '../../../core/services/auth'; 

export interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {
  private searchService = inject(Search); 
  private authService = inject(Auth);

  
  currentUser = this.authService.user;

  sidebarOpen = signal(true);
  notifCount = signal(3);

  // ── Role-based nav items ─────────────────────────
  navItems = computed<NavItem[]>(() => {
    const user = this.currentUser(); 
    
    if (!user) return []; 

    const map: Record<UserRole, NavItem[]> = {
      admin: [
        { label: 'Dashboard',    icon: 'grid',     route: '/dashboard' },
        { label: 'Profile',      icon: 'user',     route: '/profile'   },
        { label: 'Staff',        icon: 'users',    route: '/staff'     },
        { label: 'Patients',     icon: 'heart',    route: '/patients'  },
        { label: 'Tests',        icon: 'flask',    route: '/tests'     },
        { label: 'Booking',      icon: 'calendar', route: '/booking'   },
        { label: 'Lab Settings', icon: 'settings', route: '/settings'  },
      ],
      staff: [
        { label: 'Dashboard', icon: 'grid',     route: '/dashboard' },
        { label: 'Profile',   icon: 'user',     route: '/profile'   },
        { label: 'Patients',  icon: 'heart',    route: '/patients'  },
        { label: 'Booking',   icon: 'calendar', route: '/booking'   },
      ],
      patient: [
        { label: 'Dashboard', icon: 'grid', route: '/dashboard' },
        { label: 'Profile',   icon: 'user', route: '/profile'   },
        { label: 'Reports',   icon: 'file', route: '/reports'   },
      ],
    };
    return map[user.role];
  });

  roleLabel = computed(() => {
    const user = this.currentUser();
    if (!user) return '';
    return {
      admin:   'System Admin',
      staff:   'Lab Staff',
      patient: 'Patient',
    }[user.role];
  });

  roleBadgeClass = computed(() => {
    const user = this.currentUser();
    return user ? `role-badge--${user.role}` : '';
  });

  userInitial = computed(() => {
    const user = this.currentUser();
    return user ? user.name.charAt(0).toUpperCase() : '';
  });

  toggleSidebar(): void {
    this.sidebarOpen.update(v => !v);
  }

  logout(): void {
    this.authService.logout();
    console.log('Logging out...');
  }

  ngOnInit(): void {}

searchQuery = signal('');

onSearch(event: Event): void {
const inputElement = event.target as HTMLInputElement;
    
    this.searchService.updateQuery(inputElement.value);
    
}
}