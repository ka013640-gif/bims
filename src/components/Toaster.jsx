import { useState, useEffect } from "react"
import { X } from "lucide-react"

let toastId = 0
let toasts = []
let listeners = []

export function toast({ title, description, duration = 5000 }) {
  const id = toastId++
  const newToast = { id, title, description }
  toasts = [...toasts, newToast]
  listeners.forEach(l => l([...toasts]))
  
  setTimeout(() => {
    toasts = toasts.filter(t => t.id !== id)
    listeners.forEach(l => l([...toasts]))
  }, duration)
}

export function Toaster() {
  const [localToasts, setLocalToasts] = useState([])
  
  useEffect(() => {
    listeners.push(setLocalToasts)
    return () => {
      listeners = listeners.filter(l => l !== setLocalToasts)
    }
  }, [])
  
  if (localToasts.length === 0) return null
  
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 w-full max-w-xs">
      {localToasts.map(({ id, title, description }) => (
        <div
          key={id}
          className="bg-white border border-gray-200 rounded-lg shadow-lg p-4"
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold text-sm">{title}</h4>
              {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
            </div>
            <button
              onClick={() => {
                toasts = toasts.filter(t => t.id !== id)
                listeners.forEach(l => l([...toasts]))
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}