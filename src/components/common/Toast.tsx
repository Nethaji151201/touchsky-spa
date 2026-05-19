import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, Info } from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'
import { cn } from '@/utils/cn'

const icons = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
}

export function Toast() {
  const { toast, clearToast } = useAppStore()

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(clearToast, 5000)
    return () => clearTimeout(t)
  }, [toast, clearToast])

  const Icon = toast ? icons[toast.type] : null

  return (
    <AnimatePresence>
      {toast && Icon && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 shadow-xl"
          role="alert"
        >
          <Icon
            className={cn(
              'h-5 w-5 shrink-0',
              toast.type === 'success' && 'text-green-500',
              toast.type === 'error' && 'text-red-500',
              toast.type === 'info' && 'text-primary',
            )}
          />
          <p className="text-sm font-medium text-foreground">{toast.message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
