"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useTransition } from "react";
import { useToast } from "./ui/use-toast";
export const ContactUsForm = () => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const formSchema = z.object({
    email: z.string().email("Email is Required"),
    message_body: z.string().min(1),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message_body: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      startTransition(() => {
        (async () => {
          try {
            const ipResp = await fetch("https://api.ipify.org?format=json");
            const data = await ipResp.json();
            const ip = data.ip;
            const payload = {
              ...values,
              ip,
              company_name: "",
              name: "",
              phone: "",
            };
            const response = await fetch(
              "https://py.dws.teqneia.com/contacts/?tenant_id=13",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
              }
            );
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            toast({
              title: "Sent",
              description: "We will get in touch as soon as possible",
            });
            const responseData = await response.json();
            console.log("Form submitted successfully:", responseData);
            form.reset();
          } catch (error) {
            toast({
              title: "Sorry",
              description:
                "It seems like something went wrong with your message. Please get in touch with us using another contact method",
            });
            console.error(error);
          }
        })();
      });
    } catch (error) {
      toast({
        title: "Sorry",
        description:
          "It seems like something went wrong with your message. Please get in touch with us using another contact method",
      });
      console.error(error);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 text-[#2d3e6a]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  placeholder="name@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message_body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  disabled={isPending}
                  placeholder="We'd love to hear from you"
                  rows={6}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isPending}
          className="w-full bg-[#2d3e6a]"
          type="submit"
        >
          Send
        </Button>
      </form>
    </Form>
  );
};
