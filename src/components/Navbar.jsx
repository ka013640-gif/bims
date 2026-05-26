import { useAuth } from "../contexts/AuthContext"
import { Avatar, AvatarFallback } from "../components/ui/avatar.jsx"

export function Navbar() {
  const { user } = useAuth()

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-gray-600">{user.account_name}</span>
              <Avatar className="h-8 w-8">
                <AvatarFallback>
                  {user.account_name?.charAt(0)?.toUpperCase() ?? 'U'}
                </AvatarFallback>
              </Avatar>
            </>
          ) : (
            <>
              <span className="text-sm text-gray-600">Guest</span>
              <Avatar className="h-8 w-8">
                <AvatarFallback>G</AvatarFallback>
              </Avatar>
            </>
          )}
        </div>
      </div>
    </header>
  )
}