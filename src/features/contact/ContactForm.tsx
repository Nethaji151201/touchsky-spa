import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { contactSchema, type ContactFormValues } from './contactSchema'
import { useContactSubmit } from './useContactSubmit'

export function ContactForm() {
  const { submit, isSubmitting } = useContactSubmit()
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', company: '', message: '' },
  })

  const onSubmit = async (data: ContactFormValues) => {
    const ok = await submit(data)
    if (ok) reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
      aria-label="Contact form"
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            label="Full name"
            {...field}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            label="Email address"
            type="email"
            {...field}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />
      <Controller
        name="company"
        control={control}
        render={({ field }) => (
          <Input
            label="Company (optional)"
            {...field}
            error={!!errors.company}
            helperText={errors.company?.message}
          />
        )}
      />
      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <Input
            label="Message"
            multiline
            rows={4}
            {...field}
            error={!!errors.message}
            helperText={errors.message?.message}
          />
        )}
      />
      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isSubmitting}
        icon={Send}
        className="w-full sm:w-auto"
      >
        Send Message
      </Button>
    </form>
  )
}
