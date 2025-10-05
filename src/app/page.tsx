"use client";
import type React from "react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Instagram,
  Facebook,
  Phone,
  Copy,
  Check,
  MessageCircle,
  Mail,
} from "lucide-react";
import { toast } from "sonner";
// import { toast } from "@/components/ui/use-toast"
// import { Toaster } from "@/components/ui/toaster"

const contactLinks = [
  {
    href: "https://instagram.com/pritam_studio257",
    label: "Instagram",
    value: "@pritam_studio257",
    icon: <Instagram className="h-5 w-5" />,
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    href: "https://wa.me/+916009110054",
    label: "WhatsApp",
    value: "+91 6009110054",
    icon: <MessageCircle className="h-5 w-5" />,
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
  },
  {
    href: "https://facebook.com/mystudio",
    label: "Facebook",
    value: "facebook.com/mystudio",
    icon: <Facebook className="h-5 w-5" />,
    color: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
  {
    href: "tel:91 6009110054",
    label: "Phone",
    value: "+91 6009110054",
    icon: <Phone className="h-5 w-5" />,
    color: "bg-gradient-to-r from-amber-500 to-orange-500",
  },
  {
    href: "mailto:contact@mystudio.com",
    label: "Email",
    value: "contact@mystudio.com",
    icon: <Mail className="h-5 w-5" />,
    color: "bg-gradient-to-r from-violet-500 to-purple-500",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-4 flex flex-col items-center">
      <div className="w-full max-w-md mx-auto flex flex-col items-center py-8 space-y-6">
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-4">
          {/* <Avatar className="h-24 w-24 border-2 border-purple-200 ">
            <AvatarImage src="/ps.jpg" alt="Profile" />
            <AvatarFallback>Pritam Studio</AvatarFallback>
          </Avatar> */}
          <Avatar className="h-50 w-50 border-2 border-purple-200">
            <AvatarImage
              src="/ps.jpg"
              alt="Profile"
              className="h-full w-full object-cover"
            />
            <AvatarFallback className="text-xl">Pritam Studio</AvatarFallback>
          </Avatar>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Pritam Studio</h1>
            <p className="text-gray-600 mt-1">
              Second-hand mobile photo frames & accessories available
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2 text-gray-600">
          <MapPin className="h-5 w-5" />
          <a
            href="https://maps.app.goo.gl/QLizQewTPL1cvcrg9?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            Legi Complex, Itanagar, Arunachal Pradesh 791111
          </a>
        </div>

        {/* Contact Us Header */}
        <div className="flex items-center space-x-2 text-gray-800 font-medium">
          <span role="img" aria-label="contact">
            📱
          </span>
          <h2>Contact Us</h2>
        </div>

        {/* Links Section */}
        <div className="w-full space-y-3">
          {contactLinks.map((link, index) => (
            <ContactLink
              key={index}
              href={link.href}
              label={link.label}
              value={link.value}
              icon={link.icon}
              color={link.color}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>© 2025 Pritam Studio • Made with Next.js</p>
        </footer>
      </div>
    </main>
  );
}

interface ContactLinkProps {
  href: string;
  label: string;
  value: string;
  icon?: React.ReactNode;
  color?: string;
}

function ContactLink({
  href,
  label,
  value,
  icon,
  color = "bg-gray-800",
}: ContactLinkProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      toast("Copied to clipboard", {
        description: `${text} has been copied to your clipboard.`,
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full transition-transform hover:scale-[1.01] active:scale-[0.99]"
    >
      <Card
        className={`rounded-xl ${color} text-white p-4 hover:shadow-lg transition-shadow`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Left side: Icon + Text */}
          <div className="flex items-center gap-4">
            <div className="text-white">{icon}</div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{label}</span>
              <span className="text-xs text-white/80">{value}</span>
            </div>
          </div>

          {/* Right side: Copy button */}
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 text-white hover:text-white hover:bg-white/20"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              copyToClipboard(value);
            }}
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </Card>
    </a>
  );
}
