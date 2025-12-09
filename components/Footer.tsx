"use client";

import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border bg-background py-12">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-8 w-8 rounded-lg bg-primary" />
                            <span className="text-xl font-bold tracking-tight">Acme Eng.</span>
                        </div>
                        <p className="max-w-xs text-sm text-muted-foreground">
                            Premium engineering templates for the modern web. Built with Next.js, Tailwind, and Framer Motion.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Product</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground">Features</a></li>
                            <li><a href="#" className="hover:text-foreground">Pricing</a></li>
                            <li><a href="#" className="hover:text-foreground">Showcase</a></li>
                            <li><a href="#" className="hover:text-foreground">Documentation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground">About</a></li>
                            <li><a href="#" className="hover:text-foreground">Blog</a></li>
                            <li><a href="#" className="hover:text-foreground">Careers</a></li>
                            <li><a href="#" className="hover:text-foreground">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Acme Engineering. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-muted-foreground hover:text-foreground">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-foreground">
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-foreground">
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
