import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, Phone, Mail, MapPin } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Navn må være minst 2 tegn" }),
  email: z
    .string()
    .email({ message: "Vennligst oppgi en gyldig e-postadresse" }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Meldingen må være minst 10 tegn" }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  delay?: number;
  contactInfo?: {
    phone?: string;
    email?: string;
    website?: string;
  };
}

const ContactSection = ({
  title = "Kontakt Oss",
  subtitle = "Vi er her for å hjelpe. Ta kontakt via telefon, e-post eller fyll ut skjemaet under.",
  delay = 0.3,
  contactInfo = {
    phone: "(+47) 403 09 640",
    email: "post@fremtidgruppen.no",
    website: "www.fremtidgruppen.no",
  },
}: ContactSectionProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // This would normally send the data to a server
    console.log(data);

    // Show success state
    setIsSubmitted(true);

    toast({
      title: "Melding sendt!",
      description: "Vi vil kontakte deg så snart som mulig.",
    });
  };

  return (
    <section
      id="kontakt"
      className="bg-gradient-to-b from-gray-100 to-white py-20 px-4 md:px-8 w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Kontaktinformasjon
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-black mr-3 h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium text-gray-700">Telefon</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-black mr-3 h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium text-gray-700">E-post</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-black mr-3 h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium text-gray-700">Nettside</p>
                  <a
                    href={`http://${contactInfo.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-medium text-gray-700 mb-3">Åpningstider</h4>
              <p className="text-gray-600">Mandag - Fredag: 09:00 - 16:00</p>
              <p className="text-gray-600">Lørdag - Søndag: Stengt</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white rounded-lg shadow-xl p-6 md:p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Takk for din henvendelse!
                </h3>
                <p className="text-gray-600 mb-6">
                  Din melding er sendt. Vi vil kontakte deg så snart som mulig.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Send en ny melding
                </Button>
              </motion.div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: delay + 0.5 }}
                      viewport={{ once: true }}
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Navn</FormLabel>
                            <FormControl>
                              <Input placeholder="Ola Nordmann" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: delay + 0.6 }}
                      viewport={{ once: true }}
                    >
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-post</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="ola@example.com"
                                type="email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: delay + 0.7 }}
                    viewport={{ once: true }}
                  >
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bedrift (Valgfritt)</FormLabel>
                          <FormControl>
                            <Input placeholder="Din Bedrift AS" {...field} />
                          </FormControl>
                          <FormDescription>
                            La oss vite hvor du kommer fra
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: delay + 0.8 }}
                    viewport={{ once: true }}
                  >
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Melding</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Fortell oss om ditt prosjekt eller forespørsel..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: delay + 0.9 }}
                    viewport={{ once: true }}
                    className="flex justify-end"
                  >
                    <Button
                      type="submit"
                      className="px-8 py-3 bg-black hover:bg-gray-800 text-white rounded-md transition-colors text-base font-semibold"
                    >
                      <Send className="mr-2 h-4 w-4" /> Send Melding
                    </Button>
                  </motion.div>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
