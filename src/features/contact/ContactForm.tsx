import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { contactSchema, type ContactFormValues } from "./contactSchema";
import { useContactSubmit } from "./useContactSubmit";
import { APP_CONFIG } from "@/constants/appConfig";
import emailjs from "@emailjs/browser";
import { useAppStore } from "@/store/useAppStore";

export function ContactForm() {
  const { submit, isSubmitting } = useContactSubmit();
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const showToast = useAppStore((s) => s.showToast);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", number: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // const ok = await submit(data);
    // if (ok) reset();
    emailjs
      .send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          name: data.name,
          email: data.email,
          phone: data.number,
          message: data.message,
          toEmail: APP_CONFIG.primaryEmail,
        },
        emailjsPublicKey,
      )
      .then(() => {
        showToast({
          message: "Message sent — we'll get back shortly.",
          type: "success",
        });
        reset();
      })
      .catch((err: any) => {
        console.error("EmailJS error", err);
        showToast({
          message: "Failed to send — please try again.",
          type: "error",
        });
      });
    // .finally(() => setIsSubmitting(false));
  };

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
        name="number"
        control={control}
        render={({ field }) => (
          <Input
            label="Phone number"
            {...field}
            error={!!errors.number}
            helperText={errors.number?.message}
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
  );
}
