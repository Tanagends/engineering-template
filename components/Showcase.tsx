"use client";

import { motion } from "framer-motion";
import { Plus, Image as ImageIcon, Video, Type } from "lucide-react";

export function Showcase() {
    return (
        <section id="showcase" className="py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Content Management, <br />
                            <span className="text-primary/50">Simplified.</span>
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground">
                            Empower your marketing team to add blogs, images, and videos without touching a single line of code. Our intuitive interface makes it effortless.
                        </p>
                        <ul className="mt-8 space-y-4">
                            {[
                                "Drag & Drop Interface",
                                "Real-time Preview",
                                "Automatic Image Optimization",
                                "SEO Friendly",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary to-purple-500 opacity-20 blur-2xl"></div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative rounded-xl border border-border bg-card p-6 shadow-2xl"
                        >
                            {/* Mock UI Header */}
                            <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-xs font-medium text-muted-foreground">
                                    CMS Dashboard
                                </div>
                            </div>

                            {/* Mock UI Content */}
                            <div className="grid gap-4">
                                <div className="flex items-center justify-between rounded-lg border border-dashed border-border bg-secondary/50 p-4 transition-colors hover:border-primary/50 hover:bg-secondary">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background shadow-sm">
                                            <Type className="h-5 w-5 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <div className="font-medium">New Blog Post</div>
                                            <div className="text-xs text-muted-foreground">
                                                Create a new article
                                            </div>
                                        </div>
                                    </div>
                                    <button className="rounded-md bg-primary p-2 text-primary-foreground">
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>

                                <div className="flex items-center justify-between rounded-lg border border-dashed border-border bg-secondary/50 p-4 transition-colors hover:border-primary/50 hover:bg-secondary">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background shadow-sm">
                                            <ImageIcon className="h-5 w-5 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <div className="font-medium">Upload Image</div>
                                            <div className="text-xs text-muted-foreground">
                                                JPG, PNG, WebP supported
                                            </div>
                                        </div>
                                    </div>
                                    <button className="rounded-md bg-primary p-2 text-primary-foreground">
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>

                                <div className="flex items-center justify-between rounded-lg border border-dashed border-border bg-secondary/50 p-4 transition-colors hover:border-primary/50 hover:bg-secondary">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background shadow-sm">
                                            <Video className="h-5 w-5 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <div className="font-medium">Add Video</div>
                                            <div className="text-xs text-muted-foreground">
                                                Embed or upload directly
                                            </div>
                                        </div>
                                    </div>
                                    <button className="rounded-md bg-primary p-2 text-primary-foreground">
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
