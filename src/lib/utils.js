import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatBirthday(dateString) {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';
  
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  
  return `${month}-${day}-${year}`;
}

export function formatContactNumber(contactNumber) {
  if (contactNumber == null) return '';
  
  // Convert to string in case it's a number or other type
  const str = String(contactNumber);
  
  // Remove all non-digit characters
  const cleaned = str.replace(/\D/g, '');
  
  // Format as xxxx-xxx-xxxx (first 4, next 3, last 4)
  if (cleaned.length >= 11) {
    return `${cleaned.slice(0, 4)}-${cleaned.slice(4, 7)}-${cleaned.slice(7, 11)}`;
  }
  
  // If not enough digits, return as-is
  return str;
}