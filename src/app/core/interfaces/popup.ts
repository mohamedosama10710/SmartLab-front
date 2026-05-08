export interface PopupAction {
  label: string;
  type: 'primary' | 'danger' | 'outline';
  value: string;
}

export interface PopupData {
  type: 'success' | 'danger';
  title: string;
  description: string;
  showClose?: boolean;
  actions: PopupAction[];
  patientId?: string; 
}
